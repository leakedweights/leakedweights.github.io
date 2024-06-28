import { renderNav } from "../nav";


export function renderHome(): string {
    return `
      <div>
        ${renderNav()}
        <h1>Kristóf Váradi</h1>
        <h2>About</h2>
        <p>
          I am Kristóf Váradi, a bachelor's student in Computer Engineering at the Budapest University of Technology and Economics where
          I am enrolled in the Systems Engineering specialization. I am writing my bachelor's thesis about machine learning algorithms for clinical trial outcome prediction. My work is supervised by Márk Marosi.
        </p>
        <p>
          This fall, I am teaching laboratory classes for second-year Computer Engineering students in the Databases course (BMEVITMAB04).
          Topics include relational database design, SQL, and query optimization with Oracle Database.
        </p>
        <p>
          I am also a research assistant at the Quantum Information and Complex Systems Group of the HUN-REN Wigner Research Centre for Physics, advised by Dr. Mátyás Koniorczyk.
          I am working on methods for the clique problem using quantum annealers.
        </p>
        <div style="display: flex; flex-direction: row; gap: 0.5rem; font-size: 12pt;">
          <span>Links: </span>
          <a href="https://github.com/leakedweights" target="_blank">GitHub</a>
          <a href="/cv.pdf" target="_blank">Curriculum Vitae</a>
        </div>
        <h2>Research</h2>
        <p>
          My research interests are mainly in machine learning.
          I am especially interested in few-step, non-autoregressive generative models for text synthesis and code.
        </p>
        <h2>Talks, Workshops</h2>
        <ol>
          <li>
            Mátyás Koniorczyk, <u>Kristóf Váradi</u>, Sándor Szabó. Graph Cliques and Quantum Annealing. In
            VOCAL 2024: The 10th VOCAL Optimization Conference: Advanced Algorithms. Corvinus University
            of Budapest, June 2024
          </li>
          <li>
            <u>Kristóf Váradi</u> Clique Search on Erdős-Rényi Graphs – Methods for D-Wave Quantum Annealers. In
            Pécs Workshop on Quantum Information. Pécs Regional Committee, Hungarian Academy of
            Sciences; HUN-REN Wigner Research Centre for Physics, May 2024
          </li>
        </ol>
        <h2>Contact</h2>
        <div id="contact">
          <p>Please solve the following CAPTCHA to reveal my contact information.</p>
          <div id="emailContainer">
            <label for="captcha">How many circles are in Dante's Hell?</label>
            <input type="text" id="captcha" />
            <button id="submitCaptcha">Submit</button>
          </div>
        </div>
      </div>
    `;
}
  
export function setupCaptcha(): void {
    document.getElementById('submitCaptcha')!.addEventListener('click', () => {
      const captchaInput = (document.getElementById('captcha') as HTMLInputElement).value;
      const emailContainer = document.getElementById('emailContainer');
      if (captchaInput === '9') {
        emailContainer!.innerHTML = 'Email: <a href="mailto:kv.kristofvaradi@gmail.com">kv.kristofvaradi@gmail.com</a>';
      } else {
        alert('Incorrect CAPTCHA. Please try again.');
      }
    });
}
  