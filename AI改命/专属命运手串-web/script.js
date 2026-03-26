// 简化的天干地支表
const 天干 = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const 地支 = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const 五行 = ['木', '火', '土', '金', '水'];

// 生辰解读表
const 生辰解读 = {
  '木': {
    工作: '你具有创造力和进取心，适合从事需要创意和表达的工作，如艺术、设计、教育等。你工作态度积极，容易获得上司的赏识，但有时会过于理想化，需要注意实际操作。',
    家庭: '你注重家庭和谐，喜欢与家人互动，但有时会因为工作忙碌而忽略家庭责任。建议平衡工作与家庭的关系，多花时间陪伴家人。',
    财运: '你的财运不错，尤其是通过创意和才华获得的收入。但要注意投资风险，避免冲动消费。',
    健康: '你精力充沛，但容易因为过度劳累而出现疲劳。建议保持规律的作息，多进行户外活动，增强体质。',
    注意事项: '你有时会过于固执己见，听不进他人的建议。建议保持开放的心态，多听取他人的意见。此外，要注意控制情绪，避免急躁。'
  },
  '火': {
    工作: '你热情似火，充满活力，适合从事需要热情和感染力的工作，如销售、演讲、教育等。你具有领导才能，容易在团队中脱颖而出，但有时会过于强势，需要注意团队合作。',
    家庭: '你重视家庭，但有时会因为工作忙碌而忽略家人的感受。建议多与家人沟通，表达自己的情感。',
    财运: '你的财运较好，尤其是通过人际关系获得的机会。但要注意避免冲动投资，理性理财。',
    健康: '你精力旺盛，但容易因为过度消耗而出现健康问题。建议注意休息，避免熬夜，保持良好的生活习惯。',
    注意事项: '你有时会过于急躁，缺乏耐心。建议学会冷静思考，避免冲动决策。此外，要注意控制情绪，避免与人发生冲突。'
  },
  '土': {
    工作: '你稳重踏实，具有责任感，适合从事需要细心和耐力的工作，如财务、管理、科研等。你工作认真负责，容易获得他人的信任，但有时会过于保守，缺乏创新精神。',
    家庭: '你重视家庭和稳定性，是家庭的支柱。但有时会因为过于注重物质而忽略精神层面的需求。建议多与家人进行情感交流。',
    财运: '你的财运稳定，善于理财，但有时会过于谨慎，错过一些投资机会。建议适当尝试一些风险可控的投资。',
    健康: '你体质较好，但容易因为工作压力而出现消化系统问题。建议保持饮食规律，适当运动。',
    注意事项: '你有时会过于固执，难以接受新事物。建议保持开放的心态，学习新知识。此外，要注意劳逸结合，避免过度劳累。'
  },
  '金': {
    工作: '你理性冷静，具有逻辑思维和分析能力，适合从事需要思考和分析的工作，如科技、金融、法律等。你做事有条理，注重效率，但有时会过于追求完美，导致工作压力过大。',
    家庭: '你重视家庭秩序，希望家人遵守规则，但有时会过于严格，缺乏灵活性。建议多关注家人的情感需求，增加家庭的温馨感。',
    财运: '你的财运较好，尤其是通过专业技能获得的收入。但要注意避免过于功利，保持良好的职业道德。',
    健康: '你身体状况良好，但容易因为工作压力而出现头痛、失眠等问题。建议学会放松，适当进行减压活动。',
    注意事项: '你有时会过于理性，缺乏情感表达。建议多关注自己的情感需求，学会与他人建立情感连接。此外，要注意避免过度劳累，保持工作与生活的平衡。'
  },
  '水': {
    工作: '你灵活多变，具有适应能力和洞察力，适合从事需要创意和沟通的工作，如写作、策划、营销等。你思维敏捷，善于应变，但有时会过于随性，缺乏计划。',
    家庭: '你重视家庭的和谐与自由，希望家人之间能够相互理解和支持。但有时会因为过于追求自由而忽略家庭责任。建议平衡个人自由与家庭责任。',
    财运: '你的财运起伏较大，容易有意外之财，但也容易有意外支出。建议制定合理的理财计划，避免冲动消费。',
    健康: '你体质较弱，容易出现呼吸系统和泌尿系统问题。建议注意保暖，避免过度劳累，保持良好的生活习惯。',
    注意事项: '你有时会过于敏感，容易受到外界影响。建议保持内心的平静，培养抗压能力。此外，要注意避免拖延，提高执行力。'
  }
};

