const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');
const sideMenu = document.getElementById('sidemenu')
const successMsg = document.querySelector('.success-msg')
const errorMsg = document.querySelector('.error-msg')

const opentab = (tabname) => {

    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }

    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add("active-tab");
}

const  openmenu = () => {
    sideMenu.style.right = "0"
}

const  closemenu = () => {
    sideMenu.style.right = "-200px"
}

const sendMail = (e) => {
    e.preventDefault()
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    emailjs.send("service_fhjdast", "template_spmm5jx", params).then(() => {
        document.querySelector('form').reset()
        successMsg.textContent = "Email Sent successully"
        successMsg.style.color = 'green'

    }).catch(() => {
        errorMsg.textContent = "There was an error"
    })
}

document.querySelector('form').addEventListener('submit', sendMail);