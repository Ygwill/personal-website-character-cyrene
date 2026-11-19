// 站点级配置：换角色时只需要改 character.js，这个文件按仓库改一次即可
export const org = {
  name: 'personal-website',
  url: 'https://git.ygwill.top/personal-website',
  site: 'https://ygwill.top',
}

// 角色名 -> 解包索引 characters.json 里的 tag（官方英文小写名，跨版本稳定）。
// 这张表是站内跳转的依据，取自上游索引，不是自己起的别名。
export const charTags = {
  大黑塔: 'theherta', 阿格莱雅: 'aglaea', 缇宝: 'tribbie', 万敌: 'mydei',
  那刻夏: 'anaxa', 赛飞儿: 'cipher', 遐蝶: 'castorice', 白厄: 'phainon',
  风堇: 'hyacine', 海瑟音: 'hysilens', 刻律德菈: 'cerydra',
  长夜月: 'evernight', '丹恒·腾荒': 'danhengpt', 昔涟: 'cyrene',
}

// tag -> 本组织内已建成的角色仓库；仓库名可能带前缀（如 evernight 的仓库叫 character-march7th-evenight），
// 所以这里手工对齐一次，跳转前会检查目标仓库是否存在。
export const characterRepos = {
  cyrene: 'character-cyrene',
  hyacine: 'character-hyacine',
  castorice: 'character-castorice',
  evernight: 'character-march7th-evenight',
}

// 「献予「X」之诗」的火种 -> 对应角色名（用于把忆灵技和角色对上）
// tag -> 已上线的角色页子域（由 CF 自动部署）。还没上线的角色不要写，链接会自动退回 Gitea 仓库页。
// 注意仓库名与子域名可以不同：evernight 的仓库叫 character-march7th-evenight，子域是 evenight。
export const charSites = {
  cyrene: 'https://cyrene.ygwill.top',
  hyacine: 'https://hyacine.ygwill.top',
  castorice: 'https://castorice.ygwill.top',
  evernight: 'https://evenight.ygwill.top',
}

// 跨角色跳转的地址：优先角色页，其次组织内的角色仓库，都没有就返回空串（组件里 v-if 退化掉链接）
export function charLink(tag) {
  if (!tag) return ''
  if (charSites[tag]) return charSites[tag]
  const repo = characterRepos[tag]
  return repo ? org.url + '/' + repo : ''
}

export function charLinkLabel(tag) {
  return charSites[tag] ? '→ 角色页' : '→ 角色仓库'
}

// 「献诗」栏目存在时的一句话说明，没有这类机制就留空
export const poemNote = '这是昔涟最核心的设计：她的强度长在队友身上'

export const poemOwners = {
  创世: '开拓者·记忆',
  浪漫: '阿格莱雅',
  门径: '缇宝',
  纷争: '万敌',
  生死: '遐蝶',
  理性: '那刻夏',
  天空: '风堇',
  诡计: '赛飞儿',
  负世: '白厄',
  海洋: '海瑟音',
  律法: '刻律德菈',
  岁月: '长夜月',
  // 注：以上对应关系来自游戏内文本（每条「献予X之诗」的正文里点名了受诗者），非推测
  大地: '丹恒·腾荒',
  真我: '昔涟',
}

export const dataSources = [
  {
    label: 'Mar-7th/StarRailRes',
    note: '官方游戏数据的解包索引（分支 master，具体角色与索引指纹见下方快照）',
    url: 'https://github.com/Mar-7th/StarRailRes',
  },
  {
    label: '游戏内文本',
    note: '技能 / 行迹 / 星魂 / 档案描述由 characters、character_skills、character_skill_trees、character_ranks、descriptions 等索引直出',
  },
]

// 解包数据里没有、且没有可靠一手来源的字段，一律挂在这里而不是编造
export const unknownFields = [
  ['称号', 'wiki 上有「隐秘的陌客」之类的写法，但解包索引中没有对应字段，未采信'],
  ['实装日期 / 卡池', '解包索引不含 gacha 数据，需以官方公告为准'],
  ['全名 / 本名', '档案文本给出「PhiLia093」「德谬歌」等相关名，是否算「本名」待考'],
  ['派系 / 出身', '文本提到「哀丽秘榭」「无漏净子」，但无结构化字段，待考'],
  ['数值机制细节', '【追忆】【未来】【故事】的完整结算规则需逐条回游戏核对'],
  ['皮肤「昔涟·赴约」', 'wiki 有该页面，本仓库尚未接入皮肤数据（上游无皮肤表）'],
]