// 宝石推荐表
const 宝石推荐 = {
  '木': [
    { 
      name: '绿幽灵', 
      effect: '增强运势，提升财运',
      reason: '绿幽灵对应木属性，能够增强生命力和创造力，帮助木属性的人实现目标。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=green%20phantom%20crystal%20bracelet%20on%20wrist&image_size=landscape_4_3'
    },
    { 
      name: '翡翠', 
      effect: '平衡能量，带来好运',
      reason: '翡翠是木属性的代表宝石，能够平衡木属性的能量，带来和谐与好运。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=jade%20bracelet%20on%20wrist&image_size=landscape_4_3'
    },
    { 
      name: '绿松石', 
      effect: '促进健康，增强生命力',
      reason: '绿松石能够增强木属性的生命力，促进身心健康，带来活力。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=turquoise%20bracelet%20on%20wrist&image_size=landscape_4_3'
    }
  ],
  '火': [
    { 
      name: '红玛瑙', 
      effect: '增强活力，提升热情',
      reason: '红玛瑙对应火属性，能够增强活力和热情，帮助火属性的人实现目标。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=red%20agate%20bracelet%20on%20wrist&image_size=landscape_4_3'
    },
    { 
      name: '红宝石', 
      effect: '带来好运，增强自信',
      reason: '红宝石是火属性的代表宝石，能够增强自信和勇气，带来好运。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ruby%20bracelet%20on%20wrist&image_size=landscape_4_3'
    },
    { 
      name: '石榴石', 
      effect: '促进血液循环，增强体力',
      reason: '石榴石能够增强火属性的能量，促进血液循环，增强体力和活力。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=garnet%20bracelet%20on%20wrist&image_size=landscape_4_3'
    }
  ],
  '土': [
    { 
      name: '黄水晶', 
      effect: '增强财运，带来稳定',
      reason: '黄水晶对应土属性，能够增强财运和稳定性，帮助土属性的人实现目标。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yellow%20crystal%20bracelet%20on%20wrist&image_size=landscape_4_3'
    },
    { 
      name: '琥珀', 
      effect: '平衡能量，带来温暖',
      reason: '琥珀是土属性的代表宝石，能够平衡土属性的能量，带来温暖和安定。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=amber%20bracelet%20on%20wrist&image_size=landscape_4_3'
    },
    { 
      name: '碧玺', 
      effect: '促进健康，增强运势',
      reason: '碧玺能够增强土属性的能量，促进健康，带来好运和稳定。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tourmaline%20bracelet%20on%20wrist&image_size=landscape_4_3'
    }
  ],
  '金': [
    { 
      name: '白水晶', 
      effect: '净化能量，提升智慧',
      reason: '白水晶对应金属性，能够净化能量，提升智慧和洞察力。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=white%20crystal%20bracelet%20on%20wrist&image_size=landscape_4_3'
    },
    { 
      name: '钻石', 
      effect: '增强自信，带来好运',
      reason: '钻石是金属性的代表宝石，能够增强自信和勇气，带来好运。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=diamond%20bracelet%20on%20wrist&image_size=landscape_4_3'
    },
    { 
      name: '蓝宝石', 
      effect: '促进健康，增强专注力',
      reason: '蓝宝石能够增强金属性的能量，促进健康，增强专注力和决策能力。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sapphire%20bracelet%20on%20wrist&image_size=landscape_4_3'
    }
  ],
  '水': [
    { 
      name: '海蓝宝', 
      effect: '增强沟通能力，带来平静',
      reason: '海蓝宝对应水属性，能够增强沟通能力，带来平静和智慧。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=aquamarine%20bracelet%20on%20wrist&image_size=landscape_4_3'
    },
    { 
      name: '黑曜石', 
      effect: '辟邪护身，净化负能量',
      reason: '黑曜石是水属性的代表宝石，能够辟邪护身，净化负能量。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=obsidian%20bracelet%20on%20wrist&image_size=landscape_4_3'
    },
    { 
      name: '天河石', 
      effect: '促进财运，增强创造力',
      reason: '天河石能够增强水属性的能量，促进财运，增强创造力和想象力。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=amazonite%20bracelet%20on%20wrist&image_size=landscape_4_3'
    }
  ]
};

// 设置默认日期为当前日期
window.onload = function() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('birthDate').value = `${year}-${month}-${day}T${hour}:${minute}`;
};

function calculateBazi() {
    const birthDate = document.getElementById('birthDate').value;
    const gender = document.getElementById('gender').value;
    const birthPlace = document.getElementById('birthPlace').value;

    if (!birthDate || !birthPlace) {
        alert('请填写完整信息');
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

    // 显示结果
    document.getElementById('yearPillar').textContent = yearGan + yearZhi;
    document.getElementById('monthPillar').textContent = monthGan + monthZhi;
    document.getElementById('dayPillar').textContent = dayGan + dayZhi;
    document.getElementById('hourPillar').textContent = hourGan + hourZhi;
    document.getElementById('wuxing').textContent = 五行属性;
    
    // 生成生辰解读内容
    const interpretationContent = 生辰解读[五行属性];
    let interpretationHTML = '';
    if (interpretationContent) {
        interpretationHTML += '<div style="margin-bottom: 20px;"><strong>工作：</strong>' + interpretationContent.工作 + '</div>';
        interpretationHTML += '<div style="margin-bottom: 20px;"><strong>家庭：</strong>' + interpretationContent.家庭 + '</div>';
        interpretationHTML += '<div style="margin-bottom: 20px;"><strong>财运：</strong>' + interpretationContent.财运 + '</div>';
        interpretationHTML += '<div style="margin-bottom: 20px;"><strong>健康：</strong>' + interpretationContent.健康 + '</div>';
        interpretationHTML += '<div style="margin-bottom: 20px;"><strong>注意事项：</strong>' + interpretationContent.注意事项 + '</div>';
    }
    document.getElementById('interpretation').innerHTML = interpretationHTML;

    // 生成宝石推荐列表
    const gemList = document.getElementById('gemList');
    gemList.innerHTML = '';
    recommendedGems.forEach(gem => {
        const gemItem = document.createElement('div');
        gemItem.className = 'gem-item';
        gemItem.innerHTML = `
            <div class="gem-info">
                <h4 style="margin-bottom: 5px; color: #333;">${gem.name}</h4>
                <p style="margin-bottom: 10px; color: #666; font-size: 14px;">${gem.effect}</p>
                <p style="color: #888; font-size: 13px; line-height: 1.4;">${gem.reason}</p>
            </div>
        `;
        gemList.appendChild(gemItem);
    });

    // 显示结果区域
    document.getElementById('result').style.display = 'block';
    // 添加has-result类，调整容器位置
    document.querySelector('.container').classList.add('has-result');
}