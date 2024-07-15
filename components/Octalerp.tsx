import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { octalerp } from '@/data'
const Octalerp = () => {
    return (
        <section id="">
      <BentoGrid className="w-full py-20">
      {octalerp.map((item, i) => (
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