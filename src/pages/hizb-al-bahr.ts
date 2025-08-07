import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import "@/components/dhikr.ts";
import "@/components/dhikr-entry.ts";
import "@/components/quran.ts";
import "@/components/quran-entry.ts";

@customElement("hizb-al-bahr")
export class HizbAlBahr extends LitElement {
  render() {
    return html`
      <app-header></app-header>

      <main>
        <kp-dhikr title="Hizb al-Bahr">
          <kp-dhikr-entry>
            <span slot="arabic">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
            <span slot="translit">Bismi Allahi alrrahmani alrraheemi</span>
            <span slot="translation">In the name of Allah, the Most Gracious, the Most Merciful.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">يَا عَلِيُّ يَا عَظِيمُ يَا حَلِيمُ يَا عَلِيمُ</span>
            <span slot="translit">Ya 'Aliyyu, ya 'Adheemu, ya Haleemu, ya 'Aleem</span>
            <span slot="translation">O Most High, O Supreme, O Forbearing, O All-Knowing,</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">أَنْتَ رَبِّي وَعِلْمُكَ حَسْبِي فَنِعْمَ الرَّبُّ رَبِّي وَنِعْمَ الْحَسْبُ حَسْبِي</span>
            <span slot="translit">Anta rabbi wa 'ilmuka hasbi, fa ni'ma-r-rabbu rabbi, wa ni'ma-l-hasbu hasbi</span>
            <span slot="translation">You are my Lord and Your knowledge is sufficient for me, so what an excellent Lord is my Lord, and what an excellent sufficiency is my sufficiency.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">تَنْصُرُ مَنْ تَشَاءُ وَأَنْتَ الْعَزِيزُ الرَّحِيمُ</span>
            <span slot="translit">tanṣuru man tashā'u wa anta-l-ʿazīzu-r-raḥīm</span>
            <span slot="translation">You give victory to whomever You will, and You are the Almighty, the Merciful.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">نَسْأَلُكَ الْعِصْمَةَ فِي الْحَرَكَاتِ وَالسَّكَنَاتِ وَالْكَلِمَاتِ وَالْإِرَادَاتِ وَالْخَطَرَاتِ مِنَ الشُّكُوكِ وَالظُّنُونِ وَالْأَوْهَامِ السَّاطِرَةِ لِلْقُلُوبِ عَنْ مُطَالَعَةِ الْغُيُوبِ</span>
            <span slot="translit">nas'aluka-l-ʿiṣmata fi-l-ḥarakāti wa-s-sakanāti wa-l-kalimāti wa-l-irādāti wa-l-khaṭarāti mina-sh-shukūki wa-ẓ-ẓunūni wa-l-awhāmi-s-sāṭirati li-l-qulūbi ʿan muṭālaʿati-l-ghuyūb</span>
            <span slot="translation">We ask You for protection in our movements and our stillness, in our words and our desires, and our thoughts; from the doubts and the suspicions and the illusions that veil our hearts from contemplating the unseen.</span>
          </kp-dhikr-entry>

          <kp-mushaf title="Al-Ahzab" surah="33">
            <kp-mushaf-entry verse="11">
              <span slot="arabic">فَقَدِ ابْتُلِيَ الْمُؤْمِنُونَ وَزُلْزِلُوا زِلْزَالًا شَدِيدًا</span>
              <span slot="translit">Faqadi-btuliya-l-mu'minūna wa zulzilū zilzālan shadīdan</span>
              <span slot="translation">"There, the believers were tried and shaken with a mighty shaking."</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="12">
              <span slot="arabic">وَإِذْ يَقُولُ الْمُنَافِقُونَ وَالَّذِينَ فِي قُلُوبِهِمْ مَرَضٌ مَا وَعَدَنَا اللَّهُ وَرَسُولُهُ إِلَّا غُرُورًا</span>
              <span slot="translit">Wa idh yaqūlu-l-munāfiqūna wa-lladhīna fī qulūbihim maraḍun mā waʿadanā-llāhu wa rasūluhū illā ghurūran</span>
              <span slot="translation">"And when the hypocrites and those in whose hearts is a disease said, ‘Allah and His Messenger did not promise us except delusion.’"</span>
            </kp-mushaf-entry>
          </kp-mushaf>

          <kp-dhikr-entry>
            <span slot="arabic">فَثَبِّتْنَا وَانْصُرْنَا وَسَخِّرْ لَنَا هَٰذَا الْبَحْرَ كَمَا سَخَّرْتَ الْبَحْرَ لِمُوسَىٰ</span>
            <span slot="translit">fa-thabbitnā wa-nṣurnā wa-sakhkhir lanā hādhā-l-baḥra kamā sakhkharta-l-baḥra li-Mūsā</span>
            <span slot="translation">So make us firm and grant us victory, and subjugate this sea to us as You subjugated the sea to Moses.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَسَخَّرْتَ النَّارَ لِإِبْرَاهِيمَ</span>
            <span slot="translit">wa sakhkharta-n-nāra li-Ibrāhīm</span>
            <span slot="translation">And You subjugated the fire to Abraham.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَسَخَّرْتَ الْجِبَالَ وَالْحَدِيدَ لِدَاوُدَ</span>
            <span slot="translit">wa sakhkharta-l-jibāla wa-l-ḥadīda li-Dāwūd</span>
            <span slot="translation">And You subjugated the mountains and the iron to David.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَسَخَّرْتَ الرِّيحَ وَالشَّيَاطِينَ وَالْجِنَّ لِسُلَيْمَانَ</span>
            <span slot="translit">wa sakhkharta-r-rīḥa wa-sh-shayāṭīna wa-l-jinna li-Sulaymān</span>
            <span slot="translation">And You subjugated the wind and the devils and the jinn to Solomon.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَسَخِّرْ لَنَا كُلَّ بَحْرٍ هُوَ لَكَ فِي الْأَرْضِ وَالسَّمَاءِ وَالْمُلْكِ وَالْمَلَكُوتِ وَبَحْرَ الدُّنْيَا وَبَحْرَ الْآخِرَةِ</span>
            <span slot="translit">wa sakhkhir lanā kulla baḥrin huwa laka fi-l-arḍi wa-s-samā'i wa-l-mulki wa-l-malakūti, wa baḥra-d-dunyā wa baḥra-l-ākhirah</span>
            <span slot="translation">And subjugate to us every sea of Yours in the earth and the heavens, the dominion and the kingdom, and the sea of this world and the sea of the Hereafter.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَسَخِّرْ لَنَا كُلَّ شَيْءٍ يَا مَنْ بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ</span>
            <span slot="translit">wa sakhkhir lanā kulla shay'in yā man biyadihi malakūtu kulli shay'</span>
            <span slot="translation">And subjugate to us everything, O You in Whose hand is the dominion of everything.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry repeat="3">
            <span slot="arabic">كهيعص</span>
            <span slot="translit">Kāf Hā Yā 'Ayn Ṣād</span>
            <span slot="translation">Kāf Hā Yā 'Ayn Ṣād</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">انْصُرْنَا فَإِنَّكَ خَيْرُ النَّاصِرِينَ</span>
            <span slot="translit">unṣurnā fa-innaka khayru-n-nāṣirīn</span>
            <span slot="translation">Grant us victory, for You are the best of those who grant victory.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَافْتَحْ لَنَا فَإِنَّكَ خَيْرُ الْفَاتِحِينَ</span>
            <span slot="translit">wa-ftaḥ lanā fa-innaka khayru-l-fātiḥīn</span>
            <span slot="translation">And open for us, for You are the best of those who open.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَاغْفِرْ لَنَا فَإِنَّكَ خَيْرُ الْغَافِرِينَ</span>
            <span slot="translit">wa-ghfir lanā fa-innaka khayru-l-ghāfirīn</span>
            <span slot="translation">And forgive us, for You are the best of those who forgive.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَارْحَمْنَا فَإِنَّكَ خَيْرُ الرَّاحِمِينَ</span>
            <span slot="translit">wa-rḥamnā fa-innaka khayru-r-rāḥimīn</span>
            <span slot="translation">And have mercy upon us, for You are the best of those who are merciful.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَارْزُقْنَا فَإِنَّكَ خَيْرُ الرَّازِقِينَ</span>
            <span slot="translit">wa-rzuqnā fa-innaka khayru-r-rāziqīn</span>
            <span slot="translation">And provide for us, for You are the best of providers.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَهَبْ لَنَا رِيحًا طَيِّبَةً كَمَا هِيَ فِي عِلْمِكَ</span>
            <span slot="translit">wa hab lanā rīḥan ṭayyibatan kamā hiya fī ʿilmik</span>
            <span slot="translation">And grant us a goodly wind, as is in Your knowledge.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَانْشُرْهَا عَلَيْنَا مِنْ خَزَائِنِ رَحْمَتِكَ</span>
            <span slot="translit">wa-nshurhā ʿalaynā min khazā'ini raḥmatik</span>
            <span slot="translation">And spread it upon us from the treasures of Your mercy.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَاحْمِلْنَا بِهَا حَمْلَ الْكَرَامَةِ مَعَ السَّلَامَةِ وَالْعَافِيَةِ فِي الدِّينِ وَالدُّنْيَا وَالْآخِرَةِ</span>
            <span slot="translit">wa-ḥmilnā bihā ḥamla-l-karāmati maʿa-s-salāmati wa-l-ʿāfiyati fi-d-dīni wa-d-dunyā wa-l-ākhirah</span>
            <span slot="translation">And carry us by it with a carriage of honor, with safety and well-being in our religion, our world, and the Hereafter.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ</span>
            <span slot="translit">innaka ʿalā kulli shay'in qadīr</span>
            <span slot="translation">Indeed, You have power over all things.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">اللَّهُمَّ يَسِّرْ لَنَا أُمُورَنَا مَعَ الرَّاحَةِ لِقُلُوبِنَا وَأَبْدَانِنَا وَالسَّلَامَةِ وَالْعَافِيَةِ فِي دِينِنَا وَدُنْيَانَا</span>
            <span slot="translit">allāhumma yassir lanā umūranā maʿa-r-rāḥati li-qulūbinā wa abdāninā wa-s-salāmati wa-l-ʿāfiyati fī dīninā wa dunyānā</span>
            <span slot="translation">O Allah, make our affairs easy for us, with ease for our hearts and our bodies, and safety and well-being in our religion and our world.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَكُنْ لَنَا صَاحِبًا فِي سَفَرِنَا وَخَلِيفَةً فِي أَهْلِنَا</span>
            <span slot="translit">wa kun lanā ṣāḥiban fī safarinā wa khalīfatan fī ahlinā</span>
            <span slot="translation">And be for us a companion in our journey and a guardian in our families.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَاطْمِسْ عَلَىٰ وُجُوهِ أَعْدَائِنَا</span>
            <span slot="translit">wa-ṭmis ʿalā wujūhi aʿdā'inā</span>
            <span slot="translation">And blind the faces of our enemies.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَامْسَخْهُمْ عَلَىٰ مَكَانَتِهِمْ فَلَا يَسْتَطِيعُونَ الْمُضِيَّ وَلَا الْمَجِيءَ إِلَيْنَا</span>
            <span slot="translit">wa-msakhhum ʿalā makānatihim fa-lā yastaṭīʿūna-l-muḍiyya wa-lā-l-majī'a ilaynā</span>
            <span slot="translation">And transfigure them in their places, so that they are unable to proceed or to come to us.</span>
          </kp-dhikr-entry>

          <kp-mushaf title="Ya-Sin" surah="36">
            <kp-mushaf-entry verse="66">
              <span slot="arabic">وَلَوْ نَشَاءُ لَطَمَسْنَا عَلَىٰ أَعْيُنِهِمْ فَاسْتَبَقُوا الصِّرَاطَ فَأَنَّىٰ يُبْصِرُونَ</span>
              <span slot="translit">wa law nashā'u la-ṭamasnā ʿalā aʿyunihim fa-stabaqū-ṣ-ṣirāṭa fa-annā yubṣirūn</span>
              <span slot="translation">"And if We willed, We could have obliterated their eyes, then they would race to the path, but how would they see?"</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="67">
              <span slot="arabic">وَلَوْ نَشَاءُ لَمَسَخْنَاهُمْ عَلَىٰ مَكَانَتِهِمْ فَمَا اسْتَطَاعُوا مُضِيًّا وَلَا يَرْجِعُونَ</span>
              <span slot="translit">wa law nashā'u la-masakhnāhum ʿalā makānatihim fa-mā-staṭāʿū muḍiyyan wa lā yarjiʿūn</span>
              <span slot="translation">"And if We willed, We could have transfigured them in their places, so they would not be able to proceed, nor would they return."</span>
            </kp-mushaf-entry>
          </kp-mushaf>

          <kp-mushaf title="Ya-Sin" surah="36">
            <kp-mushaf-entry verse="1">
              <span slot="arabic">يس</span>
              <span slot="translit">Yā Sīn</span>
              <span slot="translation">Ya Sin.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="2">
              <span slot="arabic">وَالْقُرْآنِ الْحَكِيمِ</span>
              <span slot="translit">wa-l-qur'āni-l-ḥakīm</span>
              <span slot="translation">By the wise Qur'an.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="3">
              <span slot="arabic">إِنَّكَ لَمِنَ الْمُرْسَلِينَ</span>
              <span slot="translit">innaka lamina-l-mursalīn</span>
              <span slot="translation">Indeed, you are from among the messengers.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="4">
              <span slot="arabic">عَلَىٰ صِرَاطٍ مُسْتَقِيمٍ</span>
              <span slot="translit">ʿalā ṣirāṭin mustaqīm</span>
              <span slot="translation">On a straight path.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="5">
              <span slot="arabic">تَنْزِيلَ الْعَزِيزِ الرَّحِيمِ</span>
              <span slot="translit">tanzīla-l-ʿazīzi-r-raḥīm</span>
              <span slot="translation">A revelation of the Exalted in Might, the Merciful.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="6">
              <span slot="arabic">لِتُنْذِرَ قَوْمًا مَا أُنْذِرَ آبَاؤُهُمْ فَهُمْ غَافِلُونَ</span>
              <span slot="translit">li-tundhira qawman mā undhira ābā'uhum fahum ghāfilūn</span>
              <span slot="translation">That you may warn a people whose forefathers were not warned, so they are unaware.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="7">
              <span slot="arabic">لَقَدْ حَقَّ الْقَوْلُ عَلَىٰ أَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُونَ</span>
              <span slot="translit">laqad ḥaqqa-l-qawlu ʿalā aktharihim fahum lā yu'minūn</span>
              <span slot="translation">The word has come into effect upon most of them, so they do not believe.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="8">
              <span slot="arabic">إِنَّا جَعَلْنَا فِي أَعْنَاقِهِمْ أَغْلَالًا فَهِيَ إِلَى الْأَذْقَانِ فَهُمْ مُقْمَحُونَ</span>
              <span slot="translit">innā jaʿalnā fī aʿnāqihim aghlālan fa-hiya ilā-l-adhqāni fahum muqmaḥūn</span>
              <span slot="translation">Indeed, We have put shackles on their necks, and they are to their chins, so they are with heads aloft.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="9">
              <span slot="arabic">وَجَعَلْنَا مِنْ بَيْنِ أَيْدِيهِمْ سَدًّا وَمِنْ خَلْفِهِمْ سَدًّا فَأَغْشَيْنَاهُمْ فَهُمْ لَا يُبْصِرُونَ</span>
              <span slot="translit">wa jaʿalnā min bayni aydīhim saddan wa min khalfihim saddan fa-aghshaynāhum fahum lā yubṣirūn</span>
              <span slot="translation">And We have put before them a barrier and behind them a barrier and covered them, so they do not see.</span>
            </kp-mushaf-entry>
          </kp-mushaf>

          <kp-dhikr-entry repeat="3">
            <span slot="arabic">شَاهَتِ الْوُجُوهُ</span>
            <span slot="translit">shāhati-l-wujūh</span>
            <span slot="translation">May the faces be disfigured.</span>
          </kp-dhikr-entry>

          <kp-mushaf title="Taha" surah="20">
            <kp-mushaf-entry verse="111">
              <span slot="arabic">وَعَنَتِ الْوُجُوهُ لِلْحَيِّ الْقَيُّومِ ۖ وَقَدْ خَابَ مَنْ حَمَلَ ظُلْمًا</span>
              <span slot="translit">wa ʿanati-l-wujūhu li-l-ḥayyi-l-qayyūm, wa qad khāba man ḥamala ẓulmā</span>
              <span slot="translation">And faces shall be humbled before the Ever-Living, the Self-Sustaining. And he will have failed who carries injustice.</span>
            </kp-mushaf-entry>
          </kp-mushaf>

          <kp-dhikr-entry>
            <span slot="arabic">طس</span>
            <span slot="translit">Ṭā Sīn</span>
            <span slot="translation">Ta Sin.</span>
          </kp-dhikr-entry>

          <kp-mushaf title="Ash-Shura" surah="42">
            <kp-mushaf-entry verse="1">
              <span slot="arabic">حم</span>
              <span slot="translit">Ḥā Mīm</span>
              <span slot="translation">Ha Mim.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="2">
              <span slot="arabic">عسق</span>
              <span slot="translit">ʿAyn Sīn Qāf</span>
              <span slot="translation">Ayn Sin Qaf.</span>
            </kp-mushaf-entry>
          </kp-mushaf>

          <kp-mushaf title="Ar-Rahman" surah="55">
            <kp-mushaf-entry verse="19">
              <span slot="arabic">مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ</span>
              <span slot="translit">maraja-l-baḥrayni yaltaqiyān</span>
              <span slot="translation">He released the two seas, meeting side by side.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="20">
              <span slot="arabic">بَيْنَهُمَا بَرْزَخٌ لَا يَبْغِيَانِ</span>
              <span slot="translit">baynahumā barzakhun lā yabghiyān</span>
              <span slot="translation">Between them is a barrier which they do not transgress.</span>
            </kp-mushaf-entry>
          </kp-mushaf>

          <kp-dhikr-entry repeat="7">
            <span slot="arabic">حم</span>
            <span slot="translit">Ḥā Mīm</span>
            <span slot="translation">Ha Mim.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">حُمَّ الْأَمْرُ وَجَاءَ النَّصْرُ فَعَلَيْنَا لَا يُنْصَرُونَ</span>
            <span slot="translit">ḥumma-l-amru wa jā'a-n-naṣru fa-ʿalaynā lā yunṣarūn</span>
            <span slot="translation">The matter is decreed, and victory has come, so against us they shall not be victorious.</span>
          </kp-dhikr-entry>

          <kp-mushaf title="Fussilat" surah="41">
            <kp-mushaf-entry verse="1">
              <span slot="arabic">حم</span>
              <span slot="translit">Ḥā Mīm</span>
              <span slot="translation">Ha Mim.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="2">
              <span slot="arabic">تَنْزِيلٌ مِنَ الرَّحْمَٰنِ الرَّحِيمِ</span>
              <span slot="translit">tanzīlun mina-r-raḥmāni-r-raḥīm</span>
              <span slot="translation">A revelation from the Most Gracious, the Most Merciful.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="3">
              <span slot="arabic">كِتَابٌ فُصِّلَتْ آيَاتُهُ قُرْآنًا عَرَبِيًّا لِقَوْمٍ يَعْلَمُونَ</span>
              <span slot="translit">kitābun fuṣṣilat āyātuhū qur'ānan ʿarabiyyan li-qawmin yaʿlamūn</span>
              <span slot="translation">A Book whose verses have been detailed, an Arabic Qur'an for a people who know.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="4">
              <span slot="arabic">بَشِيرًا وَنَذِيرًا فَأَعْرَضَ أَكْثَرُهُمْ فَهُمْ لَا يَسْمَعُونَ</span>
              <span slot="translit">bashīran wa nadhīran fa-aʿraḍa aktharuhum fahum lā yasmaʿūn</span>
              <span slot="translation">As a giver of good tidings and a warner; but most of them turn away, so they do not hear.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="5">
              <span slot="arabic">وَقَالُوا قُلُوبُنَا فِي أَكِنَّةٍ مِمَّا تَدْعُونَا إِلَيْهِ</span>
              <span slot="translit">wa qālū qulūbunā fī akinnatin mimmā tadʿūnā ilayh</span>
              <span slot="translation">And they say, "Our hearts are within coverings from that to which you invite us."</span>
            </kp-mushaf-entry>
          </kp-mushaf>

          <kp-dhikr-entry>
            <span slot="arabic">بِسْمِ اللَّهِ بَابُنَا</span>
            <span slot="translit">bismi-llāhi bābunā</span>
            <span slot="translation">In the name of Allah is our door.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">تَبَارَكَ حِيطَانُنَا</span>
            <span slot="translit">tabāraka ḥīṭānunā</span>
            <span slot="translation">Blessed is our enclosure.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">يس سَقْفُنَا</span>
            <span slot="translit">yā sīn saqfunā</span>
            <span slot="translation">Ya Sin is our roof.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">كهيعص كِفَايَتُنَا</span>
            <span slot="translit">kāf hā yā ʿayn ṣād kifāyatunā</span>
            <span slot="translation">Kaf Ha Ya 'Ayn Sad is our sufficiency.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">حم عسق حِمَايَتُنَا</span>
            <span slot="translit">ḥā mīm ʿayn sīn qāf ḥimāyatunā</span>
            <span slot="translation">Ha Mim 'Ayn Sin Qaf is our protection.</span>
          </kp-dhikr-entry>

          <kp-mushaf title="Al-Baqarah" surah="2">
            <kp-mushaf-entry verse="137">
              <span slot="arabic">فَسَيَكْفِيكَهُمُ اللَّهُ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ</span>
              <span slot="translit">fa-sayakfīkahumu-llāhu wa huwa-s-samīʿu-l-ʿalīm</span>
              <span slot="translation">And Allah will be sufficient for you against them, and He is the Hearing, the Knowing.</span>
            </kp-mushaf-entry>
          </kp-mushaf>

          <kp-dhikr-entry>
            <span slot="arabic">سِتْرُ الْعَرْشِ مَسْبُولٌ عَلَيْنَا</span>
            <span slot="translit">sitru-l-ʿarshi masbūlun ʿalaynā</span>
            <span slot="translation">The veil of the Throne is extended over us.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَعَيْنُ اللَّهِ نَاظِرَةٌ إِلَيْنَا</span>
            <span slot="translit">wa ʿaynu-llāhi nāẓiratun ilaynā</span>
            <span slot="translation">And the eye of Allah is watching over us.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">بِحَوْلِ اللَّهِ لَا يُقْدَرُ عَلَيْنَا</span>
            <span slot="translit">bi-ḥawli-llāhi lā yuqdaru ʿalaynā</span>
            <span slot="translation">By the power of Allah, none can overcome us.</span>
          </kp-dhikr-entry>

          <kp-mushaf title="Al-Buruj" surah="85">
            <kp-mushaf-entry verse="20">
              <span slot="arabic">وَاللَّهُ مِنْ وَرَائِهِمْ مُحِيطٌ</span>
              <span slot="translit">wa-llāhu min warā'ihim muḥīṭ</span>
              <span slot="translation">And Allah, from behind them, is encompassing.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="21">
              <span slot="arabic">بَلْ هُوَ قُرْآنٌ مَجِيدٌ</span>
              <span slot="translit">bal huwa qur'ānun majīd</span>
              <span slot="translation">But it is a glorious Qur'an.</span>
            </kp-mushaf-entry>
            <kp-mushaf-entry verse="22">
              <span slot="arabic">فِي لَوْحٍ مَحْفُوظٍ</span>
              <span slot="translit">fī lawḥin maḥfūẓ</span>
              <span slot="translation">In a Preserved Tablet.</span>
            </kp-mushaf-entry>
          </kp-mushaf>

          <kp-mushaf title="Yusuf" surah="12">
            <kp-mushaf-entry verse="64">
              <span slot="arabic">فَاللَّهُ خَيْرٌ حَافِظًا ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ</span>
              <span slot="translit">fa-llāhu khayrun ḥāfiẓan wa huwa arḥamu-r-rāḥimīn</span>
              <span slot="translation">For Allah is the best guardian, and He is the most merciful of the merciful.</span>
            </kp-mushaf-entry>
          </kp-mushaf>

          <kp-mushaf title="Al-A'raf" surah="7">
            <kp-mushaf-entry verse="196">
              <span slot="arabic">إِنَّ وَلِيِّيَ اللَّهُ الَّذِي نَزَّلَ الْكِتَابَ ۖ وَهُوَ يَتَوَلَّى الصَّالِحِينَ</span>
              <span slot="translit">inna waliyyiya-llāhu-lladhī nazzala-l-kitāba wa huwa yatawalla-ṣ-ṣāliḥīn</span>
              <span slot="translation">Indeed, my protector is Allah, who has sent down the Book; and He is an ally to the righteous.</span>
            </kp-mushaf-entry>
          </kp-mushaf>

          <kp-mushaf title="At-Tawbah" surah="9">
            <kp-mushaf-entry verse="129">
              <span slot="arabic">حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ</span>
              <span slot="translit">ḥasbiya-llāhu lā ilāha illā huwa ʿalayhi tawakkaltu wa huwa rabbu-l-ʿarshi-l-ʿaẓīm</span>
              <span slot="translation">Sufficient for me is Allah; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne.</span>
            </kp-mushaf-entry>
          </kp-mushaf>

          <kp-dhikr-entry repeat="3">
            <span slot="arabic">بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ ۖ وَهُوَ السَّمِيعُ الْعَلِيمُ</span>
            <span slot="translit">bismi-llāhi-lladhī lā yaḍurru maʿa-smihī shay'un fi-l-arḍi wa lā fi-s-samā'i wa huwa-s-samīʿu-l-ʿalīm</span>
            <span slot="translation">In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry repeat="3">
            <span slot="arabic">وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ</span>
            <span slot="translit">wa lā ḥawla wa lā quwwata illā bi-llāhi-l-ʿaliyyi-l-ʿaẓīm</span>
            <span slot="translation">And there is no might nor power except with Allah, the Most High, the Most Great.</span>
          </kp-dhikr-entry>

          <kp-dhikr-entry>
            <span slot="arabic">وَصَلَّى اللَّهُ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِهِ وَصَحْبِهِ وَسَلَّمَ</span>
            <span slot="translit">wa ṣallā-llāhu ʿalā sayyidinā muḥammadin wa ʿalā ālihī wa ṣaḥbihī wa sallam</span>
            <span slot="translation">And may Allah send blessings and peace upon our master Muhammad and upon his family and companions.</span>
          </kp-dhikr-entry>
        </kp-dhikr>
      </main>
    `;
  }
}
