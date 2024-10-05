
// ES6-style import instead of require
// import axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'; 

// Now you can use axios directly for your HTTP requests

var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Machine Learning Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

///////////////////////////// 
// const nav = document.querySelector(".nav"),
//       navList = nav.querySelectorAll("li"),  // Corrected to querySelectorAll
//       totalNavList = navList.length;

// for (let i = 0; i < totalNavList; i++) {
//     const a = navList[i].querySelector("a");
//     a.addEventListener("click", function () {
//         this.classList.add("active");
//     });
// }











// const nav=document.querySelector(".nav"),
//        navList=nav.querySelectorAll("li"),
//        totalNavList=navList.length,
//        allSection=document.querySelectorAll(".section"),
//        totalSection=allSection.length;

//        for(let i=0;i<totalNavList;i++)
//         {
//         // console.log(navlist[i])
//         const a=navList[i].querySelector("a");

//         a.addEventListener("click",function()

//         {   
//             // 
//            removeBackSection();
    

//             for(let j=0;j<totalNavList;j++){

//             if(navList[j].querySelector("a").classList.contains("active"))
//             {
//                 addBackSection();
//                 // allSection[j].classList.add("back-section")
//             }
//                 navList[j].querySelector("a").classList.remove("active")
//             // navList[j].querySelector("a").classList.remove("active");
//         }
//             this.classList.add("active")
//             showSection(this);
//             if(window.innerWidth<1200)
//             {
//                 asideSectionTogglerBtn();
//             }

//         })

//        }

//        function removeBackSection(){
//         for(let i=0;i<totalSection;i++){
//             allSection[i].classList.remove("back-section");
//         }
//        }
        
//        function removeBackSection(num){
//         allSection[num].classList.add("back-section")
//        }
//        function showSection(element)
//        {
//          for(let i=0;i<totalSection;i++)
//          {
//             allSection[i].classList.remove("active");
//          }
        
//          const target=element.getAttribute("href").split("#")[1];
//          document.querySelector("#"+ target).classList.add("active")
        

//        }
//        function updateNav(element)
//        {
//           for(let i=0;i<totalNavList;i++){
//             navList[i].querySelector("a").classList.remove("active")
//             const target=element.getAttribute("href").split("#")[1];
//             if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1])
//             {
//                 navList[i].querySelector("a").classList.add("active")

//             }
//           }
//        }
//        document.querySelector(".hire-me").addEventListener("click",function(){
//            const sectionIndex=this.getAttribute("data-section-index");

//            showSection(this);
//            updateNav(this);
//            removeBackSection();
//            addBackSection(sectionIndex);
//        })





//        const navTogglerBtn=document.querySelector(".nav-toggler"),
//        aside=document.querySelector(".aside");
//        navTogglerBtn.addEventListener("click",()=>
//     {
//         asideSectionTogglerBtn();
//     })

//     function asideSectionTogglerBtn()
//     {
//         aside.classList.toggle("open");
//         navTogglerBtn.classList.toggle("open");
//         for(let i=0;i<totalSection;i++)
//             {
//             allSection[i].classList.toggle("open");
//         }
//     }


const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");

    a.addEventListener("click", function () {
        removeBackSection(); // Correct call to remove back section

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j); // Pass index j for the back-section
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this); // Show the selected section

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section"); // Add back-section for passed index
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active"); // Add active class to target section
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}
