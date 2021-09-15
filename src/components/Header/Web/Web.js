import './web.css'
function Web() {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#project' >
                <i class="fas fa-laptop-code"></i>Projects
        
                </a>
            </div>
            <div className='web-option'>
                <a href='#skills' >
                <i class="fas fa-cogs"></i>Skills
                </a>
            </div>
            <div className='web-option'>
                <a href='#achievements' >
                <i class="fas fa-trophy"></i>Achievements
                
                </a>
            </div>
            <div className='web-option'>
                <a href='#contact' >
                <i class="far fa-address-book"></i>Contact               
                </a>
            </div>
        </div>
    )
}

export default Web

