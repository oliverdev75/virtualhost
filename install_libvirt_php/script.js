const codes = document.getElementsByTagName('code')

for (let code of codes) {
    code.innerHTML += `
        <button>Copy</button>
    `

    const button = code.getElementsByTagName('button')[0]
    button.addEventListener('click', () => {
        const command = code.getElementsByTagName('span')[0].textContent
        navigator.clipboard.writeText(command)
    })
}