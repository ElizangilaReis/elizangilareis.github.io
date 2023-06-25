const renderSkillsSection = () => {
    const cardsContainer = document.querySelector('.cards');
  
    const skills = [
        {
            name: 'Java',
            src: 'java'
          },
      {
        name: 'HTML5',
        src: 'html5'
      },
      {
        name: 'CSS3',
        src: 'css-3'
      },
      {
        name: 'JavaScript',
        src: 'js'
      },
    ]
  
    cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
      <div class="box" key="${index}">
        <p>${name}</p>
        <img src="img/${src}.png" alt="html">
      </div>
    `).join('')
  }

  renderSkillsSection();