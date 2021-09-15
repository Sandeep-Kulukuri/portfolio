import './mobile.css'
function Mobile({isOpen, setIsOpen}) {
    return (
        <div className='mobile'>
            <div className='close-icon' onClick = {() => setIsOpen(!isOpen)}>
            <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <div className='mobile-options'>
            <div className='mobile-option'>
                <a href='#project' >
                <i class="fas fa-laptop-code"></i>Projects
        
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#skills' >
                <i class="fas fa-cogs"></i>Skills
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#achievements' >
                <i class="fas fa-trophy"></i>Achievements
                
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#contact' >
                <i class="far fa-address-book"></i>Contact               
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile
