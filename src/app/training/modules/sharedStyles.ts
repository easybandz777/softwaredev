export const trainingStyles = `
  .ql-training-content h1, .ql-training-content h2, .ql-training-content h3, .ql-training-content h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  .ql-training-content { line-height: 1.6; }
  .ql-section-header {
    margin-top: 60px;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
  }
  .ql-section-header::after {
    content: '';
    position: absolute;
    left: 0; bottom: -1px;
    width: 100px; height: 2px;
    background: linear-gradient(135deg, #22d3ee, #a78bfa);
  }
  .ql-module-number {
    font-family: 'Space Grotesk', sans-serif;
    color: #22d3ee;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
  }
  .ql-module-title { font-size: 2.5rem; color: #f8fafc; }
  .ql-card {
    background: #0a0f1d;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
  }
  .ql-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 4px; height: 100%;
    background: linear-gradient(135deg, #22d3ee, #a78bfa);
  }
  .ql-card h3 { font-size: 1.5rem; margin-bottom: 15px; color: #f8fafc; }
  .ql-script-box {
    background: rgba(34, 211, 238, 0.03);
    border-left: 3px solid #22d3ee;
    padding: 25px 20px 20px;
    margin: 25px 0;
    border-radius: 0 8px 8px 0;
    font-size: 1.05rem;
    color: #fff;
    position: relative;
  }
  .ql-script-box::before {
    content: 'SCRIPT';
    position: absolute;
    top: -10px; left: 15px;
    background: #22d3ee;
    color: #05080f;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    letter-spacing: 0.1em;
  }
  .ql-bad-script-box {
    background: rgba(239, 68, 68, 0.05);
    border-left: 3px solid #ef4444;
    padding: 25px 20px 20px;
    margin: 25px 0;
    border-radius: 0 8px 8px 0;
    color: #94a3b8;
    position: relative;
  }
  .ql-bad-script-box::before {
    content: 'AVOID';
    position: absolute;
    top: -10px; left: 15px;
    background: #ef4444;
    color: white;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    letter-spacing: 0.1em;
  }
  .ql-tip-box {
    background: rgba(167, 139, 250, 0.05);
    border: 1px solid rgba(167, 139, 250, 0.2);
    padding: 25px;
    border-radius: 12px;
    margin: 30px 0;
  }
  .ql-tip-box h4 { color: #a78bfa; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; font-size: 1.2rem; }
  .ql-question-list { list-style: none; padding: 0; }
  .ql-question-list li { position: relative; padding-left: 30px; margin-bottom: 15px; font-size: 1.05rem; color: #94a3b8; }
  .ql-question-list li::before { content: 'Q:'; position: absolute; left: 0; color: #22d3ee; font-weight: 700; font-family: 'Space Grotesk', sans-serif; }
  .ql-framework-grid { display: grid; grid-template-columns: 1fr; gap: 30px; margin-top: 25px; }
  @media (min-width: 640px) { .ql-framework-grid { grid-template-columns: 1fr 1fr; } }
  .ql-training-content p { margin-bottom: 15px; color: #94a3b8; }
  .ql-training-content strong { color: #f8fafc; }
`;
