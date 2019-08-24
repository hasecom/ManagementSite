///<summary>
///サイトの基本情報,共通部分
///</summary>
export const Basic = [
    {
        Param:"",
        SiteTitle:"Fresh activity",
        FooterMenu:[
            {
                "title":"ホーム",
                "fontawesome":"fa-home",
                "path":"/"
            },
            {
                "title":"お知らせ",
                "fontawesome":"fa-rss",
                "path":"/news"
            },
            {
                "title":"活動",
                "fontawesome":"fa-building",
                "path":"/activity"
            },
            {
                "title":"個人の紹介",
                "fontawesome":"fa-user-tie",
                "path":"/profile"
            },
        ]
    }
]
export const Site = [
    {
        "home":"/",
        "news":"/news",
        "activity":"/activity",
        "profile":"/profile"
    }
]

///<summary>
///ヘッダー
///</summary>
export const Head = [
    {
        Param:"ヘッダー",
        Image:{
            "Top":'assets/computer.jpg'
        }
    }
]

///<summary>
///ホーム
///</summary>
export const Home = [
    {
        Param:"ホーム",
        Path:Basic[0].FooterMenu["ホーム"],
        Image:{
           
        },
        Content:[
            {
            title:"ライティング",
            fontawesome:"fa-pencil-alt",
            description:"SEOを意識した良質な記事作成代行"
            },
            {
            title:"開発",
            fontawesome:"fa-laptop",
            description:"Webをはじめとしたフロント制作・開発やシステム開発の代行"
            },
            {
            title:"構築",
            fontawesome:"fa-wrench",
            description:"WordPressのインストールやドメイン取得、SSL化等の代行"
            }
        ],
        Button:{
            'Work':"Works"
        },
        OverView:
        [
            {
                title:"個人のニーズに応える",
                content:Basic[0].SiteTitle+"では、個人様向けのWebサイトの制作やご提案をいたします。また、環境の構築などの代行も承っております。"
            }
        
        ],
        Preformance:
        [
            {
                image:"assets/performance.jpg",
                title:"制作実績"
            }
        ]
    }
]

///<summary>
///お知らせ
///</summary>
export const News = [
    {
        Param:"",
        Title:"aa"
    }
]

///<summary>
///活動
///</summary>
export const Activity = [
    {
        Param:"",
    }
]

///<summary>
///個人の紹介
///</summary>
export const Profile = [
    {
        Param:"",
    }
]