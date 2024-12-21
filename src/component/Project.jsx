import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className='projectsSection'>
        <div className='titleContainer'>
        <p className='title'>Projects</p>
        </div>
        <div className='projectList'>
            <ProjectCard title={'Elixir'} description={'Fullstack E-Commerce Platform'} tools={'Laravel/ReactJS/MySQL'} image={'url(elixir.png)'} link={'https://github.com/AlCo2/elixirShop'} />
            <ProjectCard title={'Elixir-Mobile'} description={'Fullstack E-Commerce Platform'} tools={'ReactNative/REST API'} image={'url(elixirmobile.jpg)'} link={'https://github.com/AlCo2/elixir-mobile'}/>
            <ProjectCard title={'SimpleShell'} description={'lightweight command-line shell built from scratch.'} tools={'C'} image={'url(shell.jpg)'} link={'https://github.com/AlCo2/simple_shell'}/>
            <ProjectCard title={'WorldOfNumeric'} description={'powerful and efficient application designed to process and analyze large datasets with ease.'} tools={'Vue/Express/Typescript/MongoDB'} image={'url(worldofnumeric.png)'} link={'https://github.com/AlCo2/World_of_numeric_Test'} />
            <ProjectCard title={'SmartHO'} description={'Dashboard to monitor and control essential aspects of your home.'} tools={'React'} image={'url(smartho.png)'} link={'https://github.com/AlCo2/SmartHo-Website'}/>
        </div>
    </div>
  )
}

export default Project;