# Handoff Notes: Stripe Payment Link System

I have architected and scaffolded the Stripe Payment Link generation system for the QuantLab admin dashboard. The user wants you (Claude) to finish, polish, and test this implementation, keeping usage limits in mind.

## What is Done
1. **Dependencies**: `stripe` npm package is installed.
2. **Environment**: `STRIPE_SECRET_KEY` is added to `.env.local`.
3. **Database (`src/lib/db.ts`)**:
   - `PaymentLink` interface added.
   - `payment_links` table migration added to `ensureMigrated()`.
4. **API Routes (`src/app/api/admin/payment-links/route.ts`)**:
   - `GET`: Lists all links ordered by newest.
   - `POST`: Creates Product → Price → Payment Link in Stripe, then saves to DB. Supports `one_time` (build fee) and `recurring` (monthly).
   - `DELETE`: Deactivates the link locally and on Stripe.
   - Fixed a TypeScript error regarding the `apiVersion` in the Stripe constructor.
5. **UI (`src/app/admin/dashboard/PaymentsTab.tsx`)**:
   - Generator form component created.
   - History table component created.
6. **Dashboard Integration (`src/app/admin/dashboard/page.tsx`)**:
   - Added `"payments"` to the `Tab` type.
   - Added the tab button to the switcher.
   - Imported and rendered `<PaymentsTab />`.

## What Needs Finishing/Polishing (Your Tasks)
1. **Fix Lints**: There are several ESLint errors in `PaymentsTab.tsx` regarding inline styles and missing `title` attributes on buttons/inputs. Please move inline styles to CSS modules or Tailwind classes where appropriate, and ensure accessibility requirements are met.
2. **End-to-End Testing**: Start the dev server and verify the full flow:
   - Does the DB migrate successfully when opening the page?
   - Does creating a one-time link work? Does it return a real Stripe URL?
   - Does creating a recurring link work?
   - Does the history table render correctly?
   - Does deleting/deactivating a link work?
3. **Error Handling & Polish**:
   - Ensure loading states feel snappy.
   - Check if the Toast notifications or alerts need to be styled better (currently using browser `alert()`).
   - Ensure the layout matches the exact design system (dark mode, glassmorphic).
4. **Build Verification**: Run `npm run build` after your changes to ensure there are zero TS or linting errors.
