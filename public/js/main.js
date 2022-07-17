const app = Vue.createApp({
  data: () => ({
    mapType: 0,
    newMember: '',
    defaultMember: {
      name:'私',
      dokodoras: [],
      isComplete: false
    },
    members: [],
    area:[],
    areaLength: 0,
    area1:[
      {
        name:'北海道',
        doras:[
          'クリオネ',
          '知床',
          '丹頂鶴',
          'アザラシ',
          'キタキツネ',
          'メロン',
        ]
      },
      {
        name:'東北',
        doras:[
          '白神山地',
          '銀河鉄道',
          'なまはげ',
          '伊達政宗',
          'さくらんぼ',
          '白虎隊',
        ]
      },
      {
        name:'関東',
        doras:[
          '富岡製糸場',
          '日光東照宮',
          '水戸黄門',
          'さつまいも',
          '東京スカイツリー',
          '大仏',
          'ピーナッツ',
        ]
      },
      {
        name:'中部',
        doras:[
          'りんご',
          '上杉謙信',
          '加賀鳶',
          'チューリップ',
          'カニ',
          '白川郷',
          '武田信玄',
          'シャチホコ',
          '富士山',
          'うなぎ',
        ]
      },
      {
        name:'近畿',
        doras:[
          '金閣寺',
          '信楽焼',
          '姫路城',
          '通天閣',
          '法隆寺',
          '伊勢えび',
          '梅干し',
        ]
      },
      {
        name:'山陰',
        doras:[
          '20世紀梨',
          '桃太郎',
          '安来節',
          'ふく',
          '厳島神社',
          'さぬきうどん',
          '坊っちゃん',
          '坂本龍馬',
          '阿波踊り',
        ]
      },
      {
        name:'九州',
        doras:[
          '有田焼',
          'おくんち祭り',
          '山笠',
          'かぼす',
          'すいか',
          'マンゴー',
          '西郷どん',
          'シーサー',
        ]
      },
    ],
    area2: [
      {
        name: 'ヨーロッパ',
        doras:[
          'ニュートン',
          '人魚姫',
          'サンタクロース',
          'エッフェル塔',
          'ブレーメンの音楽隊',
          'モーツァルト',
          'オリンピック',
          'ピサの斜塔',
          '闘牛',
          'コロンブス',
        ]
      },
      {
        name: 'アフリカ',
        doras:[
          'クスクス',
          'ツタンカーメン',
          'カカオ',
          'キリン',
          'ライオン',
          'シーラカンス',
          'アイアイ',
          'ケープペンギン',
        ]
      },
      {
        name: 'アジア',
        doras:[
          '石油',
          'タージ・マハル',
          '紅茶',
          'トムヤムクン',
          'マーライオン',
          'ナシゴレン',
          'バナナ',
          'アンコールワット',
          'エベレスト',
          'パンダ',
          'キムチ',
        ]
      },
      {
        name: 'オセアニア',
        doras:[
          'カンガルー',
          'オペラハウス',
          'キーウイ',
          'バンジージャンプ',
          'トリバネアゲハ',
          'ダイビング',
          'カメハメハ',
        ]
      },
      {
        name: '北アメリカ',
        doras:[
          'セイウチ',
          'トーテムポール',
          '自由の女神',
          'ライト兄弟',
          'タコス',
        ]
      },
      {
        name: '南アメリカ',
        doras:[
          'コーヒー',
          'コンドル',
          'ゾウガメ',
          'サッカー',
          'カーニバル',
          'タンゴ',
        ]
      },
    ],
  }),
  mounted: function(){
    this.area = this.area1
    this.areaLength = this.area.length
    this.members.push(this.defaultMember)
  },
  watch: {
    mapType: function(newVal, oldVal) {
      if(newVal == 0){
        this.area = this.area1
      }
      if(newVal == 1){
        this.area = this.area2
      }
      this.areaLength = this.area.length
    },
  },
  methods: {
    addMember: function (){
      if(this.newMember==='') return

      this.members.push({
        name: this.newMember,
        dokodoras: [],
        isComplete: false
      })
      this.newMember = ''
    },
    deleteMember: function(index) {
      if(window.confirm("メンバーを削除しますか？")){
        if(index === 'all'){
          this.members = [this.defaultMember]
          return
        } else {
          this.members.splice(index,1)
        }
      }
    },
    deleteInput: function() {
      if(window.confirm("入力した内容をリセットしますか？")){
        let inputs = document.querySelectorAll('.result input[type=text]')

        inputs.forEach((elm)=>{
          elm.value = ''
        })
        this.members.forEach((elm)=>{
          elm.dokodoras = []
          elm.isComplete = false
        })
      }
    },
    checkComplete: function(memberNum) {
      let checkMember = this.members[memberNum]
      let fillLength = 0
      checkMember.dokodoras.forEach((elm)=>{
        if(elm !== ''){
          fillLength++
        } else {
          fillLength--
        }
      })
      if(fillLength >= this.areaLength){
        checkMember.isComplete = true
      } else {
        checkMember.isComplete = false
      }
    },
  },
})

app.mount('#app')