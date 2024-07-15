import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { solutions } from '@/data'
const Octalerp = () => {
    return (
        <section id="">
      <BentoGrid className="w-full py-20">
      {solutions.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            
            
            className={item.className}
            titleClassName={item.titleClassName}
            
          />
        ))}
        </BentoGrid>
        </section>
    )
  }
  
  export default Octalerp