///<summary>
///サイトの基本情報,共通部分
///</summary>
export const Basic = [
    {
        Param:"",
        SiteTitle:"Fresh activity",
        FooterMenu:{
            "ホーム":"/",
            "お知らせ":"/news",
            "活動":"/activity",
            "個人の紹介":"/profile",
        }
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
            
        }
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