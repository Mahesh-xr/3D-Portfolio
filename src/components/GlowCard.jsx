
const GlowCard = ({card, children}) => {

const cardRefs = useRef([])
const handleMouseMove = (index) =>(e)=>{
    const card = cardRefs.current[index];
    if(card) return
}

  return (
    <div ref={(el)=>(cardRefs.current[index]=el)} onMouseMove={handleMouseMove(index)} className='card card-border timeline-card rounded-xl p-10'>
        <div className="glow"/>
        <div className="flex items-center gap-1 mb-5">
            {Array.from({length:5},(_, index)=>(
                <img src="/images/star.png" key={index} alt="star" className='size-5' />
            ))}
            <div className="mb-5">
                <p className="text-white-50 text-lg">{card.reviw}</p>
            </div>
            {children}

        </div>
      
    </div>
  )
}

export default GlowCard
