import { useState, useEffect } from "react";
import { useRef } from "react";

import "./home.scss";
// import { Link as ScrollLink, Element } from "react-scroll";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  languageChangeToEN,
  languageChangeToTW,
} from "../../redux/user/userSlice";

// Components
import TopNav from "../../components/topNav/TopNav";
import Footer from "../../components/footer/Footer";

//homeComponents
import Hero from "../../components/homeComponents/hero/Hero";
import AboutMe from "../../components/homeComponents/aboutMe/AboutMe";
import Skill from "../../components/homeComponents/skill/Skill";
import Quote from "../../components/homeComponents/quote/Quote";
import Problem from "../../components/homeComponents/problem/Problem";
import Portfolios from "../../components/homeComponents/portfolios/Portfolios";
import ContactMe from "../../components/homeComponents/contactMe/ContactMe";

//aos
//aos
import Aos from "aos";
import "aos/dist/aos.css";

// ------------------------------------------------------------

export default function Home() {
  // redux things
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.user);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="home">
      <div className="sectionTopNav">
        <TopNav />
      </div>
      <div className="sectionHero">
        <Hero />
      </div>
      <div className="sectionAboutMe">
        <AboutMe />
      </div>
      <div className="sectionSkill">
        <Skill />
      </div>
      <div className="sectionQuote">
        <Quote />
      </div>
      <div className="sectionProblem">
        <Problem />
      </div>
      <div className="sectionPortfolios">
        <Portfolios />
      </div>
      <div className="sectionContactMe">
        <ContactMe />
      </div>
      <div className="sectionFooter">
        <Footer />
      </div>
      {/* <div className="testWord">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus
        assumenda repudiandae dignissimos eius porro nemo fuga, quia repellendus
        similique necessitatibus! Corrupti molestias fuga natus culpa a ratione
        exercitationem dignissimos odio optio reiciendis impedit in, cumque
        temporibus illum nobis laboriosam tempora facilis sint repellendus nulla
        accusantium. Facilis reprehenderit ad sed sapiente dolor deserunt
        consequatur a voluptatum est, in itaque? At ipsum veniam suscipit quasi
        magnam quis consectetur, pariatur incidunt recusandae nobis culpa
        consequatur. Omnis consequatur rem dolorum odit, earum inventore labore
        culpa delectus perspiciatis alias iusto nulla molestias modi voluptate.
        Vitae beatae blanditiis voluptatem placeat aliquid harum cum suscipit
        voluptatum eveniet esse aspernatur, nulla voluptatibus ab nemo unde
        perspiciatis pariatur rerum doloremque assumenda. Explicabo excepturi
        odio inventore nam. Sit quam aliquid optio beatae iste voluptatibus
        neque consequuntur delectus? Nesciunt eos atque modi in repellat culpa,
        sit eveniet eligendi asperiores? Accusamus ratione dolor inventore, quos
        enim veniam ex. Sint rem quis enim aspernatur. Dolorem nostrum dolores
        tempora aliquid earum dicta fugiat laboriosam molestiae exercitationem!
        Eos ducimus adipisci aut maiores est blanditiis porro a obcaecati.
        Pariatur velit qui facere molestiae optio maiores ducimus maxime et
        explicabo at odio cumque, dolorum ad rerum quae assumenda iusto neque
        deleniti saepe? Quos, veritatis vero! Aut, non quas? Dolorum eveniet
        excepturi placeat distinctio ipsa alias praesentium quia optio vel
        reprehenderit cumque animi quam ducimus rerum, in inventore porro culpa
        voluptatibus labore veniam! Non qui natus omnis alias ipsum. Nihil
        exercitationem est placeat impedit omnis explicabo doloremque maxime ex,
        accusamus accusantium nostrum, consectetur enim iste? Provident minus ab
        dolore nemo magnam ea sint voluptates asperiores consequuntur deserunt
        officiis animi exercitationem optio ipsa sit unde dolorem velit veniam,
        ad incidunt fugit? Et laborum similique excepturi ratione fugiat
        corporis tenetur debitis, nobis est! Cumque architecto eveniet quia
        expedita, hic tenetur in placeat fugiat quod similique voluptas dicta
        harum suscipit. Unde molestias deleniti dolorem pariatur saepe,
        voluptate eveniet magnam nulla reiciendis iure temporibus minus hic esse
        laboriosam explicabo vitae quo ipsum quas, obcaecati, nam enim at ea
        quae minima. Numquam obcaecati delectus facere quo voluptatem debitis
        temporibus laboriosam labore. Sint error nulla vitae quasi ducimus!
        Rerum inventore doloremque nihil reiciendis modi dolorum ratione ullam.
        Voluptate enim incidunt facilis a maiores asperiores minima dolor magni
        quisquam ut. Molestias beatae sunt voluptatibus itaque architecto
        dolorum. Quaerat, aliquam earum. Corrupti eaque quibusdam fuga deserunt
        facilis dolorem repellendus sequi voluptas recusandae ad maxime, quaerat
        enim maiores rem reprehenderit soluta perspiciatis. Fugiat mollitia
        magni, nostrum cum recusandae dolore impedit obcaecati rerum consequatur
        officia facere. Earum iusto id voluptates et doloremque. Odit reiciendis
        exercitationem enim quaerat sit quidem ipsum, itaque veniam aspernatur
        ea earum omnis numquam ipsam. Aspernatur, vero id voluptates laboriosam
        cupiditate incidunt eligendi vitae consequatur eos aut, dolorem ut
        quisquam ipsa cum magnam laudantium quo placeat libero sed in obcaecati
        ex fugit rerum veniam! Officiis culpa eaque ad fuga non iusto velit.
        Tenetur quaerat accusamus quos earum voluptas sit quas deleniti a, non
        animi tempore vero assumenda dicta quidem asperiores laudantium magni
        rem accusantium rerum harum, corporis culpa modi? Blanditiis minima
        adipisci natus vitae, pariatur non! Possimus, vitae? Tempora fugiat
        tempore quibusdam molestias soluta nihil necessitatibus. Saepe
        blanditiis consequuntur laudantium totam corporis velit debitis. Iusto
        in non fugit iste deserunt rerum debitis dolore, minus repellat! Minus
        voluptas tempore mollitia ipsam atque praesentium autem natus, enim eius
        iure libero earum quisquam sapiente nihil quasi error facere possimus
        amet, sint in. Vero fugiat dolore ducimus doloremque modi consectetur
        corporis tempore, perspiciatis earum ipsum. Ex officiis voluptatibus
        nulla minima assumenda ab officia autem animi quos amet excepturi
        expedita perspiciatis hic repudiandae modi nihil adipisci corrupti atque
        fugiat ratione, cumque ipsum, voluptas inventore! Omnis, eligendi in!
        Doloremque repellendus neque debitis unde maiores aspernatur! Maiores
        sed non perferendis, eligendi, distinctio nemo, minus quidem ipsum
        perspiciatis assumenda inventore modi? Molestiae quis at delectus nemo
        quisquam reprehenderit cupiditate. Numquam, explicabo quia ea officiis,
        molestiae unde consequatur blanditiis cupiditate ab incidunt vero animi
        perspiciatis dignissimos inventore at? Placeat est molestiae accusamus
        velit, earum corporis dicta voluptatem iusto quod cumque alias pariatur
        consectetur animi ullam rerum maxime aut minima minus dolorum doloribus
        vero possimus assumenda excepturi? Aliquam accusamus obcaecati quas ut
        quia autem fuga dolor rerum, voluptate ab possimus doloremque sapiente
        excepturi voluptatem deleniti praesentium quam non asperiores impedit
        voluptatum inventore quidem sed porro incidunt. Id veniam placeat error
        officiis debitis exercitationem, dicta doloremque odio nam voluptatum,
        itaque nesciunt. Consequuntur repudiandae fugiat architecto tempora ab?
        Impedit quod quae est, atque repellendus esse. Vero, aperiam explicabo
        voluptas blanditiis suscipit fugiat quo delectus illo recusandae.
        Doloremque, illo similique, perferendis quidem assumenda consectetur
        itaque alias exercitationem beatae inventore ratione amet temporibus
        iste minima nemo velit id architecto aliquam molestiae molestias? Odio
        ducimus, cupiditate laudantium modi animi doloribus dignissimos iure.
        Impedit nisi quasi animi repellat earum optio fugiat excepturi maiores
        odio officiis ducimus dignissimos aut et, qui sunt, minima quis
        voluptatibus illo fuga eos inventore esse totam sed alias. Eum totam
        quis, ducimus nobis tempore, blanditiis praesentium laudantium nesciunt
        excepturi voluptate dignissimos maxime eius temporibus ea dolores. Ipsum
        velit asperiores, qui perferendis unde eos cum odio suscipit expedita
        harum. Fuga quasi dolore ea a accusamus eius eum quo doloremque
        reprehenderit inventore officiis aliquam libero vitae eveniet mollitia
        dignissimos ipsum, illo voluptatum. Sapiente sunt magnam non placeat?
        Suscipit reiciendis minima culpa placeat in et amet delectus, adipisci
        provident porro itaque dolorum, id omnis qui? Eos vel quae, dolore
        distinctio molestiae cum vero tempora dicta dolorum, quod laborum eaque.
        At rem fugiat provident molestiae, ad aut delectus. Explicabo voluptatem
        asperiores animi qui iusto facere nisi distinctio minus beatae natus?
        Corrupti voluptatum, est dignissimos quibusdam ea inventore odio
        mollitia! Minima natus at aliquid nemo. Ad amet eos rem a dicta
        quibusdam, commodi nesciunt quas excepturi, laudantium minima magnam
        dolore hic necessitatibus tempore. Maiores sed omnis velit! Enim est
        possimus nam non repellat, vero, libero labore cumque, quisquam delectus
        numquam vitae. Dignissimos perferendis hic quisquam animi facere
        veritatis at reiciendis voluptate reprehenderit id, sapiente vero
        recusandae corrupti. Recusandae error tenetur esse quam adipisci laborum
        voluptas, voluptates hic dignissimos iusto iure reprehenderit nobis
        dolorem? Impedit sint esse iusto, explicabo doloremque nobis nihil!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
        assumenda, incidunt error autem labore tempore eum ipsa placeat iusto
        fuga perspiciatis iste consequatur. Fuga saepe quasi praesentium
        corrupti nam vero. Quo omnis, praesentium temporibus velit nostrum illo
        suscipit odio ex voluptatem porro accusamus, natus, quod facere
        molestias eius. Suscipit, harum accusantium neque nihil eum rerum ut
        expedita esse magni voluptate totam consectetur? Vel nobis quam
        distinctio et perferendis quos dolor at corrupti quae consequatur sit
        inventore unde quia alias soluta vero voluptatum minima, illo corporis
        asperiores. Quas sequi ipsum porro tenetur voluptas? Debitis tempore
        consequuntur, dolores, quos consequatur accusantium dolorum architecto
        dolorem a facilis quis quidem unde neque saepe minima eum delectus odio
        ipsa accusamus voluptas laborum modi autem. Cupiditate similique
        repellat perferendis illo provident minus doloribus et eum molestiae,
        voluptatem earum placeat, est quibusdam atque eaque! Corrupti deleniti
        quia atque dignissimos earum recusandae debitis cumque harum. Officia
        commodi provident et distinctio, ipsa, natus earum perspiciatis
        assumenda eveniet blanditiis accusantium mollitia fugiat eligendi eius
        quia illo doloribus ab, ipsum nulla architecto quam. Veniam corporis,
        sint fugit hic voluptatibus deleniti vero in? Et magni qui sequi
        adipisci aliquid culpa deserunt, voluptatum exercitationem quibusdam
        ducimus rerum reiciendis quas tempore numquam nihil esse ipsum rem odit
        similique molestias nostrum deleniti accusantium. Quo voluptatibus
        dolorem reprehenderit voluptate reiciendis, aliquid suscipit eaque
        dolore quae similique ipsum esse odit tempora a. Non officiis, delectus
        vitae, harum perspiciatis necessitatibus illo itaque esse inventore quam
        distinctio earum temporibus culpa neque eligendi nemo officia aperiam,
        quod cumque deleniti voluptas ratione voluptatibus tenetur accusamus.
        Voluptates modi doloribus a repellendus quos fugit sapiente officia
        suscipit in praesentium nisi cum ex adipisci, expedita, tempore ut
        possimus laborum eum rerum harum inventore! Aut, vitae dignissimos odit
        a repellat quia deserunt qui consectetur id iure placeat ab sunt, ipsam
        mollitia illo nobis blanditiis fugit saepe provident exercitationem
        laboriosam eum nostrum! Molestias aut, labore fugiat quasi magni cumque
        unde alias quos facilis fugit placeat minima velit praesentium in
        corporis maxime est doloribus dignissimos possimus? Sapiente hic
        architecto consequatur cumque ea rerum tempora accusamus repudiandae
        saepe id labore quos laudantium, dolorem, quibusdam sint nisi quaerat,
        dolor officiis aut aliquid. Eveniet odio omnis ab tempora rem possimus
        neque officia qui tempore perferendis fugiat ipsa voluptatem temporibus
        delectus cum laudantium corrupti, pariatur nihil nostrum sapiente dolore
        reiciendis nam. Similique voluptas vel incidunt, numquam quaerat illo
        optio quod, molestiae neque minus maxime quibusdam saepe repudiandae
        accusantium eum nihil necessitatibus commodi. Magni sint nobis eos id
        ipsum, labore voluptate odit reprehenderit. Nemo vero voluptatem ullam
        nam vel ut perferendis expedita mollitia error et facilis deserunt eius
        numquam reiciendis, cumque blanditiis, aspernatur consequatur
        dignissimos ipsa quasi voluptatum temporibus. Debitis, error aut,
        asperiores corrupti nam iusto odit perspiciatis eius unde sint veritatis
        aspernatur. Ipsam explicabo minus perspiciatis aliquid nesciunt
        excepturi, officia accusantium beatae reiciendis in, impedit molestiae
        error maxime odio. Obcaecati inventore voluptatem nobis dolorem
        provident, quaerat consequuntur ipsa reprehenderit accusamus velit sit,
        recusandae corporis incidunt reiciendis? Eligendi voluptate eum mollitia
        itaque dolor quae laudantium modi sint aperiam at consectetur soluta quo
        ut, debitis illo dicta deleniti totam. Accusamus quasi accusantium
        aspernatur aliquam vel fugiat architecto, optio voluptates doloremque
        illo quisquam veniam, ducimus facere. Voluptate aperiam dicta numquam ad
        voluptatibus? Voluptatem ex accusantium repellat molestias cumque, aut
        facilis minima tempora optio labore, quasi animi delectus dignissimos
        eos iste autem. Perferendis, error minus consectetur exercitationem
        nostrum accusantium facere fuga inventore facilis maiores, deserunt
        repudiandae. Accusamus sit, voluptatem illo voluptas maiores quasi ad
        voluptatibus earum ipsa repudiandae facere laborum eius. Omnis placeat
        vel totam culpa possimus eum nam necessitatibus in soluta accusamus
        eligendi, distinctio ipsam voluptatibus provident vero esse rerum
        expedita voluptate eius laudantium non? Sit sequi et illo nihil sapiente
        deserunt vitae alias aut, fugiat similique. Eum alias architecto a
        laboriosam porro nostrum corporis, cumque id voluptate laborum delectus
        quos odit minus natus hic illo quod dolorem voluptates error
        exercitationem libero quae? Explicabo repudiandae cumque, iusto
        consequuntur veritatis hic odio dolorum totam ipsum tenetur assumenda
        quibusdam vitae aut temporibus excepturi, non quas commodi! Itaque,
        explicabo laboriosam vero consectetur tempore possimus beatae architecto
        eligendi eos, corporis officiis saepe minus hic qui maiores nam ipsum
        veniam, distinctio amet molestias aliquam eaque et illo laborum.
        Accusantium debitis quam eligendi commodi natus! Eum, temporibus aliquam
        vel pariatur similique obcaecati fugiat provident perspiciatis porro
        saepe nisi praesentium soluta laudantium distinctio animi reiciendis
        quibusdam tempora magni repudiandae nihil consequuntur veniam libero.
        Quod vero quisquam delectus velit dolor, eum est, possimus laborum
        aliquid excepturi quos amet non. Cupiditate atque quis optio temporibus
        ad! Perspiciatis vel dolore odit impedit provident labore veniam porro,
        saepe quos suscipit voluptatibus praesentium ex optio molestiae, aliquam
        unde temporibus error accusamus eaque accusantium rem sunt a.
        Consectetur laborum, similique aspernatur quod maxime dolor voluptate
        dolorum incidunt ex quaerat, cumque debitis totam assumenda ratione
        impedit cupiditate asperiores, officiis dolore minima sit. Quo excepturi
        sit consequatur reprehenderit illo adipisci illum vitae hic?
        Necessitatibus facere ab, iusto esse harum neque, a quas quia explicabo
        eos suscipit animi tempore qui magnam earum vel? Tenetur facilis dolor
        explicabo unde inventore tempora maiores voluptate blanditiis aut cumque
        vel, consequatur adipisci eveniet, odio nulla ea vero omnis veniam iste
        eos est! Aliquid distinctio id dicta, laboriosam fuga recusandae magnam
        unde sed enim nulla ratione voluptas, quasi similique, inventore tenetur
        eveniet perferendis quibusdam dolores placeat praesentium laborum
        consequatur vel. Nam ad sint qui vitae dolore eum tempora vel assumenda
        adipisci voluptatem consequuntur sit, quis nemo eos beatae provident
        maiores expedita ipsa quia soluta! Quaerat repudiandae quod, inventore
        tempora veritatis voluptatum cum recusandae facilis, perspiciatis animi
        eius iste nihil dolorum. Ipsa necessitatibus molestias dolor sed
        eligendi soluta natus eius suscipit consequuntur, quia eveniet eaque
        velit doloribus quo, laudantium magni aperiam numquam! Distinctio,
        reiciendis. Maxime impedit maiores eius sit autem quod et quidem magni
        totam earum, voluptate exercitationem cumque atque culpa delectus labore
        beatae a? Ut voluptatum, dolor odit exercitationem officiis nesciunt
        asperiores temporibus? Vitae impedit pariatur esse cumque deserunt
        praesentium aperiam fuga. Eaque molestiae deleniti dicta pariatur amet
        fuga adipisci repellat tempore repellendus cumque. Doloremque accusamus
        blanditiis alias, voluptates sunt inventore odit iste libero quasi.
      </div> */}
    </div>
  );
}
