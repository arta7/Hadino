

const  ColorRange=['#cc3333', '#12b37a', '#18b77e', '#1dba83', '#22be87', '#29c28c', '#2fc690' , '#35ca95', '#3dcf9b', '#45d4a1', '#4dd9a8', '#54deae']

const ColorRange2=[ '#220eae', '#0030b2', '#0043b0', '#0052aa', '#005ea1', '#0069a1', '#00739e', '#007c99', '#00899c', '#009697', '#00a18b', '#0bab78']

const SliderList=[{address:require('./../Images/Insurance.png')},{address:require('./../Images/lawyer.png')},
{address:require('./../Images/tax.png')},{address:require('./../Images/Insurance.png')},{address:require('./../Images/lawyer.png')},
{address:require('./../Images/tax.png')}]
const SliderList2=[{address:require('./../Images/1.png')},{address:require('./../Images/3.png')},
{address:require('./../Images/7.png')},{address:require('./../Images/4.png')},{address:require('./../Images/5.png')},
{address:require('./../Images/6.png')},{address:require('./../Images/7.png')}]



const  Departments = [{title:'دسته اصلی 1',id:'0'},{title:'دسته اصلی 2',id:'1'},{title:'دسته اصلی 3',id:'2'},{title:'دسته اصلی 4',id:'3'},{title:'دسته اصلی 5',id:'4'},{title:'دسته اصلی 6',id:'5'}]
const  Groups = [{title:'گروه 1',id:'0'},{title:'گروه 2',id:'1'},{title:'گروه 3',id:'2'},{title:'گروه 4',id:'3'},{title:'گروه 5',id:'4'},{title:'گروه 6',id:'5'}]

const  Duty = [{title:'مهارت های 1',id:'0'},{title:'مهارت های 2',id:'1'},{title:'مهارت های 3',id:'2'},{title:'مهارت های 4',id:'3'},{title:'مهارت های 5',id:'4'},{title:'مهارت های 6',id:'5'}]

const  FakeData = [{title:'test1',id:'0'},{title:'test2',id:'1'},{title:'test3',id:'2'},{title:'test4',id:'3'},{title:'test5',id:'4'}
,{title:'test6',id:'5'}]


const  StateList = [{title:'مازندران',id:'0'},{title:'تهران',id:'1'},{title:'گیلان',id:'2'},{title:'گلستان',id:'3'},{title:'کرمان',id:'4'},{title:'سیستان و بلوچستان',id:'5'}]


const  CityList = [{title:'قائمشهر',id:'0'},{title:'بابل',id:'1'},{title:'تهران',id:'2'},{title:'گرگان',id:'3'},{title:'کرمان',id:'4'},{title:'زاهدان',id:'5'}]


const CardLists=[{id:1,cardName:'test1',cardNumber:'6219861022456874'},{id:2,cardName:'test2',cardNumber:'6219861022456875'}
,{id:3,cardName:'saman',cardNumber:'6220861025456875'}]

const TransactionLists=[{id:1,transactionType:1,createDate:'2022/12/12',amount:'250000'},{id:2,transactionType:1,createDate:'2021/02/02',amount:'352000'}
,{id:3,transactionType:2,createDate:'2022/08/03',amount:'65982000'}]

const FilterList = [{name:'بیژن',lastName:'شعبانی',starCount:'4'
,serviceTypes:0,bio:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود...'
},
{name:'میثم',lastName:'جعفری',starCount:'3.5'
,serviceTypes:1,bio:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود...'
},
{name:'رضا',lastName:'لعلی',starCount:'5'
,serviceTypes:0,bio:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود...'
},
{name:'مجتبی',lastName:'موحدی',starCount:'4'
,serviceTypes:2,bio:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود... ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود...'
}
]


