const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');
const sideMenu = document.getElementById('sidemenu')


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