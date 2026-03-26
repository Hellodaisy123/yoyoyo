// 简化的天干地支表
const天干 = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const地支 = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const五行 = ['木', '火', '土', '金', '水'];

// 宝石推荐表
const宝石推荐 = {
  '木': [
    { name: '绿幽灵', effect: '增强运势，提升财运' },
    { name: '翡翠', effect: '平衡能量，带来好运' },
    { name: '绿松石', effect: '促进健康，增强生命力' }
  ],
  '火': [
    { name: '红玛瑙', effect: '增强活力，提升热情' },
    { name: '红宝石', effect: '带来好运，增强自信' },
    { name: '石榴石', effect: '促进血液循环，增强体力' }
  ],
  '土': [
    { name: '黄水晶', effect: '增强财运，带来稳定' },
    { name: '琥珀', effect: '平衡能量，带来温暖' },
    { name: '碧玺', effect: '促进健康，增强运势' }
  ],
  '金': [
    { name: '白水晶', effect: '净化能量，提升智慧' },
    { name: '钻石', effect: '增强自信，带来好运' },
    { name: '蓝宝石', effect: '促进健康，增强专注力' }
  ],
  '水': [
    { name: '海蓝宝', effect: '增强沟通能力，带来平静' },
    { name: '黑曜石', effect: '辟邪护身，净化负能量' },
    { name: '天河石', effect: '促进财运，增强创造力' }
  ]
};

Page({
  data: {
    birthDate: '',
    genderArray: ['男', '女'],
    genderIndex: 0,
    birthPlace: '',
    showResult: false,
    bazi: {},
    recommendedGems: []
  },

  onLoad() {
    // 设置默认日期为当前日期
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    this.setData({
      birthDate: `${year}-${month}-${day} ${hour}:${minute}`
    });
  },

  bindDateChange(e) {
    this.setData({
      birthDate: e.detail.value
    });
  },

  bindGenderChange(e) {
    this.setData({
      genderIndex: e.detail.value
    });
  },

  bindPlaceInput(e) {
    this.setData({
      birthPlace: e.detail.value
    });
  },

  calculateBazi() {
    const birthDate = this.data.birthDate;
    const gender = this.data.genderArray[this.data.genderIndex];
    const birthPlace = this.data.birthPlace;

    if (!birthDate || !birthPlace) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    // 简化的生辰八字计算
    const date = new Date(birthDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();

    // 计算年柱
    const yearGan = 天干[(year - 4) % 10];
    const yearZhi = 地支[(year - 4) % 12];

    // 计算月柱（简化计算）
    const monthGan = 天干[(year * 12 + month + 3) % 10];
    const monthZhi = 地支[(month + 2) % 12];

    // 计算日柱（简化计算）
    const dayGan = 天干[(year + month + day) % 10];
    const dayZhi = 地支[(year + month + day) % 12];

    // 计算时柱
    const hourGan = 天干[(year + month + day + hour) % 10];
    const hourZhi = 地支[hour % 12];

    // 计算五行属性（根据日柱天干）
    const dayGanIndex = 天干.indexOf(dayGan);
    const 五行属性 = 五行[dayGanIndex % 5];

    // 获取推荐宝石
    const recommendedGems = 宝石推荐[五行属性] || [];

    this.setData({
      showResult: true,
      bazi: {
        year: yearGan + yearZhi,
        month: monthGan + monthZhi,
        day: dayGan + dayZhi,
        hour: hourGan + hourZhi
      },
      recommendedGems: recommendedGems
    });
  }
})