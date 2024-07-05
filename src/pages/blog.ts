import { renderNav } from "../nav";
import katex from 'katex';
import 'katex/dist/katex.min.css';
import '../style.css';

export function renderBlog(): string {
    return `
      <div>
        ${renderNav()}
        <h1>Blog – Kristóf Váradi</h1>

        <div class="blog-post">
            <h2>Example Blog Post</h2>
            <p class="post-date">June 28, 2024</p>
            <p>
                This is an example blog post. You can write about various topics here.
                It is a great place to share your thoughts, ideas, and experiences.
            </p>
            <p class="latex">\\displaystyle \\mathcal{F}(f) =  \\int_{-\\infty}^{\\infty} e^{-i\\omega x} f(x) dx</p>
            <p>
                Here is some more content for the blog post. You can add multiple paragraphs, images, and other elements to make your post engaging.
            </p>
        </div>
      </div>
    `;
}

function renderLaTeX() {
    const elements = document.querySelectorAll('.latex');
    elements.forEach(element => {
      katex.render(element.textContent || '', element as HTMLElement, {
        throwOnError: false
      });
    });
}
  
document.addEventListener('DOMContentLoaded', renderLaTeX);
const app = document.getElementById('app');

if (app) {
  app.innerHTML = renderBlog();
}

