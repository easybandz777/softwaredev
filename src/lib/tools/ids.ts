function randomBytes(n: number): Uint8Array {
    const buf = new Uint8Array(n);
    crypto.getRandomValues(buf);
    return buf;
}

function toHex(buf: Uint8Array): string {
    return Array.from(buf)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}

export function uuidV4(): string {
    if (typeof crypto.randomUUID === "function") {
        return crypto.randomUUID();
    }
    const b = randomBytes(16);
    b[6] = (b[6] & 0x0f) | 0x40;
    b[8] = (b[8] & 0x3f) | 0x80;
    const h = toHex(b);
    return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

export function uuidV7(): string {
    const b = new Uint8Array(16);
    const now = Date.now();
    const high = Math.floor(now / 0x100000000);
    const low = now >>> 0;
    b[0] = (high >>> 8) & 0xff;
    b[1] = high & 0xff;
    b[2] = (low >>> 24) & 0xff;
    b[3] = (low >>> 16) & 0xff;
    b[4] = (low >>> 8) & 0xff;
    b[5] = low & 0xff;
    const rand = randomBytes(10);
    for (let i = 0; i < 10; i++) b[6 + i] = rand[i];
    b[6] = (b[6] & 0x0f) | 0x70;
    b[8] = (b[8] & 0x3f) | 0x80;
    const h = toHex(b);
    return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

const NANOID_DEFAULT_ALPHABET =
    "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

export function nanoid(size: number = 21, alphabet: string = NANOID_DEFAULT_ALPHABET): string {
    if (size <= 0) throw new Error("size must be > 0");
    if (alphabet.length === 0) throw new Error("alphabet must be non-empty");
    const mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1;
    const step = Math.ceil((1.6 * mask * size) / alphabet.length);
    let id = "";
    while (id.length < size) {
        const bytes = randomBytes(step);
        for (let i = 0; i < step && id.length < size; i++) {
            const idx = bytes[i] & mask;
            if (idx < alphabet.length) id += alphabet[idx];
        }
    }
    return id;
}

const ULID_ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

export function ulid(): string {
    const time = Date.now();
    let timeChars = "";
    let t = time;
    for (let i = 0; i < 10; i++) {
        timeChars = ULID_ALPHABET[t & 0x1f] + timeChars;
        t = Math.floor(t / 32);
    }
    const bytes = randomBytes(10);
    let bits = 0;
    let buffer = 0;
    let randomChars = "";
    for (const byte of bytes) {
        buffer = (buffer << 8) | byte;
        bits += 8;
        while (bits >= 5) {
            bits -= 5;
            randomChars += ULID_ALPHABET[(buffer >> bits) & 0x1f];
        }
    }
    if (bits > 0) randomChars += ULID_ALPHABET[(buffer << (5 - bits)) & 0x1f];
    return timeChars + randomChars.slice(0, 16);
}

const CUID_ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";

export function cuid(): string {
    const time = Date.now().toString(36);
    const bytes = randomBytes(12);
    let suffix = "";
    for (const b of bytes) suffix += CUID_ALPHABET[b % CUID_ALPHABET.length];
    return "c" + time + suffix.slice(0, 14);
}

const SLUG_ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";

export function shortSlug(len: number = 8): string {
    if (len <= 0) throw new Error("len must be > 0");
    const bytes = randomBytes(len);
    let out = "";
    for (const b of bytes) out += SLUG_ALPHABET[b % SLUG_ALPHABET.length];
    return out;
}

export type IdKind = "uuid-v4" | "uuid-v7" | "nanoid" | "ulid" | "cuid" | "slug";

export const ID_DESCRIPTIONS: Record<IdKind, { name: string; description: string; example: string }> = {
    "uuid-v4": {
        name: "UUID v4",
        description: "128-bit random identifier. The default for most databases. Not sortable.",
        example: "550e8400-e29b-41d4-a716-446655440000",
    },
    "uuid-v7": {
        name: "UUID v7",
        description: "128-bit time-sortable UUID. Better B-tree index performance than v4.",
        example: "017f22e2-79b0-7cc3-98c4-dc0c0c07398f",
    },
    "nanoid": {
        name: "nanoid",
        description: "21-char URL-safe ID with collision-resistance similar to UUID v4. Shorter.",
        example: "V1StGXR8_Z5jdHi6B-myT",
    },
    "ulid": {
        name: "ULID",
        description: "26-char lexicographically sortable identifier with millisecond precision.",
        example: "01ARZ3NDEKTSV4RRFFQ69G5FAV",
    },
    "cuid": {
        name: "CUID",
        description: "Collision-resistant unique ID. Good for horizontally scaled systems.",
        example: "ckvqhpr8a00001no9c0t68bo7",
    },
    "slug": {
        name: "Short slug",
        description: "Short, URL-friendly random identifier. Lower collision resistance than UUID — pair with a uniqueness check.",
        example: "k3n8x2qm",
    },
};
