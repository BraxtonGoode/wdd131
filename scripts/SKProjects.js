const Projects = [
    {
      h3: "Scrap Pile Revival",
      width: 475,
      height: 350,
      src: "https://www.youtube.com/embed/RcJX3jfgPMM?si=CEF_k6u_3rIDCIp8",
      loading: "lazy",
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
      allowfullscreen: "allowfullscreen",
      p:" We took on the challenge of creating a new bottle cage from an old piece of scrap. Watch as I make this project my own!  "
    },
    {
        h3: "RV Deconstruction",
        width: 475,
        height: 350,
        src: "https://www.youtube.com/embed/hQTwzi99TUY?si=NkJG9uTnuWwrVv4o",
        loading: "lazy",
        title: "YouTube video player",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: "allowfullscreen",
        p:" We are Deconstructing an RV, everything from windshields to the body might get taken off. Maybe we will do something fun with it after!  "
      },
      {
        h3: "Metal Wall and Sheathing",
        width: 475,
        height: 350,
        src: "https://www.youtube.com/embed/hpj1ny8FSh0?si=1sZWUve6NFwX77-i",
        loading: "lazy",
        title: "YouTube video player",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: "allowfullscreen",
        p:" Had some fun and fixed up the old side of a barn by replacing some of the wood work and metal walls. Come take a look! "
      },
      {
        h3: "Replace Jeep LED Headlights",
        width: 475,
        height: 350,
        src: "https://www.youtube.com/embed/UGe8njwA-k0?si=ZUxa8fvy5xabSLUM",
        loading: "lazy",
        title: "YouTube video player",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: "allowfullscreen",
        p:" Watch as we replace headlights on a Jeep and have some fun while we are at it! "
      },
      

  ];




function ProjectCard(Projects) {
    
    const container = document.querySelector(".container")
    container.innerHTML = "";
    Projects.forEach(Project => {
        const ProjectCard = `<div class="project">
        <h3> ${Project.h3}</h3>
        <div>
            <div class="project-div">
                <iframe width="${Project.width}" height="${Project.height}" src="${Project.src}" loading="${Project.loading}" 
                title="${Project.title}" frameborder="${Project.frameborder}" 
                allow="${Project.allow}" 
                referrerpolicy="${Project.referrerpolicy}" ${Project.allowfullscreen}></iframe>
                <p> 
                    ${Project.p}                    
                </p>         
            </div>      

        </div>`

  
  


        container.innerHTML += ProjectCard
        
    });

}

ProjectCard(Projects);




