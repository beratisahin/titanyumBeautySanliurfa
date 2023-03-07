
import './hakkımızda.css';
import React from 'react';
import useDocumentTitle from '../../useDocumentTitle.js';
import Title from "../title/Title";

function Hakkimizda() {
    useDocumentTitle('Hakkımızda - Şanlıurfa Titanyum Beauty Saloon');
    return (

        <div className="col-12">
        <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
           <Title 
                page_title="Hakkımızda"
           />
            
            <div className="card-body col-12" style={{padding:"3rem"}}>
                <br/>
               
                <p class="hizmetyazi">Huzurlu atmosferi, güvenliği, teknolojik donanımı, deneyimli güler yüzlü ekibi ile estetik ve güzellik sektöründe Haliliye’de merkezi konumuyla siz değerli müşterilerimizin hizmetinizdedir.
                    Lazer Epilasyon, Dermatolojik ürünlerle Cilt Bakımı, Göz Bakımı, Bölgesel Zayıflama hizmetlerimiz profosyenel ürünlerle kaliteden ödün vermeden uygulanmaktadır. Ayrıca en son teknoloji Lazer Epilasyon Cihazı ile istenmeyen tüylerden en kısa sürede kurtularak, pürüzsüz bir cilde kavuşuyorsunuz.
                    Ailenizden biri olmayı amaçlayan Şanlıurfa Titanyum Beauty Saloon; son derece güvenli, hijyenik ve modern olan ve aynı zamanda zevkli bir tasarıma sahip olan salonu ile değerli müşterilerine kendilerini evlerinde hissedecekleri sıcak, samimi ve konforlu bir ortam sunmaya devam ediyor.
                </p> 

                <p class="hizmetyazi">
                Titanyum Beauty Saloon olarak Lazer Epilasyon, G5 Masajı, Kavitasyon, Kirpik Lfiting, Kaş Laminasyonu, Medikal ve Hydrafacial Cilt Bakımı hizmetlerimiz mevcuttur. Kampanaylarımız ve detaylar için sosyal medya hesaplarımızı takipte kalın.
                Şanlıurfa Titanyum Beauty Saloon olarak şehrin merkezinde bulunan salonumuzda siz değerli müşterilerimize hizmet vermekteyiz. Bayanlar ve baylar için epilasyon ve cilt bakım hizmetlerimiz bulunmaktadır. Erkekler için ense, boyun, yanak, göbek, göğüs, sırt, bacak ve kol bölgeleri epilasyon hizmetimiz vardır. Ayrıca medikal ve hydrafacial cilt bakımlarımız da bulunmaktadır. Bayanlar için tüm vücut, bikini bölgesi için epilasyon hizmetlerimiz mevcuttur. Hydrafacial ve medikal cilt bakımlarımız bulunmaktadır. G5 masajı, selülit sıkılaştırma, bölgesel inceltme hizmetlerimiz mevcuttur. UmeX marka epilasyon cihazlarımızla 6 odalı salonumuzda aynı anda birkaç müşterimize hizmet verebilmekteyiz.</p>    
            </div>
        </div>
        
    </div>
        
      
    )
}

export default Hakkimizda
