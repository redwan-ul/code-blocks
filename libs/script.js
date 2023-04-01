const copyBtns = document.querySelectorAll('.copy-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const codeBlock = btn.parentNode.querySelector('code');
        const codeText = codeBlock.innerText;
        navigator.clipboard.writeText(codeText).then(() => {
          btn.classList.add('copied');
          btn.innerText = 'Copied';
          setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerText = 'Copy';
          }, 2000);
        });
      });
    });
    Prism.highlightAll();