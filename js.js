$(".img_icon").click(function(){
    $(".img_icon").toggleClass("darkicon")
    $(".box").toggleClass("darkbox")
    $(".aside_item").toggleClass("aside_item_dark")
    $("footer").toggleClass("footer_dark")
    $(".section_item").toggleClass("section_item_dark")
    $(".main_p").toggleClass("main_p_dark")

   

})
$(".img_translate").click(function()
{
     if(mode==1){
        for (let i=1; i<=34;i++){
            $(`#t${i}`).text(ukr[i-1])
        }mode=0

    }
    
    else if(mode==0){
        for (let i=1; i<=34;i++){
            $(`#t${i}`).text(eng[i-1])
        }mode=1

    }

}
)
let ukr=["дім","про нас", "курси", 'блог', "Формування майбутнього через освіту та інновації", "Прихильність Univerz Академічна перевага", "курс", "Стартапи", "Мова", "професори", "Ознайомтеся з нашими академічними пропозиціями Прокладіть свій шлях до успіху", "Клієнт дуже важливий, за клієнтом піде клієнт. На жаль але маса важлива, якщо вона не підходить автомобілям клієнта.", "Інженерія ","Клієнт дуже важливий, за клієнтом піде клієнт.", "Переглянути всі","Ознайомтеся з нашими останніми Статті та знання", "Інсайт", "12 серпня 2023 р", "Багато університетів Univerz випускники одразу працюють", "Клієнт дуже важливий, за клієнтом піде клієнт.", "Поради", "12 груд. 2023 р", "Поради, щоб ви не отримали ледачий в коледжі", "Клієнт дуже важливий, за клієнтом піде клієнт.", "Рекомендую", "12 листопада 2023 р", "10 рекомендацій для хороші місця в коледжі","Клієнт дуже важливий, за клієнтом піде клієнт.", "університет", "Швидкі посилання", "сторінки", "Слідкуйте за нами"]
let mode=0
let eng=["home","about us","course", "blog", "Shaping the Future Through Education and Innovation", "Univerz's Commitment to Academic Excellence", "Course", "Startups", "Language", "Professors", "Explore Our Academic Offerings Chart Your Path to Success", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula adipiscing elit.", "Engineering", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "View All", "Check out our Latest Articles and Knowledge", "Insight", "12 Aug 2023", "Many Univerz university graduates immediately work", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Tips", "12 Dec 2023", "Tips so you don't get lazy in college", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ", "Recomend", "12 Nov 2023", "10 recommendations for good college places", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ", "Quick Links", "Pages", "Follow Us" ]