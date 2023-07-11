import React, { useState } from 'react'

const Usestateboo = () => {

const [show, setShow] = useState (false)
const change = () =>{
    setShow (!show)

}
const para = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil optio, asperiores assumenda suscipit rem voluptatum dolorum fugit quasi accusamus adipisci omnis debitis vero repellat! Accusantium ex aspernatur voluptatum. Ea molestias explicabo blanditiis, magni sunt fugit itaque quas perferendis autem? At ut labore iste, amet doloremque suscipit earum fugiat magni enim reiciendis deleniti rerum accusamus est ullam consequatur quibusdam neque, eius aperiam ea nesciunt velit minima. Nostrum in illum eius et deleniti praesentium sed a magni dicta voluptate reiciendis ex officia saepe obcaecati ad error impedit, porro rerum dolorum maiores quam? Molestiae, officiis. Explicabo delectus architecto minus enim provident eaque voluptatem necessitatibus dolorum autem reprehenderit. Asperiores quibusdam eligendi expedita soluta quas saepe cum quos provident pariatur, in consequuntur delectus labore sit neque sed, ullam inventore ratione maxime sunt id minus accusamus iure ea hic! Labore molestias debitis ad adipisci harum est, tempora autem fugiat voluptas dolores consectetur repudiandae. Ipsa ratione atque accusantium excepturi praesentium ipsum ullam doloremque culpa ea, a provident hic obcaecati quae sapiente maxime, veritatis, tenetur distinctio corporis doloribus! Quidem, quo. Aperiam temporibus reprehenderit, architecto voluptatum illo eum iure animi obcaecati id possimus esse, blanditiis exercitationem ex at recusandae, dicta nostrum doloremque. Nostrum quod molestiae, non eum debitis iste'


  return (
    <div> 
     <p> {show ? para : para.substring(0, 100)} </p>
     <button onClick={change}>{show ? '-' : '+'}</button>
    </div>
  )
}

export default Usestateboo