// footer
const currentYear = new Date().getFullYear();
document.querySelector("#year").innerHTML = currentYear;

const topics = [
    "好きな映画について語ってください",
    "朝起きて最初にすることは？",
    "もしも透明人間になれたら何をしますか？",
    "一生食べ続けられる食べ物は何？",
    "あなたの地元の名物は何ですか？",
    "最近笑ったエピソードを教えてください",
    "子供の頃の夢は何でしたか？",
    "好きな色とその理由は？",
    "もし一日だけ動物になれるなら何になりたい？",
    "人生で一番怖かった出来事は？",
    "理想の休日の過ごし方は？",
    "もし100万円が突然手に入ったら何に使う？",
    "異性に言われて嬉しかった言葉は？",
    "自分だけの特技は何かありますか？",
    "どんな時に幸せを感じますか？",
    "もし無人島に行くなら何を持って行きたい？",
    "最近食べて感動した料理は？",
    "好きな本や漫画のタイトルは？",
    "絶対にやりたくない仕事は何？",
    "自分を動物に例えると何？",
    "小さい頃の自分に一言かけるなら？",
    "異世界に転生したらどんなキャラになりたい？",
    "宝くじが当たったら最初に何をする？",
    "一番最近観た映画の感想は？",
    "タイムマシンで過去に戻れるなら何をしますか？",
    "好きなスポーツと理由は？",
    "嫌いな食べ物を克服したエピソードは？",
    "もし世界が明日終わるなら何をしたい？",
    "一番変わった趣味を教えてください",
    "最近覚えた面白い言葉は？",
    "今一番欲しいものは？",
    "自分をゲームのキャラに例えるなら？",
    "自分の人生をタイトルにするなら？",
    "好きな季節はいつ？その理由は？",
    "今までで一番高価な買い物は？",
    "失敗談を笑い話に変えて教えてください",
    "好きな動物の鳴き声を再現してみて！",
    "人生で一番おいしかったスイーツは？",
    "もしも一つだけ魔法が使えたら何をする？",
    "幽霊を見たことがありますか？",
    "一度は行ってみたい国や場所はどこ？",
    "最近のマイブームは何？",
    "スマホの中で一番再生しているアプリは？",
    "人生で最も恥ずかしかった瞬間は？",
    "好きなアニメやドラマは？",
    "自分のクセや習慣で面白いものは？",
    "もし好きな歴史上の人物に会えたら誰？",
    "最近ハマったおもしろい話題は？",
    "自分の部屋の中で一番気に入っているものは？",
    "やってみたいけど怖いことは？",
    "一番好きな歌詞のフレーズは？",
    "変わった夢を見たことがありますか？",
    "もし一生同じ服を着るならどんな服？",
    "コンビニでつい買ってしまうものは？",
    "あなたの座右の銘は何ですか？",
    "もし宇宙旅行に行けるなら行きたい？",
    "他の人に理解されないけど好きなことは？",
    "もし一日だけ誰かと入れ替われるなら誰？",
    "人生で初めてのアルバイトの話は？",
    "動物園で一番好きな動物は？",
    "子どもの頃の変な遊び方は？",
    "一番感動した映画やドラマは？",
    "一番最初に覚えた料理は何？",
    "大人になってからの「初めて」の経験は？",
    "ペットを飼うなら何を飼いたい？",
    "もしも時間を止められるなら何をする？",
    "学校での一番の思い出は？",
    "最近のストレス発散法は？",
    "宝物だと思うものは何ですか？",
    "旅行先で起こったハプニングは？",
    "笑ってはいけない場面で笑っちゃった話",
    "怖い話を聞いたり語るのは好き？",
    "タイムマシンで未来に行ったら何を見たい？",
    "一番好きなアイスクリームのフレーバーは？",
    "初対面の人に言われた意外な言葉は？",
    "好きなYouTubeチャンネルは？",
    "朝ごはん派？それとも夕ごはん派？",
    "変わった趣味の友達について語って",
    "一度でいいから食べてみたい料理は？",
    "家族や友達に隠している秘密は？",
    "一番びっくりしたプレゼントは何？",
    "好きな飲み物とその理由は？",
    "今までで一番嬉しかったサプライズは？",
    "人生最大の失敗談を教えて！",
    "忘れられない旅行の思い出は？",
    "もしもドラえもんの道具を一つもらえるなら？",
    "一番おかしかった誤解エピソードは？",
    "おすすめのアプリやガジェットは？",
    "変わったお土産をもらった話",
    "一番好きな祭りやイベントは？",
    "今まで買った中で一番無駄だったものは？",
    "あなたの好きな冗談は？",
    "人生で最も驚いた瞬間は？",
    "今一番行きたいカフェやレストランは？",
    "突然一日だけ子どもに戻ったら何をする？",
    "この世からなくなってほしいものは？",
    "一番得意なモノマネは？",
    "子供の頃信じていたウソ話は？",
    "旅行で一番印象に残っている料理は？",
    "一番テンションが上がる瞬間は？",
    "雨の日の好きな過ごし方は？",
    "これだけは絶対に譲れないことは？",
    "理想のデートプランは？",
    "最近読んで面白かった記事やニュースは？",
    "おすすめの観光スポットを教えて！",
    "今まで一番驚かされたドッキリは？",
    "もし何でも仕事にできるなら何をする？",
    "人間以外の生き物で友達になるなら何？",
    "一番高いところで見た景色は？",
    "行ってみたい日本の都道府県はどこ？",
    "もし全ての人が使える言語が一つだけになるなら？",
    "学生時代に好きだった教科は？",
    "夢の中で一番奇妙だった出来事は？",
    "もし明日から名前を変えるならどんな名前？",
    "住んでみたい架空の場所はどこ？",
    "最近覚えた新しい知識は？",
    "人生で最も恥ずかしい写真は？",
    "あなたの好きな早口言葉は？",
    "突然スーパーパワーが使えるならどれを選ぶ？",
    "通学・通勤中にやっていることは？",
    "一番好きなテレビ番組やラジオは？",
    "大人になってから得た新しい趣味は？",
    "もし宇宙人に会えたら何を話す？",
    "お祭りで好きな屋台メニューは？",
    "もし異世界で商売をするなら何を売る？",
    "好きな香りや匂いは？",
    "一番最近怒った出来事は？",
    "子供の頃の口癖は何？",
    "ゲームの中で住んでみたい世界は？",
    "もし一週間だけ自由な時間がもらえるなら何をする？",
    "最近見た夢の内容は？",
    "一番尊敬する人のエピソードは？",
    "失敗して学んだことを教えて！",
    "宝物だと思う小物やアイテムは？",
    "突然超能力が使えるならどの能力が欲しい？",
    "動物園で一番お気に入りの動物は？",
    "もしお金に困らなければどんな仕事をしたい？",
    "最近覚えた変な豆知識は？",
    "最も美味しかった料理を再現するとしたら？",
    "行ったことがある面白いお店の話",
    "絶対に許せない食べ物の組み合わせは？",
    "空飛ぶ車があったら何に使う？",
    "最も好きなスポーツ観戦は？",
    "寝る前に絶対にやることは？",
    "お化け屋敷での面白いエピソードは？",
    "一番長く続けている趣味は？",
    "自分の名前の由来を知っていますか？",
    "好きなゲームキャラは？",
    "小さい頃の勘違いエピソードは？",
    "本当にあった不思議な体験を語って",
    "一番得意な料理は？",
    "もし大富豪になったら何をしますか？",
    "今まで会った中で一番変わった人は？",
    "好きなファッションスタイルは？",
    "大人になってからハマったものは？",
    "昔の自分に教えたいことは？",
    "世界で一番怖いと思うことは？",
    "友達に言われて感動した一言は？",
    "一番印象に残った文化祭やイベントは？",
    "子供の頃の変な癖や行動は？",
    "忘れられないペットの話",
    "おじいちゃん・おばあちゃんから聞いた面白い話",
    "未来の自分に一言かけるなら？",
    "最近読んだ面白い本や漫画は？",
    "やってみたいけど恥ずかしいことは？",
    "最高の思い出になった旅行は？",
    "コンビニでよく買うお菓子は？",
    "あなたの得意技を披露するとしたら？",
    "もし漫画の世界に入れるならどの作品？",
    "突然ヒーローになれるならどんな能力が欲しい？",
    "友達との一番おかしかった会話は？",
    "好きな花や植物は？",
    "一番最近観たライブやコンサートは？",
    "理想の住まいはどんな感じ？",
    "旅行先で忘れられない出会いは？",
    "子供の頃大切にしていたおもちゃは？",
    "いつか挑戦してみたいスポーツは？",
    "ゲームで一番悔しかった思い出は？",
    "動物に生まれ変わるならどの動物？",
    "最もハマったドラマやシリーズ作品は？",
    "家で一番居心地のいい場所は？",
    "今一番欲しいスキルは何？",
    "小さい頃怖かったけど今は好きなものは？",
    "誰にも言えない秘密を持っていますか？",
    "友達や家族に驚かれた特技は？",
    "一番ハマったスマホゲームは？",
    "学校の授業で一番印象に残っていることは？",
    "一度は食べてみたいご当地グルメは？",
    "子供の頃信じていた都市伝説は？",
    "一番好きなアイドルやアーティストは？",
    "一番美味しかったB級グルメは？",
    "変な癖をしている友達や知り合いの話",
    "生まれ変わったらどんな性格になりたい？",
    "もし魔法のランプがあったら何をお願いする？",
    "あなたの地元のおすすめスポットは？",
    "最近見つけたお気に入りのカフェやお店は？",
    "一番幸せを感じた瞬間は？",
    "理想の朝食メニューは？",
    "一番好きなジブリ映画は何？",
    "もし一日だけ異性になれたら何をする？",
    "一番最近笑った出来事は？",
    "最近驚いた面白いニュースは？",
    "自分の一番の弱点は何？",
    "お化けが出ると言われる場所に行ったことは？",
    "自分の家族で一番面白い人は？",
    "面白い名前のペットの話を聞かせて",
    "今ハマっている漫画やアニメは？",
    "子供の頃に集めていたものは？",
    "一番好きな朝ごはんメニューは？",
    "一番ハマっているYouTube動画は？",
    "人生で最も驚いた出来事は？",
    "理想の老後の生活はどんな感じ？",
    "友達からもらって一番嬉しかったものは？",
    "一番好きな名言は？",
    "もしどんな願いも一つ叶うなら何を願う？",
    "面白かった旅行先での出来事は？",
    "一番奇妙だった夢の内容は？",
    "子供の頃怖かった話を教えて！",
    "家でのリラックス方法は？",
    "今までで一番疲れたエピソードは？",
    "一番感動したライブやコンサートは？",
    "もし好きな動物と話せるなら何を聞く？",
    "最近挑戦した新しいことは？",
    "自分の住んでいる場所の好きなところは？",
    "理想のクリスマスの過ごし方は？",
    "一番好きな屋台メニューは？",
    "友達とやった最もくだらない遊びは？",
    "もし宇宙人に会ったらどんな話をする？",
    "子供の頃憧れた職業は何？",
    "最近見た面白い景色や写真は？",
    "あなたの好きな冗談は？",
    "一番気に入っている帽子や服は？",
    "絶対にやりたくないことは？",
    "好きな遊園地のアトラクションは？",
    "一番好きな海の生き物は？",
    "人生で一番びっくりした話を聞かせて！", 
    "子供の頃に信じていた面白い迷信は？",
    "好きな天気とその理由は？",
    "最近見た面白い広告は？",
    "絶対に失敗しない料理は何？",
    "朝ごはんを食べる派？それとも食べない派？",
    "人生で一番無茶な挑戦をしたエピソードは？",
    "もし今すぐ海外旅行に行けるならどこに行く？",
    "好きなテレビのCMは？",
    "今までで一番驚いたプレゼントは？",
    "子供の頃のお気に入りの遊び場は？",
    "最近感動した出来事は？",
    "家で一番よく使うアイテムは？",
    "お気に入りのリュックやカバンはどんなもの？",
    "一度だけ何でもお願いを聞いてもらえるとしたら？",
    "好きな香水や柔軟剤の香りは？",
    "自分を漢字一文字で表すと？",
    "最近ハマっている健康法やダイエットは？",
    "人生で最も悔しかった出来事は？",
    "好きな映画のワンシーンを教えて！",
    "家の中で一番好きな場所はどこ？",
    "子供の頃好きだったお菓子は？",
    "もしも自分専用の島がもらえたら何をする？",
    "人生で一番高価だった買い物は何？",
    "最近学んだ新しいことは？",
    "大人になってから知って驚いた事実は？",
    "子供の頃にやった一番変な遊びは？",
    "一番好きな冷たい飲み物は何？",
    "理想の家の間取りやデザインは？",
    "最近一番嬉しかった出来事は？",
    "好きなガジェットや電子機器は？",
    "人生で一番たくさん笑った日を教えて！",
    "もし好きなアニメやゲームのキャラと会えたら？",
    "今までで一番多かった失敗は？",
    "自分の部屋で一番お気に入りのインテリアは？",
    "絶対に手放せないアイテムは何？",
    "一番好きな季節の楽しみ方は？",
    "将来叶えたい夢は何？",
    "最近のびっくりした発見は？",
    "友達や家族と行きたい場所は？",
    "もしどこでもドアがあったらどこに行きたい？",
    "好きな楽器を演奏してみたい？",
    "最近泣いた映画や本は何？",
    "子供の頃の忘れられないいたずらは？",
    "絶対に食べられないものは何？",
    "最近見つけた隠れた名店は？",
    "小さい頃に読んでいた絵本や童話は？",
    "もしも空を飛べるならどこに行きたい？",
    "自分を動物に例えるなら何？",
    "もし一日だけ有名人になれたら何をする？",
    "最近友達と話した面白い話題は？",
    "子供の頃に怖かったものは何？",
    "好きなキャラクターグッズは？",
    "理想の仕事や職業は？",
    "忘れられない大失敗は？",
    "家で一番おかしな出来事は？",
    "人生で一番感動した景色は？",
    "好きな香りや匂いは？",
    "最近ハマった料理や食べ物は？",
    "友達に誘われてハマったものは？",
    "お気に入りの靴やスニーカーは？",
    "最近読んで面白かった雑誌や記事は？",
    "おすすめのアプリやウェブサイトは？",
    "突然10分だけスーパーパワーが使えるなら？",
    "友達と笑いすぎたエピソードは？",
    "小さい頃好きだったアニメや番組は？",
    "もしも好きな動物と話せるなら？",
    "最近の幸せエピソードは？",
    "もしも一日だけ年齢を戻せたら何歳？",
    "子供の頃好きだったおもちゃやゲームは？",
    "もし自分が大統領になったら何をする？",
    "絶対に忘れられない旅行の思い出は？",
    "今までで一番おいしかったスイーツは？",
    "最近挑戦した新しい趣味は？",
    "もしタイムスリップできるならいつに行く？",
    "子供の頃の宝物は何？",
    "理想の休日の過ごし方は？",
    "一番印象に残っている学校の行事は？",
    "最近覚えた新しいスキルは？",
    "絶対に無理だと思うスポーツは？",
    "友達に感謝していることは？",
    "最近気づいた自分のクセは？",
    "小さい頃のニックネームは何？",
    "子供の頃に憧れた人物は？",
    "友達にしてもらった嬉しいサプライズは？",
    "好きな飲み物の変わった飲み方は？",
    "最近気に入っているカフェやレストランは？",
    "友達とケンカしたエピソードは？",
    "子供の頃に戻れたらやりたいことは？",
    "最近見た一番美しい景色は？",
    "もしも自分がゲームの主人公ならどんな設定？",
    "友達と話した一番バカな話題は？",
    "小さい頃の変わった夢は？",
    "最近笑ったジョークやネタは？",
    "もしも好きな本の世界に入れるなら？",
    "子供の頃に信じていた伝説や噂は？",
    "最近の自分へのご褒美は何？",
    "もしも無人島に一人で行くなら何を持って行く？",
    "最近聞いて感動した話は？",
    "子供の頃の習い事の思い出は？",
    "一番好きな地元のスポットは？",
    "友達に教えてもらったおすすめの場所は？",
    "最近行ってみたいと思った国や都市は？",
    "もしも好きな映画のキャラクターになれるなら？",
    "友達や家族と一緒に行った楽しいイベントは？",
    "最近覚えた新しい言葉や表現は？",
    "子供の頃に読んで感動した絵本は？",
    "友達と遊んで一番面白かった出来事は？",
    "最近のびっくりした偶然は？",
    "好きな季節とその理由は？",
    "もしも一日だけ何でも食べ放題なら何を食べる？",
    "最近の失敗談を教えて！",
    "好きな音楽のジャンルとその魅力は？",
    "もしも一日だけ好きな場所に住めるならどこ？",
    "子供の頃の思い出の公園は？",
    "最近挑戦した新しいスポーツは？",
    "友達に借りたけど面白かったものは？",
    "最近ハマったゲームは？",
    "子供の頃にあった変なルールは？",
    "もしも自分が映画監督だったらどんな映画を作る？",
    "最近読んでためになった記事は？",
    "好きな文房具やデザインは？",
    "もしも突然世界中を旅できるならどこに行く？",
    "最近知って驚いた雑学は？",
    "一番好きなキャラクターと理由は？",
    "最近見た面白い動画は？",
    "友達と話した意外な共通点は？",
    "もしも空を飛べるなら何をする？",
    "最近行った一番楽しかったイベントは？",
    "友達から教えてもらった名言や格言は？",
    "最近の目標や挑戦していることは？",
    "もしも好きな動物になれるなら？",
    "最近作った手作りのものは？",
    "人生で一番おいしかった飲み物は？",
    "最近友達と遊んで笑った出来事は？",
    "もしも好きな国に住めるならどこ？",
    "最近知った面白い知識は？",
    "好きな花や植物とその理由は？",
    "友達との忘れられない思い出は？",
    "最近やってみた変わった遊びは？",
    "好きな観光地や旅行先の魅力は？",
    "友達と共有したいおすすめスポットは？",
    "もしも自分が作家だったらどんな本を書く？",
    "最近のリラックス方法は？",
    "人生で一番びっくりした出来事は？",
    "友達や家族からの一番嬉しかった言葉は？",
    "最近の楽しかったショッピングは？",
    "もしも大富豪になったら何をする？",
    "最近行ったカフェやレストランでの出来事は？",
    "友達や家族に言いたい感謝の言葉は？",
    "最近のマイブームは何？"
];

let num = Math.floor(Math.random() * topics.length);

document.getElementById("topic").innerHTML = topics[num];

function generate() {
    num = Math.floor(Math.random() * topics.length);
    document.getElementById("topic").innerHTML = topics[num];
}