const ChatsList = [{text: "شماره یک",createdAt:  '2022-08-01',user: {_id: 1},sent:true,received:false},
{text: "شماره دو",createdAt:  '2022-09-07',user: {_id: 2},sent:true,received:true},
{text: "شماره سه",createdAt:  '2022-09-12',user: {_id: 1},sent:true,received:false},
{text: "شماره چهار",createdAt:  '2022-10-09',user: {_id: 2},sent:true,received:true},
{text: "شماره پنج",createdAt:  '2022-10-30',user: {_id: 2},sent:true,received:true}

]


const Calendar = [{Title:'شنبه',StateValue:false},{Title:'یکشنبه',StateValue:false},
{Title:'دوشنبه',StateValue:false},{Title:'سه شنبه',StateValue:false},{Title:'چهارشنبه',StateValue:false}
,{Title:'پنج شنبه',StateValue:false},{Title:'جمعه',StateValue:false}]

const LanguageList = [{id:1,Title:'انگلیسی',ConState:true,GenTraState:true,PriTraState:true}
,{id:2,Title:'فرانسوی',ConState:true,GenTraState:true,PriTraState:false}]

const ServiceType =[{id:1,Title:'چت',iconName:'comment',iconType:'font-awesome',Color:'#5a8cff'}
,{id:2,Title:'تماس ویدیویی',iconName:'video-camera',iconType:'font-awesome',Color:'#00b552'}
,{id:3,Title:'تماس صوتی',iconName:'phone',iconType:'font-awesome',Color:'#ce7fff'}]


const SectionList1=[
    {
        id:0,
    title: "پوشه کار",
    icon:'folder-open',
    type:'font-awesome',
    data: []
    },
    {
        id:1,
        title: "میز خدمت",
        icon:'work',
        type:'materialicon',
        data: []
    },
    {
        id:2,
        title: "شتابدهنده",
        icon:'school',
        type:'materialicon',
        data: []
    },
    {
        id:3,
        title: "تامین مالی",
        icon:'cc-diners-club',
        type:'font-awesome',
        data: []
    },
    {
        id:4,
        title: "تجاری سازی",
        icon:'cc-diners-club',
        type:'font-awesome',
        data: []
    },
    {
        id:5,
        title: "باشگاه سگال",
        icon:'cc-diners-club',
        type:'font-awesome',
        data: []
    },
    {
        id:6,
        title: "آکادمی سگال",
        icon:'cc-diners-club',
        type:'font-awesome',
        data: []
    }

]

const SectionItems =[
{title:'درخواست ها',images:require('./../Images/tax.png'),selectedIndex:0,selectedItem:0},
{title:'قراردادها',images:require('./../Images/tax.png'),selectedIndex:0,selectedItem:0},
{title:'1 نمونه ',images:require('./../Images/tax.png'),selectedIndex:1,selectedItem:-1},
{title:'2 نمونه ',images:require('./../Images/tax.png'),selectedIndex:1,selectedItem:-1},
{title:'3 نمونه ',images:require('./../Images/tax.png'),selectedIndex:1,selectedItem:-1},
{title:'1 نمونه ',images:require('./../Images/tax.png'),selectedIndex:2,selectedItem:-1},
{title:'2 نمونه ',images:require('./../Images/tax.png'),selectedIndex:2,selectedItem:-1},
{title:'5 نمونه ',images:require('./../Images/tax.png'),selectedIndex:3,selectedItem:-1},
{title:'6 نمونه ',images:require('./../Images/tax.png'),selectedIndex:3,selectedItem:-1},
{title:'5 نمونه ',images:require('./../Images/tax.png'),selectedIndex:4,selectedItem:-1},
{title:'6 نمونه ',images:require('./../Images/tax.png'),selectedIndex:5,selectedItem:-1},
{title:'10 نمونه ',images:require('./../Images/tax.png'),selectedIndex:6,selectedItem:-1}

]



export   { ColorRange,Departments,Groups,Duty,StateList,CityList,CardLists,
    TransactionLists,Calendar,FakeData,ServiceType,ColorRange2,ChatsList,FilterList,SliderList,LanguageList,SectionList1,SectionItems,SliderList2}






  