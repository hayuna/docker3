var JQS = {
  servt: $("#server_time"),
  ldr: $("#loader"),
  kcc: $("#kom_con"),
  ltt: $("#loading_text"),
  ltb: $("#loading_bar"),
  fco: $("#fight_con"),
  mko: $("#map_kon"),
  cre: $("#creature_list_con"),
  fol: $("#field_opts_con"),
  qcc: $("#quest_con"),
  trr: $("#game_train_result"),
  chm: $("#chat_message"),
  tup: $("#train_upgrade"),
  ctm: $("#chat_messages"),
  plc: $("#player_list_con"),
  upb: $("#eg_pas99"),
  upp: $("#prog_value"),
};
var PJS = {
  cre: document.getElementById("creature_list_con"),
  fol: document.getElementById("field_opts_con"),
  pra: document.getElementById("char_premium_am"),
  plc: document.getElementById("player_list_con"),
  scr: document.getElementById("special_list_con"),
  trr: document.getElementById("game_train_result"),
};
var GAME = {
  pid: 0,
  login: "",
  debug: parseInt(localStorage.getItem("debug")) || 0,
  sitekey: "6Lfu_AgTAAAAAA3_xa7DPdQ8hdF_fjMUh8ua4XU-",
  captcha: {},
  any_captcha: false,
  response: {},
  serv_time: 0,
  char_id: 0,
  komc: 40,
  tour_type: 0,
  tutorial_arrow_width: 48,
  chat_height: 326,
  chat_switch: 0,
  chat_scnt: 0,
  push_enabled: false,
  push_actions: [3, 7, 8, 19, 20, 50],
  mf: {},
  md: {},
  locked_pages: [],
  koms: [],
  noti_cnt: 0,
  arr_status: ["", ""],
  atr_labels: [
    "",
    "sila",
    "szyb",
    "wytrz",
    "swoli",
    "ki",
    "wta",
    "gki",
    "instynkt",
  ],
  empire_locations: [348, 349, 350, 351],
  fast_locations: [348, 349, 350, 351, 260, 261, 262, 263, 264, 530],
  def_train_stat: parseInt(localStorage.getItem("def_train_stat")) || 1,
  map_options: {
    ma: JSON.parse(localStorage.getItem("map_opts_ma")) || [1, 1, 1, 1, 1],
    vo: JSON.parse(localStorage.getItem("map_opts_vo")) || [1, 1, 0, 1, 1, 1],
    bo: JSON.parse(localStorage.getItem("map_opts_bo")) || [1, 1],
  },
  noanitim: 0,
  loaded_resources: [],
  awaiting_resources: [],
  map_resources: [],
  gfx_path: "/gfx/",
  spacebind: false,
  fight_timer: false,
  socket: io(locals.socket_url),
  chat_notifications: JSON.parse(
    localStorage.getItem("chat_notifications")
  ) || [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  chat_channel: 1,
  chat_channels: 11,
  quest_action_tim: 0,
  clan_enemies: [],
  emp_enemies: [],
  emp_enemies_t: {},
  chat_visible: 0,
  fight_speed: parseInt(localStorage.getItem("fight_speed")) || 1000,
  animations_off: parseInt(localStorage.getItem("animations_off")) || 0,
  ranking_type: 1,
  stats: [
    "psk_gained",
    "mob_power",
    "tren_power",
    "war_power",
    "camps_done",
    "frags",
    "codes",
    "items_gained",
    "mob_killed",
    "pvp_gained",
    "pvp_wons",
    "pvp_lose",
    "legend_killed",
    "senzu_gained",
    "senzu_consumed",
    "sk_power",
    "arena_wons",
    "treasuer_gained",
    "csk_gained",
    "epic_killed",
  ],
  char_rank_fields: [
    "exp",
    "pvm",
    "pvp",
    "lowca",
    "moc",
    "frags",
    "sila",
    "szyb",
    "wytrz",
    "swoli",
    "ki",
    "reborn_bonus",
    "minor_ball",
    "train_lvl",
    "god",
    "arena_lvl",
    "glory_rank",
    "synergy",
    "wta",
    "csk",
    "soul_floor",
    "mastery_lvl",
  ],
  klan_rank_fields: [
    "level",
    "war_wins",
    "war_loses",
    "war_limit",
    "last_score",
    "symbols",
    "mses",
  ],
  field_mob_types: 1,
  field_mob_id: 0,
  skill_order: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20],
    [0, [21, 22, 23, 24], [25, 26, 27, 28], [33, 34, 35, 36], [29, 30, 31, 32]],
    [0, [69, 70, 71, 72], [73, 74, 75, 76], [77, 78, 79, 80], [81, 82, 83, 84]],
    [
      37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
      55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
    ],
    [
      0,
      [85, 86, 87, 88, 89, 90],
      [91, 92, 93, 94, 95, 96],
      [97, 98, 99, 100, 101, 102],
      [103, 104, 105, 106, 107, 108],
    ],
    [
      109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
      124, 125, 126,
    ],
    [
      0,
      [127, 128, 129, 130, 131],
      [132, 133, 134, 135, 136],
      [142, 143, 144, 145, 146],
      [137, 138, 139, 140, 141],
    ],
    [
      0,
      [147, 148, 149, 150],
      [151, 152, 153, 154],
      [155, 156, 157, 158],
      [159, 160, 161, 162],
      [163, 164, 165, 166],
    ],
  ],
  xxx033e84b4ad4e13163999a881534cbda1: [],
  chat_nonread: 0,
  return_errors: [1, 2, 3],
  ekw_first_page_cats: [
    [61, 77, 84, 94, 118],
    [50, 51, 53, 79, 80, 81, 106, 156],
    [34, 35, 36, 37, 38, 70, 701, 702, 122, 144, 213],
    [
      176, 177, 178, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209,
      210, 240, 230, 231, 232, 233, 234, 235, 236,
    ],
  ],
  active_skills_statuses: {
    10: [1, [1, 2]],
    11: [0, [2, 1]],
    12: [1, [3, 2]],
    13: [0, [4, 5]],
    14: [1, [5, 1]],
    15: [1, [6, 1]],
    16: [0, [7, 0]],
    17: [0, [8, 0]],
    19: [1, [9, 3]],
    20: [1, [10, 3]],
    29: [1, [11, 2]],
    32: [1, [12, 3]],
    34: [0, [13, 99]],
    36: [0, [14, 99]],
    56: [1, [15, 7]],
    57: [1, [16, 5]],
    58: [1, [17, 0]],
    59: [1, [18, 0]],
    60: [0, [19, 5]],
    61: [1, [20, 2]],
    62: [0, [21, 2]],
    63: [1, [22, 3]],
    64: [1, [23, 3]],
    65: [1, [24, 3]],
    66: [1, [25, 3]],
    67: [1, [26, 3]],
    68: [1, [27, 3]],
    69: [1, [10, 3]],
    70: [1, [28, 2]],
    72: [1, [29, 3]],
    73: [1, [30, 2]],
    74: [1, [31, 2, 80]],
    76: [1, [31, 3, 90]],
    77: [0, [32, 2]],
    78: [1, [33, 0]],
    80: [0, [34, 3]],
    81: [0, [1, 2]],
    82: [1, [5, 3]],
    84: [0, [1, 3]],
    85: [0, [35, 5]],
    86: [1, [36, 6]],
    87: [1, [37, 0], [61, 99, 0, -1]],
    88: [1, [37, 0], [61, 99, 0, -1]],
    89: [1, [37, 0], [61, 99, 0, -1]],
    90: [1, [38, 3]],
    91: [0, [39, 5]],
    92: [0, [40, 2]],
    93: [1, [41, 0]],
    94: [1, [41, 0]],
    95: [1, [41, 0], [24, 3, 0, 15]],
    96: [0, [42, 0]],
    97: [0, [43, 5], [44, 3, 0, -1]],
    98: [0, [45, 0]],
    99: [1, [46, 2]],
    100: [1, [47, 0]],
    101: [1, [48, 5], [49, 3, 0, 15]],
    102: [1, [50, 2, 0, -1]],
    103: [0, [51, 5]],
    104: [0, [52, 0]],
    105: [0, [53, 99]],
    106: [0, [54, 2]],
    107: [1, [55, 0], [56, 3, 0, 15]],
    108: [1, [57, 0, 0, -1]],
    109: [1, [58, 0]],
    110: [0, [59, 3]],
    111: [1, [60, 3]],
    127: [1, [37, 0], [62, 0, 0, 5]],
    128: [0, [63, 2], [32, 2, 0, 2]],
    129: [1, [64, 0]],
    130: [1, [37, 0], [5, 2, 0, 3.5]],
    131: [0, [65, 1], [66, 1, 0, -1]],
    132: [0, [67, 3]],
    133: [0, [40, 2]],
    134: [1, [41, 0], [68, 2, 0, 3.5]],
    135: [1, [41, 0], [69, 2, 0, 2]],
    136: [1, [41, 0], [70, 99, 0, 2]],
    137: [1, [55, 0], [72, 2, 0, 2]],
    138: [0, [63, 4]],
    139: [1, [55, 0]],
    140: [1, [55, 0], [56, 3, 0, 3.5]],
    141: [1, [55, 0], [73, 1, 0, -1]],
    142: [1, [47, 0], [71, 2, 0, 2]],
    143: [0, [40, 2]],
    144: [1, [47, 0]],
    145: [1, [47, 0], [70, 99, 0, 2]],
    146: [1, [47, 0], [25, 3, 0, 3]],
  },
  clan_law_labels: [
    "clan_boss",
    "struct_build",
    "planetary",
    "buffer",
    "player_manage",
    "warlord",
    "invite",
    "profile_edit",
    "clan_char_use",
    "group_message",
  ],
  bonus_cats: [
    "",
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 91, 181, 11, 12, 13, 14, 150, 151, 17, 18,
      60, 61, 51, 52, 63, 64, 65, 66, 76, 77, 79, 80, 136, 165, 162, 158, 160,
      178, 180, 182, 183, 184, 185,
    ],
    [
      16, 172, 19, 20, 171, 140, 53, 54, 173, 55, 67, 70, 74, 78, 99, 134, 141,
      142,
    ],
    [
      58, 59, 155, 177, 15, 170, 56, 57, 71, 72, 73, 98, 132, 133, 135, 138,
      175, 139, 148, 149, 153, 156, 157, 159, 161, 163, 164, 169, 168, 176,
    ],
    [62, 68, 69, 75, 81, 82, 154, 174],
    [83, 84, 85, 86, 87, 88, 89, 90],
    [92, 93, 97, 94, 95, 96, 137],
    [143, 144, 146],
    [200, 201],
  ],
  clan_structs_cats: [
    "",
    [4, 6, 10, 29],
    [2, 3, 1, 5, 9, 12, 13, 14, 15, 27, 28, 30, 31, 32, 33, 34, 11, 35, 36],
    [7, 8, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26],
  ],
  quest_action: 0,
  item_slots: 19,
  curvy: [
    "easeInSine",
    "easeOutSine",
    "easeInExpo",
    "easeInQuint",
    "easeInOutSine",
    "easeInOutExpo",
  ],
  train_eff: [0, 0.4, 1, 1.4, 1.8, 2.3, 2.7, 3.1, 3.5, 3.8, 4.1, 4.4, 4.7],
  ekw_page: 1,
  chat_data: {},
  lang_data: {
    lokacje: { pl: "name", en: "name_en" },
    nauki: { pl: "nazwa", en: "nazwa_en" },
    nauki2: { pl: "opis", en: "opis_en" },
    quests: { pl: "qb_title", en: "qb_title_en" },
    question: { pl: "question", en: "question_en" },
    quiza1: { pl: "a1", en: "a1_en" },
    quiza2: { pl: "a2", en: "a2_en" },
    quiza3: { pl: "a3", en: "a3_en" },
    quiza4: { pl: "a4", en: "a4_en" },
  },
  move_speed: 250,
  hero_cen: true,
  map: {
    initiated: 0,
    animate: 0,
    cX: 520,
    cY: 520,
    fX: 40,
    fY: 40,
    scam_x: 1,
    scam_y: 1,
    cam_x: 0,
    cam_y: 0,
    max_x: 0,
    max_y: 0,
    smax_x: 0,
    smax_y: 0,
    rX: 13,
    rY: 13,
    frame_control: {},
  },
  minimap: {
    active: false,
    canvas: "",
    ctx: "",
    cX: 176,
    cY: 176,
    max_x: 0,
    max_y: 0,
    w: 8,
    h: 8,
    rX: 22,
    rY: 22,
    box_x: 176,
    box_y: 176,
  },
  bindings: {
    sila: [{ c: document.getElementById("char_stat_1"), ani: 1, dots: 1 }],
    szyb: [{ c: document.getElementById("char_stat_2"), ani: 1, dots: 1 }],
    wytrz: [{ c: document.getElementById("char_stat_3"), ani: 1, dots: 1 }],
    swoli: [{ c: document.getElementById("char_stat_4"), ani: 1, dots: 1 }],
    ki: [{ c: document.getElementById("char_stat_5"), ani: 1, dots: 1 }],
    moc: [{ c: document.getElementById("char_power"), ani: 1, dots: 1 }],
    exp: [{ c: document.getElementById("char_exp"), ani: 1, dots: 1 }],
    level: [{ c: document.getElementById("char_level") }],
    pr: [{ c: document.getElementById("char_pa"), ani: 1, dots: 1 }],
    x: [{ c: document.getElementById("map_x") }],
    y: [{ c: document.getElementById("map_y") }],
    lssj: [{ c: document.getElementById("brolly_lssj") }],
    rage: [{ c: document.getElementById("rtxt") }, { type: 2, option: 10 }],
    bardock_points: [
      { c: document.getElementById("ptxt") },
      { type: 2, option: 14 },
    ],
    anger: [{ c: document.getElementById("br_anger") }],
    soul_slots: [{ c: document.getElementById("soul_slots") }],
    pr_max: [
      {
        c: document.getElementById("char_pa_max"),
        dots: 1,
        add_bonus: 19,
        add_pbonus: 171,
      },
    ],
    pr_ph: [
      {
        c: document.getElementById("char_pa_growth"),
        dots: 1,
        add_bonus: 20,
        add_pbonus: 140,
      },
    ],
    pr_time: [{ type: 2, option: 3 }],
    train_lvl: [{ c: document.getElementById("game_train_level") }],
    train_exp: [{ c: document.getElementById("game_train_exp") }],
    tpp: [
      { c: document.getElementById("train_tpp"), dots: 1 },
      { c: document.getElementById("tp_char_tpp"), dots: 1 },
    ],
    doubler_rate: [{ c: document.getElementById("doubler_ratio"), dots: 1 }],
    doublerx: [{ type: 2, option: 1 }],
    last_map: [{ type: 2, option: 2 }],
    kk: [
      { c: document.getElementById("char_spremium_am"), ani: 1, dots: 1 },
      { type: 2, option: 5 },
    ],
    reborn: [{ type: 2, option: 4 }],
    god: [{ c: document.getElementById("char_god"), ani: 1, dots: 1 }],
    wta: [{ c: document.getElementById("char_stat_6"), ani: 1, dots: 1 }],
    gki: [{ c: document.getElementById("char_stat_7"), ani: 1, dots: 1 }],
    instynkt: [{ c: document.getElementById("char_stat_8"), ani: 1, dots: 1 }],
    senzu_limit: [
      { c: document.getElementById("char_stat_99"), ani: 1, dots: 1 },
    ],
    pvp: [{ c: document.getElementById("char_pvp"), dots: 1 }],
    kills: [{ c: document.getElementById("char_pvm"), dots: 1 }],
    school_rep: [{ c: document.getElementById("char_rep"), dots: 1 }],
    sentinel: [{ c: document.getElementById("char_sentinel"), dots: 1 }],
    divine: [{ c: document.getElementById("char_godp"), dots: 1 }],
    divine_particle: [{ c: document.getElementById("char_divinep"), dots: 1 }],
    minor_ball: [{ c: document.getElementById("minorbdc"), dots: 1, ani: 1 }],
    friend_limit: [
      { c: document.getElementById("char_friend_limit"), dots: 1, ani: 1 },
    ],
    trybut: [
      { c: document.getElementById("clan_kp_tribute"), dots: 1, ani: 1 },
    ],
    clan_pu: [
      { c: document.getElementById("clan_pu_tribute"), dots: 1, ani: 1 },
    ],
    soul_floor: [{ c: document.getElementById("st_floor"), dots: 1 }],
    planetary: [{ type: 2, option: 6 }],
    level_lock: [{ type: 2, option: 7 }],
    arena_lvl: [{ c: document.getElementById("arena_lvl") }],
    arena_exp: [{ type: 2, option: 8 }],
    vip_level: [{ c: document.getElementById("monthly_vip_level") }],
    vip_score: [
      { c: document.getElementById("monthly_vip_points"), ani: 1, dots: 1 },
    ],
    vip_show: [{ type: 2, option: 9 }],
    gvip_level: [{ c: document.getElementById("general_vip_level") }],
    gvip_score: [
      { c: document.getElementById("general_vip_points"), ani: 1, dots: 1 },
    ],
    soul_floor_resets: [{ c: document.getElementById("st_floor_r") }],
    mastery_lvl: [{ c: document.getElementById("char_mastery_lvl") }],
    mastery_exp2: [{ c: document.getElementById("char_mastery_exp"), dots: 1 }],
    mastery_hired: [{ c: document.getElementById("mastery_hired"), dots: 1 }],
    item_drop_mode: [{ type: 2, option: 11 }],
    ekw_max_sets: [{ type: 2, option: 12 }],
    ekw_set: [{ type: 2, option: 13 }],
    sc_set: [{ type: 2, option: 15 }],
    name: [{ c: document.getElementById("char_name") }],
  },
  tooltip_options: {
    html: true,
    placement: "auto right",
    container: "body",
    trigger: "hover",
  },
  planet_str: {
    260: {
      "4_4": 1,
      "4_7": 2,
      "4_8": 3,
      "5_4": 4,
      "5_5": 5,
      "5_6": 6,
      "6_4": 7,
      "6_7": 8,
      "7_5": 9,
    },
    261: {
      "9_9": 1,
      "9_12": 2,
      "9_13": 3,
      "10_9": 4,
      "10_10": 5,
      "10_11": 6,
      "11_9": 7,
      "11_12": 8,
      "12_10": 9,
    },
    262: {
      "14_14": 1,
      "14_17": 2,
      "14_18": 3,
      "15_14": 4,
      "15_15": 5,
      "15_17": 6,
      "16_14": 7,
      "16_17": 8,
      "17_15": 9,
    },
    263: {
      "17_17": 1,
      "20_17": 2,
      "23_17": 3,
      "17_20": 4,
      "23_20": 5,
      "20_20": 6,
      "17_23": 7,
      "20_23": 8,
      "23_23": 9,
    },
    264: {
      "22_22": 1,
      "25_22": 2,
      "28_22": 3,
      "22_25": 4,
      "25_25": 5,
      "28_25": 6,
      "22_28": 7,
      "25_28": 8,
      "28_28": 9,
    },
    885: {
      "27_27": 1,
      "33_27": 2,
      "33_27": 3,
      "32_30": 4,
      "30_30": 5,
      "33_30": 6,
      "27_33": 7,
      "30_33": 8,
      "33_33": 9,
    },
  },
};
(GAME.curvy_cnt = GAME.curvy.length - 1),
  (String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, "g"), replacement);
  });
//framerate func
var frame_time = 60 / 1000; // run the local game at 16ms/ 60hz
if ("undefined" != typeof global) frame_time = 45; //on server we run at 45ms, 22hz
(function () {
  var lastTime = 0;
  var vendors = ["ms", "moz", "webkit", "o"];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[vendors[x] + "CancelAnimationFrame"] ||
      window[vendors[x] + "CancelRequestAnimationFrame"];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime = Date.now(),
        timeToCall = Math.max(0, frame_time - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
})();
function escapeHtml(text) {
  var map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  return text.replace(/[&<>"']/g, function (m) {
    return map[m];
  });
}
GAME.parseEmots = function (str) {
  if (str) {
    var emots = new Array(
      [":devilface", 16],
      [/:\)/i, 1],
      [":D", 2],
      [":d", 3],
      [":cry", 4],
      [":saint", 5],
      [":o", 6],
      [":O", 7],
      [/:\|/i, 8],
      [/:\?/i, 9],
      [/:\(/i, 10],
      [":embarrassed", 11],
      //[/:[pP]/i,12],
      [":rekt", 13],
      [/:&#62;/g, 14],
      [":thuglife", 15],
      [/]:-&#62;/g, 16],
      [/xD/g, 19],
      [/;\)/g, 17]
    );
    //[/;[pP]/g,20],
    //[/;[dD]/g,18]

    var len = emots.length;
    for (i = 0; i < len; i++) {
      str = str.replaceAll(
        emots[i][0],
        '<div class="emo b' + emots[i][1] + '"></div>'
      );
    }
  }
  return str;
};
GAME.load_captcha = function (container, secure, once = 0, reload = 0) {
  if (grecaptcha) {
    if (once && this.captcha[secure]) return false;
    if (!reload && this.captcha[secure]) grecaptcha.reset();
    else {
      this.response[secure] = grecaptcha.render($(container)[0], {
        sitekey: this.sitekey,
        theme: "light",
      });
      this.captcha[secure] = true;
      this.any_captcha = true;
    }
  }
};
GAME.getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
GAME.getTime = function () {
  return Math.floor(ts.now() / 1000);
};
GAME.getmTime = function () {
  return ts.now();
};
GAME.parseServerTime = function () {
  var day = moment(ts.now());
  JQS.servt.text(
    day.format("HH") + ":" + day.format("mm") + ":" + day.format("ss")
  );
};
GAME.processServerTime = function () {
  var time = this.getTime();
  if (JQS.servt.length) {
    var s = JQS.servt.text().split(":");
    s[2] = parseInt(s[2]) + 1;
    if (s[2] >= 60) {
      s[2] = "00";
      s[1] = parseInt(s[1]) + 1;
      if (s[1] < 10) s[1] = "0" + s[1];
      if (s[1] >= 60) {
        s[1] = "00";
        s[0] = parseInt(s[0]) + 1;
        if (s[0] < 10) s[0] = "0" + s[0];
        if (s[0] >= 24) {
          s[0] = "00";
          s[1] = "00";
          s[2] = "00";
        }
      }
    } else {
      if (s[2] < 10) s[2] = "0" + s[2];
    }
    var seconds = parseInt(s[2]) + parseInt(s[1]) * 60 + parseInt(s[0]) * 3600;
    seconds++;
    JQS.servt.text(s.join(":"));
  }
  if (!this.stin_check || this.stin_check < time) {
    this.stin_check = time + 60;
    this.parseServerTime();
  }
};
GAME.komunikat = function (kom) {
  if (this.koms.indexOf(kom) == -1) {
    if (this.komc > 50) this.komc = 40;
    var ind = this.koms.push(kom) - 1;
    JQS.kcc.append(
      '<div class="kom" style="top:' +
        this.komc +
        '%"><div class="close_kom" data-ind="' +
        ind +
        '"><img src="/gfx/layout/exit.png" /></div><div class="content">' +
        kom +
        "</div></div>"
    );
    this.komc++;
    kom_close_bind();
  }
};
GAME.redirect = function (path, deley) {
  setTimeout(function () {
    window.location.href = path;
  }, deley);
};
GAME.toFix = function (i) {
  var str = "";
  do {
    let a = i % 10;
    i = Math.trunc(i / 10);
    str = a + str;
  } while (i > 0);
  return str;
};
GAME.abbreviateNumber = function (number, decPlaces = 0) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces);

  // Enumerate number abbreviations
  var abbrev = [
    "K",
    "M",
    "Mld",
    "B",
    "Bld",
    "T",
    "Quad",
    "Quin",
    "Sext",
    "Sep",
    "Oct",
    "Non",
    "Dec",
    "Und",
    "Duo",
    "Tre",
    "Quat",
    "Quind",
    "Sexd",
    "Sept",
    "Octo",
    "Nove",
    "Vigi",
  ];

  // Go through the array backwards, so we do the largest first
  for (var i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    var size = Math.pow(10, (i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.floor((number * decPlaces) / size) / decPlaces;

      // Handle special case where we round up to the next abbreviation
      if (number == 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      // Add the letter for the abbreviation
      number += " " + abbrev[i];

      // We are done... stop
      break;
    }
  }
  return number;
};
GAME.number_format_classic = function (
  number,
  decimals,
  dec_point,
  thousands_sep
) {
  // Strip all characters but numerical ones.
  number = (number + "").replace(/[^0-9+\-Ee.]/g, "");

  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return "" + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
};
GAME.number_format = function (number, decimals, dec_point, thousands_sep) {
  // Strip all characters but numerical ones.
  if ((number + "").length >= 20) return this.abbreviateNumber(number);
  number = (number + "").replace(/[^0-9+\-Ee.]/g, "");

  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return "" + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
};
GAME.dots = function (val) {
  return this.number_format(val, 0, "", " ");
};
GAME.initiate = function () {
  $("#player_login").text(this.login);
  $("#game_win").show();
  if (this.char_id == 0 && this.pid > 0) {
    this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 1 });
  }
  var len = this.servers.length,
    con = "";
  for (var i = 0; i < len; i++) {
    con +=
      '<option value="' +
      this.servers[i] +
      '">' +
      LNG["server" + this.servers[i]] +
      "</option>";
  }
  $("#available_servers").html(con);
  $("#available_servers option[value=" + this.server + "]").prop(
    "selected",
    true
  );
};
GAME.animate = function () {
  var parent = this;
  if (this.map.animate && this.maploaded) this.draw_map();
  requestAnimationFrame(function () {
    parent.animate();
  });
};
GAME.draw_minimap = function () {
  this.minimap.ctx.clearRect(
    0,
    0,
    this.minimap.canvas.width,
    this.minimap.canvas.height
  );
  this.drawMiniMap();
};
GAME.draw_map = function () {
  if (this.map.ctx) {
    this.map.ctx.clearRect(0, 0, this.map.canvas.width, this.map.canvas.height);
    this.drawSmallMap();
  }
};
GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8c = function (order, data, force) {
  if (!this.is_loading || force) {
    this.load_start();
    this.socket.emit(order, data);
  } else if (this.debug) console.log("failed order", order, data);
};
GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder = function (data, force = false) {
  this.xxx1de4b6ac15d3b3b135c17f1a14faac8c("ga", data, force);
};
GAME.load_start = function () {
  this.is_loading = true;
  JQS.ldr.finish().fadeIn();
};

GAME.load_stop = function () {
  this.is_loading = false;
  JQS.ldr.finish().fadeOut();
};
GAME.rebPref = function (reborn) {
  switch (reborn) {
    case 1:
      return "<span class=r" + reborn + ">R</span>";
      break;
    case 2:
      return "<span class=r" + reborn + ">G</span>";
      break;
    case 3:
      return "<span class=r" + reborn + ">U</span>";
      break;
    case 4:
      return "<span class=r" + reborn + ">S</span>";
      break;
    case 5:
      return "<span class=r" + reborn + ">H</span>";
      break;
    case 6:
      return "<span class=r" + reborn + ">M</span>";
      break;
    default:
      return "";
      break;
  }
};
GAME.floatingBind = function () {
  if (this.animations_off) {
    clearTimeout(this.noanitim);
    this.noanitim = setTimeout(function () {
      $(".floating").remove();
    }, 2000);
  } else $(".floating").finish().animate({ opacity: 0, top: "-=50px" }, 2000);
};
GAME.parseFightResult = function (result, quick = 0, reward = {}) {
  var res = "";
  if (quick) {
    this.fight_reward = reward;
    res += this.fightReward(1, result.result);
  }
  JQS.mko.html(res);
  if (quick) this.floatingBind();
};
GAME.removeMob = function (remove_mob) {
  //mob_num,mob_rank];
  //console.log(remove_mob);
  for (var m = 0; m < 7; m++) {
    if (remove_mob[1][m] > 0)
      this.field_mobs[remove_mob[0]].ranks[m] -= remove_mob[1][m];
  }
  this.showMobList();
};
GAME.parseBB = function (str) {
  if (str) {
    var search = new Array(
      /&/g,
      />/g,
      /</g,
      /"/g,
      /\[b\](.*?)\[\/b\]/g,
      /\[i\](.*?)\[\/i\]/g,
      /\[u\](.*?)\[\/u\]/g,
      /\[s\](.*?)\[\/s\]/g,
      /\[ul\]([\s\S]*?)\[\/ul\]/gm,
      /\[li\](.*?)\[\/li\]/g,
      /\[ol\]([\s\S]*?)\[\/ol\]/gm,
      /\[table\]([\s\S]*?)\[\/table\]/gm,
      /\[tr\]([\s\S]*?)\[\/tr\]/g,
      /\[td\](.*?)\[\/td\]/g,
      /\[center\]([\s\S]*?)\[\/center\]/gim,
      /\[left\]([\s\S]*?)\[\/left\]/gm,
      /\[right\]([\s\S]*?)\[\/right\]/gm,
      /\[font\=?(.*?)?\]([\s\S]*?)\[\/font\]/g,
      /\[size\=?(.*?)?\]([\s\S]*?)\[\/size\]/g,
      /\[color\=?(.*?)?\]([\s\S]*?)\[\/color\]/g,
      /\[quote]([\s\S]*?)\[\/quote\]/g,
      /\n/g,
      /\\/g
    );
    var replace = new Array(
      "&amp;",
      "&gt;",
      "&lt;",
      "&quot;",
      "<strong>$1</strong>",
      "<em>$1</em>",
      "<u>$1</u>",
      "<s>$1</s>",
      "<ul>$1</ul>",
      "<li>$1</li>",
      "<ol>$1</ol>",
      "<table>$1</table>",
      "<tr>$1</tr>",
      "<td>$1</td>",
      '<div align="center">$1</div>',
      '<div align="left">$1</div>',
      '<div align="right">$1</div>',
      '<font face="$1">$2</font>',
      '<font size="$1">$2</font>',
      '<font color="$1">$2</font>',
      "<blockquote>$1</blockquote>",
      "<br />",
      ""
    );
    for (i = 0; i < search.length; i++) {
      str = str.replaceAll(search[i], replace[i]);
    }
  }
  return str;
};
GAME.minimapToggle = function () {
  if (this.minimap.active) {
    this.minimap.active = false;
    $("#minimap_con").fadeOut();
  } else {
    this.minimap.active = true;
    $("#minimap_con").fadeIn();
  }
};
GAME.showSpecialList = function () {
  var con = "",
    any = false;
  if (this.field_wanted) {
    any = true;
    con +=
      '<div><div class="mob_tab d' +
      this.png_color(this.char_data.level, this.field_wanted.level) +
      '" title="' +
      this.field_wanted.level +
      '"><div class="mob_rank r6"></div><b>' +
      this.field_wanted.name +
      "</b> <span>" +
      LNG.lab216 +
      '</span> </div><button class="option map_bicon" data-option="mob_desc" data-rank="10" data-mob="' +
      this.field_wanted.id +
      '"><i class="in"></i></button><button class="option map_bicon" data-option="wanted_attack" data-mob_id="' +
      this.field_wanted.id +
      '"><i class="ca"></i></button><button class="option map_bicon" data-option="wanted_attack" data-mob_id="' +
      this.field_wanted.id +
      '" data-quick="1"><i class="qa"></i></button></div>';
  }
  if (this.field_boss) {
    any = true;
    con +=
      '<div><div class="mob_tab d' +
      this.png_color(this.char_data.level, this.field_boss.level) +
      '" title="' +
      this.field_boss.level +
      '"><div class="mob_rank wa"></div><b>' +
      this.field_boss.name +
      "</b> <span>" +
      LNG.lab336 +
      '</span> </div><button class="option map_bicon" data-option="mob_desc" data-rank="4" data-mob="' +
      this.field_boss.mob_id +
      '"><i class="in"></i></button><button class="option map_bicon" data-option="boss_attack" data-boss_id="' +
      this.field_boss.id +
      '"><i class="ca"></i></button></div>';
  }
  PJS.scr.innerHTML = con;
  return any;
};
GAME.prepareMobList = function () {
  var data = this.field_mobs,
    con = "";
  if (data) {
    var len = data.length;
    con = '<div class="sekcja">' + LNG.lab183 + "</div>";
    for (var i = 0; i < len; i++) {
      con +=
        '<div id="mob_' +
        data[i].mob_id +
        '_mf" class="field_option">' +
        LNG.lab186 +
        "! " +
        LNG.lab1 +
        ' <span id="mob_' +
        data[i].mob_id +
        '_mf_rank" class="orange"></span> <button class="option pull-right btn_small_gold" data-option="multi_attack" data-mob_id="' +
        i +
        '">' +
        LNG.lab187 +
        "</button></div>";
      for (var r = 0; r <= 5; r++) {
        var mob_level = this.commonMobLevel(r, data[i].mob_level);
        con +=
          '<div id="mob_' +
          data[i].mob_id +
          "_rank_" +
          r +
          '"><div class="mob_tab d' +
          this.png_color(this.char_data.level, mob_level) +
          '" title="' +
          mob_level +
          '"><div class="mob_rank r' +
          r +
          '"></div><b>' +
          data[i].name +
          "</b> <span>" +
          this.mobRank(r) +
          '</span>  <div id="mob_' +
          data[i].mob_id +
          "_rank_" +
          r +
          '_am" class="amount"></div></div><button class="option map_bicon common_mob_info" data-option="mob_desc" data-rank="' +
          r +
          '" data-mob="' +
          data[i].mob_id +
          '"><i class="in"></i></button><button class="option map_bicon common_mob_attack" data-option="common_attack" data-mob_id="' +
          i +
          '" data-mob-rank="' +
          r +
          '"><i class="ca"></i></button><button class="option map_bicon" data-option="quick_attack" data-mob_id="' +
          i +
          '" data-mob-rank="' +
          r +
          '"><i class="qa"></i></button></div>';
      }
    }
    this.field_mob_types = len;
  }
  PJS.cre.innerHTML = con;
  this.mobs_prepared = true;
};
GAME.showMobList = function () {
  var data = this.field_mobs;
  this.field_mob_id = 0;
  if (data) {
    var len = data.length;
    for (var i = 0; i < len; i++) {
      if (this.field_mf && this.field_mf[i] >= 0 && this.map_options.vo[5]) {
        if (
          !this.mf[data[i].mob_id] ||
          this.mf[data[i].mob_id] != this.field_mf[i]
        ) {
          $("#mob_" + data[i].mob_id + "_mf").show();
          $("#mob_" + data[i].mob_id + "_mf_rank").text(
            this.mobRank(this.field_mf[i])
          );
          this.mf[data[i].mob_id] = this.field_mf[i];
        }
      } else $("#mob_" + data[i].mob_id + "_mf").hide();
      var wasnt = true;
      for (var r = 0; r <= 5; r++) {
        var amount = "";
        var v = 0;
        if (data[i].ranks[r] > 0 && this.map_options.vo[5]) {
          v = 1;
          if (this.map_options.ma[r] && r <= this.field_mf[i]) wasnt = false;
          var con = document.getElementById(
            "mob_" + data[i].mob_id + "_rank_" + r + "_am"
          );
          if (con) con.innerText = "x " + data[i].ranks[r];
        } else v = 0;
        if (
          !this.md.hasOwnProperty(data[i].mob_id + "_" + r) ||
          this.md[data[i].mob_id + "_" + r] != v
        ) {
          this.md[data[i].mob_id + "_" + r] = v;
          if (v) $("#mob_" + data[i].mob_id + "_rank_" + r + "").show();
          else $("#mob_" + data[i].mob_id + "_rank_" + r + "").hide();
        }
      }
      if (wasnt) this.field_mob_id++;
    }
  }
};
GAME.pushNotification = function (kom, duration = 3000) {
  var time = this.getTime();
  if (!this.push_cd) this.push_cd = 0;
  if (this.push_cd > time) return;
  this.push_cd = time + 10;
  this.noti_cnt++;
  $("#noti_con").prepend(
    '<div id="noti_' +
      this.noti_cnt +
      '" class="notification"><div class="sep"></div>' +
      kom +
      "</div>"
  );
  var con = $("#noti_" + this.noti_cnt);
  con.slideDown();
  page_bind();
  setTimeout(function () {
    con.addClass("blinking");
  }, duration);
  setTimeout(function () {
    con.fadeOut(500, function () {
      $(this).remove();
    });
  }, duration + 1000);
};
GAME.parseArenaPlayer = function (i, entry, pvp_master) {
  var res = "";
  if (entry.data) {
    var pd = entry.data;
    var qb = "";
    var stats =
      '<span class="player_clan"><i class="ico pow"></i><span class="orange">' +
      this.dots(pd.moc) +
      LNG.lab10 +
      "</span></span>";
    var cls = "";
    if (entry.cd) {
      qb += this.showTimer(
        entry.cd - this.getTime(),
        'data-special="10" data-pd="' + pd.id + '"',
        " playercd" + pd.id + ""
      );
      cls = "initial_hide_forced playericons" + pd.id;
    }
    qb +=
      '<button class="option map_bicon ' +
      cls +
      '" data-option="arena_attack" data-index="' +
      i +
      '"><i class="ca"></i></button>';
    if (pvp_master)
      qb +=
        '<button class="option map_bicon ' +
        cls +
        '" data-option="arena_attack" data-index="' +
        i +
        '" data-quick="1"><i class="qa"></i></button>';
    var god = "";
    if (pd.god) {
      god =
        '<span class="orange"><i class="ico god"></i>' +
        this.dots(pd.god) +
        "</span>";
    }
    res +=
      '<div class="player"><div class="belka"><strong class="player_rank' +
      pd.ranga +
      ' option" data-option="show_player" data-char_id="' +
      pd.id +
      '">' +
      pd.name +
      "</strong> <span>" +
      this.rebPref(pd.reborn) +
      pd.level +
      "</span> " +
      stats +
      '</div><div id="pvp_opts_' +
      pd.id +
      '" class="right_btns">' +
      qb +
      '</div><div class="adbelka">[' +
      pd.arena_lvl +
      '] <span class="grey">' +
      LNG["arena_rank" + pd.arena_lvl] +
      "</span> " +
      god +
      "</div></div>";
  }
  return res;
};
GAME.parseListPlayer = function (entry, pvp_master) {
  var res = "";
  if (entry.data) {
    var pd = entry.data;
    var qb = "";
    var klan = "",
      erank = "";
    if (pd.klan_id) {
      var cls = "";
      if (this.clan_enemies.indexOf(pd.klan_id) != -1) cls = "enemy";
      klan =
        '<b class="poption player_clan ' +
        cls +
        '" data-option="show_clan" data-klan_id="' +
        pd.klan_id +
        '">' +
        pd.klan_short +
        ' <img src="' +
        pd.emblem +
        '" /></b>';
    }
    var cls = "";
    if (entry.cd) {
      qb += this.showTimer(
        entry.cd - this.getTime(),
        'data-special="10" data-pd="' + pd.id + '"',
        " playercd" + pd.id + ""
      );
      cls = "initial_hide_forced playericons" + pd.id;
    }
    if (pd.empire) {
      var cls2 = "";
      if (this.emp_enemies.indexOf(pd.empire) != -1) {
        if (this.emp_enemies_t[pd.empire] == 1) cls2 = "war";
        else if (this.empire_locations.indexOf(this.char_data.loc) != -1)
          cls2 = "war";
      }
      if (!pd.glory_rank) pd.glory_rank = 1;
      erank =
        '<img src="/gfx/empire/ranks/' +
        pd.empire +
        "/" +
        pd.glory_rank +
        '.png" class="glory_rank ' +
        cls2 +
        '" />';
    }
    qb +=
      '<button class="poption map_bicon ' +
      cls +
      '" data-option="xxx3bdbccbc26ce4b50689c2b2e36aa25f7" data-char_id="' +
      pd.id +
      '"><i class="ca"></i></button>';
    if (pvp_master)
      qb +=
        '<button class="poption map_bicon ' +
        cls +
        '" data-option="xxx3bdbccbc26ce4b50689c2b2e36aa25f7" data-char_id="' +
        pd.id +
        '" data-quick="1"><i class="qa"></i></button>';
    res +=
      '<div class="player"><div class="belka">' +
      erank +
      '<strong class="player_rank' +
      pd.ranga +
      ' poption" data-option="show_player" data-char_id="' +
      pd.id +
      '">' +
      pd.name +
      "</strong> <span>" +
      this.rebPref(pd.reborn) +
      pd.level +
      "</span> " +
      klan +
      '</div><div id="pvp_opts_' +
      pd.id +
      '" class="right_btns">' +
      qb +
      "</div></div>";
  } else if (entry.more) {
    res +=
      '<button class="more_players poption" data-option="load_more_players" data-start_from="' +
      entry.next_from +
      '">+' +
      entry.more +
      "</div>";
  }
  return res;
};
GAME.parsePlayerShadow = function (data, pvp_master) {
  var entry = data.data;
  var res = "";
  if (entry.data) {
    var pd = entry.data;
    pd.empire = entry.empire;
    var qb = "";
    var erank = "";
    var cls = "";
    if (data.cd) {
      qb += this.showTimer(
        data.cd - this.getTime(),
        'data-special="10" data-pd="' + pd.id + '"',
        " playercd" + pd.id + ""
      );
      cls = "initial_hide_forced playericons" + pd.id;
    }
    if (pd.empire) {
      var cls2 = "";
      if (this.emp_enemies.indexOf(pd.empire) != -1) {
        if (this.emp_enemies_t[pd.empire] == 1) cls2 = "war";
        else if (this.empire_locations.indexOf(this.char_data.loc) != -1)
          cls2 = "war";
      }
      if (!pd.glory_rank) pd.glory_rank = 1;
      erank =
        '<img src="/gfx/empire/ranks/' +
        pd.empire +
        "/" +
        pd.glory_rank +
        '.png" class="glory_rank ' +
        cls2 +
        '" />';
    }
    qb +=
      '<button class="poption map_bicon ' +
      cls +
      '" data-option="gxxx3bdbccbc26ce4b50689c2b2e36aa25f7" data-char_id="' +
      pd.id +
      '"><i class="ca"></i></button>';
    if (pvp_master)
      qb +=
        '<button class="poption map_bicon ' +
        cls +
        '" data-option="gxxx3bdbccbc26ce4b50689c2b2e36aa25f7" data-char_id="' +
        pd.id +
        '" data-quick="1"><i class="qa"></i></button>';
    res +=
      '<div class="player"><div class="belka">' +
      erank +
      '<strong class="player_rank' +
      pd.ranga +
      ' poption" data-option="show_player" data-char_id="' +
      pd.id +
      '">' +
      pd.name +
      " - " +
      LNG.lab348 +
      "</strong> <span>" +
      this.rebPref(pd.reborn) +
      pd.level +
      '</span> </div><div id="gpvp_opts_' +
      pd.id +
      '" class="right_btns">' +
      qb +
      "</div></div>";
  } else if (entry.more) {
    res +=
      '<button class="more_players poption" data-option="load_more_players" data-start_from="' +
      entry.next_from +
      '">+' +
      entry.more +
      "</div>";
  }
  return res;
};
GAME.loadMorePlayers = function (more) {
  var data = more;
  var pvp_master = false;
  if (this.char_data.bonus19 > this.getTime()) pvp_master = true;
  var len = data.length;
  var con = "";
  for (var i = 0; i < len; i++) {
    con += this.parseListPlayer(data[i], pvp_master);
  }
  PJS.plc.insertAdjacentHTML("beforeend", con);
  pvp_option_bind();
};
GAME.showPlayerList = function () {
  var con = "";

  var pvp_master = false;
  if (this.char_data.bonus19 > this.getTime()) pvp_master = true;
  if (this.xxxaec57c2e2452b8683101a27637740f39) {
    var len = this.xxxaec57c2e2452b8683101a27637740f39.length;
    for (var i = 0; i < len; i++) {
      con += this.parseListPlayer(
        this.xxxaec57c2e2452b8683101a27637740f39[i],
        pvp_master
      );
    }
    any = true;
  }
  var data = this.field_shadows;
  if (data) {
    var len = data.length;
    for (var i = 0; i < len; i++) {
      con += this.parsePlayerShadow(data[i], pvp_master);
    }
    any = true;
  }
  PJS.plc.innerHTML = con;
  pvp_option_bind();
};
GAME.levelReqCheck = function (req_lvl, req_reborn) {
  var res = false;
  if (req_reborn < this.char_data.reborn) res = true;
  else if (
    req_reborn == this.char_data.reborn &&
    req_lvl <= this.char_data.level
  )
    res = true;
  return res;
};

GAME.executeIx = function () {
  if (this.spacebind && this.spacebind[0]) {
    switch (this.spacebind[0]) {
      case 1:
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
          a: 6,
          tpid: this.spacebind[1],
        });
        break;
      case 2:
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
          a: 22,
          type: 1,
          id: this.spacebind[1],
        });
        break;
    }
  }
};
GAME.showFieldData = function (x, y) {
  var con = "";
  var any = false;
  this.spacebind = false;
  if (this.field_res.tps) {
    var len = this.field_res.tps.length;
    for (var i = 0; i < len; i++) {
      any = true;
      var tp = this.field_res.tps[i];
      var req = "";
      var reqf = true;
      if (tp.lvl_req) {
        var cls = "red";
        if (this.levelReqCheck(tp.loc_data.level, tp.loc_data.reborn))
          cls = "green";
        else reqf = false;
        req +=
          LNG.lab24 +
          " " +
          this.rebPref(tp.loc_data.reborn) +
          '<span class="' +
          cls +
          '">' +
          tp.loc_data.level +
          "</span><br />";
      }
      if (tp.need_quest) {
        var cls = "red";
        if (tp.quest_done) cls = "green";
        else reqf = false;
        req +=
          LNG.lab85 +
          ' <span class="' +
          cls +
          '">' +
          tp.q[this.lang_data.quests[this.lang]] +
          "</span><br />";
      }
      var btn = "";
      if (reqf) {
        btn =
          '<button id="use_loc_tp' +
          i +
          '" class="option btn_small_gold pull-right" data-option="use_loc_tp" data-tpid="' +
          i +
          '">' +
          LNG.lab87 +
          "</button>";
        this.spacebind = [1, i]; //'#use_loc_tp'+i;
      }
      con +=
        '<div class="sekcja">' +
        LNG.lab184 +
        '</div><div class="field_option">' +
        LNG.lab86 +
        " <b>" +
        tp.loc_data[this.lang] +
        "</b> [" +
        tp.target_x +
        "|" +
        tp.target_y +
        "] " +
        btn +
        "<br /> " +
        req +
        " </div>";
    }
  }
  if (this.field_dball) {
    any = true;
    con +=
      '<div class="sekcja dbsection">' +
      LNG.lab224 +
      '</div><div class="field_option dbsection"><h5>' +
      LNG.lab225 +
      ' <strong class="orange">' +
      this.field_dball.num +
      "</strong>-" +
      LNG.lab226 +
      ' <b class="green">' +
      LNG["dball" + this.field_dball.type] +
      '</b></h5><div class="dbim pull-left star' +
      this.field_dball.num +
      '"></div><button class="gold_button option pull-right" data-option="pick_db" data-id="' +
      this.field_dball.id +
      '">' +
      LNG.lab227 +
      '</button><div class="clr"></div></div>';
  }
  if (this.map_castles && this.map_castles[x + "_" + y]) {
    var data = this.map_castles[x + "_" + y];
    var stat1 = 25 * data.level,
      stat2 = 20 * data.level,
      stat3 = 1 * data.level,
      stat4 = 0.5 * data.level,
      stat5 = 10 * data.level;
    any = true;
    con +=
      '<div class="sekcja">' +
      LNG.lab185 +
      '</div><div class="field_option"><h5>' +
      LNG.lab88 +
      ' <strong class="orange option" data-option="show_clan" data-klan_id="' +
      data.klan_id +
      '">' +
      data.klan_name +
      "</strong></h5>" +
      LNG.lab89 +
      ": <b>" +
      data.level +
      "</b><br />" +
      LNG.lab90 +
      ':<br /><span class="green">' +
      stat1 +
      "</span>" +
      this.item_stat(140) +
      '<br /><span class="green">' +
      stat2 +
      "</span>" +
      this.item_stat(15) +
      '<br /><span class="green">' +
      stat3 +
      "</span>" +
      this.item_stat(170) +
      '<br /><span class="green">' +
      stat4 +
      "</span>" +
      this.item_stat(53) +
      '<br /><span class="green">' +
      stat5 +
      "</span>" +
      this.item_stat(54) +
      "</div>";
  }
  if (this.map_mines && this.map_mines.coords[x + "_" + y]) {
    var data = this.map_mines.coords[x + "_" + y];
    var len = data.length;
    var any2 = false,
      tmp = "",
      time = this.getTime();
    tmp += '<div class="sekcja">' + LNG.lab132 + "</div>";
    for (var i = 0; i < len; i++) {
      if (data[i]) {
        var restoring = "",
          btn = "";
        any = true;
        any2 = true;
        var md = this.map_mines.mine_data[data[i][1]];
        if (data[i][2] > time) {
          restoring =
            LNG.lab134 +
            " " +
            this.showTimer(
              data[i][2] - time,
              'data-special="8" data-mid="' + data[i][0] + '"'
            );
        } else
          btn =
            '<button id="mining_btn_' +
            data[i][0] +
            '" class="pull-right option btn_small_gold" data-option="start_mine" data-mid="' +
            data[i][0] +
            '">' +
            LNG.lab133 +
            "</button>";
        tmp +=
          '<div class="field_option"><b class="green">' +
          md[this.lang_data["lokacje"][this.lang]] +
          "</b>" +
          btn +
          "<br />(" +
          LNG.lab36 +
          ' <span class="orange">' +
          Math.min(md.chance + this.getStat(149), 100) +
          '%</span>)<br /><span id="mining_res_' +
          data[i][0] +
          '">' +
          restoring +
          '</span><br /><div id="mining_mbar_' +
          data[i][0] +
          '" class="progress_bar initial_hide"><div id="mining_bar_' +
          data[i][0] +
          '"></div><i id="mining_pr_' +
          data[i][0] +
          '"></i></div></div>';
      }
    }
    tmp += '<div class="clr"></div></div>';
    if (any2) con += tmp;
  }
  if (
    this.map_quests &&
    this.map_quests[x + "_" + y] &&
    this.map_options.vo[1]
  ) {
    var data = this.map_quests[x + "_" + y];
    var len = data.length;
    var any2 = false,
      tmp = "";
    tmp += '<div class="sekcja">' + LNG.lab109 + "</div>";
    for (var i = 0; i < len; i++) {
      if (data[i]) {
        any = true;
        any2 = true;
        var add = "";
        if (data[i].main) add += "<span>" + LNG.lab113 + "</span>";
        if (data[i].rtype == 1) add += "<span>" + LNG.lab182 + "</span>";
        tmp +=
          '<div id="field_q_' +
          data[i].qb_id +
          '" class="field_quest option" data-option="show_quest" data-qb="' +
          data[i].qb_id +
          '"><div class="qperfix m' +
          data[i].main +
          " rt" +
          data[i].rtype +
          '"></div>' +
          data[i].name +
          " " +
          add +
          "</div>";
        this.spacebind = [2, data[i].qb_id]; //'#field_q_'+data[i].qb_id;
      }
    }
    tmp += "</div>";
    if (any2) con += tmp;
  }
  JQS.qcc.hide();
  PJS.fol.innerHTML = con;
  return any;
};
GAME.quest_want = function (res, qid, full = 0) {
  var warunek = res.type,
    want_id = res.id,
    want_ile = res.amount;
  var rheader = LNG["quest_req" + warunek];
  var need = "",
    percent = false;
  if (res.name) need = res.name;
  if (res.canbeanymob && res.id == 0) need = LNG.lab110;
  console.log(res);
  switch (warunek) {
    case 1: //przedmiot
    case 80:
    case 81:
      need =
        '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
        res.id +
        '"><img src="' +
        res.gfx +
        '" /></div>';
      if (res.level)
        need = "<i>" + LNG.lab24 + "</i>: <b>" + res.level + "</b>";

      break;
    case 8:
      need += "(" + LNG.mob_rank0 + ")";
      break;
    case 9:
      need += "(" + LNG.mob_rank1 + ")";
      break;
    case 10:
      need += "(" + LNG.mob_rank2 + ")";
      break;
    case 33:
      need += "(" + LNG.mob_rank3 + ")";
      break;
    case 76:
      need += "(" + LNG.mob_rank4 + ")";
      break;
    case 12:
      need = this.showTimer(res.count - this.getTime());
      if (!res.is_met && res.helpers && res.helpers.length) {
        this.compress_items = res.helpers;
        need +=
          '<button class="btn_small_gold option pull-right" data-option="compress_items" data-qb_id="' +
          res.qbid +
          '">' +
          LNG.lab199 +
          "</button>";
      }
      break;
    case 69:
      rheader += LNG["quest_req66_" + (res.amount + 1)];
    case 6:
    case 14:
      var cls = "";
      need += "<br />";
      if (!res.is_met) {
        if (res.lock) {
          need +=
            '<div class="quest_duel_lock">' +
            LNG.lab128 +
            ": " +
            this.showTimer(res.lock - this.getTime(), ' data-special="6"') +
            "</div>";
          cls = "disabled";
        }
        need +=
          '<button class="option quest_btn big_button" data-option="quest_duel" data-qid="' +
          res.qbid +
          '" ' +
          cls +
          ">" +
          LNG.lab114 +
          '</button><button class="option map_bicon" data-option="mob_desc" data-mob="' +
          res.mob_duel +
          '" data-rank="0"><i class="in"></i></button>';
      }
      break;
    case 15:
      if (res.is_met) need += LNG.lab129;
      else {
        need +=
          '<input type="text" id="quest_riddle" placeholder="' +
          LNG.lab130 +
          '" /><button class="option btn_small_gold" data-option="quest_riddle" data-qid="' +
          res.qbid +
          '">OK</button>';
      }
      break;
    case 17:
      if (res.is_met) {
        this.quest_action = 0;
      } else {
        this.quest_action = 1;
        this.quest_action_tmp = 0;
        this.quest_action_start = res.count;
        this.quest_action_count = res.count;
        this.quest_action_max = res.maxv;
        this.quest_action_qid = res.qbid;
        var pr = Math.min((res.count / res.maxv) * 100, 100);
        if (full)
          need +=
            '<br /><div class="progress_bar"><div id="quest_bar_val" style="width:' +
            pr +
            '%"></div><span id="quest_bar_val_span"></span></div><button class="option big_button quest_action">' +
            LNG.lab131 +
            "</button>";
      }
      break;
    case 19:
      need = res.id + " (" + res.count + ")";
      break;
    case 23:
    case 24:
      need = LNG["empire" + res.id];
      break;
    case 25:
      need = LNG["pakt_name" + res.id];
      break;
    case 26:
      need = LNG["skill_name" + res.id];
      break;
    case 28:
      if (res.name2) need += " " + LNG.lab111 + " " + res.name2;
      break;
    case 36:
      need += res.count + "/" + res.id;
      break;
    case 37:
      if (res.name2) need += " " + LNG.lab111 + " " + res.name2;
      need += " (" + LNG.mob_rank0 + ")";
      break;
    case 38:
      if (res.name2) need += " " + LNG.lab111 + " " + res.name2;
      need += " (" + LNG.mob_rank1 + ")";
      break;
    case 39:
      if (res.name2) need += " " + LNG.lab111 + " " + res.name2;
      need += " (" + LNG.mob_rank2 + ")";
      break;
    case 40:
      if (res.name2) need += " " + LNG.lab111 + " " + res.name2;
      need += " (" + LNG.mob_rank3 + ")";
      break;
    case 41:
      need += " <b>" + res.id + "</b>";
      break;
    case 42:
      need +=
        '<span class="item' +
        res.id +
        '">' +
        LNG["item_class" + res.id] +
        "</span>";
      break;
    case 46:
      need += LNG["quest_req46_" + res.id];
      break;
    case 50:
      if (res.id == 0) rheader = LNG.quest_req50a;
      else need = " " + res.id;
      break;
    case 52:
      if (res.id == 0) need += " " + LNG.quest_req52b;
      else
        need +=
          '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
          res.id +
          '"><img src="' +
          res.gfx +
          '" /></div>';
      need += " " + LNG.quest_req52c + " +<b>" + res.amount + "</b>";
      break;
    case 60:
      need +=
        '<b class="achi_' +
        res.id +
        '">' +
        LNG.quest_req60b +
        " " +
        res.id +
        "</b>";
      break;
    case 61:
      percent = true;
      break;
    case 66:
      need += LNG["quest_req66_" + (res.id + 1)];
      break;
    case 67:
      need += " <b>" + LNG["game_achievement" + res.id] + "</b>";
      break;
    case 68:
      need += " <b>" + LNG["premium_bon" + res.id] + "</b>";
      break;
    case 73:
      need += " <b>" + LNG["quest_req73_" + res.id] + "</b>";
      break;
    case 79:
      rheader = LNG["quest_req73_" + res.id];
      break;
    case 89:
      need += LNG["pp_str" + res.id];
      break;
    case 90:
      need += " " + res.id;
      break;
    case 92:
      need += " " + res.id;
      break;
    case 95:
      need +=
        '<span class="item' +
        res.id +
        '">' +
        LNG["item_class" + res.id] +
        "</span>";
      break;
    case 97:
      need =
        LNG["quest_req97"] +
        ' <div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
        res.id +
        '"><img src="' +
        res.gfx +
        '" /></div>';
      break;
    case 99:
      rheader = LNG["quest_req99"] + " " + res.id;
      break;
    case 101:
      rheader = LNG["quest_req101"] + " " + res.name2;
      break;
  }
  var counter = "",
    cls = "red3";
  if (res.is_met) cls = "green";
  if (res.maxv)
    counter =
      '<span class="quest_warunek' +
      qid +
      '" data-count="' +
      res.count +
      '" data-max="' +
      res.maxv +
      '">' +
      this.dots(res.count) +
      "/" +
      this.dots(res.maxv) +
      "</span>";
  if (percent) counter += "%";
  var con =
    rheader +
    ' <strong class="' +
    cls +
    '">' +
    need +
    " " +
    counter +
    "</strong>";
  return con;
};
GAME.quest_prize = function (res) {
  var id = res.type,
    id2 = res.id,
    ile = res.amount;
  switch (id) {
    case 1:
      return (
        "<b>" +
        this.dots(id2) +
        '</b> <i class="stat_icon exp"></i> ' +
        LNG["quest_prize" + id]
      );
      break; //Doświadczenie
    case 2:
      return (
        "<b>" +
        this.dots(id2) +
        '</b> <i class="stat_icon sila"></i> ' +
        LNG["quest_prize" + id]
      );
      break; //sila
    case 3:
      return (
        "<b>" +
        this.dots(id2) +
        '</b> <i class="stat_icon szyb"></i> ' +
        LNG["quest_prize" + id]
      );
      break; //szyb
    case 4:
      return (
        "<b>" +
        this.dots(id2) +
        '</b> <i class="stat_icon wytrz"></i> ' +
        LNG["quest_prize" + id]
      );
      break; //wytrz
    case 5:
      return (
        "<b>" +
        this.dots(id2) +
        '</b> <i class="stat_icon swoli"></i> ' +
        LNG["quest_prize" + id]
      );
      break; //swoli
    case 6:
      return (
        "<b>" +
        this.dots(id2) +
        '</b> <i class="stat_icon ki"></i> ' +
        LNG["quest_prize" + id]
      );
      break; //ki
    case 7:
      return (
        '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
        id2 +
        '"><img src="' +
        res.gfx +
        '" /><div>' +
        ile +
        "</div></div>"
      );
      break;
    case 42:
      return (
        '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
        id2 +
        '"><img src="' +
        res.gfx +
        '" /><div>1</div></div>'
      );
      break;
    case 57:
      return (
        '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
        id2 +
        '"><img src="' +
        res.gfx +
        '" /><div>' +
        ile +
        "</div></div>"
      );
      break;
    case 8:
      return LNG["quest_prize" + id] + " <b>" + res.name + "</b>";
      break;
    case 9:
      return (
        LNG["quest_prize" + id] +
        ": <b>" +
        res.name +
        '</b><div align="center"><img class="qitem reward" src="/gfx/techniki/' +
        id2 +
        '.png" /></div>'
      );
      break;
    case 10:
      return (
        "<b>" +
        this.dots(id2) +
        '</b> <img src="../gfx/kk.png" align="absmiddle" />'
      );
      break; //kp
    case 11:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //bonus do wszystkich statystyk
    case 13:
      return LNG["quest_prize" + id] + " <b>" + id2 + "</b>%";
      break; //strata energii
    case 14:
      return LNG["quest_prize" + id] + " <b>" + id2 + "</b>%";
      break; //zysk energii
    case 16:
      return LNG["quest_prize" + id] + ": <b>" + res.name + "</b>";
      break; //nowa lokacja dla kapsuły
    case 17:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //rozwój planety
    case 18:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //przyrost PA
    case 19:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //max PA
    case 20:
      return (
        "<b>" +
        this.dots(res.add) +
        '</b> <i class="stat_icon god"></i> ' +
        LNG["quest_prize" + id]
      );
      break; //zwiększenie Boskości
    case 21:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //PSK
    case 22:
      return (
        LNG["quest_prize" + id] + ": <b>" + LNG["premium_bon" + id2] + "</b>"
      );
      break; //bonus na 14 dni
    case 23:
      return LNG["quest_prize" + id];
      break; //ulepszony strój treningowy klasy epic
    case 24:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //Punkty Planetarne Imperium
    case 25:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //Punkty Imperialne Imperium
    case 26:
      return LNG["quest_prize" + id];
      break; //Pakt
    case 27:
      return LNG["quest_prize" + id];
      break; //Ulepszenie Paktu
    case 28:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //Sława
    case 29:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //Współczynnik do treningu
    case 30:
      return LNG["quest_prize" + id];
      break; //Kula Energii
    case 31:
      return (
        "<b>" +
        this.dots(id2) +
        '</b> <i class="stat_icon god"></i> ' +
        LNG["quest_prize" + id]
      );
      break; //Boskość
    case 32:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //Punkty PvP
    case 33:
      return (
        LNG["quest_prize" + id] +
        ": <b>" +
        LNG["game_achievement" + id2] +
        "</b>"
      );
      break; //Aktywacja dodatkowego osiągnięcia
    case 34:
      return (
        LNG["quest_prize" + id] +
        ': <b style="color:' +
        res.color +
        ';">' +
        res.name +
        "</b>"
      );
      break; //Tytuł
    case 35:
    case 36:
      return LNG["quest_prize" + id];
      break; //Następny krok
    case 37:
      return LNG["quest_prize" + id];
      break; //Zakończenie instancji
    case 38:
      return (
        "<b>" +
        this.dots(id2) +
        '</b> <i class="stat_icon wta"></i> ' +
        LNG["quest_prize" + id]
      );
      break;
      break; //Wtajemniczenie
    case 39:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //Punkty Strażnika
    case 40: //Doświadczenie
      return (
        "<b>" +
        id2 +
        "</b>" +
        LNG["quest_prize" + id] +
        " [ +" +
        this.dots(res.exp) +
        '<i class="stat_icon exp"></i>]'
      );
      break;
    case 41: //odnowienie pa
      var restore = Math.round(this.char_data.pr_max * (id2 / 100));
      return (
        "<b>" +
        id2 +
        "</b>% " +
        LNG["quest_prize" + id] +
        " [+" +
        this.dots(restore) +
        "] "
      );
      break;
    case 43:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break;
      break; //Punkty Planety Klanowej
    case 44:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //Punkty Rozwoju Planety
    case 45:
      return LNG["quest_prize" + id];
      break; //Wybór szkoły walki
    case 46:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //punkty szkoły walki
    case 49:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //boska ki
    case 50:
      return "<b>" + this.dots(id2) + "</b>x " + LNG["quest_prize" + id];
      break; //boskie punkty
    case 51:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //punkty ewo
    case 52:
      if (id2 == 0) return LNG["quest_prize" + id + "a"] + " (" + ile + ")";
      else
        return (
          LNG["quest_prize" + id + "b"] +
          " <b>" +
          this.dots(id2) +
          "</b> (" +
          ile +
          ")"
        );
      break; //Odnowienie dziennego limitu instancji nr
    case 53:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //pvm
    case 54:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //pvm
    case 55:
      return LNG["quest_prize55"];
      break; // ssjb up
    case 56:
      return LNG["quest_prize56"];
      break; // skill up
    case 58:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //pvm
    case 59:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //pvm
    case 60:
      return "<b>" + this.dots(id2) + "</b> " + LNG["quest_prize" + id];
      break; //pvm
    case 61:
      return LNG["quest_prize" + id];
      break; //pvm
    case 62:
      return LNG["quest_prize" + id];
      break; //pvm
    case 99:
      return LNG["quest_prize99"];
      break; //Odrodzenie I
    case 100:
      return LNG["quest_prize99"] + " I";
      break; //Odrodzenie II
    case 101:
      return LNG["quest_prize99"] + " II";
      break; //Odrodzenie II
    case 102:
      return LNG["quest_prize99"] + " III";
      break; //Odrodzenie III
    case 103:
      return LNG["quest_prize99"] + " IV";
      break; //Odrodzenie IV
    default:
      return "";
      break; //[brak]
  }
};
GAME.endQuest = function (quest_end) {
  JQS.qcc.hide();
  $("#field_q_" + quest_end).fadeOut();
  for (var ind in this.map_quests) {
    if (this.map_quests.hasOwnProperty(ind)) {
      var len = this.map_quests[ind].length;
      for (var i = 0; i < len; i++) {
        if (this.map_quests[ind][i].qb_id == quest_end) {
          this.map_quests[ind][i].end = 1;
        }
      }
    }
  }
};
GAME.moveQuest = function (quest_move) {
  if (this.char_data.loc == quest_move.loc) {
    JQS.qcc.hide();
    $("#field_q_" + quest_move.qb_id).fadeOut();
    for (var ind in this.map_quests) {
      if (this.map_quests.hasOwnProperty(ind)) {
        var len = this.map_quests[ind].length;
        for (var i = 0; i < len; i++) {
          if (this.map_quests[ind][i].qb_id == quest_move.qb_id) {
            this.map_quests[ind][i].move = {
              new_x: quest_move.x,
              new_y: quest_move.y,
              start: this.getmTime(),
              duration: 300,
            };
          }
        }
      }
    }
  } else this.endQuest(quest_move.qb_id);
};
GAME.next_arena = function (lvl) {
  var exp = 0;
  switch (lvl) {
    case 1:
      exp = 1;
      break;
    case 2:
      exp = 5;
      break;
    case 3:
      exp = 10;
      break;
    case 4:
      exp = 20;
      break;
    case 5:
      exp = 30;
      break;
    case 6:
      exp = 60;
      break;
    case 7:
      exp = 120;
      break;
    case 8:
      exp = 240;
      break;
    case 9:
      exp = 480;
      break;
    case 10:
      exp = 960;
      break;
    case 11:
      exp = 1920;
      break;
    case 12:
      exp = 3840;
      break;
    case 13:
      exp = 4000;
      break;
    case 14:
      exp = 5000;
      break;
    case 15:
      exp = 6000;
      break;
    case 16:
      exp = 7000;
      break;
    case 17:
      exp = 8000;
      break;
    case 18:
      exp = 10000;
      break;
    case 19:
      exp = 13000;
      break;
    case 20:
      exp = 16000;
      break;
    case 21:
      exp = 20000;
      break;
    case 22:
      exp = 30000;
      break;
    default:
      exp = 99999;
      break;
  }
  return exp;
};
GAME.parseQuest = function (res) {
  var quest = res.q_step;
  var con =
    '<div class="quest_win"><div class="sekcja">' +
    quest.header +
    '</div><div class="option closeicon" data-option="close_quest"></div><div class="quest_desc"><span class="qtitle">&raquo; ' +
    quest.title +
    "</span><hr />" +
    this.parseContent(quest.content)
      .replaceAll(
        "&player",
        '<b class="orange">' + this.char_data.name + "</b>"
      )
      .replaceAll(
        "&Player",
        '<b class="orange">' + this.char_data.name + "</b>"
      ) +
    "</div>";
  var qrdy = true;
  var conf = "";
  if (quest.want) {
    con += '<div class="quest_desc">';
    qrdy = quest.want.is_met;
    con +=
      "<div><b>" +
      LNG.lab18 +
      "</b>:<br />" +
      this.quest_want(quest.want, quest.qb_id, 1) +
      "</div>";
    if (quest.time_limit) {
      con +=
        "<div>" +
        LNG.lab145 +
        ": " +
        this.showTimer(quest.want.tl - this.getTime()) +
        '<button class="newBtn option" data-option="quest_try_again" data-qb_id="' +
        quest.qb_id +
        '">' +
        LNG.lab146 +
        "</button></div>";
    }
    con += "</div>";
  }
  if (quest.prize) {
    con +=
      '<div class="quest_desc"><b>' +
      LNG.lab21 +
      "</b>:<br />" +
      this.quest_prize(quest.prize) +
      "</div>";
    if (quest.prize.type >= 99) conf = 'data-confirm="1"';
  }
  if (qrdy) {
    con +=
      '<button class="option ans" data-option="finish_quest" ' +
      conf +
      ' data-button="1" data-qb_id="' +
      quest.qb_id +
      '">' +
      quest.buttton1 +
      "</button>";
    if (quest.buttton2)
      con +=
        '<button class="option ans" data-option="finish_quest" data-button="2" data-qb_id="' +
        quest.qb_id +
        '">' +
        quest.buttton2 +
        "</button>";
    if (quest.buttton3)
      con +=
        '<button class="option ans" data-option="finish_quest" data-button="3" data-qb_id="' +
        quest.qb_id +
        '">' +
        quest.buttton3 +
        "</button>";
  }
  con += "</div>";
  JQS.qcc.html(con).show();
  option_bind();
  qaction_bind();
  main_ekw_item_bind();
  tooltip_bind();
};
GAME.parseFight = function (result) {
  var parent = this;
  clearInterval(this.fight_timer);
  var report = result.report;
  var len = report.characters.length;
  this.report_chars = report.characters;
  var left_side = "",
    right_side = "";
  var t0n = "",
    t1n = "";
  for (var i = 0; i < len; i++) {
    var character = report.characters[i];
    character.max_hp = character.hp;
    if (character.team == 0 && t0n == "") t0n = character.name;
    if (character.team == 1 && t1n == "") t1n = character.name;
    var bfo = "";
    if (character.char_id)
      bfo =
        ' class="poption" data-option="show_player" data-char_id="' +
        character.char_id +
        '"';
    var html =
      '<div class="fighter"><i ' +
      bfo +
      ">" +
      character.name +
      '<img class="avatar_' +
      character.team +
      '" src="' +
      character.avatar +
      '" alt="" /></i><div class="fight_bar" title="' +
      this.dots(character.hp) +
      '"><div id="hp_bar_' +
      i +
      '"></div><span id="hp_val_' +
      i +
      '">100%</span></div><b>' +
      this.dots(character.moc) +
      " <span>" +
      LNG.lab10 +
      "</span></b></div>";
    if (character.team == 1) right_side += html;
    else left_side += html;
  }
  $("#fight_t0").html(left_side);
  $("#fight_t1").html(right_side);
  $("#fight_view").fadeIn();
  pvp_option_bind();
  JQS.fco.html(
    '<div class="fight_head"><b class="t0">' +
      t0n +
      '</b> <div class="vs"></div> <b class="t1">' +
      t1n +
      "</b></div>"
  );
  this.fight_r = 0;
  this.fight_characters = report.characters;
  this.fight_hits = report.hits;
  this.fight_reward = result.reward;
  this.fight_result = result.result;
  this.fight_timer = setInterval(function () {
    parent.fightProgress();
  }, this.fight_speed);
};
GAME.fightProgress = function () {
  var len = this.fight_hits.length;
  if (this.fight_hits[this.fight_r]) {
    var hit = this.fight_hits[this.fight_r];
    var n = hit.aid;
    var t = hit.tid;
    var r = hit.r;
    var con =
      '<div class="t' +
      this.fight_characters[n].team +
      'mark">' +
      r +
      '</div><div class="fight_team' +
      this.fight_characters[n].team +
      '">';
    if (hit.dot_type) {
      var nname = this.fight_characters[n].name;
      var tname = this.fight_characters[t].name;
      con +=
        "<span>" +
        tname +
        "</span> " +
        LNG["dot_type" + hit.dot_type] +
        " " +
        LNG.fight_label2 +
        " <b>" +
        this.dots(hit.dmg) +
        "</b> " +
        LNG.fight_label1 +
        "!";
      this.report_chars[t].hp -= hit.dmg;
      if (this.report_chars[t].hp < 0) this.report_chars[t].hp = 0;
      var w = Math.min(
        Math.floor(
          (this.report_chars[t].hp / this.report_chars[t].max_hp) * 100
        ),
        100
      );
      $("#hp_bar_" + t)
        .finish()
        .animate({ width: w + "%" }, this.fight_speed);
      $("#hp_val_" + t).text(w + "%");
    }
    if (hit.stun_type) {
      con += "<b>" + LNG["fight_stunt" + hit.stun_type] + "</b>";
    }
    if (hit.gkiblock == 1) {
      var nname = this.fight_characters[hit.gn].name;
      var tname = this.fight_characters[hit.gt].name;
      con +=
        LNG.fight_label16 +
        " <span>" +
        tname +
        "</span> " +
        LNG.fight_label3 +
        " <span>" +
        nname +
        "</span>!";
    }
    if (hit.gkiblock == 2) {
      var nname = this.fight_characters[hit.gn].name;
      var tname = this.fight_characters[hit.gt].name;
      con +=
        LNG.fight_label18 +
        " <span>" +
        tname +
        "</span> " +
        LNG.fight_label3 +
        " <span>" +
        nname +
        "</span>!";
    }
    if (hit.attack && hit.attack.skill) {
      var nname = this.fight_characters[hit.attack.skill_n].name;
      var tname = this.fight_characters[hit.attack.skill_t].name;
      con +=
        "<span>" +
        nname +
        "</span> " +
        LNG.fight_label4 +
        ' <strong class="option" data-toggle="tooltip" data-original-title="' +
        this.showSkillDesc(hit.attack.skill_id, hit.attack.skill_lvl) +
        '"><img src="/gfx/skills/' +
        hit.attack.skill_id +
        '.png" width="40" />' +
        LNG["skill_name" + hit.attack.skill_id] +
        "</strong>!";
      if (hit.attack.skill_res) con += " (" + LNG.fight_label5 + ")";
      else con += " (" + LNG.fight_label6 + ")";
      if (hit.attack.skill_adef)
        con += " (" + LNG["fight_sk_afed" + hit.attack.skill_adef] + ")";
      con += "<br />";
    }
    if (hit.miss) {
      var nname = this.fight_characters[n].name;
      var tname = this.fight_characters[t].name;
      con +=
        "<span>" +
        nname +
        "</span> " +
        LNG.fight_label7 +
        " <span>" +
        tname +
        "</span> " +
        LNG.fight_label8 +
        "!";
    } else if (hit.attack) {
      var nname = this.fight_characters[n].name;
      var tname = this.fight_characters[t].name;
      if (hit.attack.labels) {
        for (var j = 0; j < hit.attack.labels.length; j++) {
          con += " (" + LNG["hit_effect" + hit.attack.labels[j]] + ") ";
        }
      }
      if (hit.attack.block) {
        con += "<span>" + tname + "</span> " + LNG.fight_label9 + "! ";
      } else {
        var len2 = hit.attack.hits.length;
        for (var i = 0; i < len2; i++) {
          if (hit.attack.hits[i].tech) {
            con +=
              "<span>" +
              nname +
              "</span> " +
              LNG.fight_label10 +
              " <strong>" +
              hit.attack.hits[i].tech[this.lang] +
              "</strong> ";
          } else
            con +=
              "<span>" +
              nname +
              "</span> " +
              LNG.fight_label11 +
              " " +
              LNG["fight_strike" + hit.attack.hits[i].type] +
              " ";
          if (hit.attack.hits[i].labels) {
            for (var j = 0; j < hit.attack.hits[i].labels.length; j++) {
              con +=
                " (" + LNG["hit_effect" + hit.attack.hits[i].labels[j]] + ") ";
            }
          }
          if (hit.attack.hits[i].rebound) {
            con +=
              "<span>" +
              this.fight_characters[hit.attack.hits[i].rebourn_source].name +
              "</span> " +
              LNG.fight_label12 +
              "! ";
          }
          con += "<span>" + tname + "</span> " + LNG.fight_label15 + " ";
          var cls = "";
          if (hit.attack.hits[i].crit) cls = ' class="crit"';
          con +=
            "<b" +
            cls +
            ">" +
            this.dots(hit.attack.hits[i].dmg) +
            "</b> " +
            LNG.fight_label1 +
            "";
          if (hit.attack.hits[i].broke) {
            con +=
              " - " +
              LNG.fight_label13 +
              " " +
              LNG["fight_broke" + hit.attack.hits[i].broke] +
              " !";
          }
          if (hit.attack.hits[i].healing) {
            con +=
              "<span>" +
              this.fight_characters[hit.attack.hits[i].healing_source].name +
              "</span> " +
              LNG.fight_label17 +
              ' <b class="green">' +
              this.dots(hit.attack.hits[i].healing) +
              "</b> HP! ";
            this.report_chars[hit.attack.hits[i].healing_source].hp +=
              hit.attack.hits[i].healing;
          }
          con += "<br />";

          this.report_chars[t].hp -= hit.attack.hits[i].dmg;
          if (this.report_chars[t].hp < 0) this.report_chars[t].hp = 0;
        }
        var w = Math.floor(
          Math.min(
            (this.report_chars[t].hp / this.report_chars[t].max_hp) * 100,
            100
          )
        );
        $("#hp_bar_" + t)
          .finish()
          .animate({ width: w + "%" }, this.fight_speed / len2);
        $("#hp_val_" + t).text(w + "%");
      }
    }
    if (hit.deaths && hit.deaths.length > 0) {
      for (var i = 0; i < hit.deaths.length; i++) {
        var nname = this.fight_characters[hit.deaths[i]].name;
        con += "<br /><span>" + nname + "</span> " + LNG.fight_label14 + "!";
      }
    }
    con += '</div><div class="clearfix"></div>';
    JQS.fco.append(con);
  }
  this.fight_r++;
  if (this.fight_r >= len) {
    JQS.fco.append(this.fightReward());
    main_ekw_item_bind();
    tooltip_bind();
  }
};
GAME.move_random = function (containter, duration) {
  var parent = this;
  containter.animate(
    {
      top: this.getRandomInt(5, 90) + "%",
      left: this.getRandomInt(5, 90) + "%",
    },
    duration,
    function () {
      parent.move_random(containter, duration);
    }
  );
};
GAME.move_down = function (containter, duration) {
  var parent = this;
  var leftv = "";
  if (this.getRandomInt(0, 1) == 1) leftv = "+=" + this.getRandomInt(10, 50);
  else leftv = "-=" + this.getRandomInt(10, 50);
  containter.animate(
    { top: "+=50", left: leftv },
    duration,
    "linear",
    function () {
      //console.log('iter');
      parent.move_down(containter, duration);
    }
  );
};
GAME.bindBDB = function (con) {
  con
    .css({
      top: "" + this.getRandomInt(5, 90) + "%",
      left: "" + this.getRandomInt(5, 90) + "%",
    })
    .fadeIn();
  this.move_random(con, this.getRandomInt(500, 1000));
  setTimeout(function () {
    con.animate({ opacity: 0 }, 2000, function () {
      con.remove();
    });
  }, 8000);
  con.on("mouseover click", function (e) {
    if (e.screenX && e.screenX != 0 && e.screenY && e.screenY != 0) {
      con.stop().fadeOut().off("mouseover click");
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
        a: 21,
        bid: $(this).data("bid"),
      });
    }
  });
};
GAME.push_notification = function (body) {
  if (this.push_enabled) {
    notify.createNotification(LNG.page_title, {
      body: body,
      icon: "/gfx/favicon.ico",
    });
  }
};
GAME.parseLocBons = function (loc_data) {
  var bons = "";
  if (loc_data.bonus_tren)
    bons +=
      '<img src="/gfx/icons/loc_bon/tren.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' +
      loc_data.bonus_tren +
      "</b>" +
      LNG.item_stat15 +
      '</div>" />';
  if (loc_data.bonus_exp)
    bons +=
      '<img src="/gfx/icons/loc_bon/exp.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' +
      loc_data.bonus_exp +
      "</b>" +
      LNG.item_stat16 +
      '</div>" />';
  if (loc_data.bonus_mocc)
    bons +=
      '<img src="/gfx/icons/loc_bon/mc.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' +
      loc_data.bonus_mocc +
      "</b>" +
      LNG.item_stat53 +
      '</div>" />';
  if (loc_data.bonus_mocv)
    bons +=
      '<img src="/gfx/icons/loc_bon/mv.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' +
      loc_data.bonus_mocv +
      "</b>" +
      LNG.item_stat54 +
      '</div>" />';
  if (loc_data.bonus_legend)
    bons +=
      '<img src="/gfx/icons/loc_bon/l.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' +
      loc_data.bonus_legend +
      "</b>" +
      LNG.item_stat74 +
      '</div>" />';
  if (loc_data.bonus_psk)
    bons +=
      '<img src="/gfx/icons/loc_bon/p.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' +
      loc_data.bonus_psk +
      "</b>" +
      LNG.item_stat67 +
      '</div>" />';
  if (loc_data.bonus_senzu)
    bons +=
      '<img src="/gfx/icons/loc_bon/s.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' +
      loc_data.bonus_senzu +
      "</b>" +
      LNG.item_stat78 +
      '</div>" />';
  return bons;
};
GAME.fightReward = function (quick = 0, result) {
  clearInterval(this.fight_timer);
  var reward = this.fight_reward;
  var con = "";
  if (quick)
    con =
      '<div class="fight_reward floating"><div class="fr fr' +
      result +
      '">' +
      LNG["fight_result" + result] +
      "</div>";
  else
    con =
      '<div class="fight_result">' +
      LNG["fight_result" + this.fight_result] +
      '</div><div class="fight_reward">';
  if (reward.blacks && reward.blacks.length) {
    var len = reward.blacks.length;
    for (var i = 0; i < len; i++) {
      $("#game_win").append(
        '<div id="bdb_' +
          reward.blacks[i] +
          '" class="black_db" data-bid="' +
          reward.blacks[i] +
          '"></div>'
      );
      this.bindBDB($("#bdb_" + reward.blacks[i]));
    }
  }
  if (reward.blues) {
    var len = this.quick_opts.senzus.length;
    for (var i = 0; i < len; i++) {
      if (GAME.quick_opts.senzus[i].item_id == 1244)
        GAME.quick_opts.senzus[i].stack += reward.blues;
    }
  }
  if (this.map_options.bo[1] || quick == 0) {
    if (reward.exp_lose)
      con +=
        '<b class="red">' +
        LNG.lab147 +
        " <strong>" +
        this.dots(reward.exp_lose) +
        "</strong> " +
        LNG.quest_prize1 +
        "!</b><br />";
    if (reward.pvp_lose)
      con +=
        '<b class="red">' +
        LNG.lab147 +
        " <strong>" +
        this.dots(reward.pvp_lose) +
        "</strong> " +
        LNG.quest_req27 +
        "!</b><br />";
    if (reward.kills_reset)
      con += '<b class="red">' + LNG.lab148 + "</b><br />";
    if (reward.anger) con += '<b class="grey">' + LNG.lab409 + "</b>!<br />";
    if (reward.stat_sila)
      con +=
        '<b class="green">' +
        LNG["atr1"] +
        " + " +
        this.dots(reward.stat_sila) +
        "</b><br />";
    if (reward.stat_szyb)
      con +=
        '<b class="green">' +
        LNG["atr2"] +
        " + " +
        this.dots(reward.stat_szyb) +
        "</b><br />";
    if (reward.stat_wytrz)
      con +=
        '<b class="green">' +
        LNG["atr3"] +
        " + " +
        this.dots(reward.stat_wytrz) +
        "</b><br />";
    if (reward.stat_swoli)
      con +=
        '<b class="green">' +
        LNG["atr4"] +
        " + " +
        this.dots(reward.stat_swoli) +
        "</b><br />";
    if (reward.stat_ki)
      con +=
        '<b class="green">' +
        LNG["atr5"] +
        " + " +
        this.dots(reward.stat_ki) +
        "</b><br />";
    if (reward.pvm_kills)
      con +=
        '<b class="green">' +
        LNG.lab149 +
        " <strong>" +
        this.dots(reward.pvm_kills) +
        "</strong> " +
        LNG.quest_req13 +
        "!</b><br />";
    if (reward.psk)
      con +=
        '<b class="green">' +
        LNG.lab149 +
        " <strong>" +
        this.dots(reward.psk) +
        "</strong>x " +
        LNG.lab150 +
        "!</b><br />";
    if (reward.pet_exp)
      con +=
        '<b class="green">' +
        LNG.lab151 +
        " <strong>" +
        this.dots(reward.pet_exp) +
        "</strong> " +
        LNG.quest_prize1 +
        "!</b><br />";
    if (reward.exp_gained)
      con +=
        '<b class="green">' +
        LNG.lab152 +
        " <strong>" +
        this.dots(reward.exp_gained) +
        "</strong> " +
        LNG.quest_prize1 +
        "!</b><br />";
    if (reward.qdi)
      con +=
        '<b class="green">' +
        LNG.lab152 +
        " <strong>" +
        this.dots(reward.qdi) +
        "</strong> " +
        LNG.lab153 +
        "!</b><br />";
    if (reward.pvp_rank)
      con +=
        '<b class="green">' +
        LNG.lab152 +
        " <strong>" +
        this.dots(reward.pvp_rank) +
        "</strong> " +
        LNG.quest_req27 +
        "!</b><br />";
    if (reward.op_lose)
      con +=
        '<b class="orange">' +
        reward.op_lose.name +
        " " +
        LNG.lab154 +
        " <strong>" +
        this.dots(reward.op_lose.pvp) +
        "</strong> " +
        LNG.quest_req27 +
        "!</b><br />";
    if (reward.divine_particle)
      con +=
        '<b class="green">' +
        LNG.lab152 +
        " " +
        this.dots(reward.divine_particle) +
        "</b> " +
        LNG.lab390 +
        "<br />";
    if (reward.frag)
      con +=
        '<b class="orange">' +
        reward.frag.name +
        " " +
        LNG.lab254 +
        "!</b><br />";
    if (reward.efrag)
      con +=
        '<b class="orange">' +
        reward.efrag.name +
        " " +
        LNG.lab346 +
        "!</b><br />";
    if (reward.arena_exp)
      con +=
        '<b class="orange">' +
        reward.arena_exp.name +
        " " +
        LNG.lab319 +
        "!</b><br />";
    if (reward.kk) {
      var len = reward.kk.length;
      for (var i = 0; i < len; i++)
        con +=
          '<b class="green">' +
          reward.kk[i].name +
          " " +
          LNG.fight_label15 +
          " <b>" +
          reward.kk[i].value +
          '</b> <img src="/gfx/kk.png" />!</b><br />';
    }
    if (reward.evo_exp) {
      var len = reward.evo_exp.length;
      for (var i = 0; i < len; i++)
        con +=
          '<b class="green">' +
          reward.evo_exp[i].name +
          " " +
          LNG.fight_label15 +
          " <b>" +
          reward.evo_exp[i].value +
          "</b> " +
          LNG.rap_action26 +
          "!</b><br />";
    }
    if (reward.sk_stolen)
      con += '<b class="green">' + LNG.lab233 + "!</b><br />";
    if (reward.items && (this.map_options.bo[0] || quick == 0)) {
      var items = "";
      var was_any = false;
      for (ind in reward.items) {
        if (reward.items.hasOwnProperty(ind)) {
          was_any = true;
          if (quick == 0)
            items +=
              '<div class="item main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
              reward.items[ind].item_id +
              '"><img src="/gfx/items/' +
              reward.items[ind].item_class +
              "/" +
              reward.items[ind].item_type +
              "/" +
              reward.items[ind].item_id +
              '.png" alt="item"><div>' +
              reward.items[ind].amount +
              "</div></div>";
          else
            items +=
              '<div class="item"><img src="/gfx/items/' +
              reward.items[ind].item_class +
              "/" +
              reward.items[ind].item_type +
              "/" +
              reward.items[ind].item_id +
              '.png" alt="item"><div>' +
              reward.items[ind].amount +
              "</div></div>";
        }
      }
      if (was_any) {
        con += "<b>" + LNG.lab175 + "</b><br />" + items;
      }
    }
  }
  con += '</div><div class="clearfix"></div>';
  return con;
};

GAME.prepareTechHeader = function (data) {
  var req = "<div><b>" + LNG.lab18 + "</b><br />";
  var can_use = true;
  if (data.want_ki) {
    var cls = "";
    if (this.char_data.ki < data.want_ki) {
      cls = "red";
      can_use = false;
    }
    req +=
      LNG.atr5 +
      ': <span class="' +
      cls +
      '">' +
      this.dots(data.want_ki) +
      "</span><br />";
  }
  if (data.want_n) {
    var cls = "";
    if (!data.want_n_status) {
      cls = "red";
      can_use = false;
    }
    req +=
      LNG.lab19 +
      ': <span class="' +
      cls +
      '">' +
      data.want_n_name +
      "</span><br />";
  }
  req += "</div>";
  return { req: req, can_use: can_use };
};
GAME.parseData = function (type, res) {
  switch (type) {
    case 1:
      $("#promo_item").hide();
      var deletes = {};
      if (res.deletes) deletes = res.deletes;
      var con = "";
      var data = res.chars.sort(function (a, b) {
        return b.reborn - a.reborn || b.level - a.level || b.exp - a.exp;
      });
      var len = data.length;
      this.player_chars = len;
      for (var i = 0; i < len; i++) {
        var add_container = "";
        var klan = "";
        if (data[i].klan_id) klan = "" + data[i].klan_short;
        if (data[i].tmp_sid)
          add_container = '<span class="red">' + LNG.lab191 + "!</span>";
        if (data[i].klan_rent)
          add_container = '<span class="orange">' + LNG.lab270 + "!</span>";
        if (deletes[data[i].id]) {
          add_container =
            '<span class="orange">' +
            LNG.lab281 +
            " " +
            this.showTimer(deletes[data[i].id].time - this.getTime()) +
            "</span>";
        }
        con +=
          '<li class="option" data-option="select_char" data-char_id="' +
          data[i].id +
          '"><figure><img src="' +
          data[i].avatar +
          '" alt="avatar" /></figure> <h3>' +
          data[i].name +
          "</h3><h4>" +
          LNG.lab1 +
          " " +
          this.rebPref(data[i].reborn) +
          " " +
          data[i].level +
          "<br />" +
          klan +
          "</h4><div>" +
          add_container +
          "</div></li>";
      }
      $("#char_list_con").html(con);
      $("#quest_con").hide();
      //zasts
      var con = "";
      var data = res.zasts.sort(function (a, b) {
        return b.reborn - a.reborn || b.level - a.level || b.exp - a.exp;
      });
      var len = data.length;
      for (var i = 0; i < len; i++) {
        var add_container = "";
        var klan = "";
        if (data[i].klan_id) klan = "" + data[i].klan_short;
        con +=
          '<li class="option" data-option="select_zast" data-char_id="' +
          data[i].id +
          '"><figure><img src="' +
          data[i].avatar +
          '" alt="avatar" /></figure> <h3>' +
          data[i].name +
          "</h3><h4>" +
          LNG.lab1 +
          " " +
          this.rebPref(data[i].reborn) +
          " " +
          data[i].level +
          "<br />" +
          klan +
          "</h4><div>" +
          add_container +
          "</div></li>";
      }
      $("#zast_list_con").html(con);
      //

      var newcharava = res.new_char_ava;
      var nl = newcharava.length;
      for (var i = 0; i < nl; i++) {
        if (newcharava[i] == 0) {
          $("#fab" + i)
            .removeClass("disabled")
            .addClass("disabled");
          $("#fabr" + i).prop("disabled", true);
        }
      }
      $(".char_logged").hide();
      $("#acc_char_cnt").text(res.cnt);
      $("#acc_char_lim").text(res.max);
      if (res.cnt >= res.max) $("#new_char_btn").prop("disabled", true);
      else $("#new_char_btn").prop("disabled", false);
      $("#fight_view").hide();
      this.page_switch("char_select");
      option_bind();
      $("#newCharPopUp").hide();
      var top_players = res.top_players;
      var len = top_players.length;
      var con = "";
      for (var i = 0; i < len; i++) {
        con +=
          '<div class="rank_player option" data-option="show_player" data-char_id="' +
          top_players[i].id +
          '"><div class="place">' +
          (i + 1) +
          '</div><img src="' +
          top_players[i].avatar +
          '" class="rank_pic" /><div class="name">' +
          top_players[i].name +
          '</div><div class="level">' +
          LNG.lab1 +
          " " +
          this.rebPref(top_players[i].reborn) +
          ' <span class="lval">' +
          top_players[i].level +
          "</span></div></div>";
      }
      $("#server_top").html(con);
      break;
    case 2:
      var data = res.data;
      var channel = parseInt(res.channel);
      var tmp = data;
      var len = this.chat_data[channel].messages.length;
      for (var i = 0; i < len; i++) {
        tmp.push(this.chat_data[channel].messages[i]);
      }
      this.chat_data[channel].messages = tmp;

      this.showChatChannel();
      this.chat_data[channel].old_loaded = 1;
      break;
    case 3:
      var data = res.data;
      var channel = parseInt(res.channel);
      if (this.chat_data[channel]) {
        if (!this.chat_data[channel].messages)
          this.chat_data[channel].messages = [];
        this.chat_data[channel].messages.push(data);
        if (this.chat_visible) {
          if (channel == this.chat_channel) this.showChatChannel();
          else if (this.chat_notifications[channel]) {
            this.chat_data[channel].new_msg_cnt++;
            if (this.chat_data[channel].new_msg_cnt < 99)
              $("#chat_channel_" + channel + "_cnt")
                .text(this.chat_data[channel].new_msg_cnt)
                .removeClass("empty");
            else
              $("#chat_channel_" + channel + "_cnt")
                .text("99+")
                .removeClass("empty");
          }
        } else if (this.chat_notifications[channel]) {
          this.chat_data[channel].new_msg_cnt++;
          if (this.chat_data[channel].new_msg_cnt < 99)
            $("#chat_channel_" + channel + "_cnt")
              .text(this.chat_data[channel].new_msg_cnt)
              .removeClass("empty");
          else
            $("#chat_channel_" + channel + "_cnt")
              .text("99+")
              .removeClass("empty");
          this.chat_nonread++;
          this.updateChatRead(channel);
        }
        if (this.chat_notifications[channel]) {
          var is_clan_channel = false,
            sadd = false;
          if ([6, 9, 10, 11].indexOf(channel) != -1) is_clan_channel = true;
          switch (this.chat_switch) {
            case 1:
              if (!is_clan_channel) sadd = true;
              break;
            default:
              if (is_clan_channel) sadd = true;
              break;
          }
          if (sadd) {
            this.chat_scnt++;
            if (this.chat_scnt < 99)
              $("#chat_channel_scnt").text(this.chat_scnt).removeClass("empty");
            else $("#chat_channel_scnt").text("99+").removeClass("empty");
          }
        }
      }
      break;
    case 4:
      var con = "";
      var data = res;
      var len = this.bonus_cats.length;
      for (var c = 1; c < len; c++) {
        var len2 = this.bonus_cats[c].length;
        con += '<div class="bon_header"><td>' + LNG["bonus_cat" + c] + "</div>";
        for (var st = 0; st < len2; st++) {
          var s = this.bonus_cats[c][st];
          if ((s == 132 || s == 133) && this.char_data.race != 3) continue;
          if (s == 153 && this.char_data.race != 2) continue;
          if (s == 156 && this.char_data.race != 1) continue;
          var desc = "";
          var len3 = data[s].desc.length;
          var any = false;
          for (var i = 0; i < len3; i++) {
            any = true;
            desc +=
              "<b>" +
              data[s].desc[i].value +
              "</b> " +
              LNG["item_desc" + data[s].desc[i].type] +
              "<br />";
          }
          con += "<div";
          if (any)
            con +=
              ' data-toggle="tooltip" data-original-title="<div class=tt>' +
              desc +
              '</div>"';
          con +=
            "><b>" + data[s].value + "</b> " + LNG["item_stat" + s] + "</div>";
        }
      }
      $("#game_stats_container").html(con);
      tooltip_bind();
      break;
    case 5:
      this.field_mobs = res.mobs.mobs;
      this.xxxaec57c2e2452b8683101a27637740f39 = res.players;
      this.field_wanted = res.wanted;
      this.field_boss = res.boss;
      this.field_shadows = res.shadows;
      this.field_dball = res.dball;
      this.field_res = res.res;
      this.field_mf = res.mf;
      var any = false;
      if (!this.mobs_prepared) {
        any = true;
        this.prepareMobList();
      }
      if (this.showFieldData(res.x, res.y) && !any) any = true;
      if (this.showSpecialList() && !any) any = true;
      this.showPlayerList();
      this.showMobList();
      if (any) option_bind();
      break;
    case 6:
      var premie = "";
      var train = res.train_res;
      var len = train.premie.length;
      for (var i = 0; i < len; i++) {
        switch (train.premie[i].id) {
          case 1:
          case 2:
            premie +=
              "<b>" +
              LNG["train_premia" + train.premie[i].id] +
              "</b> : " +
              train.premie[i].val +
              "<br />";
            break;
          case 3:
          case 4:
            premie +=
              "<b>" +
              LNG.lab4 +
              "</b> " +
              LNG["train_premia" + train.premie[i].id] +
              ' : <b class="orange">' +
              train.premie[i].val +
              "</b>" +
              LNG.item_stat15 +
              "<br />";
            break;
            break;
          case 5:
            var until = "";
            if (train.premie[i].until)
              until =
                "<i>" +
                LNG.lab5 +
                "</i> " +
                this.dots(train.premie[i].until) +
                LNG.lab10;
            premie +=
              "<b>" +
              LNG.lab4 +
              "</b> " +
              LNG["train_premia" + train.premie[i].id] +
              " <b>" +
              train.premie[i].name +
              '</b> : <b class="orange">' +
              train.premie[i].val +
              "</b>" +
              LNG.item_stat15 +
              "<br />";
            break;
            break;
          case 6:
            premie +=
              "<b>" +
              LNG.lab4 +
              "</b> " +
              LNG["train_premia" + train.premie[i].id] +
              " <b>" +
              train.premie[i].level +
              '</b> : <b class="orange">' +
              train.premie[i].val +
              "</b>" +
              LNG.item_stat15 +
              "<br />";
            break;
            break;
          case 7:
            premie +=
              "<b>" +
              LNG.lab4 +
              "</b> " +
              LNG["train_premia3"] +
              ' : <b class="orange">' +
              train.premie[i].val +
              "</b>" +
              LNG.item_stat170 +
              "<br />";
            break;
            break;
        }
      }
      $("#game_train_premie").html(premie);
      this.base_train_result = train.rezultat;
      this.current_train_result = train.rezultat;
      this.base_train_speed = res.tren_speed;
      this.selected_train_stat = 1;
      this.selected_train_duration = 2;
      this.prepareTrainForm();
      break;
    case 7:
      var data = res;
      var con = "";
      for (var i in data) {
        if (!data.hasOwnProperty(i)) continue;
        con += "<b>" + data[i].name + "</b>";
        if (data[i].e)
          con += '<span class="red">' + LNG["error" + data[i].e] + "</span>";
        if (data[i].done)
          con +=
            '<span class="green">' + LNG["done" + data[i].done] + "</span>";
        con += "<br />";
      }
      this.komunikat(con);
      break;
    case 8:
      //
      var data = res.available;

      var pages = Math.ceil(res.all_items / res.per_page);
      var page = res.page;

      var pagi = "";
      for (var p = 1; p <= pages; p++) {
        var cls = "";
        if (p == page) cls = " active";
        pagi +=
          '<button class="' +
          cls +
          ' option newBtn" data-option="show_know" data-page="' +
          p +
          '">[' +
          p +
          "]</button>";
      }
      $("#know_list_pagi").html(pagi);
      var bon = 0,
        lim = 1;
      if (this.char_data.bonus2 > this.getTime()) {
        $("#game_know_bonus").text(LNG.lab13);
        bon = 1;
        lim = 2;
      } else $("#game_know_bonus").text(LNG.lab14);
      var con = "";
      var len = data.length;
      var rate = res.rate;
      for (var i = 0; i < len; i++) {
        var n = data[i];
        var req = "",
          reqv = "",
          reqm = 0,
          cls = "red";
        switch (n.want_type) {
          case 1:
            reqv = LNG.lab1 + " <b>" + n.want_id + "</b>";
            if (this.levelReqCheck(n.want_id, 0)) reqm = 1;
            break;
          case 2:
            reqv = LNG.lab19 + " <b>" + n.know_name + "</b>";
            if (this.learned_know.indexOf(n.want_id) != -1) reqm = 1;
            break;
          case 3:
            reqv = LNG.lab1 + " <b>" + this.rebPref(1) + n.want_id + "</b>";
            if (this.levelReqCheck(n.want_id, 1)) reqm = 1;
            break;
          case 4:
            reqv = LNG.lab1 + " <b>" + this.rebPref(2) + n.want_id + "</b>";
            if (this.levelReqCheck(n.want_id, 2)) reqm = 1;
            break;
          case 5:
            reqv = LNG.lab1 + " <b>" + this.rebPref(4) + n.want_id + "</b>";
            if (this.levelReqCheck(n.want_id, 4)) reqm = 1;
            break;
          case 6:
            reqv = LNG.lab1 + " <b>" + this.rebPref(5) + n.want_id + "</b>";
            if (this.levelReqCheck(n.want_id, 5)) reqm = 1;
            break;
        }
        if (reqm) cls = "green";
        req = '<span class="' + cls + '">' + reqv + "</span>";
        if (n.req_loc) {
          var cls = "red";
          if (this.char_data.loc == n.req_loc) cls = "green";
          else reqm = 0;

          req +=
            "<br />" +
            LNG.lab20 +
            ': <b class="' +
            cls +
            '">' +
            n.loc_name +
            "</b>";
        }

        var prize = '<div class="kprize">';
        if (n.sila > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr1 +
            '</div>"><i class="ico a1"></i> +<b>' +
            this.dots(n.sila * rate) +
            "</b></div>";
        if (n.szyb > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr2 +
            '</div>"><i class="ico a2"></i> +<b>' +
            this.dots(n.szyb * rate) +
            "</b></div>";
        if (n.wytrz > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr3 +
            '</div>"><i class="ico a3"></i> +<b>' +
            this.dots(n.wytrz * rate) +
            "</b></div>";
        if (n.swoli > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr4 +
            '</div>"><i class="ico a4"></i> +<b>' +
            this.dots(n.swoli * rate) +
            "</b></div>";
        if (n.ki > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr5 +
            '</div>"><i class="ico a5"></i> +<b>' +
            this.dots(n.ki * rate) +
            "</b></div>";
        if (n.wta > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr6 +
            '</div>"><i class="ico a6"></i> +<b>' +
            this.dots(n.wta * rate) +
            "</b></div>";
        if (n.gki > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr7 +
            '</div>"><i class="ico a7"></i> +<b>' +
            this.dots(n.gki * rate) +
            "</b></div>";
        if (n.instynkt > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr8 +
            '</div>"><i class="ico a8"></i> +<b>' +
            this.dots(n.instynkt * rate) +
            "</b></div>";
        prize += "</div>";
        var btn = "";
        if (reqm) {
          //&&this.timed<lim
          var tim = (res.know_speed * n.time) / 3;
          if (bon) tim *= 0.25;
          if (n.special == 1) tim = 1200;
          btn =
            '<button class="option gold_button" data-option="know_learn" data-know="' +
            n.id +
            '">' +
            LNG.lab22 +
            " [" +
            this.convertSeconds(Math.floor(tim)) +
            "]</button>";
        }
        con +=
          '<div class="knowcon"><img src="/gfx/nauki/' +
          n.id +
          '.png" /><div><h3>' +
          n.nazwa +
          "</h3><p>" +
          n.opis +
          "</p>" +
          LNG.lab18 +
          ": " +
          req +
          "<br />" +
          LNG.lab21 +
          ":<br />" +
          prize +
          "</div>" +
          btn +
          "</div>";
      }
      con += '<div class="clr"></div>';
      $("#know_list_con").html(con);
      option_bind();
      tooltip_bind();
      break;
    case 9:
      //
      var data = res.old;
      var pages = Math.ceil(res.all_items / res.per_page);
      var page = res.page;

      var pagi = "";
      for (var p = 1; p <= pages; p++) {
        var cls = "";
        if (p == page) cls = " active";
        pagi +=
          '<button class="' +
          cls +
          ' option newBtn" data-option="show_know2" data-page="' +
          p +
          '">[' +
          p +
          "]</button>";
      }
      $("#know_list_pagi").html(pagi);
      var bon = 0;
      var con = "";
      var len = data.length;
      for (var i = 0; i < len; i++) {
        var n = data[i];
        var prize = '<div class="kprize">';
        if (n.sila > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr1 +
            '</div>"><i class="ico a1"></i> +<b>' +
            this.dots(n.sila) +
            "</b></div>";
        if (n.szyb > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr2 +
            '</div>"><i class="ico a2"></i> +<b>' +
            this.dots(n.szyb) +
            "</b></div>";
        if (n.wytrz > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr3 +
            '</div>"><i class="ico a3"></i> +<b>' +
            this.dots(n.wytrz) +
            "</b></div>";
        if (n.swoli > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr4 +
            '</div>"><i class="ico a4"></i> +<b>' +
            this.dots(n.swoli) +
            "</b></div>";
        if (n.ki > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr5 +
            '</div>"><i class="ico a5"></i> +<b>' +
            this.dots(n.ki) +
            "</b></div>";
        if (n.wta > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr6 +
            '</div>"><i class="ico a6"></i> +<b>' +
            this.dots(n.wta) +
            "</b></div>";
        if (n.gki > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr7 +
            '</div>"><i class="ico a7"></i> +<b>' +
            this.dots(n.gki) +
            "</b></div>";
        if (n.instynkt > 0)
          prize +=
            '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.atr8 +
            '</div>"><i class="ico a8"></i> +<b>' +
            this.dots(n.instynkt) +
            "</b></div>";
        prize += "</div>";
        con +=
          '<div class="knowcon old"><img src="/gfx/nauki/' +
          n.id +
          '.png" /><div><h3>' +
          n.nazwa +
          "</h3><p>" +
          n.opis +
          "</p><br />" +
          LNG.lab21 +
          ":<br />" +
          prize +
          '</div><div class="clearfix"></div></div>';
      }
      con += '<div class="clr"></div>';
      $("#know_list_con").html(con);
      option_bind();
      tooltip_bind();
      break;
    case 10:
      var bon = 0,
        lim = 1;
      var iczas = 35 - this.getStat(56);
      var ichance = 75 + this.getStat(57);
      if (this.char_data.bonus16 > this.getTime()) {
        $("#game_camp_bonus").text(LNG.lab13);
        bon = 1;
        lim = 2;
      } else $("#game_camp_bonus").text(LNG.lab14);
      $("#camp_location").text(
        this.camp_name(this.item_level(this.char_data.level))
      );

      var iczas2 = 30 - this.getStat(132);
      var ichance2 = 75 + this.char_data.reborn * 5;
      if (iczas < 5) iczas = 5;
      $("#camp_duration").text(iczas);
      $("#camp_chance").text(ichance);
      if (this.char_data.race == 3) {
        $("#camp_duration2").text(iczas2);
        $("#camp_chance2").text(ichance2);
      }
      if (this.timed < lim) {
        $("#normal_camp").show();
        if (this.char_data.race == 3) $("#trunks_camp").show();
      } else {
        $(".camps").hide();
        $("#camp_captcha").hide();
      }
      break;
    case 11:
      var lim = 1;
      if (this.char_data.bonus16 > this.getTime()) {
        lim = 2;
      }

      if (this.camp_captcha) {
        //this.load_captcha('#camp_captcha','camp_captcha');
        $("#camp_svg").show().html('<img src="./captcha" />');
        reloadSVGcaptcha($("#camp_svg"));
        $("#camp_captcha").show();
      } else $("#camp_captcha").hide();
      if (this.timed < lim) {
        $("#normal_camp").show();
        if (this.char_data.race == 3) $("#trunks_camp").show();
      } else {
        $(".camps").hide();
        $("#camp_captcha").hide();
      }
      break;
    case 12:
      var con = "";
      if (res.owncamps) {
        var data = res.owncamps;
        var len = data.length;
        for (var i = 0; i < len; i++) {
          var pd = JSON.parse(data[i].prize);
          var prize = "<div>";
          if (pd.exp)
            prize += "" + this.dots(pd.exp) + ' <i class="ico exp"></i><br />';
          if (pd.kk)
            prize +=
              '<b class="green">' +
              this.dots(pd.kk) +
              '</b> <img src="/gfx/kk.png" /><br />';
          var len2 = pd.items.length;
          for (var j = 0; j < len2; j++) {
            prize +=
              '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
              pd.items[j].id +
              '"><img src="/gfx/items/' +
              pd.items[j].class +
              "/" +
              pd.items[j].type +
              "/" +
              pd.items[j].id +
              '.png" /></div>';
          }
          prize += "</div>";
          con +=
            '<div class="single_camp"><span>' +
            this.convertTime(data[i].time) +
            "</span>" +
            prize +
            "</div>";
        }
      }
      $("#own_camps").html(con);
      con = "";
      if (res.lastcamps) {
        var data = res.lastcamps;
        var len = data.length;
        for (var i = 0; i < len; i++) {
          var pd = JSON.parse(data[i].prize);
          var prize = "<div>";
          if (pd.exp)
            prize += "" + this.dots(pd.exp) + ' <i class="ico exp"></i><br />';
          if (pd.kk)
            prize +=
              '<b class="green">' +
              this.dots(pd.kk) +
              '</b> <img src="/gfx/kk.png" /><br />';
          var len2 = pd.items.length;
          for (var j = 0; j < len2; j++) {
            prize +=
              '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
              pd.items[j].id +
              '"><img src="/gfx/items/' +
              pd.items[j].class +
              "/" +
              pd.items[j].type +
              "/" +
              pd.items[j].id +
              '.png" /></div>';
          }
          prize += "</div>";
          con +=
            '<div class="single_camp"><b class="option" data-option="show_player" data-char_id="' +
            data[i].char_id +
            '">' +
            data[i].name +
            "</b><span>" +
            this.convertTime(data[i].time) +
            "</span> " +
            prize +
            "</div>";
        }
      }
      $("#all_camps").html(con);
      option_bind();
      main_ekw_item_bind();
      tooltip_bind();
      break;
    case 13:
      clearTimeout(this.rep_new_tim);
      var cat = res.cat;
      var pages = res.all_pages;
      var page = res.page;
      this.rap_page = page;
      this.rap_cat = cat;
      $("#reps_checkAll").prop("checked", false);
      var pagi = "";
      for (var p = 1; p <= pages; p++) {
        var cls = "";
        if (p == page) cls = " active";
        pagi +=
          '<button class="' +
          cls +
          ' newBtn option" data-option="show_reps" data-page="' +
          p +
          '" data-cat="' +
          cat +
          '">[' +
          p +
          "]</button>";
      }
      $("#reps_list_pagi").html(pagi);
      var con = "";
      var data = res.raps;
      var len = data.length;
      var anynew = false;
      for (var i = 0; i < len; i++) {
        var rep = "",
          opt = "";
        if (data[i].read) {
          rep +=
            '<img id="new_rap_id' +
            data[i].id +
            '" class="new_rep_ct' +
            data[i].type +
            '" data-rid="' +
            data[i].id +
            '" src="/gfx/icons/new_rap.png" />';
          anynew = true;
        }
        if (data[i].dot)
          rep += '<img src="/gfx/dots/' + data[i].dot + '.png" />';
        if (data[i].type == 0)
          opt =
            'class="clickable option" data-option="open_rap" data-rid="' +
            data[i].id +
            '"';
        rep +=
          " " +
          this.raport_action(
            data[i].action,
            data[i].id1,
            data[i].id2,
            data[i].s1,
            data[i].s2
          );
        if (data[i].resent)
          rep +=
            '<div class="rep_resnt">' +
            LNG.lab241 +
            ' <b class="orange option" data-option="show_player" data-char_id="' +
            data[i].id2 +
            '">' +
            data[i].s2 +
            "</b></div>";
        con +=
          '<tr><td><div class="newCheckbox"><input type="checkbox" id="rep_' +
          data[i].id +
          '" class="rep_check" value="' +
          data[i].id +
          '" /><label for="rep_' +
          data[i].id +
          '"></label></div></td><td ' +
          opt +
          ">" +
          rep +
          "</td><td>" +
          this.convertTime(data[i].time) +
          "</td></tr>";
      }
      $("#reps_container").html(con);
      option_bind();
      if (anynew) {
        this.rep_new_tim = window.setTimeout(function () {
          GAME.gatherNewReps();
        }, 2000);
      }
      break;
    case 14:
      var newr = res.new_raps;
      if (newr > 0) {
        var html = '<div class="icon newrap" />(' + this.dots(newr) + ")";
        $("#new_rap_con").fadeIn().html(html);
      } else $("#new_rap_con").hide();
      break;
    case 15:
      var data;
      if (this.ekw_page == 1) {
        data = res.ekw;
        var len = data.length;
        var len2 = this.ekw_first_page_cats.length;
        for (var i = 0; i < len; i++) {
          data[i].sort = 0;
          for (var j = 0; j < len2; j++) {
            if (this.ekw_first_page_cats[j].indexOf(data[i].type) != -1)
              data[i].sort = j + 1;
          }
        }
        data = data.sort(function (a, b) {
          return (
            b.sort - a.sort ||
            b.type - a.type ||
            b.class - a.class ||
            b.upgrade - a.upgrade ||
            b.level - a.level
          );
        });
      } else
        data = res.ekw.sort(function (a, b) {
          return (
            b.type - a.type ||
            b.class - a.class ||
            b.upgrade - a.upgrade ||
            b.level - a.level
          );
        });
      $(".ekw_pag").removeClass("active");
      $("#ekw_pag_" + res.page).addClass("active");
      var len = data.length;
      var con = "";
      for (var i = 0; i < len; i++) {
        var item = data[i],
          stack = "",
          drag = "";
        if (item.stack > 1) {
          if (item.stack >= 1000)
            stack = "<div>" + this.abbreviateNumber(item.stack, 1) + "</div>";
          else stack = "<div>" + item.stack + "</div>";
        }
        if (item.slot >= 1)
          drag = 'draggable="true" data-slot="' + item.slot + '"';
        else drag = 'draggable="false"';
        con +=
          '<div class="ekw_slot player_ekw_item ekw_list_item" ' +
          drag +
          ' data-toggle="tooltip" data-bound="' +
          item.bound +
          '" data-usable="' +
          item.usable +
          '" data-item_id="' +
          item.id +
          '" data-upgrade="' +
          item.upgrade +
          '" data-base_item_id="' +
          item.item_id +
          '" data-type="' +
          item.type +
          '" data-img="' +
          item.pic +
          '" data-stack="' +
          item.stack +
          '" data-class="' +
          item.class +
          '"><img src="' +
          item.pic +
          '" />' +
          stack +
          "</div>";
      }
      con += '<div class="clearfix"></div>';
      $("#ekw_page_items").html(con);
      player_ekw_item_bind();
      ekw_list_bind();
      tooltip_bind();
      break;
    case 16:
      kom_clear();
      var maxpr = this.getCharMaxPr();
      var needpr = maxpr - this.char_data.pr;
      var paperitem = 0;
      if (res.ifun.ap_add_constant) paperitem += res.ifun.ap_add_constant;
      if (res.ifun.ap_add_percent)
        paperitem += (res.ifun.ap_add_percent / 100) * maxpr;
      var max = Math.min(Math.ceil(needpr / paperitem), res.stack) - 1;
      GAME.dragged_item = { id: res.iid };
      var kom =
        "<div>" +
        LNG.lab50 +
        '<br /><img src="' +
        res.gfx +
        '" /><div class="game_input small"><input id="item_am" type="text" value="1" data-max="' +
        max +
        '" /></div><button class="set_max btn_small_gold" data-target="#item_am" data-max="' +
        max +
        '">' +
        LNG.lab171 +
        "</button><br /><br />" +
        LNG.lab51 +
        ": <b>" +
        res.stack +
        '</b><br /><button class="option btn_small_gold" data-option="use_item_m">OK</button></div>';
      GAME.komunikat(kom);
      setmaxBind();
      option_bind();
      $("#item_am").on("input", function () {
        var val = $(this).val();
        var max = parseInt($(this).data("max")) + 1;
        if (val > max) {
          val = max;
          $(this).val(val);
        }
      });
      break;
    case 17:
      //$('.kom').remove();
      var kom = "<div>" + LNG.lab52 + '<div class="ekw_page_items">';
      var len = res.items.length;
      for (var i = 0; i < len; i++) {
        kom +=
          '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
          res.items[i].id +
          '"><img src="' +
          res.items[i].gfx +
          '" /><div>' +
          res.items[i].am +
          "</div></div>";
      }
      if (res.pet) {
        kom +=
          '<div><img src="/gfx/pets/' +
          res.pet.type +
          "/" +
          res.pet.evo_lvl +
          '.png" width="70" /></div>';
      }
      if (res.employe) {
        kom +=
          '<div><img src="/gfx/employee/' + res.employe.type + '.png" /></div>';
      }
      if (res.cards) {
        var len = res.cards.length;
        for (var i = 0; i < len; i++) {
          kom +=
            '<div class="small_card"><span>' +
            res.cards[i][1] +
            "</span><i>" +
            res.cards[i][2] +
            '</i><img src="/gfx/cards/' +
            res.cards[i][0] +
            '.png" /></div>';
        }
      }
      if (res.stat_bonus) {
        console.log(res.stat_bonus);
        if (res.stat_bonus.restore_pa) {
          kom +=
            LNG.lab429 +
            " : <b>" +
            GAME.dots(res.stat_bonus.restore_pa) +
            "</b><br />";
        }
        if (res.stat_bonus.pr_max) {
          kom +=
            LNG.lab430 +
            " : <b>" +
            GAME.dots(res.stat_bonus.pr_max) +
            "</b><br />";
        }
        if (res.stat_bonus.pr_ph) {
          kom +=
            LNG.lab431 +
            " : <b>" +
            GAME.dots(res.stat_bonus.pr_ph) +
            "</b><br />";
        }
      }
      kom += "</div></div>";
      GAME.komunikat(kom);
      main_ekw_item_bind();
      tooltip_bind();
      break;
    case 18:
      kom_clear();
      var owned = res.stack;
      GAME.dragged_item = { id: res.iid };
      var kom =
        '<div class="exchange_win"><strong>' +
        LNG.lab53 +
        "</strong><br />" +
        LNG.lab327 +
        ': <b class="orange">' +
        this.dots(owned) +
        '</b><div class="ekw_page_items">';
      var items = res.ifun.exchange.items;
      var len = items.length;
      for (var i = 0; i < len; i++) {
        var cls = "green";
        if (items[i][1] > res.stack) cls = "red";
        var max = Math.floor(owned / items[i][1]);
        kom +=
          '<div class="exchange_item main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
          items[i][0] +
          '"><span class="need_bar ' +
          cls +
          '">' +
          LNG.lab54 +
          ":<br /><b>" +
          this.dots(items[i][1]) +
          '</b></span><div class="ekw_slot set_max" data-target="#exchange_item_' +
          i +
          '" data-max="' +
          max +
          '"><img src="' +
          items[i][3] +
          '" /><div>' +
          items[i][2] +
          '</div></div>x <div class="game_input vvsmall"><input id="exchange_item_' +
          i +
          '" type="text" value="1" /></div><br /><button class="option newBtn" data-option="use_item_sel" data-sel="' +
          i +
          '">' +
          LNG.lab74 +
          "</button></div>";
      }
      GAME.komunikat(kom);
      option_bind();
      main_ekw_item_bind();
      setmaxBind();
      tooltip_bind();
      break;
    case 19:
      if (res.char_id == this.char_id || res.force) {
        var data = res.buffs;
        var bons = res.data;
        var len = data.length;
        GAME.buffs_cnt = len;
        var con = '<div class="buff_con">';
        var time = this.getTime();
        for (var i = 0; i < len; i++) {
          var val = bons[data[i].buff_id].val * data[i].level;
          con +=
            '<div id="lb' +
            i +
            '" class="list_buff option" data-option="delete_buff" data-buff="' +
            data[i].id +
            '" data-toggle="tooltip" data-original-title="<div class=tt><b>' +
            LNG["game_buff" + data[i].buff_id] +
            "</b> (" +
            LNG.lab1 +
            " " +
            data[i].level +
            ")<br />" +
            val +
            " " +
            this.item_stat(bons[data[i].buff_id].stat) +
            '</div>"><img src="/gfx/buffs/' +
            data[i].buff_id +
            '.png" /><b>' +
            data[i].level +
            "</b>" +
            this.showTimer(
              data[i].expires - time,
              'data-special="9" data-bid="' + i + '"'
            ) +
            "</div>";
        }
        con += '<div class="clr"></div></div>';
        $("#char_buffs_cnt").text(GAME.buffs_cnt);
        $("#char_buffs").html(con);
        tooltip_bind();
        option_bind();
      }
      break;
    case 20:
      var data = res.buffs;
      var bons = res.data;
      var len = data.length;
      var lvls = [];
      var con = "";
      var max = bons.reborn_2;
      var perl = 50;
      if (this.char_data.reborn >= 3) {
        max = bons["reborn_3"];
        perl = 30;
      }
      if (this.char_data.reborn >= 5) {
        max = bons["reborn_5"];
        perl = 40;
      }
      $("#buffs_point_per").text(perl);
      var used = 0,
        ava = GAME.buff_calculate_points(
          this.char_data.reborn,
          this.char_data.level
        );
      for (var i = 0; i < len; i++) {
        var b = data[i].buff_id;
        lvls[b] = data[i].level;
        if (perl == 50 && bons[b].reborn == 2)
          used += GAME.buff_point_calc(lvls[b]);
        if (perl == 30 && bons[b].reborn == 3)
          used += GAME.buff_point_calc(lvls[b]);
        if (perl == 40 && bons[b].reborn == 5)
          used += GAME.buff_point_calc(lvls[b]);
      }
      ava -= used;
      if (ava < 0) ava = 0;
      $("#buffs_point_spent").text(used);
      $("#buffs_point_ava").text(ava);
      for (var b = 1; b <= max; b++) {
        var lvl = 0;
        if (lvls[b]) lvl = lvls[b];
        var val = bons[b].val * lvl.toFixed(2),
          cls = "",
          active = true,
          upgrade = "";
        var maxl = bons[b].max_lvl;
        if (bons[b].r3_max && this.char_data.reborn >= 3) maxl = bons[b].r3_max;
        if (bons[b].r4_max && this.char_data.reborn >= 4) maxl = bons[b].r4_max;
        if (bons[b].r5_max && this.char_data.reborn >= 5) maxl = bons[b].r5_max;
        if (lvl >= maxl) {
          upgrade = '<span class="red">' + LNG.lab55 + "</span>";
          cls = "inactive";
        } else {
          var cost = GAME.buff_cost(b, this.char_data.reborn, lvl),
            cls2 = "",
            cls3 = "";
          if (ava < cost[0]) cls2 = "red";
          if (this.premium < cost[1]) cls3 = "red";
          upgrade =
            "" +
            LNG.lab57 +
            ': <b class="' +
            cls2 +
            '">' +
            cost[0] +
            "</b> " +
            LNG.lab58 +
            ' + <b class="' +
            cls3 +
            '">' +
            cost[1] +
            '</b> <img src="/gfx/kp.png" /><button class="option newBtn2" data-option="buff_upgrade" data-buff="' +
            b +
            '">' +
            LNG.lab56 +
            "</button> ";
        }

        con +=
          '<div class="' +
          cls +
          '"><img src="/gfx/buffs/' +
          b +
          '.png" class="bim" /><div class="buff_center"><b>' +
          LNG["game_buff" + b] +
          "</b><br />" +
          LNG.lab1 +
          " " +
          lvl +
          "/" +
          maxl +
          ' <span class="green">(' +
          bons[b].val.toFixed(2) +
          "/" +
          LNG.lab1 +
          ')</span><br /><br /><span class="orange">' +
          val +
          "</span> " +
          this.item_stat(bons[b].stat) +
          '</span></div><div class="buff_up">' +
          upgrade +
          "</div></div>";
      }
      $("#buffs_list").html(con);
      option_bind();
      break;
    case 21:
      var data = res.ubuffs;
      var len = data.length;
      var buffs = {};
      var max = 0;
      var con = "";
      for (var i = 0; i < len; i++) {
        var b = data[i].buff_id;
        if (b > max) max = b;
        buffs[b] = data[i].level;
      }
      for (var b = 1; b <= max; b++) {
        if (buffs[b]) {
          con +=
            '<div><div class="newCheckbox"><input id="char_buff_' +
            b +
            '" type="checkbox" class="use_buff" value="' +
            b +
            '" checked /><label for="char_buff_' +
            b +
            '"></label></div> <img src="/gfx/buffs/' +
            b +
            '.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' +
            LNG["game_buff" + b] +
            "</b> (" +
            LNG.lab1 +
            " " +
            buffs[b] +
            ')</div>" /><b>' +
            buffs[b] +
            "</b></div>";
        }
      }
      $("#buff_use_list").html(con);
      tooltip_bind();
      break;
    case 22:
      var data = res.char_list;
      var len = data.length;
      var con = "";
      for (var i = 0; i < len; i++) {
        con += data[i].name + ";";
      }
      $("#bless_players").val(
        $("#bless_players").val() + ";" + con.slice(0, -1)
      );
      break;
    case 23:
      kom_clear();
      var con = "";
      var data = res.result;
      var len = data.length;
      for (var i = 0; i < len; i++) {
        con += "<b>" + data[i].player + "</b> :";
        if (data[i].wynik.e)
          con +=
            '<span class="red">' +
            LNG["error" + data[i].wynik.e] +
            "</span><br />";
        else {
          con += "<br />";
          var b = data[i].wynik.b;
          for (bid in b) {
            if (b.hasOwnProperty(bid)) {
              con += "<u>" + LNG["game_buff" + bid] + "</u> - ";
              if (b[bid].e)
                con +=
                  '<span class="red">' +
                  LNG["error" + b[bid].e] +
                  "</span><br />";
              else con += '<span class="green">OK</span> ';
            }
          }
        }
      }
      GAME.komunikat(con);
      break;
    case 24:
      if (res.char_id == this.char_id) {
        var domid =
          "fb_" +
          Math.floor(this.getmTime()) +
          "_" +
          this.getRandomInt(1, 1000);
        var html =
          '<div id="' +
          domid +
          '" class="floating_buff"><b>' +
          res.name +
          "</b><br />" +
          LNG.rap_action49 +
          '<br /><img src="/gfx/buffs/' +
          res.b +
          '.png" /><br /><b>' +
          LNG["game_buff" + res.b] +
          "</b><br />" +
          LNG.lab1 +
          " " +
          res.lvl +
          "</div>";
        $("#crap_container").append(html);

        var parent = this;
        $("#" + domid).animate(
          {
            left: [
              parent.char_buffs_pos.left + "px",
              parent.curvy[parent.getRandomInt(0, parent.curvy_cnt)],
            ],
            top: [
              parent.char_buffs_pos.top + "px",
              parent.curvy[parent.getRandomInt(0, parent.curvy_cnt)],
            ],
          },
          parent.getRandomInt(1500, 3000),
          function () {
            $(this).remove();
          }
        );
      }
      break;
    case 25:
      var bon = 0;
      if (this.char_data.bonus3 > this.getTime()) {
        $("#game_travel_bonus").text(LNG.lab13);
        bon = 1;
      } else $("#game_travel_bonus").text(LNG.lab14);
      var data = res.travel_list.sort(function (a, b) {
        return b.fav - a.fav || b.sort - a.sort;
      });
      var len = data.length;
      var quests = res.quests;
      var con = "";
      var rate = parseInt(res.travel_rate);
      for (var i = 0; i < len; i++) {
        var cls = "",
          qa = "";
        if (data[i].fav) cls = "fav";
        var opts = "",
          mobs = "",
          mobsh = "";
        var bons = this.parseLocBons(data[i]);
        if (this.char_data.loc != data[i].loc) {
          var dur = this.char_data.loc - data[i].loc;
          if (dur < 0) dur *= -1;
          dur = (dur * rate) / 3;
          if (bon) {
            dur *= 0.1;
            dur = Math.round(dur);
          }
          cls += " option";
        } else cls += " current";
        opts +=
          '<button class="option fav" data-option="set_fav_loc" data-loc="' +
          data[i].id +
          '"></button>';
        if (quests && quests[data[i].loc]) {
          if (quests[data[i].loc][0]) qa += '<span class="hasq1">QUEST</span>';
          if (quests[data[i].loc][1]) qa += '<span class="hasq2">QUEST</span>';
        }
        var len2 = data[i].mobs.length;
        for (var j = 0; j < len2; j++) {
          mobsh += data[i].mobs[j] + " ";
          mobs +=
            '<div class="mob_rank r0" data-toggle="tooltip" data-original-title="<div class=tt>' +
            data[i].mobs[j] +
            '</div>"></div>';
        }
        con +=
          '<tr class="' +
          cls +
          " loc_option travel_loc_" +
          data[i].id +
          '" data-reborn="' +
          data[i].reborn +
          '" data-nazwa="' +
          data[i].name +
          " " +
          mobsh +
          '" data-option="go_travel" data-loc="' +
          data[i].loc +
          '"><td>' +
          data[i].name +
          " " +
          qa +
          "</td><td>" +
          bons +
          "</td><td>" +
          mobs +
          "</td><td>" +
          this.rebPref(data[i].reborn) +
          "</td><td>" +
          this.convertSeconds(dur) +
          "</td><td>" +
          opts +
          "</td></tr>";
      }
      $("#travel_list").html(con);
      this.page_switch("game_travel");
      option_bind();
      tooltip_bind();
      break;
    case 26:
      this.charValuesBind(["tpp"]);
      var data = res.tp_list.sort(function (a, b) {
        return b.fav - a.fav || b.sort - a.sort;
      });
      var len = data.length;
      var quests = res.quests;
      var con = "";
      console.log(data);
      for (var i = 0; i < len; i++) {
        var cls = "",
          qa = "";
        if (data[i].fav) cls = "fav";
        var opts = "",
          mobs = "",
          mobsh = "";
        var bons = this.parseLocBons(data[i]);
        if (this.char_data.loc != data[i].loc) {
          cls += " option";
        } else cls += " current";
        opts +=
          '<button class="option fav" data-option="set_fav_loc" data-loc="' +
          data[i].id +
          '"></button>';
        if (quests && quests[data[i].loc]) {
          if (quests[data[i].loc][0]) qa += '<span class="hasq1">QUEST</span>';
          if (quests[data[i].loc][1]) qa += '<span class="hasq2">QUEST</span>';
        }
        var len2 = data[i].mobs.length;
        for (var j = 0; j < len2; j++) {
          mobsh += data[i].mobs[j] + " ";
          mobs +=
            '<div class="mob_rank r0" data-toggle="tooltip" data-original-title="<div class=tt>' +
            data[i].mobs[j] +
            '</div>"></div>';
        }
        con +=
          '<tr class="' +
          cls +
          " loc2_option travel_loc_" +
          data[i].id +
          '" data-reborn="' +
          data[i].reborn +
          '" data-nazwa="' +
          data[i].name +
          " " +
          mobsh +
          '" data-option="go_teleport" data-loc="' +
          data[i].loc +
          '"><td>' +
          data[i].name +
          " " +
          qa +
          "</td><td>" +
          bons +
          "</td><td>" +
          mobs +
          "</td><td>" +
          this.rebPref(data[i].reborn) +
          "</td><td>" +
          opts +
          "</td></tr>";
      }
      $("#tp_list").html(con);
      this.page_switch("game_teleport");
      option_bind();
      tooltip_bind();
      break;
    case 27:
      $(".private_switch").hide();
      var data = res.private_list;
      var len = data.length;
      var con = "";
      for (var i = 0; i < len; i++) {
        var koszt = Math.floor(
            ((data[i].gravity + data[i].conditions) / 3) * (data[i].type - 259)
          ),
          cls = "";
        if (koszt > this.premium) cls = "red";
        con +=
          "<tr><td>" +
          data[i].name +
          '</td><td class="text-center">' +
          this.psize(data[i].type) +
          '</td><td class="text-center">' +
          this.dots(data[i].pop) +
          " (" +
          data[i].pn +
          '%)</td><td class="text-center">' +
          data[i].gravity +
          'G</td><td class="text-center">' +
          data[i].conditions +
          '</td><td class="text-center"><b class="' +
          cls +
          '">' +
          koszt +
          '</b><img src="/gfx/kp.png" /></td><td class="text-center"><button class="option btn_small_gold" data-option="buy_private" data-pid="' +
          data[i].id +
          '">' +
          LNG.lab67 +
          "</button></td></tr>";
      }
      $("#private_but_list").html(con);
      $("#no_private").show();
      option_bind();
      break;
    case 28:
      var data = res.private_data;
      this.PRIVATE = data;
      var pd = res.pd;
      $(".private_switch").hide();
      $("#private_planet_name").text(data.name);
      $("#private_planet_gravity").text(data.gravity);
      $("#private_planet_conds").text(data.conditions);
      $("#private_planet_pr").text(this.dots(data.pr));
      $("#private_planet_pop").text(this.dots(data.pop));
      $("#private_planet_pn").text(data.pn + this.getStat(144));
      $("#private_planet_size").text(this.psize(data.type));
      $("#private_planet_time").text(this.convertTime(data.time));
      var trb = 0,
        exp = 0,
        terra = "";
      trb = Math.round(pd[1].bon * data.s1 + data.gravity / 2);
      exp = Math.round(pd[3].bon * data.s3 + data.conditions / 4);
      if (data.formed) terra = LNG.lab68 + "!";
      else
        terra =
          '<button class="option btn_small_gold" data-option="do_terra">' +
          LNG.lab84 +
          "</button>";
      $("#private_planet_trbon").text(trb);
      $("#private_planet_expbon").text(exp);
      $("#private_planet_terra").html(terra);
      $("#private_planet_style").text(LNG["private_style" + data.style]);
      $("#has_private").show();
      var len = pd.length,
        con = "";

      for (var i = 1; i < len; i++) {
        var cost = pd[i].cost * (data["s" + i] * data["s" + i] * 3) + 10;
        var efv = pd[i].bon * data["s" + i];
        var build = "";
        var max = 10;
        if (i < 9 && data.formed)
          max = 15 + this.getStructMaxPopBonus(data.pop);
        var l = Math.floor(data["s" + i] / 3);
        if (l < 1) l = 1;
        if (data.pr >= cost && data["s" + i] < max && data.s_build == 0)
          build =
            '<button class="option btn_small_gold" data-option="private_str_up" data-str="' +
            i +
            '">' +
            LNG.lab69 +
            "</button>";
        con +=
          '<tr><td><div class="pstruc pstruc_' +
          i +
          "_" +
          l +
          '"></div>' +
          LNG["pp_str" + i] +
          '</td><td class="text-center">' +
          data["s" + i] +
          "/" +
          max +
          '</td><td class="grey">' +
          efv +
          this.item_stat(pd[i].stat) +
          '</td><td class="text-center">' +
          this.dots(cost) +
          '</td><td class="text-center">' +
          build +
          "</td></tr>";
        if (data.s_build == i) {
          var time = this.getTime();
          var alls = data.s_btime - data.s_stime;
          var curs = data.s_btime - time;
          var wi = Math.round((1 - curs / alls) * 100);
          if (wi > 100) wi = 100;
          con +=
            '<tr><td colspan=5 class="pstb"><span class="grey">&nbsp; ' +
            LNG.lab70 +
            ':</span><div class="main_bar"><div class="progressBar style4" id="timed_bar" style="width: ' +
            wi +
            '%;"></div><span>' +
            LNG.lab51 +
            ":  " +
            this.showTimer(data.s_btime - time, 'data-special="2"') +
            "</span></div></td></tr>";
        }
      }
      $("#private_structs").html(con);
      option_bind();
      break;
    case 29:
      if (res.techs) {
        var time = this.getTime();
        $(".current_techs").hide();
        if (this.char_data.tech1) {
          $("#current_tech1_name").text(res.techs.tech1);
          $("#current_tech1").show();
        }
        if (this.char_data.tech2) {
          $("#current_tech2_name").text(res.techs.tech2);
          $("#current_tech2").show();
        }
        //techniki
        var data = res.techs.techs;
        data = data.sort(function (a, b) {
          return b.data.god - a.data.god || b.tech_id - a.tech_id;
        });
        var len = data.length;
        var con = "";
        var any = true;
        for (var i = 0; i < len; i++) {
          any = false;
          var tmp = this.prepareTechHeader(data[i].data);
          var req = tmp.req;
          var can_use = tmp.can_use,
            can_refine = false;
          if (this.char_data.race == 4 && this.char_data.anger >= 1)
            can_refine = true;
          var opt = "";
          var dmg = "";
          /*
					if($techs[$i]['dmg_type']==1){$dmg=$techs[$i]['dmg']; $dtyp=$lng['TEH_CONS'];}
					if($techs[$i]['dmg_type']==2){$dmg=round($hero->data['ki']*($techs[$i]['dmg']/100)); $dtyp=$lng['TEH_KIDE']+' - '.$techs[$i]['dmg']+' %';}
					if($techs[$i]['dmg_type']==4){$dmg=round($hero->data['sila']*1.5+$hero->data['szyb']*1); $dtyp=$lng['TEH_TWDE']+' - 150% '.$lng['TEH_TWD1']+' + 100% '.$lng['TEH_TWD2']+'<br /><span class="red"><b>5%</b> '.$lng['TEH_TWD3']+'</b>';}
					
					*/
          switch (data[i].data.dmg_type) {
            case 1:
              dmg =
                "" +
                LNG.lab155 +
                ' <b class="green">' +
                this.dots(data[i].data.dmg) +
                "</b>";
              break;
            case 2:
              var dv = Math.round(this.char_data.ki * (data[i].data.dmg / 100));
              dmg =
                "" +
                LNG.lab156 +
                " <i>" +
                LNG["atr5"] +
                '<i> ( <b class="green">' +
                data[i].data.dmg +
                '</b>% ) - <b class="orange">' +
                this.dots(dv) +
                "</b>";
              break;
            case 4:
              var dv = Math.round(
                this.char_data.sila * 1.5 + this.char_data.szyb
              );
              dmg =
                "" +
                LNG.lab156 +
                " <i>" +
                LNG["atr1"] +
                '<i> ( <b class="green">150</b>% ) + <i>' +
                LNG["atr2"] +
                '</i> ( <b class="green">100</b>% ) - <b class="orange">' +
                this.dots(dv) +
                "</b>";
              break;
          }
          if (data[i].m1 > 0) {
            dmg +=
              '<br /><b class="green">' +
              data[i].m2 +
              "</b> " +
              LNG["brtecheffect" + data[i].m1];
          }
          if (can_use)
            opt =
              '<button class="option newBtn" data-option="use_tech" data-tech="' +
              data[i].tech_id +
              '" data-slot="1">' +
              LNG.lab96 +
              '</button> <button class="option newBtn" data-option="use_tech" data-tech="' +
              data[i].tech_id +
              '" data-slot="2">' +
              LNG.lab97 +
              "</button>";
          if (can_refine)
            opt +=
              '<br /><button class="option newBtn" data-option="tech_imbue" data-tech="' +
              data[i].tech_id +
              '">' +
              LNG.lab408 +
              "</button> (" +
              LNG["skill_c_anger"] +
              ": 1)";
          con +=
            '<tr><td><img src="/gfx/techniki/' +
            data[i].tech_id +
            '.png" /></td><td><h4>' +
            data[i].data.name +
            "</h4>" +
            data[i].data.opis +
            "<br />" +
            dmg +
            "<br />" +
            req +
            opt +
            "</td></tr>";
        }
        if (any) con = LNG.lab3;
        $("#tech_1_list").html(con);
        //transformacje
        var data = res.techs.transforms;
        data = data.sort(function (a, b) {
          return b.data.god - a.data.god || b.tech_id - a.tech_id;
        });
        var len = data.length;
        var con = "";
        var any = true;
        for (var i = 0; i < len; i++) {
          any = false;
          var tmp = this.prepareTechHeader(data[i].data);
          var req = tmp.req;
          var can_use = tmp.can_use;
          var opt = "",
            addop = "";
          var dur = 1;
          if (this.char_data.bonus8 > time) dur = 3;
          if (can_use)
            opt =
              '<button class="option newBtn" data-option="use_transform" data-tech="' +
              data[i].tech_id +
              '">' +
              LNG.lab99 +
              " [ " +
              dur +
              "h ]</button>";
          if (data[i].data.upgrade_type) {
            if (data[i].data.upgrade_type == 1) {
              addop =
                "<b>" +
                LNG.lab107 +
                "</b><br />" +
                LNG.atr1 +
                ": x" +
                data[i].m1 +
                "<br />" +
                LNG.atr2 +
                ": x" +
                data[i].m2 +
                "<br />" +
                LNG.atr3 +
                ": x" +
                data[i].m3 +
                "<br />" +
                LNG.atr4 +
                ": x" +
                data[i].m4 +
                "<br />" +
                LNG.atr5 +
                ": x" +
                data[i].m5 +
                "<br />";

              opt +=
                '<button class="option newBtn" data-option="upgrade_mystic" data-m1="' +
                data[i].m1 +
                '" data-m2="' +
                data[i].m2 +
                '" data-m3="' +
                data[i].m3 +
                '" data-m4="' +
                data[i].m4 +
                '" data-m5="' +
                data[i].m5 +
                '">' +
                LNG.lab56 +
                "</button>";
            }
            if (data[i].data.upgrade_type == 2 && data[i].data.ssjb) {
              var can = false;
              addop =
                LNG.lab100 +
                ": <b>" +
                this.char_data.ssjb +
                "/" +
                data[i].data.ssjb_max +
                "</b><br />" +
                LNG.lab101 +
                ": <b>" +
                data[i].data.ssjb.ratio +
                "</b><br />";
              var len2 = data[i].data.ssjb.bonuses.length;
              for (var j = 0; j < len2; j++) {
                addop +=
                  "<b>" +
                  data[i].data.ssjb.bonuses[j][1] +
                  "</b> " +
                  this.item_stat(data[i].data.ssjb.bonuses[j][0]) +
                  "<br />";
              }
              if (this.char_data.ssjb >= 21) data[i].data.name = LNG.lab382;
              if (this.char_data.ssjb >= 26) data[i].data.name = LNG.lab383;
              if (
                this.char_data.ssjb < data[i].data.ssjb_max &&
                data[i].data.ssjb_next
              ) {
                can = true;
                addop += "<b>" + LNG.lab103 + "</b>:<br />";
                var cls = "";
                if (data[i].data.ssjb_next.gki_need > this.char_data.gki) {
                  can = false;
                  cls = "red";
                }
                addop +=
                  "&raquo; " +
                  LNG.atr7 +
                  ': <b class="' +
                  cls +
                  '">' +
                  this.dots(data[i].data.ssjb_next.gki_need) +
                  "</b><br />";
                var cls = "";
                if (data[i].data.ssjb_next.st_need > data[i].data.tokens) {
                  can = false;
                  cls = "red";
                }
                addop +=
                  "&raquo; " +
                  LNG.lab104 +
                  ': <b class="' +
                  cls +
                  '">' +
                  data[i].data.tokens +
                  "/" +
                  data[i].data.ssjb_next.st_need +
                  "</b><br />";
                var cls = "";
                if (data[i].data.ssjb_next.wb_need > data[i].data.badges) {
                  can = false;
                  cls = "red";
                }
                addop +=
                  "&raquo; " +
                  LNG.lab105 +
                  ': <b class="' +
                  cls +
                  '">' +
                  data[i].data.badges +
                  "/" +
                  data[i].data.ssjb_next.wb_need +
                  "</b><br />";
                var cls = "";
                if (data[i].data.ssjb_next.cl_need > data[i].data.certs) {
                  can = false;
                  cls = "red";
                }
                addop +=
                  "&raquo; " +
                  LNG.lab106 +
                  ': <b class="' +
                  cls +
                  '">' +
                  data[i].data.certs +
                  "/" +
                  data[i].data.ssjb_next.cl_need +
                  "</b><br />";
                if (data[i].data.ssjb_next.ib_need) {
                  var cls = "";
                  if (data[i].data.ssjb_next.ib_need > data[i].data.bloods) {
                    can = false;
                    cls = "red";
                  }
                  addop +=
                    "&raquo; " +
                    LNG.lab381 +
                    ': <b class="' +
                    cls +
                    '">' +
                    data[i].data.bloods +
                    "/" +
                    data[i].data.ssjb_next.ib_need +
                    "</b><br />";
                }
              }
              if (can)
                opt +=
                  '<button class="option newBtn" data-option="upgrade_transform" data-tech="' +
                  data[i].tech_id +
                  '">' +
                  LNG.lab56 +
                  "</button>";
            }
            if (data[i].data.upgrade_type == 3 && data[i].data.uins) {
              var can = false;
              addop =
                LNG.lab100 +
                ": <b>" +
                this.char_data.uins +
                "/" +
                data[i].data.uins_max +
                "</b><br />" +
                LNG.lab101 +
                ": <b>" +
                data[i].data.uins.ratio +
                "</b><br />";
              var len2 = data[i].data.uins.bonuses.length;
              for (var j = 0; j < len2; j++) {
                addop +=
                  "<b>" +
                  data[i].data.uins.bonuses[j][1] +
                  "</b> " +
                  this.item_stat(data[i].data.uins.bonuses[j][0]) +
                  "<br />";
              }

              if (
                this.char_data.uins < data[i].data.uins_max &&
                data[i].data.uins_next
              ) {
                can = true;
                addop += "<b>" + LNG.lab103 + "</b>:<br />";
                var cls = "";
                if (
                  data[i].data.uins_next.instinct_need > this.char_data.instynkt
                ) {
                  can = false;
                  cls = "red";
                }
                addop +=
                  "&raquo; " +
                  LNG.atr8 +
                  ': <b class="' +
                  cls +
                  '">' +
                  this.dots(data[i].data.uins_next.instinct_need) +
                  "</b><br />";
                var cls = "";
                if (data[i].data.uins_next.st_need > data[i].data.tokens) {
                  can = false;
                  cls = "red";
                }
                addop +=
                  "&raquo; " +
                  LNG.lab104 +
                  ': <b class="' +
                  cls +
                  '">' +
                  data[i].data.tokens +
                  "/" +
                  data[i].data.uins_next.st_need +
                  "</b><br />";
                var cls = "";
                if (data[i].data.uins_next.wb_need > data[i].data.badges) {
                  can = false;
                  cls = "red";
                }
                addop +=
                  "&raquo; " +
                  LNG.lab105 +
                  ': <b class="' +
                  cls +
                  '">' +
                  data[i].data.badges +
                  "/" +
                  data[i].data.uins_next.wb_need +
                  "</b><br />";
                var cls = "";
                if (data[i].data.uins_next.cl_need > data[i].data.certs) {
                  can = false;
                  cls = "red";
                }
                addop +=
                  "&raquo; " +
                  LNG.lab106 +
                  ': <b class="' +
                  cls +
                  '">' +
                  data[i].data.certs +
                  "/" +
                  data[i].data.uins_next.cl_need +
                  "</b><br />";
                if (data[i].data.uins_next.ib_need) {
                  var cls = "";
                  if (data[i].data.uins_next.ib_need > data[i].data.bloods) {
                    can = false;
                    cls = "red";
                  }
                  addop +=
                    "&raquo; " +
                    LNG.lab381 +
                    ': <b class="' +
                    cls +
                    '">' +
                    data[i].data.bloods +
                    "/" +
                    data[i].data.uins_next.ib_need +
                    "</b><br />";
                }
                if (data[i].data.uins_next.tb_need) {
                  var cls = "";
                  if (data[i].data.uins_next.tb_need > data[i].data.badges2) {
                    can = false;
                    cls = "red";
                  }
                  addop +=
                    "&raquo; " +
                    LNG.lab436 +
                    ': <b class="' +
                    cls +
                    '">' +
                    data[i].data.badges2 +
                    "/" +
                    data[i].data.uins_next.tb_need +
                    "</b><br />";
                }
                if (data[i].data.uins_next.pb_need) {
                  var cls = "";
                  if (data[i].data.uins_next.pb_need > data[i].data.badges3) {
                    can = false;
                    cls = "red";
                  }
                  addop +=
                    "&raquo; " +
                    LNG.lab437 +
                    ': <b class="' +
                    cls +
                    '">' +
                    data[i].data.badges3 +
                    "/" +
                    data[i].data.uins_next.pb_need +
                    "</b><br />";
                }
                if (data[i].data.uins_next.eb_need) {
                  var cls = "";
                  if (data[i].data.uins_next.eb_need > data[i].data.badges4) {
                    can = false;
                    cls = "red";
                  }
                  addop +=
                    "&raquo; " +
                    LNG.lab438 +
                    ': <b class="' +
                    cls +
                    '">' +
                    data[i].data.badges4 +
                    "/" +
                    data[i].data.uins_next.eb_need +
                    "</b><br />";
                }
              }
              if (can)
                opt +=
                  '<button class="option newBtn" data-option="upgrade_transform" data-tech="' +
                  data[i].tech_id +
                  '">' +
                  LNG.lab56 +
                  "</button>";
            }
          }
          con +=
            '<tr><td><img src="/gfx/techniki/' +
            data[i].tech_id +
            '.png" /></td><td><h4>' +
            data[i].data.name +
            "</h4>" +
            data[i].data.opis +
            "<br />" +
            addop +
            "<br />" +
            req +
            opt +
            "</td></tr>";
        }
        if (any) con = LNG.lab3;
        $("#tech_2_list").html(con);
        //uzytkowe
        var data = res.techs.utility;
        data = data.sort(function (a, b) {
          return b.data.god - a.data.god || b.tech_id - a.tech_id;
        });
        var len = data.length;
        var con = "";
        var any = true;
        for (var i = 0; i < len; i++) {
          any = false;
          var tmp = this.prepareTechHeader(data[i].data);
          var req = tmp.req;
          var can_use = tmp.can_use;
          var opt = "";
          if (can_use)
            opt =
              '<button class="option newBtn" data-option="use_teleport">' +
              LNG.lab98 +
              "</button>";
          con +=
            '<tr><td><img src="/gfx/techniki/' +
            data[i].tech_id +
            '.png" /></td><td><h4>' +
            data[i].data.name +
            "</h4>" +
            data[i].data.opis +
            "<br />" +
            req +
            opt +
            "</td></tr>";
        }
        if (any) con = LNG.lab3;
        $("#tech_3_list").html(con);
        option_bind();
      }
      break;
    case 30:
      $("#mystic_item_needed").html(
        "<b>" + res.item_name + "</b> x" + res.item_am
      );
      var data = res.available;
      var len = data.length,
        con = "";
      for (var i = 0; i < len; i++) {
        con +=
          '<option value="' +
          data[i].id +
          '" class="item' +
          data[i].class +
          '">' +
          data[i][this.lang_data["nauki"][this.lang]] +
          " x" +
          data[i].nv +
          "/" +
          data[i].stack +
          "</option>";
      }
      $("#mystic_item_ava").html(con);
      $("#mystic_stat_up").show();
      this.mystic_stat_choosen = res.mystic_stat;
      break;
    case 31:
      var data = res.char_stats;
      var rfl = res.reb_fac_limit;
      var con = "";
      var len = this.stats.length;
      for (var i = 0; i < len; i++) {
        var sid = i + 1;
        var v1 = 0,
          v2 = 0;
        if (data[this.stats[i]]) v2 = data[this.stats[i]];
        if (data["d_" + this.stats[i]]) v1 = data["d_" + this.stats[i]];
        con +=
          "<tr><td>" +
          LNG["char_stat" + sid] +
          "</td><td>" +
          this.dots(v1) +
          "</td><td>" +
          this.dots(v2) +
          "</td></tr>";
      }
      con +=
        '<tr><td colspan="4"></td></tr><tr><td colspan="4">' +
        LNG.lab165 +
        ' : <span class="orange">' +
        this.dots(this.char_data.senzu_limit) +
        "</span> /" +
        this.dots(this.senzu_limit()) +
        "</td></tr>";
      if (this.char_data.reborn == 0) {
        var moc =
          this.char_data.sila +
          this.char_data.szyb +
          this.char_data.wytrz +
          this.char_data.swoli +
          this.char_data.ki;
        var fb = Math.round(moc / 10000000, 3);
        if (rfl && fb > rfl) fb = rfl;
        con +=
          '<tr><td colspan="4">' +
          LNG.lab166 +
          ' : <span class="orange" id="future_wspol">' +
          this.dots(fb) +
          "</span></td></tr>";
      }
      if (this.char_data.reborn == 1) {
        var expm = Math.round(this.char_data.exp / 5000),
          mocm = Math.round(this.char_data.moc / 10);
        var fb = expm + mocm;
        con +=
          '<tr><td colspan="4">' +
          LNG.lab167 +
          ' : <span class="orange" id="future_wspol">' +
          this.dots(fb) +
          "</span> [" +
          LNG.lab217 +
          ': <span class="green">' +
          this.dots(mocm) +
          "</span>, " +
          LNG.lab218 +
          ': <span class="green">' +
          this.dots(expm) +
          "</span>]</td></tr>";
      }
      if (this.char_data.reborn == 2) {
        var ps = 0;
        var moc =
          this.char_data.sila +
          this.char_data.szyb +
          this.char_data.wytrz +
          this.char_data.swoli +
          this.char_data.ki;
        var mocm = Math.round(moc / 100000000000);
        if (mocm > 1000) mocm = 1000;
        ps += mocm;
        var wsplm = Math.round(this.char_data.reborn_bonus / 100);
        if (wsplm > 1000) wsplm = 1000;
        ps += wsplm;
        var fb = Math.round(this.char_data.god / 10000);
        con +=
          '<tr><td colspan="4">' +
          LNG.lab168 +
          ' : <span class="orange">' +
          this.dots(fb) +
          "</span></td></tr>";
        con +=
          '<tr><td colspan="4">' +
          LNG.lab220 +
          ' : <span class="orange">' +
          this.dots(ps) +
          "</span> [" +
          LNG.lab217 +
          ': <span class="green">' +
          this.dots(mocm) +
          "</span>, " +
          LNG.lab219 +
          ': <span class="green">' +
          this.dots(wsplm) +
          "</span>] </td></tr>";
      }
      if (this.char_data.reborn == 3) {
        var gki = 1000;
        var wtam = Math.floor(this.char_data.wta / 100000000000);
        gki += wtam;
        var moc =
          this.char_data.sila +
          this.char_data.szyb +
          this.char_data.wytrz +
          this.char_data.swoli +
          this.char_data.ki;
        var mocm1 = Math.round(moc / 10000000000000);
        gki += mocm1;
        if (gki > 1000000) gki = 1000000;
        var ps = 10;
        var levm = Math.floor(this.char_data.level / 200);
        ps += levm;
        var moc =
          this.char_data.sila +
          this.char_data.szyb +
          this.char_data.wytrz +
          this.char_data.swoli +
          this.char_data.ki +
          this.char_data.wta;
        var mocm2 = Math.floor(moc / 10000000000000000);
        ps += mocm2;
        if (ps > 150) ps = 150;
        con +=
          '<tr><td colspan="4">' +
          LNG.lab169 +
          ' : <span class="orange">' +
          this.dots(gki) +
          "</span> [1000 + " +
          LNG.lab217 +
          ': <span class="green">' +
          this.dots(mocm1) +
          "</span>, " +
          LNG.lab221 +
          ': <span class="green">' +
          this.dots(wtam) +
          "</span>]</td></tr>";
        con +=
          '<tr><td colspan="4">' +
          LNG.lab170 +
          ' : <span class="orange">' +
          this.dots(ps) +
          "</span> [10+ " +
          LNG.lab217 +
          ': <span class="green">' +
          this.dots(mocm2) +
          "</span>, " +
          LNG.lab222 +
          ': <span class="green">' +
          this.dots(levm) +
          "</span>]</td></tr>";
      }
      if (this.char_data.reborn == 4) {
        var ins = 10;
        var wtam = Math.floor(this.char_data.wta / 1000000000000);
        ins += wtam;
        var gkid = this.char_data.gki / 1000;
        ins += gkid;
        if (ins > 100000) ins = 100000;

        con +=
          '<tr><td colspan="4">' +
          LNG.lab434 +
          ' : <span class="orange">' +
          this.dots(ins) +
          "</span> [10 + " +
          LNG.lab435 +
          ': <span class="green">' +
          this.dots(gkid) +
          "</span>, " +
          LNG.lab221 +
          ': <span class="green">' +
          this.dots(wtam) +
          "</span>]</td></tr>";
      }
      $("#char_stats_container").html(con);
      break;
    case 32: //qb dupa
      var data = res.qb;
      var len = data.length,
        con = "";
      for (var i = 0; i < len; i++) {
        var main = "",
          track =
            '<button class="option btn_small_gold disabled" data-option="activate_track" data-qid="' +
            data[i].id +
            '">' +
            LNG.lab99 +
            "</option>",
          del = "";
        if (data[i].track)
          track =
            '<button class="option btn_small_gold" data-option="cancel_track" data-qid="' +
            data[i].id +
            '">' +
            LNG.lab78 +
            "</option>";
        if (data[i].main) main = "[ " + LNG.lab113 + " ]";
        else
          del =
            '<button class="option closeicon" data-option="forget_quest" data-qid="' +
            data[i].id +
            '" data-toggle="tooltip" data-original-title="<div class=tt>' +
            LNG.lab432 +
            '</div>"></button>';
        if (data[i].rtype) main = "[ " + LNG.lab182 + " ]";
        if (this.char_data.instance_id) track = "";
        var step = "";
        if (data[i].sd) {
          step =
            '<div class="clr"></div>&raquo; <span class="grey">' +
            data[i].sd.title +
            '</span> <span class="green qb_right option" data-option="go_teleport" data-loc="' +
            data[i].sd.loc +
            '">' +
            data[i].sd.loc_name +
            "</span>";
        }
        con +=
          '<tr id="quest_log_tr' +
          data[i].id +
          '"><td><i class="mob_rank r6"></i><span class="orange qname">' +
          data[i].name +
          '</span> <div class="qb_right">' +
          main +
          "</div>" +
          step +
          '</td></td><td id="quest_track_td' +
          data[i].id +
          '">' +
          track +
          "</td><td>" +
          del +
          "</td></tr>";
      }
      $("#qb_list").html(con);
      option_bind();
      tooltip_bind();
      break;
    case 33:
      var data = res.md;
      var nm = data.name;
      if (data.rank) nm += " [<b>" + LNG["mob_rank" + data.rank] + "</b>]";
      var add = "";
      if (data.no_exp) add += "<li>" + LNG.lab115 + "</li>";
      if (data.no_drop) add += "<li>" + LNG.lab116 + "</li>";
      if (data.ignore_ssj) add += "<li>" + LNG.lab117 + "</li>";
      if (data.bleed_res)
        add += "<li>" + LNG.lab118 + " <b>" + data.bleed_res + "%</b></li>";
      if (data.burn_res)
        add += "<li>" + LNG.lab119 + " <b>" + data.burn_res + "%</b></li>";
      if (data.custom_hp) add += "<li>" + LNG.lab120 + "</li>";
      if (data.skill_res)
        add += "<li>" + LNG.lab121 + " <b>" + data.skill_res + "%</b></li>";
      if (data.player_char_str_percent)
        add +=
          "<li>" +
          LNG.lab122 +
          " - <b>" +
          data.player_char_str_percent +
          "%</b></li>";
      if (data.add_player_percent_sila)
        add +=
          "<li>" +
          LNG.lab123 +
          " - <b>" +
          data.add_player_percent_sila +
          "%</b></li>";
      if (data.add_player_percent_szyb)
        add +=
          "<li>" +
          LNG.lab124 +
          " - <b>" +
          data.add_player_percent_szyb +
          "%</b></li>";
      if (data.add_player_percent_wytrz)
        add +=
          "<li>" +
          LNG.lab125 +
          " - <b>" +
          data.add_player_percent_wytrz +
          "%</b></li>";
      if (data.add_player_percent_swoli)
        add +=
          "<li>" +
          LNG.lab126 +
          " - <b>" +
          data.add_player_percent_swoli +
          "%</b></li>";
      if (data.add_player_percent_ki)
        add +=
          "<li>" +
          LNG.lab127 +
          " - <b>" +
          data.add_player_percent_ki +
          "%</b></li>";
      if (add == "") add = LNG.lab144;
      var techs = LNG.lab144,
        had = false;
      if (data.tech1) {
        techs = data.tech1;
        had = true;
      }
      if (data.tech2) {
        if (had) {
          techs += ",";
          techs += data.tech2;
        } else techs = data.tech2;
      }
      $("#mob_desc_techs").html(techs);
      $("#mob_desc_name").html(nm);
      $("#mob_desc_avatar").attr("src", data.avatar);
      $("#mob_desc_lvl").text(this.dots(data.level));
      $("#mob_desc_a1").text(this.dots(data.sila));
      $("#mob_desc_a2").text(this.dots(data.szyb));
      $("#mob_desc_a3").text(this.dots(data.wytrz));
      $("#mob_desc_a4").text(this.dots(data.swoli));
      $("#mob_desc_a5").text(this.dots(data.ki));
      $("#mob_desc_a6").text(this.dots(data.wta));
      $("#mob_desc_hp").text(this.dots(data.hp));
      $("#mob_desc_power").text(this.dots(data.moc));
      $("#mob_desc_add").html(add);
      $("#mob_desc_con").show();
      break;
    case 34:
      var pages = res.all_pages;
      var page = res.page;
      this.log_page = page;
      var cimg = '<img src="/gfx/kp.png" />';
      if (res.c == 2) cimg = '<img src="/gfx/kk.png" />';
      var pagi = "";
      var pagi =
        LNG.lab272 +
        " <b>" +
        page +
        "</b>/<b>" +
        pages +
        '</b> <button class="option newBtn" data-option="show_logs" data-page="' +
        (page - 1) +
        '"><<</button> <button class="option newBtn" data-option="show_logs" data-page="' +
        (page + 1) +
        '">>></button>';
      $("#clog_list_pagi").html(pagi);
      var con = "";
      var data = res.logs;
      var len = data.length;
      var anynew = false;
      for (var i = 0; i < len; i++) {
        var serv = "",
          charid = "";
        if (data[i].swiat) serv = data[i].swiat;
        if (data[i].char_id) charid = data[i].char_id;
        con +=
          "<tr><td>" +
          LNG["kpl" + data[i].action] +
          "</td><td>" +
          this.dots(data[i].value) +
          " " +
          cimg +
          "</td><td>" +
          this.dots(data[i].balance) +
          " " +
          cimg +
          "</td><td>" +
          this.convertTime(data[i].time) +
          "</td><td>" +
          serv +
          "</td><td>" +
          charid +
          "</td></tr>";
      }
      $("#clog_container").html(con);
      option_bind();
      break;
    case 35:
      var data = res.log;
      var len = data.length,
        con = "";
      for (var i = 0; i < len; i++) {
        con +=
          "<tr><td>" +
          this.convertTime(data[i].start_time) +
          " - " +
          this.convertTime(data[i].end_time) +
          "</td><td>" +
          data[i].login +
          "</td></tr>";
      }
      $("#zlog_container").html(con);
      break;
    case 36:
      //available
      var data = res.available;
      var len = data.length,
        con = "";
      var simple = [];
      for (var i = 0; i < len; i++) {
        simple.push(data[i].cloth_id);
        var cls = "option";
        if (this.char_data.cloth == data[i].cloth_id) cls = "obtained";
        con +=
          '<div class="cloth ' +
          cls +
          '" data-option="use_cloth" data-cloth="' +
          data[i].cloth_id +
          '"><img src="/gfx/cloths/' +
          data[i].cloth_id +
          '.png" /></div>';
      }
      $("#wardobe_available").html(con);
      //defaults
      var data = res.default_gear;
      var len = data.length,
        con = "";
      for (var i = 0; i < len; i++) {
        var cls = "option";
        if (simple.indexOf(data[i]) != -1) cls = "obtained";
        else if (i > this.char_data.reborn) cls = "notava";
        con +=
          '<div class="cloth ' +
          cls +
          '" data-option="obtain_free_cloth" data-cloth="' +
          i +
          '"><img src="/gfx/cloths/' +
          data[i] +
          '.png" />' +
          this.rebPref(i) +
          "</div>";
      }
      $("#wardobe_defaults").html(con);
      this.maploaded = false;
      option_bind();
      break;
    case 37:
      var data = res.raids.list;
      this.raids = data;
      var len = res.raids.count,
        con = "";
      for (var i = 1; i <= len; i++) {
        var lim = this.char_data["icd_" + i];
        con +=
          '<tr class="option" data-option="show_instance" data-instance="' +
          i +
          '"><td class="instance_name">' +
          data[i][this.lang_data["lokacje"][this.lang]] +
          "</td><td>" +
          this.convertSeconds(data[i].register_time) +
          "</td><td>" +
          data[i].min_players +
          "/" +
          data[i].max_players +
          "</td><td>" +
          this.rebPref(data[i].req_reborn) +
          "" +
          data[i].req_level +
          "</td><td>" +
          lim +
          "/" +
          data[i].daily_limit +
          "</td></tr>";
      }
      $("#inst_list_container").html(con);
      $("#instance_view").hide();
      option_bind();
      break;
    case 38:
      this.learned_skills = {};
      this.learned_skills_np = res.learned_skills;
      var len = res.learned_skills.length;
      for (var i = 0; i < len; i++) {
        this.learned_skills[res.learned_skills[i].skill_id] =
          res.learned_skills[i].level;
      }
      var order = this.skill_order[0];
      var con = "<h1>" + LNG.skill_base + "</h1>";
      var len = order.length;
      for (var i = 0; i < len; i++) {
        var skill_id = order[i];
        con += this.showSkill(skill_id);
      }
      con += '<div class="clr"></div>';
      $("#skill_page_1").html(con);
      if (this.char_data.pact_type) {
        var order = this.skill_order[1][this.char_data.pact_type];
        var con =
          '<h1 class="pull-left">' +
          LNG["pakt_name" + this.char_data.pact_type] +
          '</h1><div class="pull-right"><button class="newBtn option" data-option="pact_reset">' +
          LNG.lab209 +
          '</button> 50 <img src="/gfx/kp.png" /></div><div class="clr"></div>';
        var len = order.length;
        var unlock = this.char_data.pact_unlock;
        for (var i = 0; i < len; i++) {
          var skill_id = order[i];
          var up = true;
          if (i >= unlock) up = false;
          con += this.showSkill(skill_id, up);
        }
        con += '<div class="clr"></div>';
        $("#skill_page_2").html(con);
      } else $("#skill_page_2").html(LNG.lab144);
      if (this.char_data.school) {
        var order = this.skill_order[2][this.char_data.school];
        var con = "<h1>" + LNG["school" + this.char_data.school] + "</h1>";
        var len = order.length;

        for (var i = 0; i < len; i++) {
          var skill_id = order[i];

          con += this.showSkill(skill_id);
        }
        con += '<div class="clr"></div>';
        $("#skill_page_3").html(con);
      } else $("#skill_page_3").html(LNG.lab144);
      if (this.char_data.reborn >= 3) {
        var order = this.skill_order[3];
        var con =
          '<h1 class="pull-left">' +
          LNG.skill_sent +
          '</h1><div class="pull-right"><button class="newBtn option" data-option="sentinel_reset">' +
          LNG.lab210 +
          '</button> 50 <img src="/gfx/kp.png" /></div><div class="clr"></div>';
        var len = order.length;
        for (var i = 0; i < len; i++) {
          var skill_id = order[i];
          con += this.showSkill(skill_id);
        }
        con += '<div class="clr"></div>';
        $("#skill_page_4").html(con);
      } else $("#skill_page_4").html(LNG.lab144);
      //this.char_data.divine_tree=4;
      if (this.char_data.reborn >= 4 && this.char_data.divine_tree) {
        var order = this.skill_order[4][this.char_data.divine_tree];
        var con =
          '<h1 class="pull-left">' +
          LNG["skill_divine_tree" + this.char_data.divine_tree] +
          '</h1><div class="pull-right"><button class="newBtn option" data-option="god_reset">' +
          LNG.lab210 +
          '</button> 50 <img src="/gfx/kp.png" /> <button class="newBtn option" data-option="god_reset2">' +
          LNG.lab440 +
          '</button> 250 <img src="/gfx/kp.png" /></div><div class="clr"></div>';
        var len = order.length;
        for (var i = 0; i < len; i++) {
          var skill_id = order[i];
          con += this.showSkill(skill_id);
        }
        con += '<div class="clr"></div>';
        if (this.char_data.divine_unlock) {
          var order = this.skill_order[6][this.char_data.divine_tree];
          var len = order.length;
          for (var i = 0; i < len; i++) {
            var skill_id = order[i];
            con += this.showSkill(skill_id);
          }

          var order = this.skill_order[5];
          con +=
            '<h1 class="pull-left">' +
            LNG.lab389 +
            '</h1><div class="clr"></div>';
          var len = order.length;
          for (var i = 0; i < len; i++) {
            var skill_id = order[i];
            con += this.showSkill(skill_id);
          }
        }
        con += '<div class="clr"></div>';
        $("#skill_page_5").html(con);
      } else $("#skill_page_5").html(LNG.lab144);
      if (this.char_data.reborn >= 4 && this.char_data.divine_tree == 0) {
        var con =
          LNG.skill_divine_lab1 +
          " " +
          this.rebPref(4) +
          "!<br /><br />" +
          LNG.skill_divine_lab2 +
          "<br /><br />";
        for (var s = 1; s <= 4; s++) {
          var order = this.skill_order[4][s];
          con +=
            '<h1 class="pull-left">' +
            LNG["skill_divine_tree" + s] +
            '</h1><button class="pull-right gold_button option" data-option="divine_tree_choose" data-tree="' +
            s +
            '">' +
            LNG.lab200 +
            '</button><div class="clr"></div>';
          var len = order.length;
          for (var i = 0; i < len; i++) {
            var skill_id = order[i];
            con += this.showSkill(skill_id, false);
          }
        }
        con += '<div class="clr"></div>';
        $("#skill_page_5").html(con);
      }
      //this.char_data.h_skills=4;
      if (this.char_data.reborn >= 5 && this.char_data.h_skills) {
        var order = this.skill_order[7][this.char_data.h_skills];
        var con =
          '<h1 class="pull-left">' +
          LNG["skill_hiper_tree" + this.char_data.h_skills] +
          '</h1><div class="pull-right"><button class="newBtn option" data-option="hiper_reset2">' +
          LNG.lab440 +
          '</button> 250 <img src="/gfx/kp.png" /></div><div class="clr"></div>';
        var len = order.length;
        for (var i = 0; i < len; i++) {
          var skill_id = order[i];
          con += this.showSkill(skill_id);
        }
        con += '<div class="clr"></div>';
        $("#skill_page_6").html(con);
      } else $("#skill_page_6").html(LNG.lab144);
      if (this.char_data.reborn >= 5 && this.char_data.h_skills == 0) {
        var con =
          LNG.skill_divine_lab1 +
          " " +
          this.rebPref(5) +
          "!<br /><br />" +
          LNG.skill_divine_lab3 +
          "<br /><br />";
        for (var s = 1; s <= 5; s++) {
          var order = this.skill_order[7][s];
          con +=
            '<h1 class="pull-left">' +
            LNG["skill_hiper_tree" + s] +
            '</h1><button class="pull-right gold_button option" data-option="hiper_tree_choose" data-tree="' +
            s +
            '">' +
            LNG.lab200 +
            '</button><div class="clr"></div>';
          var len = order.length;
          for (var i = 0; i < len; i++) {
            var skill_id = order[i];
            con += this.showSkill(skill_id, false);
          }
        }
        con += '<div class="clr"></div>';
        $("#skill_page_6").html(con);
      }
      option_bind();
      tooltip_bind();
      break;
    case 39:
      $("#soul_create").hide();
      if (res.soul) {
        $("#soul_create").show();
        var con = '<div class="ekw_page_items">';
        var len = res.soul.length;
        for (var i = 0; i < len; i++) {
          var cls = "red";
          if (res.soul[i].item) {
            if (res.soul[i].owned >= res.soul[i].amount) cls = "green";
            con +=
              '<div class="ekw_slot main_ekw_item clr" data-toggle="tooltip" data-original-title="?" data-item_id="' +
              res.soul[i].item +
              '"><img src="' +
              res.soul[i].gfx +
              '" /><div><span class="' +
              cls +
              '">' +
              res.soul[i].amount +
              "</span>/" +
              res.soul[i].owned +
              "</div></div>";
          }
          if (res.soul[i].stat) {
            if (this.char_data[res.soul[i].stat] >= res.soul[i].amount)
              cls = "green";
            con +=
              '+ <b class="' +
              cls +
              '">' +
              res.soul[i].amount +
              "</b> " +
              LNG["crank_" + res.soul[i].stat] +
              "";
          }
        }
        con += "</div>";
        $("#soul_reqs").html(con);
        main_ekw_item_bind();
        tooltip_bind();
      }
      this.sword_data = res.sword;
      if (res.sword_stats) this.sword_stats = res.sword_stats;
      $("#ts_class")
        .removeClass()
        .addClass("item" + this.sword_data.class)
        .text(LNG["item_class" + this.sword_data.class]);
      if (res.sword_cost) {
        var con = LNG.lab212 + ': <br /><div class="ekw_page_items">';
        var len = res.sword_cost.length;
        for (var i = 0; i < len; i++) {
          var cls = "red";
          if (res.sword_cost[i].owned >= res.sword_cost[i].amount)
            cls = "green";
          con +=
            '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
            res.sword_cost[i].item +
            '"><img src="' +
            res.sword_cost[i].gfx +
            '" /><div><span class="' +
            cls +
            '">' +
            res.sword_cost[i].amount +
            "</span>/" +
            res.sword_cost[i].owned +
            "</div></div>";
        }
        con += "</div>";
        $("#ts_upgrade").html(con);
        main_ekw_item_bind();
        tooltip_bind();
      } else
        $("#ts_upgrade").html('<span class="red">' + LNG.lab211 + "</span>");
      var con = '<div class="spt">';
      //
      var len = this.sword_stats.length;
      for (var i = 1; i < len; i++) {
        con +=
          '<span class="item' +
          this.sword_stats[i].need_class +
          '"><b>' +
          this.sword_stats[i].value +
          "</b> " +
          this.item_stat(this.sword_stats[i].stat) +
          "</span><br />";
      }
      con += "</div>";
      $("#sword_extra_stats").attr("data-original-title", con);
      //
      var bonatr = this.char_data.reborn + 1;
      $("#st_bonatr").text(bonatr);
      var con = "";
      for (var s = 1; s <= 3; s++) {
        con +=
          "<b>" +
          s +
          '</b>: <span class="orange">' +
          this.sword_data["stat" + s + "_val"] +
          "</span> " +
          this.item_stat(this.sword_data["stat" + s]) +
          "<br />";
      }
      $("#st_base_atrs").html(con);
      //
      var con = "",
        used = [];
      var st = 4,
        stm = st + bonatr;
      for (var s = st; s < stm; s++) {
        if (this.sword_data["stat" + s]) used.push(this.sword_data["stat" + s]);
      }
      for (var s = st; s < stm; s++) {
        var opts = '<option value="0">[' + LNG.lab144 + "]</option>";
        var len2 = this.sword_stats.length;
        for (var j = 1; j < len2; j++) {
          if (this.sword_stats[j].need_class > this.sword_data.class) continue;
          var sel = "";
          if (used.indexOf(this.sword_stats[j].stat) != -1) sel = "disabled";

          if (this.sword_stats[j].stat == this.sword_data["stat" + s])
            sel += " selected";
          opts +=
            '<option value="' +
            j +
            '" ' +
            sel +
            '><span class="orange">' +
            this.sword_stats[j].value +
            "</span> " +
            this.item_stat(this.sword_stats[j].stat) +
            "</option>";
        }
        con +=
          "<b>" +
          s +
          '</b>: <div class="select_input"><select class="sword_atr_sel" data-slot="' +
          s +
          '">' +
          opts +
          "</select></div><br />";
      }
      $("#st_custom_atrs").html(con);
      $(".sword_atr_sel")
        .off("change")
        .on("change", function () {
          var slot = $(this).data("slot"),
            val = $(this).val();
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 31,
            type: 1,
            slot: slot,
            val: val,
            item_id: GAME.sword_data.id,
          });
        });
      option_bind();
      break;
    case 40:
      var data = res.wanted;
      var len = data.length,
        con = "";
      for (var i = 0; i < len; i++) {
        var prize = "";
        if (data[i].prize.exp)
          prize +=
            '<b class="green">' +
            this.dots(data[i].prize.exp) +
            '</b> <i class="ico exp"></i><br />';
        if (data[i].prize.kk)
          prize +=
            '<b class="green">' +
            this.dots(data[i].prize.kk) +
            '</b> <img src="/gfx/kk.png" />';
        if (data[i].prize.item)
          prize +=
            '<div class="ekw_page_items"><div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
            data[i].prize.item.item_id +
            '"><img src="' +
            data[i].prize.item.gfx +
            '" /><div>' +
            data[i].prize.item.amount +
            "</div></div></div>";
        if (data[i].killer == this.char_id)
          prize +=
            '<button class="gold_button option" data-option="wanted_prize" data-wanted="' +
            i +
            '">' +
            LNG.lab215 +
            "</button>";
        con +=
          '<div class="blueBg"><b class="red">' +
          data[i].name +
          "</b> " +
          LNG.lab1 +
          " " +
          data[i].level +
          '<div class="pull-right">' +
          LNG.lab51 +
          ": " +
          this.showTimer(data[i].expires - this.getTime()) +
          "</div><br />" +
          LNG.lab214 +
          ': <span class="green option" data-option="go_teleport" data-loc="' +
          data[i].loc +
          '">' +
          data[i][this.lang] +
          "</span> " +
          this.rebPref(data[i].reborn) +
          "<br />" +
          LNG.lab21 +
          ":<br />" +
          prize +
          '<div class="clr"></div></div>';
      }
      $("#wanted_list").html(con);
      main_ekw_item_bind();
      tooltip_bind();
      option_bind();
      break;
    case 41:
      if (res.hasOwnProperty("dbd")) {
        var blacks = res.dbd;
        $("#dbdc").text(this.dots(blacks));
        if (blacks >= 7) {
          var sets = Math.floor(blacks / 7);
          $("#dbd_sets_collected").text(this.dots(sets));
          $("#bdb_wish").show();
          $("#bsk_max").data("max", sets);
          var w2 = false;
          if (
            this.char_data.reborn >= 1 &&
            !(
              this.char_data.reborn >= 3 && this.char_data.reborn_bonus >= 1000
            ) &&
            this.char_data.reborn < 4
          )
            w2 = true;
          if (w2) $("#bwish2").show();
          else $("#bwish2").hide();
          var w3 = false;
          if (this.char_data.reborn == 2) w3 = true;
          if (w3) $("#bwish3").show();
          else $("#bwish3").hide();
          var w4 = false;
          if (this.char_data.reborn >= 3 && this.char_data.reborn != 5)
            w4 = true;
          if (w4) $("#bwish4").show();
          else $("#bwish4").hide();
          var w5 = false;
          if (this.char_data.reborn >= 4) w5 = true;
          if (w5) $("#bwish5").show();
          else $("#bwish5").hide();
          var w6 = false;
          if (this.char_data.reborn == 4) w6 = true;
          if (w6) $("#bwish6").show();
          else $("#bwish6").hide();
          var w7 = false;
          if (this.char_data.reborn == 99) w7 = true;
          if (w7) $("#bwish7").show();
          else $("#bwish7").hide();
        } else $("#bdb_wish").hide();
      }
      if (res.psk_reward) {
        var rew = "<b>" + LNG.lab223 + "</b><br />";
        if (res.psk_reward.a)
          rew +=
            '<span class="orange">' +
            LNG["atr" + res.psk_reward.a] +
            "</span> + <b>" +
            this.dots(res.psk_reward.v) +
            "</b><br />";
        if (res.psk_reward.psk)
          rew +=
            '+ <span class="orange">' +
            this.dots(res.psk_reward.psk) +
            "</span> <b>" +
            LNG.shop_chup_minor_ball +
            "</b><br />";
        if (res.psk_reward.rb)
          rew +=
            '+ <span class="orange">' +
            this.dots(res.psk_reward.rb) +
            "</span> <b>" +
            LNG.shop_chup_reborn_bonus +
            "</b><br />";
        if (res.psk_reward.god)
          rew +=
            '+ <span class="orange">' +
            this.dots(res.psk_reward.god) +
            "</span> <b>" +
            LNG.shop_chup_god +
            "</b><br />";
        if (res.psk_reward.sen)
          rew +=
            '+ <span class="orange">' +
            this.dots(res.psk_reward.sen) +
            "</span> <b>" +
            LNG.quest_prize39 +
            "</b><br />";
        if (res.psk_reward.kk)
          rew +=
            '+ <span class="orange">' +
            this.dots(res.psk_reward.kk) +
            '</span> <img src="/gfx/kk.png" /><br />';
        if (res.psk_reward.prmax)
          rew +=
            '+ <span class="orange">' +
            this.dots(res.psk_reward.prmax) +
            "</span> <b>" +
            LNG.char_stat_pr_max +
            "</b><br />";
        if (res.psk_reward.prph)
          rew +=
            '+ <span class="orange">' +
            this.dots(res.psk_reward.prph) +
            "</span> <b>" +
            LNG.char_stat_pr_ph +
            "</b><br />";
        if (res.psk_reward.items.length) {
          var len = res.psk_reward.items.length;
          rew += '<div class="ekw_page_items">';
          for (var i = 0; i < len; i++) {
            rew +=
              '<div class="ekw_slot"><img src="' +
              res.psk_reward.items[i].gfx +
              '" /><div>' +
              res.psk_reward.items[i].am +
              "</div></div>";
          }
          rew += "</div>";
        }
        this.komunikat(rew);
      }
      if (this.char_data.minor_ball >= 7) {
        var sets = Math.floor(this.char_data.minor_ball / 7);
        $("#psk_sets_collected").text(this.dots(sets));
        $("#psk_wish").show();
        $("#psk_max").data("max", sets);
        $("#psk_wish_am").val(1);
        var treas = this.power_core_value(
          this.char_data.level,
          this.char_data.pr_ph,
          this.char_data.reborn,
          1
        );
        treas *= 5000 * (1 + this.char_data.reborn);
        if (this.char_data.reborn == 4) treas *= 25;
        if (this.char_data.reborn == 5) treas /= 1000;
        var bon = this.getStat(72);
        var dbbon = this.getStat(161);
        if (bon > 0) treas *= 1 + bon / 100;
        this.mdb_base = treas;

        $(".pck_result").text(this.dots(treas));
      } else $("#psk_wish").hide();

      if (res.hasOwnProperty("mdb")) {
        var time = this.getTime();
        var owned = 0;
        for (var r = 0; r <= 5; r++) {
          if (!res.mdb.hasOwnProperty(r)) continue;
          var lock = "";
          if (res.dbl[r] && res.dbl[r] > time)
            lock =
              '<b class="red">' +
              LNG.lab230 +
              "</b>: " +
              this.showTimer(res.dbl[r] - time);
          var con =
            '<div class="db_owners">' +
            lock +
            "<br /><b>" +
            LNG.lab228 +
            "</b>:<br /><div>";
          var balls = res.mdb[r].sort(function (a, b) {
            return a.ball_num - b.ball_num;
          });
          for (var o = 0; o < 7; o++) {
            var status = "";
            if (balls[o].owner) {
              status =
                '<b class="orange option" data-option="show_player" data-char_id="' +
                balls[o].owner +
                '">' +
                balls[o].owner_name +
                "</b><br />[" +
                balls[o].loc_name +
                "]";
              if (balls[o].owner == this.char_id) owned++;
              else if (r == this.char_data.reborn)
                status +=
                  '<br /><button class="option btn_small_gold" data-option="ball_fight" data-ball_id="' +
                  balls[o].id +
                  '" data-char_id="' +
                  balls[o].owner +
                  '">' +
                  LNG.lab232 +
                  "</button>";
            } else status = '<span class="red">' + LNG.lab229 + "</span>";
            con +=
              '<div class="ball_con"><div class="dbim star' +
              balls[o].ball_num +
              '"></div><div class="dbstat">' +
              status +
              "</div></div>";
          }
          con +=
            '</div></div><div class="db_history"><button class="btn_small_gold option" data-option="load_db_history" data-type="' +
            r +
            '">' +
            LNG.lab231 +
            '</button><div id="db_story_' +
            r +
            '"></div></div>';
          $("#mdbp_" + r).html(con);
        }
        if (owned >= 7) {
          $("#mdb_wish").show();
        } else $("#mdb_wish").hide();
        var mdb = this.char_data.reborn;
        $("#mdbp_" + mdb).show();
        $('.mdbb[data-page="' + mdb + '"]')
          .removeClass("active")
          .addClass("active");
        option_bind();
      }
      break;
    case 42:
      var data = res.history,
        con = "";
      var len = data.length;
      for (var i = 0; i < len; i++) {
        con +=
          '<div class="dbl_entry">' +
          this.convertTime(data[i].time) +
          "<br /><b>" +
          data[i].char_name +
          '</b> - <span class="orange">' +
          LNG["dbwish" + data[i].wish] +
          "</span></div>";
      }
      $("#db_story_" + res.type).html(con);
      break;
    case 43: //player profile
      $("#klan_desc_con").hide();

      var pd = res.pd;

      if (pd.spouse) {
        $("#has_spouse").show();
        $("#pd_spouse").text(pd.spouse_name).data("char_id", pd.spouse);
      } else $("#has_spouse").hide();
      if (pd.father_id) {
        $("#is_child").show();
        $("#pd_father").text(pd.father_name).data("char_id", pd.father_id);
        $("#pd_mother").text(pd.mother_name).data("char_id", pd.mother_id);
      } else $("#is_child").hide();
      $("#pd_name").html(
        '<div class="sex sex' + pd.sex + '"></div> ' + pd.name
      );
      $("#pd_name_avatar").attr("src", pd.avatar);
      $("#pd_lvl").html(this.rebPref(pd.reborn) + this.dots(pd.level));
      for (var a = 1; a <= 8; a++) {
        if (pd["a" + a] == -1) $("#pd_a" + a).text("???");
        else $("#pd_a" + a).text(this.dots(pd["a" + a]));
        $("#pd_a" + a).attr(
          "data-original-title",
          "<div class=tt>" +
            LNG.lab393 +
            " " +
            LNG["atr" + a] +
            ": <b>" +
            this.dots(this.char_data[this.atr_labels[a]]) +
            "</b></div>"
        );
      }
      $("#pp_quick_pw").data("char_name", pd.name);
      if (this.char_data.reborn >= 2)
        $("#pp_quick_buff").data("char_name", pd.name).show();
      else $("#pp_quick_buff").hide();
      if (pd.id != this.char_id)
        $("#pp_quick_friend").data("char_name", pd.name).show();
      else $("#pp_quick_friend").hide();
      if (pd.reborn < 3) $("#pd_wta").hide();
      else $("#pd_wta").show();
      if (pd.reborn != 4) $("#pd_gdk").hide();
      else $("#pd_gdk").show();
      if (pd.reborn != 5) $("#pd_insk").hide();
      else $("#pd_insk").show();
      $("#pd_rank").html(
        '<span class="player_rank' +
          pd.ranga +
          '">' +
          LNG["prank" + pd.ranga] +
          "</span>"
      );
      $("#pd_loc").text(pd.loc);
      $("#pd_pvm").text(this.dots(pd.kills));
      $("#pd_pvp").text(this.dots(pd.pvp));
      var klan = "[" + LNG.lab144 + "]";
      if (pd.klan_id) klan = "<a>" + pd.klan_short + "</a>";
      $("#pd_klan").html(klan).data("klan_id", pd.klan_id);
      var empire = "[" + LNG.lab144 + "]";
      if (pd.empire)
        empire =
          '<a class="select_page" data-page="game_empire" data-arg="' +
          pd.empire +
          '">' +
          LNG["empire" + pd.empire] +
          "</a>";
      $("#pd_empire").html(empire);
      $("#pd_pact").html(LNG["pakt_name" + pd.pact_type]);
      var act = "";
      if (pd.online) act = '<img src="/gfx/dots/1.png" /> online';
      else act = '<img src="/gfx/dots/5.png" />' + this.convertTime(pd.pr_time);
      $("#pd_activity").html(act);
      $("#pd_power").text(this.dots(pd.moc));
      $("#player_desc_con").show();
      $("#player_ekw")
        .removeClass()
        .addClass("ekw_bck")
        .addClass("tlo_ekw" + pd.race);
      for (var s = 1; s <= this.item_slots; s++) {
        $("#pdekw_use_slot" + s)
          .empty()
          .attr(
            "data-original-title",
            '<div class="tt">' + LNG["item_slot" + s] + "</div>"
          )
          .removeClass("player_ekw_item")
          .attr("data-item_id", 0)
          .attr("data-load_go", 0)
          .attr("data-item_class", 0);
      }
      var items = pd.ekw;
      if (items && items.length) {
        var len = items.length;
        for (var i = 0; i < len; i++) {
          var slot = items[i].slot;
          var item = '<img src="' + items[i].gfx + '" />';
          $("#pdekw_use_slot" + slot)
            .html(item)
            .addClass("player_ekw_item")
            .attr("data-item_id", items[i].id);
        }
      }
      var con = "";
      var len = pd.achis.length;
      for (var i = 0; i < len; i++) {
        con +=
          '<img src="/gfx/medals/' +
          pd.achis[i].achi_id +
          "_" +
          pd.achis[i].level +
          '.png" data-toggle="tooltip" data-original-title="<div class=tt><b class=orange>' +
          LNG["game_achievement" + pd.achis[i].achi_id] +
          '</b></div>" />';
      }
      $("#pd_achis_con").html(con);
      if (pd.pet) {
        var et = 1;
        if (pd.pet.evo_lvl >= 12) et = 2;
        if (pd.pet.evo_lvl >= 18) et = 3;
        var petd =
          '<img src="/gfx/pets/' +
          pd.pet.type +
          "/" +
          et +
          '.png" data-toggle="tooltip" data-original-title="' +
          this.getPetDetails(pd.pet) +
          '" />';
        $("#pd_pet_con").html(petd);
      } else $("#pd_pet_con").html("");
      if (pd.emp) {
        var petd =
          '<img src="/gfx/employee/' +
          pd.emp.type +
          '.png" data-toggle="tooltip" data-original-title="' +
          this.getEmpDetails(pd.emp) +
          '" />';
        $("#pd_emp_con").html(petd);
      } else $("#pd_emp_con").html("");
      var friends = "";
      var len = pd.friends.length;
      for (var i = 0; i < len; i++) {
        var on = '<img src="/gfx/dots/5.png" class="online" />';
        if (pd.friends[i].online)
          on = '<img src="/gfx/dots/1.png" class="online" />';
        friends +=
          '<div class="pd_friend" data-toggle="tooltip" data-original-title="<div class=tt><b class=orange>' +
          pd.friends[i].name +
          '</b></div>">' +
          on +
          '<img src="' +
          pd.friends[i].avatar +
          '" class="option" data-option="show_player" data-char_id="' +
          pd.friends[i].friend_id +
          '" /></div>';
      }
      $("#pd_friends").html(friends);
      var pdtext = this.parseBB(pd.text);
      $("#pd_text").html(pdtext);
      option_bind();
      tooltip_bind();
      player_ekw_item_bind();
      page_bind();
      break;
    case 44:
      if (res.hasOwnProperty("friends")) {
        var data = res.friends;
        var len = data.length || 0,
          con = "",
          any = false;
        $("#char_friend_cnt").text(len);
        for (var i = 0; i < len; i++) {
          any = true;
          var on = '<img src="/gfx/dots/5.png" class="online" />';
          if (data[i].online)
            on = '<img src="/gfx/dots/1.png" class="online" />';
          con +=
            '<div class="li_friend">' +
            on +
            '<img src="' +
            data[i].avatar +
            '" class="option" data-option="show_player" data-char_id="' +
            data[i].friend_id +
            '" data-toggle="tooltip" data-original-title="<div class=tt><b class=orange>' +
            data[i].name +
            '</b></div>" /><button class="option btn_small_gold" data-option="delete_friend" data-char_id="' +
            data[i].friend_id +
            '">' +
            LNG.lab192 +
            "</button></div>";
        }
        if (!any) con = LNG.lab3;
        $("#char_friend_list").html(con);
      }
      if (res.hasOwnProperty("on_list")) {
        var data = res.on_list;
        var len = data.length,
          con = "",
          any = false;
        for (var i = 0; i < len; i++) {
          any = true;
          var on = '<img src="/gfx/dots/5.png" class="online" />';
          if (data[i].online)
            on = '<img src="/gfx/dots/1.png" class="online" />';
          con +=
            '<div class="li_friend">' +
            on +
            '<img src="' +
            data[i].avatar +
            '" class="option" data-option="show_player" data-char_id="' +
            data[i].char_id +
            '" data-toggle="tooltip" data-original-title="<div class=tt><b class=orange>' +
            data[i].name +
            '</b></div>" /><button class="option btn_small_gold" data-option="delete_friend_from" data-rid="' +
            data[i].id +
            '">' +
            LNG.lab78 +
            "</button></div>";
        }
        if (!any) con = LNG.lab3;
        $("#char_on_friend_list").html(con);
      }
      if (res.hasOwnProperty("own_requests")) {
        var data = res.own_requests;
        var len = data.length,
          con = "",
          any = false;
        for (var i = 0; i < len; i++) {
          any = true;
          con +=
            '<div><b class="green option" data-option="show_player" data-char_id="' +
            data[i].data.receiver_id +
            '">' +
            data[i].data.target_name +
            "<b></div>";
        }
        if (!any) con = LNG.lab3;
        $("#char_friend_own_requests").html(con);
      }
      if (res.hasOwnProperty("others_requests")) {
        var data = res.others_requests;
        var len = data.length,
          con = "",
          any = false;
        for (var i = 0; i < len; i++) {
          any = true;
          con +=
            '<div><b class="green option" data-option="show_player" data-char_id="' +
            data[i].data.sender_id +
            '">' +
            data[i].data.sender_name +
            '</b> <button class="option btn_small_gold" data-option="process_friend_req" data-decision="1" data-rid="' +
            data[i].id +
            '">' +
            LNG.lab194 +
            '</button> <button class="option btn_small_gold" data-option="process_friend_req" data-decision="2" data-rid="' +
            data[i].id +
            '">' +
            LNG.lab195 +
            "</button></div>";
        }
        if (!any) con = LNG.lab3;
        $("#char_friend_own_invites").html(con);
      }
      option_bind();
      tooltip_bind();
      break;
    case 45:
      if (res.abons) this.achi_bons = res.abons;
      if (res.adata) this.achi_data = res.adata;
      if (res.achievements) {
        var data = res.achievements;
        var len = data.length,
          con = "";
        var max_lvl = 3;
        if (this.char_data.reborn >= 4) max_lvl = 6;
        for (var i = 0; i < len; i++) {
          var next = 0,
            pr = 100;
          if (data[i].level < max_lvl) {
            next = this.achi_data[data[i].achi_id][data[i].level];
            pr = Math.floor((data[i].counter / next) * 100);
            if (pr > 100) pr = 100;
          }
          var bon = "",
            prize = "",
            medal = '<div class="medal">',
            counter =
              '<div class="main_bar big"><span>' +
              this.dots(data[i].counter) +
              " / " +
              this.dots(next) +
              '</span></span><div class="progressBar style3" style="width:' +
              pr +
              '%"></div></div>';
          if (data[i].level)
            medal +=
              '<img src="/gfx/medals/' +
              data[i].achi_id +
              "_" +
              data[i].level +
              '.png" />';
          medal += "</div>";
          if (this.achi_bons[data[i].achi_id][0] && data[i].level > 0) {
            var val = this.achi_bons[data[i].achi_id][1] * data[i].level;
            bon =
              '<b class="green">' +
              val +
              "</b>" +
              this.item_stat(this.achi_bons[data[i].achi_id][0]);
          }
          var priz = this.achi_prize_check(data[i].prize_gained, data[i].level);
          if (priz)
            prize =
              '<span class="pull-right">' +
              LNG.lab238 +
              ': <b class="orange">' +
              priz +
              '</b> <img src="/gfx/kk.png" /> <button class="btn_small_gold option" data-option="receive_achi_prize" data-achi="' +
              data[i].achi_id +
              '">' +
              LNG.lab239 +
              "</button></span>";
          con +=
            '<div class="achievement">' +
            medal +
            " <b>" +
            LNG["game_achievement" + data[i].achi_id] +
            '</b> - <span class="achi_' +
            data[i].level +
            '">' +
            LNG["achievement_level" + data[i].level] +
            '</span><span class="grey pull-right">' +
            LNG["achie_req" + data[i].achi_id] +
            "</span><br />" +
            counter +
            "<br />" +
            bon +
            prize +
            '<div class="clr"></div></div>';
        }
        $("#char_achievements").html(con);
        option_bind();
      }
      break;
    case 46:
      $("#new_pw_btn").show();
      //$('#new_pw_container').hide();
      $("#pw_view").hide();
      var pages = res.all_pages;
      var page = res.page;
      this.rap_page = page;
      $("#pw_checkAll").prop("checked", false);
      var pagi = "";
      for (var p = 1; p <= pages; p++) {
        var cls = "";
        if (p == page) cls = " active";
        pagi +=
          '<button class="' +
          cls +
          ' newBtn option" data-option="show_pws" data-page="' +
          p +
          '">[' +
          p +
          "]</button>";
      }
      $("#pw_list_pagi").html(pagi);

      var data = res.pws;
      var len = data.length,
        con = "";
      for (var i = 0; i < len; i++) {
        var rep = "",
          opt = "";
        if (data[i].read) {
          rep +=
            '<img id="new_pw_id' +
            data[i].id +
            '" data-rid="' +
            data[i].id +
            '" src="/gfx/icons/new_pw.png" />';
          anynew = true;
        }
        opt =
          'class="clickable option" data-option="open_pw" data-pid="' +
          data[i].id +
          '" data-page="1"';
        rep += " " + data[i].temat;
        con +=
          '<tr><td><div class="newCheckbox"><input type="checkbox" id="pw_' +
          data[i].id +
          '" class="pw_check" value="' +
          data[i].id +
          '" /><label for="pw_' +
          data[i].id +
          '"></label></div></td><td ' +
          opt +
          ">" +
          rep +
          '</td><td><b class="orange option" data-option="show_player" data-char_id="' +
          data[i].nadawca +
          '">' +
          data[i].nadawca_name +
          "</b></td><td>" +
          data[i].answers +
          "</td><td>" +
          this.convertTime(data[i].time) +
          "</td></tr>";
      }
      $("#pw_container").html(con);
      option_bind();
      break;
    case 47:
      var newp = res.new_pws;
      if (newp > 0) {
        var html = '<div class="icon newpw" />(' + this.dots(newp) + ")";
        $("#new_pw_con").fadeIn().html(html);
      } else $("#new_pw_con").hide();
      break;
    case 48:
      var data = res.pw_head;
      this.current_pw = data.id;
      this.current_pw_text = data.texts;
      var pagi = "";
      for (var p = 1; p <= res.ans_all_pages; p++) {
        var cls = "";
        if (p == res.page) cls = " active";
        pagi +=
          '<button class="' +
          cls +
          ' newBtn option" data-option="open_pw" data-pid="' +
          this.current_pw +
          '" data-page="' +
          p +
          '">[' +
          p +
          "]</button>";
      }
      $("#pw_ans_pagi").html(pagi);

      $("#pw_view").show();
      $("#new_pw_container").hide();
      $("#new_pw_btn").show();
      $("#pw_view_topic").text(data.temat);

      var ans = res.texts;
      var len = ans.length,
        con = "";
      for (var i = 0; i < len; i++) {
        var cls = "other";
        if (ans[i].autor == this.char_id) cls = "me";
        con +=
          '<div class="message ' +
          cls +
          '"><div class="message_header"><b class="orange option pull-left" data-option="show_player" data-char_id="' +
          ans[i].autor +
          '">' +
          ans[i].autor_name +
          '</b> <span class="pull-right">' +
          this.convertTime(ans[i].time) +
          '</span></div><div class="clr">' +
          this.parseContent(ans[i].tresc) +
          "</div></div>";
      }
      $("#answer_list").html(con + '<div class="clr"></div>');
      option_bind();
      break;
    case 49:
      if (res.ranking.klan_rank) {
        //klan rank
        var data = res.ranking.klan_rank;
        var page = res.ranking.page;
        this.rank_findby = false;
        this.rank_findbyv = false;
        this.rank_page = page;
        var field = res.ranking.field;
        this.rank_field = field;
        var pp = page - 1,
          np = page + 1;
        $("#rank_search_name").text(this.char_data.name);
        $("#rank_page_back").data("page", pp);
        $("#rank_page_next").data("page", np);
        var len = this.klan_rank_fields.length,
          options = "";
        for (var i = 0; i < len; i++) {
          options +=
            '<option value="' +
            this.klan_rank_fields[i] +
            '">' +
            LNG["krank_" + this.klan_rank_fields[i]] +
            "</option>";
        }
        var len = data.length,
          con = "";
        $("#rank_field4").html(options);
        $("#rank_field4 option[value=" + field + "]").prop("selected", true);
        $(".rank_selector").prop("selectedIndex", 0);
        if (res.ranking.findby) {
          this.rank_findby = res.ranking.findby;
          this.rank_findbyv = res.ranking.findbyv;
          $(
            "#rank_" +
              res.ranking.findby +
              ' option[value="' +
              res.ranking.findbyv +
              '"]'
          ).prop("selected", true);
        }
        for (var i = 0; i < len; i++) {
          var cls = "";
          var p = (page - 1) * 20 + i + 1;

          if (
            this.char_data.klan_id > 0 &&
            data[i].id == this.char_data.klan_id
          )
            cls = "isclan";
          con +=
            '<tr class="' +
            cls +
            '"><td>' +
            p +
            '</td><td class="al">' +
            data[i].long +
            '</td><td class="al"><span class="orange option" data-option="show_clan" data-klan_id="' +
            data[i].id +
            '"><img src="' +
            data[i].emblem +
            '" /> ' +
            data[i].short +
            "</span></td><td>" +
            data[i].players +
            "</td><td>" +
            this.dots(data[i][field]) +
            "</td></tr>";
        }
        $("#rank_table4").html(con);
        $("#rank_4").show();
      }
      if (res.ranking.emp_rank) {
        //employee rank
        var data = res.ranking.emp_rank;
        var page = res.ranking.page;
        var pp = page - 1,
          np = page + 1;
        $("#rank_page_back").data("page", pp);
        $("#rank_page_next").data("page", np);
        var len = data.length,
          con = "";
        for (var i = 0; i < len; i++) {
          var cls = "";
          var p = (page - 1) * 20 + i + 1;
          if (data[i].char_id == this.char_id) cls = "isme";
          con +=
            '<tr class="' +
            cls +
            '"><td>' +
            p +
            '</td><td class="al">' +
            data[i].name +
            '</td><td class="al"><span class="orange option" data-option="show_player" data-char_id="' +
            data[i].char_id +
            '">' +
            data[i].char_name +
            "</span></td><td>" +
            this.dots(data[i].level) +
            "</td><td>" +
            data[i].maxenergy +
            "</td></tr>";
        }
        $("#rank_table3").html(con);
        $("#rank_3").show();
      }
      if (res.ranking.pet_rank) {
        //pet rank
        var data = res.ranking.pet_rank;
        var page = res.ranking.page;
        var pp = page - 1,
          np = page + 1;
        $("#rank_page_back").data("page", pp);
        $("#rank_page_next").data("page", np);
        var len = data.length,
          con = "";
        for (var i = 0; i < len; i++) {
          var cls = "";
          var p = (page - 1) * 20 + i + 1;
          if (data[i].char_id == this.char_id) cls = "isme";
          con +=
            '<tr class="' +
            cls +
            '"><td>' +
            p +
            '</td><td class="al">' +
            data[i].name +
            '</td><td class="al"><span class="orange option" data-option="show_player" data-char_id="' +
            data[i].char_id +
            '">' +
            data[i].char_name +
            "</span></td><td>" +
            data[i].evo_lvl +
            "</td><td>" +
            this.rebPref(data[i].reborn) +
            this.dots(data[i].level) +
            "</td></tr>";
        }
        $("#rank_table2").html(con);
        $("#rank_2").show();
      }
      if (res.ranking.rank) {
        //char_rank
        var data = res.ranking.rank;
        var page = res.ranking.page;
        this.rank_findby = false;
        this.rank_findbyv = false;
        this.rank_page = page;
        var field = res.ranking.field;
        this.rank_field = field;
        var pp = page - 1,
          np = page + 1;
        $("#rank_search_name").text(this.char_data.name);
        $("#rank_page_back").data("page", pp);
        $("#rank_page_next").data("page", np);
        var len = this.char_rank_fields.length,
          options = "";
        for (var i = 0; i < len; i++) {
          options +=
            '<option value="' +
            this.char_rank_fields[i] +
            '">' +
            LNG["crank_" + this.char_rank_fields[i]] +
            "</option>";
        }
        var len = data.length,
          con = "";
        $("#rank_field").html(options);
        $("#rank_field option[value=" + field + "]").prop("selected", true);
        $(".rank_selector").prop("selectedIndex", 0);
        if (res.ranking.findby) {
          this.rank_findby = res.ranking.findby;
          this.rank_findbyv = res.ranking.findbyv;
          $(
            "#rank_" +
              res.ranking.findby +
              ' option[value="' +
              res.ranking.findbyv +
              '"]'
          ).prop("selected", true);
        }
        for (var i = 0; i < len; i++) {
          var klan = "",
            empire = "",
            change = "",
            cls = "";
          if (data[i].klan_id)
            klan =
              '<span class="orange option" data-option="show_clan" data-klan_id="' +
              data[i].klan_id +
              '">' +
              data[i].klan +
              "</span>";
          if (data[i].empire)
            empire =
              '<img src="/gfx/empire/' +
              data[i].empire +
              '.png" class="select_page rank_emp_img" data-page="game_empire" data-arg="' +
              data[i].empire +
              '"></div>';
          if (data[i][field + "_old"] == 0)
            change = '<span class="grey">' + LNG.lab242 + "</span>";
          else {
            var tmp = data[i][field] - data[i][field + "_old"];
            if (tmp < 0) {
              tmp *= -1;
              change = '<span class="rank_up">↑ ' + tmp + "</span>";
            } else if (tmp > 0)
              change = '<span class="rank_down">↓ ' + tmp + "</span>";
            else change = '<span class="rank_equal">--</span>';
          }
          if (
            this.char_data.klan_id > 0 &&
            data[i].klan_id == this.char_data.klan_id
          )
            cls = "isclan";
          if (data[i].char_id == this.char_id) cls = "isme";
          con +=
            '<tr class="' +
            cls +
            '"><td>' +
            data[i][field] +
            "</td><td>" +
            change +
            '</td><td class="al"><span class="orange option" data-option="show_player" data-char_id="' +
            data[i].char_id +
            '">' +
            data[i].name +
            "</span></td><td>" +
            klan +
            "</td><td>" +
            empire +
            "</td><td>" +
            this.rebPref(data[i].reborn) +
            this.dots(data[i].level) +
            "</td><td>" +
            this.dots(data[i][field + "_value"]) +
            "</td></tr>";
        }
        $("#rank_table").html(con);
        $("#rank_1").show();
      }
      option_bind();
      page_bind();
      break;
    case 50:
      if (res.upg_data) this.upg_data = res.upg_data;
      if (res.subs) {
        this.char_subs = res.subs;
        $("#lab_substances").text(this.dots(res.subs));
      }
      if (res.upgrades) {
        var ms_costs = [0, 10, 1000, 10000, 100000, 500000];
        var upgs = res.upgrades;
        var len = upgs.length;
        var up_lvls = {};
        for (var i = 0; i < len; i++) {
          up_lvls[upgs[i].upgrade_id] = upgs[i].level;
        }
        var skills = res.skills;
        var len = skills.length;
        var skills_lvls = {};
        for (var i = 0; i < len; i++) {
          skills_lvls[skills[i].skill_id] = skills[i].level;
        }
        var char_stats = res.char_stats;
        var len = this.upg_data.length,
          con = "";
        for (var i = 1; i < len; i++) {
          if (!up_lvls[i]) up_lvls[i] = 0;
          var values = "",
            levels = "",
            bon = 0,
            ulevel = up_lvls[i],
            res = "";
          for (var l = 1; l <= 5; l++) {
            var cls = "orange";
            if (up_lvls[i] >= l) {
              cls = "green";
              levels += '<div class="lab_icon hl"></div>';
              bon += this.upg_data[i].values[l - 1];
            } else levels += '<div class="lab_icon nl"></div>';
            values +=
              ' <span class="' +
              cls +
              '">' +
              this.dots(this.upg_data[i].values[l - 1]) +
              "</span> ";
            if (l < 5) values += "+";
          }
          var upgrade = "";
          if (ulevel < 5) {
            res = "" + LNG.lab18 + ": ";
            var ind = ulevel;
            switch (this.upg_data[i].req_type) {
              case 1:
                var cls = "red";
                if (
                  this.char_data.reborn >= 4 &&
                  this.upg_data[i].req_option == "reborn_bonus"
                )
                  this.upg_data[i].req_values[ind] = 0;
                if (
                  this.char_data[this.upg_data[i].req_option] >=
                  this.upg_data[i].req_values[ind]
                ) {
                  cls = "green";
                  can_upg = true;
                }
                res +=
                  LNG["crank_" + this.upg_data[i].req_option] +
                  ": <b class=" +
                  cls +
                  ">" +
                  this.dots(this.char_data[this.upg_data[i].req_option]) +
                  "</b>/<b class=grey>" +
                  this.dots(this.upg_data[i].req_values[ind]) +
                  "</b>";
                break;
              case 2:
                var cls = "red";
                if (
                  char_stats[this.upg_data[i].req_option] >=
                  this.upg_data[i].req_values[ind]
                ) {
                  cls = "green";
                  can_upg = true;
                }
                var sid = this.stats.indexOf(this.upg_data[i].req_option) + 1;
                res +=
                  LNG.lab274 +
                  " - " +
                  LNG["char_stat" + sid] +
                  ": <b class=" +
                  cls +
                  ">" +
                  char_stats[this.upg_data[i].req_option] +
                  "</b>/<b class=grey>" +
                  this.dots(this.upg_data[i].req_values[ind]) +
                  "</b>";
                break;
              case 3:
                var cls = "red";
                if (
                  skills_lvls[this.upg_data[i].req_option] >=
                  this.upg_data[i].req_values[ind]
                ) {
                  cls = "green";
                  can_upg = true;
                }
                res +=
                  LNG.lab275 +
                  " - " +
                  LNG["skill_name" + this.upg_data[i].req_option] +
                  ": <b class=" +
                  cls +
                  ">" +
                  this.dots(skills_lvls[this.upg_data[i].req_option]) +
                  "</b>/<b class=grey>" +
                  this.dots(this.upg_data[i].req_values[ind]) +
                  "</b>";
                break;
            }
            var cls3 = "",
              cls4 = "";
            if (this.char_subs >= ms_costs[ind + 1]) cls3 = "green";
            else cls3 = "red";
            if (this.premium >= 1) cls4 = "green";
            else cls4 = "red";
            var cst =
              "<b class=" +
              cls3 +
              ">" +
              this.dots(ms_costs[ind + 1]) +
              "</b> " +
              LNG.lab276;
            if (ind == 4)
              cst += " + <b class=" + cls4 + ">1</b> <img src=/gfx/kp.png />";
            res += "<br />" + LNG.lab277 + ":<br />" + cst + "";

            upgrade =
              '<button class="pull-right btn_small_gold option" data-option="lab_upgrade" data-upg="' +
              i +
              '" data-toggle="tooltip" data-original-title="<div class=tt al>' +
              res +
              '</div>">' +
              LNG.lab56 +
              "</button>";
          }
          con +=
            '<div class="lab_upgrade l' +
            ulevel +
            '"><div class="lab_left ekw_page_items"><div class="ekw_slot"><img src="/gfx/nauki/' +
            this.upg_data[i].img +
            '.png" /></div><div class="lab_name"><b>' +
            this.upg_data[i][this.lang] +
            "</b><br />" +
            values +
            '<br /><span class="green">' +
            this.dots(bon) +
            "</span> " +
            this.item_stat(this.upg_data[i].stat) +
            "<br />" +
            levels +
            " " +
            upgrade +
            "</div></div>";

          con += "</div>";
        }
        con += '<div class="clr"></div>';
        $("#lab_upgrades").html(con);
        tooltip_bind();
        option_bind();
      }
      break;
    case 51:
      var data = res.shareds;
      var len = data.length,
        con = "";
      for (var i = 0; i < len; i++) {
        var opt = "";
        var ts = data[i].time + 604800;
        if (this.getTime() > ts)
          opt =
            '<button class="option btn_small_gold" data-option="cancel_shared" data-shared="' +
            data[i].id +
            '">' +
            LNG.lab78 +
            "</button>";
        con +=
          "<tr><td>" +
          data[i].login1 +
          " <-> " +
          data[i].login2 +
          "</td><td>" +
          this.convertTime(data[i].time) +
          "</td><td>" +
          opt +
          "</td></tr>";
      }
      if (!len) con = "<tr><td colspan=4>" + LNG.lab3 + "</td></tr>";
      $("#shared_list").html(con);
      var con = "";
      if (res.shared_requests) {
        con =
          LNG.lab280 +
          " <b>" +
          res.shared_requests.login +
          '</b> <button class="option newBtn" data-option="accept_shared">' +
          LNG.lab194 +
          "</button><br />";
      } else con = "[" + LNG.lab3 + "]";
      $("#shared_requests").html(con);
      if (res.own_login) $("#shared_own_login").text(res.own_login);
      option_bind();
      break;
    case 52:
      if (res.texts) {
        $("#profile_text").sceditor("instance").val(res.texts.text);
        $("#notes_text").sceditor("instance").val(res.texts.notes);
      }
      if (res.titles) {
        var data = res.titles;
        var len = data.length,
          con = "",
          active = 0;

        for (var i = 0; i < len; i++) {
          var tooltip = "<b>" + LNG.lab282 + "</b>:<br />",
            cls = "";
          if (data[i].active) {
            cls = "active";
            active = 1;
          }
          var any = false;
          for (var s = 1; s <= 4; s++) {
            if (data[i]["bonus" + s]) {
              any = true;
              tooltip +=
                "<b class=green>" +
                data[i]["bonus" + s + "_val"] +
                "</b> " +
                this.item_stat(data[i]["bonus" + s]) +
                "<br />";
            }
          }
          if (!any) tooltip += '<span class="grey">' + LNG.lab144 + "</span>";
          con +=
            '<tr class="' +
            cls +
            ' option" data-option="select_title" data-title="' +
            data[i].id +
            '" data-toggle="tooltip" data-original-title="<div class=tt>' +
            tooltip +
            '</div>"><td><span style="color:' +
            data[i].color +
            ';">' +
            data[i][this.lang] +
            "</span></td></tr>";
        }
        var cls = "";
        if (active == 0) cls = "active";
        con =
          '<tr class="' +
          cls +
          ' option" data-option="select_title" data-title="0"><td><span class="grey">[' +
          LNG.lab144 +
          "]</span></td></tr>" +
          con;
        $("#char_titles").html(con);
        tooltip_bind();
        option_bind();
      }
      break;
    case 53:
      var data = res.pets.sort(function (a, b) {
        return b.class - a.class || b.evo_lvl - a.evo_lvl || b.level - a.level;
      });
      var len = data.length,
        con = "";
      this.pets = data;
      $("#pets_num").text(len);
      $("#pet_limit").text(this.char_data.pet_limit + 2);
      for (var i = 0; i < len; i++) {
        var evof = 0,
          addstyle = "";
        if (data[i].evo_lvl < 12) evof = 1;
        else if (data[i].evo_lvl < 18) evof = 2;
        else evof = 3;
        var opts = "";
        if (
          data[i].exp >= this.pet_exp(data[i].level + 1, data[i].reborn) &&
          data[i].level < 1250
        )
          opts +=
            '<div class="levelup_btns"><button class="option btn_small_gold" data-option="pet_lvlup" data-pet="' +
            data[i].id +
            '" data-type="0">' +
            LNG.lab291 +
            '</button><button class="option btn_small_gold" data-option="pet_lvlup" data-pet="' +
            data[i].id +
            '" data-type="1">' +
            LNG.lab291 +
            " - MAX</button></div>";
        if (data[i].evo_exp >= this.pet_eexp(data[i].evo_lvl + 1))
          opts +=
            '<div class="levelup_btns"><button class="option btn_small_gold" data-option="pet_evoup" data-pet="' +
            data[i].id +
            '">' +
            LNG.lab292 +
            "</button></div>";
        opts +=
          '<div class="petopt_btns"><button class="option btn_small_gold" data-option="pet_namech" data-pet="' +
          data[i].id +
          '" data-pet_local="' +
          i +
          '">' +
          LNG.lab294 +
          '</button> <button class="option btn_small_gold" data-option="pet_bonch" data-pet="' +
          data[i].id +
          '" data-pet_local="' +
          i +
          '">' +
          LNG.lab296 +
          "</button></div>";
        if (data[i].reborn == 0 && data[i].active != 1)
          opts +=
            '<button class="release_pet option newBtn" data-option="pet_release" data-pet="' +
            data[i].id +
            '">' +
            LNG.lab293 +
            "</button>";
        if (data[i].level == 1250 && data[i].active != 1 && data[i].reborn == 0)
          opts +=
            '<button class="option btn_small_gold" data-option="pet_reborn1" data-pet="' +
            data[i].id +
            '">REBORN</button>';
        if (data[i].level == 1250 && data[i].active != 1 && data[i].reborn == 1)
          opts +=
            '<button class="option btn_small_gold" data-option="pet_reborn2" data-pet="' +
            data[i].id +
            '">REBORN</button>';
        if (data[i].level == 1250 && data[i].active != 1 && data[i].reborn == 2)
          opts +=
            '<button class="option btn_small_gold" data-option="pet_reborn3" data-pet="' +
            data[i].id +
            '">REBORN</button>';
        con +=
          '<div class="petItem"><div class="leftSide"><a class="option" data-option="pet_active" data-pet="' +
          data[i].id +
          '"><img data-toggle="tooltip" data-original-title="' +
          this.getPetDetails(data[i]) +
          '" src="/gfx/pets/' +
          data[i].type +
          "/" +
          evof +
          '.png" alt="" class="activied' +
          data[i].active +
          " reb" +
          data[i].reborn +
          '" /></a></div><div class="rightSide">' +
          opts +
          '</div><div class="clr"></div></div>';
      }
      con += '<div class="clr"></div>';
      $("#pet_list").html(con);
      tooltip_bind();
      option_bind();
      break;
    case 54:
      var data = res.emps.sort(function (a, b) {
        return b.class - a.class || b.level - a.level;
      });
      var len = data.length,
        con = "";
      this.emps = data;
      $("#emp_num").text(len);
      $("#emp_limit").text(2);
      for (var i = 0; i < len; i++) {
        var opts = "";
        if (
          data[i].exp >= this.employe_exp(data[i].level + 1) &&
          data[i].level < 13
        )
          opts +=
            '<div class="levelup_btns"><button class="option btn_small_gold" data-option="emp_lvlup" data-emp="' +
            data[i].id +
            '">' +
            LNG.lab291 +
            "</button></div>";
        opts +=
          '<div class="petopt_btns"><button class="option btn_small_gold" data-option="emp_namech" data-emp="' +
          data[i].id +
          '" data-emp_local="' +
          i +
          '">' +
          LNG.lab294 +
          '</button> <button class="option newBtn" data-option="emp_job" data-emp="' +
          data[i].id +
          '" data-emp_local="' +
          i +
          '">' +
          LNG.lab312 +
          "</button>";
        if (data[i].energy < data[i].maxenergy)
          opts +=
            '<button class="option newBtn" data-option="emp_restore" data-emp="' +
            data[i].id +
            '">' +
            LNG.lab318 +
            '</button><button class="option newBtn" data-option="emp_restore_all" data-emp="' +
            data[i].id +
            '">' +
            LNG.lab400 +
            "</button>";
        if (data[i].level >= 10 && data[i].qualified == 0)
          opts +=
            '<button class="option btn_small_gold" data-option="emp_advace" data-emp="' +
            data[i].id +
            '">' +
            LNG.lab316 +
            "</button>";
        if (data[i].maxenergy < 12)
          opts +=
            '<button class="option newBtn" data-option="emp_innene" data-emp="' +
            data[i].id +
            '">' +
            LNG.lab315 +
            "</button>";
        opts += "</div>";
        if (data[i].active != 1)
          opts +=
            '<button class="release_pet option newBtn" data-option="emp_release" data-emp="' +
            data[i].id +
            '">' +
            LNG.lab311 +
            "</button>";
        con +=
          '<div class="petItem"><div class="leftSide"><a class="option" data-option="emp_active" data-emp="' +
          data[i].id +
          '"><img data-toggle="tooltip" data-original-title="' +
          this.getEmpDetails(data[i]) +
          '" src="/gfx/employee/' +
          data[i].type +
          '.png" alt="" class="activied' +
          data[i].active +
          '" /></a></div><div class="rightSide">' +
          opts +
          '</div><div class="clr"></div></div>';
      }
      con += '<div class="clr"></div>';
      $("#emp_list").html(con);
      tooltip_bind();
      option_bind();
      break;
    case 55: //kula energii
      var ball = res.ball;
      var bd = res.bd;
      this.ball_id = ball.id;
      var grade = "";
      for (var g = 1; g <= bd.grade; g++)
        grade += '<img src="/gfx/ekw_pages/star.png" />';
      $("#ss_name").text(ball[this.lang_data["nauki"][this.lang]]);
      $("#ss_level").text(bd.level);
      $("#ss_grade").html(grade);
      $("#ss_exp").text(this.dots(bd.exp) + "/" + this.dots(bd.next_lvl));
      if (bd.exp >= bd.next_lvl) $("#ss_lvlup").show();
      else $("#ss_lvlup").hide();
      var w = (bd.exp / bd.next_lvl) * 100;
      if (w < 0) w = 0;
      if (w > 100) w = 100;
      $("#ss_exp_barer").animate({ width: w + "%" }, 500);
      $("#ss_synergy_lvl").text(bd.synergy_lvl);
      $("#ss_synergy").text(
        this.dots(this.char_data.synergy) + "/" + this.dots(bd.synergy_next)
      );
      var w = (this.char_data.synergy / bd.synergy_next) * 100;
      if (w < 0) w = 0;
      if (w > 100) w = 100;
      $("#ss_syn_barer").animate({ width: w + "%" }, 500);
      var change = 0,
        changer = false;
      if (res.ss_change) {
        changer = true;
        $("#ss_changed").show();
      } else {
        $("#ss_changed").hide();
      }
      for (var s = 1; s <= 9; s++) {
        if (ball["stat" + s]) {
          $("#stat" + s + "_val").text(ball["stat" + s + "_val"]);
          $("#stat" + s + "_bon").text(this.item_stat(ball["stat" + s]));
          $("#ss_stat" + s + "_progress").text(bd["stat" + s] + "%");
          $("#ss_stat" + s + "_barer").animate(
            { width: bd["stat" + s] + "%" },
            500
          );
          var ch = "";
          if (changer) {
            var diff = res.ss_change[s];
            change += diff;
            if (diff == 0) ch = "0%";
            else if (diff < 0) ch = '<span class="red">' + diff + "%</span>";
            else ch = '<span class="green">+' + diff + "%</span>";
          }
          $("#ss_change_" + s).html(ch);
          $("#stat" + s + "_con").show();
        } else $("#stat" + s + "_con").hide();
      }
      $("#ss_reset_stack").text(res.resets);
      $("#ss_upgrade_stack").text(res.upgrades);
      var ch = "";
      if (change == 0) ch = "0%";
      else if (change < 0) ch = '<b class="red">' + change + "%</b>";
      else ch = '<b class="green">+' + change + "%</b>";

      $("#up_change").html(ch);
      $("#soulstone_interface").show();
      break;
    case 56: //arena
      var pvp_master = false;
      if (this.char_data.bonus19 > this.getTime()) pvp_master = true;
      var data = res.area_oponents.players;
      var len = data.length,
        con = "";
      for (var i = 0; i < len; i++) {
        con += this.parseArenaPlayer(i, data[i], pvp_master);
      }
      $("#arena_players").html(con);
      $("#arena_rank").text(LNG["arena_rank" + this.char_data.arena_lvl]);
      $("#arena_expires").html(
        this.showTimer(res.area_oponents.expires - this.getTime())
      );
      this.charValuesBind(["arena_lvl", "arena_exp"]);
      option_bind();
      break;
    case 57:
      var data = res.auctions.auctions;
      var len = data.length,
        con = "";
      $("#auction_own_items").text(res.own);
      var pagi = "";
      var pages = res.auctions.all_pages;
      var page = res.auctions.page;
      var pagi =
        LNG.lab272 +
        " <b>" +
        page +
        "</b>/<b>" +
        pages +
        '</b> <button class="option newBtn" data-option="show_auctions" data-page="' +
        (page - 1) +
        '"><<</button> <button class="option newBtn" data-option="show_auctions" data-page="' +
        (page + 1) +
        '">>></button>';
      $("#auction_pagi").html(pagi);
      var time = this.getTime();
      var any = false;
      for (var i = 0; i < len; i++) {
        if (data[i].expire <= time) continue;
        any = true;
        var auction = "",
          opts = "";
        if (data[i].start > 0) {
          auction =
            LNG.lab334 +
            ": <b>" +
            data[i].start +
            '</b><img src="/gfx/kp.png" /><br />';
          if (data[i].current > 0)
            auction +=
              LNG.lab329 +
              ": <b>" +
              data[i].current +
              '</b><img src="/gfx/kp.png" /> - <b class="orange option" data-option="show_player" data-char_id="' +
              data[i].cur_char +
              '">' +
              data[i].cur_chn +
              "</b>";
        } else auction = '<span class="grey">' + LNG.lab331 + "</span>";
        if (data[i].char_id == this.char_id) {
          if (data[i].current == 0)
            opts =
              '<button class="option btn_small_gold" data-option="withdraw_auction" data-aid="' +
              data[i].id +
              '" data-page="' +
              page +
              '">' +
              LNG.lab330 +
              "</button>";
        } else {
          if (data[i].buy_now > 0)
            opts +=
              '<button class="option btn_small_gold" data-option="buynow_auction" data-aid="' +
              data[i].id +
              '" data-page="' +
              page +
              '">' +
              LNG.lab332 +
              "</button>: " +
              data[i].buy_now +
              '<img src="/gfx/kp.png" /><br />';
          if (data[i].start > 0)
            opts +=
              '<div class="game_input vsmall"><input type="text" id="a_bid_' +
              data[i].id +
              '" value="' +
              (Math.max(data[i].current, data[i].start) + 1) +
              '" /></div><img src="/gfx/kp.png" /><br /><button class="option btn_small_gold" data-option="bid_auction" data-aid="' +
              data[i].id +
              '" data-page="' +
              page +
              '">' +
              LNG.lab333 +
              "</button>";
        }
        var timer = "";
        if (data[i].expire > time)
          timer =
            this.convertTime(data[i].expire) +
            "<br />" +
            this.showTimer(data[i].expire - time);
        else timer = '<span class="grey">' + LNG.lab335 + "...</span>";
        con +=
          '<tr><td><b class="orange option" data-option="show_player" data-char_id="' +
          data[i].char_id +
          '">' +
          data[i].char_name +
          '</b></td><td class="ekw_page_items"><div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
          data[i].item_id +
          '" data-upgrade="' +
          data[i].upgrade +
          '"><img src="/gfx/items/' +
          data[i].class +
          "/" +
          data[i].type +
          "/" +
          data[i].item_id +
          '.png" /><div>' +
          data[i].stack +
          "</div></div></td><td>" +
          timer +
          '</td><td class="al">' +
          auction +
          "</td><td>" +
          opts +
          "</td></tr>";
      }
      if (!any)
        con += '<tr><td colspan="9" class="ac">[' + LNG.lab3 + "]</td></tr>";
      $("#auction_list").html(con);
      main_ekw_item_bind();
      tooltip_bind();
      option_bind();
      break;
    case 58:
      var data = res.bosses.sort(function (a, b) {
        return b.id - a.id;
      });
      var len = data.length,
        con = "";
      var any = false;
      for (var i = 0; i < len; i++) {
        any = true;
        var owner = "",
          loc = "";
        if (data[i].owner) {
          owner =
            '<b class="option" data-option="show_player" data-char_id="' +
            data[i].owner +
            '">' +
            data[i].owner_name +
            "</b>";
          loc = data[i].location + " [" + data[i].x + "|" + data[i].y + "]";
        } else {
          owner = LNG.lab144;
          loc = "???";
        }
        con +=
          "<tr><td>" +
          data[i].mob_name +
          "</td><td>" +
          owner +
          "</td><td>" +
          loc +
          "</td></tr>";
      }
      if (!any)
        con +=
          '<tr><td colspan="5" class="ac grey">[' + LNG.lab3 + "]</td></tr>";
      $("#boss_list").html(con);
      option_bind();
      break;
    case 59:
      var points = 0;
      var adata = res.adata;
      $("#char_activity").text(adata.p);
      var w = Math.min(100, (adata.p / 150) * 100);
      $("#activity_bar").css({ width: w + "%" });
      var data = res.activities;
      var len = data.length,
        con = "";
      for (var i = 0; i < len; i++) {
        var cls = "";
        if (adata.ap[i]) cls = "disabled";
        con +=
          '<div class="act_prize ' +
          cls +
          '">' +
          LNG.done82 +
          " <b>" +
          data[i].req_points +
          '</b><div class="ekw_page_items">';
        var len2 = data[i].prizes.length;
        for (var j = 0; j < len2; j++) {
          switch (data[i].prizes[j].type) {
            case 1:
              con +=
                '<div class="ekw_slot"><img src="/gfx/items/kk.png" /><div>' +
                data[i].prizes[j].am +
                "</div></div>";
              break;
            case 2:
              var am = data[i].prizes[j].am;
              if (data[i].prizes[j].chance)
                am += " - <b>" + data[i].prizes[j].chance + "</b>%";
              con +=
                '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
                data[i].prizes[j].item_id +
                '"><img src="' +
                data[i].prizes[j].gfx +
                '" /><div>' +
                am +
                "</div></div>";
              break;
          }
        }
        con +=
          '</div><button class="option newBtn pull-right" data-option="receive_activity_reward" data-ind="' +
          i +
          '">' +
          LNG.lab239 +
          '</button><div class="clr"></div></div>';
      }
      $("#act_prizes").html(con);

      var con = "";
      for (var i = 1; i <= 22; i++) {
        var done = "";
        if (adata.a[i]) done = '<img src="/gfx/layout/done.png" />';
        con +=
          '<div class="activity">&raquo; ' +
          LNG["activity" + i] +
          " " +
          done +
          ' <span class="pull-right">' +
          res.points[i] +
          '<b class="orange">p</b></span></div>';
      }
      $("#char_activieties").html(con);
      main_ekw_item_bind();
      tooltip_bind();
      option_bind();
      break;
    case 60:
      if (res.emp_choose) {
        $(".no_emp").hide();
        if (res.quiz) {
          if (res.result) {
            var con = "";
            for (var i = 1; i <= 4; i++) {
              con +=
                "<b>" +
                LNG["empire" + i] +
                '</b>: <b class="green">' +
                res.correct[i] +
                "</b><br />";
            }
            $("#quiz_corrects").html(con);
            $(".quiz_end").hide();
            $("#quiz_result_" + res.result.wynik).show();
            switch (res.result.wynik) {
              case 2:
                $("#quiz_em_res").text(LNG["empire" + res.result.empire]);
                break;
              case 3:
                $(".quiz_suc_choose").hide();
                //quiz.result.empires=availables;
                var len = res.result.empires.length;
                for (var i = 0; i < len; i++) {
                  $("#qsc_" + res.result.empires[i]).show();
                }
                break;
            }
            $("#emp_test_end").show();
          } else {
            $("#quiz_question").text(
              res.question[this.lang_data["question"][this.lang]]
            );
            $(".qans").hide();
            for (var a = 1; a <= res.question.answers; a++) {
              $("#ans_" + a + "_cen").text(
                res.question[this.lang_data["quiza" + a][this.lang]]
              );
              $("#quiz_ans_" + a).show();
            }
            $("#quiz_time").html(this.showTimer(res.expires - this.getTime()));
            $("#emp_test_go").show();
            $(".quiz_answer").prop("checked", false);
          }
        } else {
          $(".emp_join_req_met").show();
          $("#emp_test_init").show();
          if (res.lvl_too_low) {
            $(".emp_join_req_met").hide();
          }
        }
        $("#has_empire").hide();
        $("#no_empire").show();
      } else {
        if (res.edata) {
          var edata = res.edata;
          var empire = edata.id;
          $("#empire_name").html(
            LNG["empire" + empire] + " - " + this.empireSide(empire)
          );
          $("#leader_name").text(LNG["empireleader" + empire]);
          $("#emp_img").attr("src", "/gfx/empire/" + empire + ".png");
          var rank = "";
          if (this.char_data.glory_rank && res.rank) {
            var rd = res.rank;
            var rdet = "",
              len = rd.length;
            for (var i = 0; i < len; i += 2) {
              var n = rd[i + 1];
              rdet +=
                "<b class=green>" +
                n +
                "</b> " +
                this.item_stat(rd[i]) +
                "<br />";
            }
            rank =
              '<span data-toggle="tooltip" data-original-title="<div class=tt>' +
              rdet +
              '</div>"><img src="/gfx/empire/ranks/' +
              empire +
              "/" +
              this.char_data.glory_rank +
              '.png" /> <span class="orange">' +
              LNG["erank" + empire + "_" + this.char_data.glory_rank] +
              "</span></span>";
          } else rank = "[" + LNG.lab144 + "]";
          if (empire == this.char_data.empire) {
            $(".is_own_emp").show();
            $("#own_glory").text(this.dots(this.char_data.war_glory));
            $("#glory_need").text(this.dots(res.next_rank));
            $("#own_emp_rank").html(rank);
          } else $(".is_own_emp").hide();

          var leader = "",
            admiral = "";
          if (edata.leader)
            leader =
              "(" +
              this.leader_num(edata.leader_number) +
              ') <b class="green option" data-option="show_player" data-char_id="' +
              edata.leader +
              '">' +
              edata.leader_name +
              "</b>";
          else leader = "[" + LNG.lab144 + "]";
          if (edata.admiral)
            admiral =
              '<b class="green option" data-option="show_player" data-char_id="' +
              edata.admiral +
              '">' +
              edata.admiral_name +
              "</b>";
          else admiral = "[" + LNG.lab144 + "]";
          $("#leader_player").html(leader);
          $("#e_admiral_player").html(admiral);

          $("#empire_pp").text(this.dots(edata.pp));
          $("#empire_ip").text(this.dots(edata.ip));
          $("#empire_ww").text(this.dots(edata.wons));
          $("#empire_wl").text(this.dots(edata.loses));
          $('#emp_teleport option[value="' + empire + '"]').prop(
            "selected",
            true
          );
          $("#emp_war_declare option").prop("disabled", false);
          $('#emp_war_declare option[value="' + empire + '"]').prop(
            "disabled",
            true
          );
          $("#emp_war_delare").hide();
          if (edata.leader == this.char_id || edata.admiral == this.char_id)
            $("#emp_war_delare").show();
          var can_build = false;
          if (edata.leader == this.char_id) can_build = true;
          if (res.structs) {
            var con = "",
              data = res.structs;
            var len = data.cnt;
            for (var i = 1; i <= len; i++) {
              var sdetail =
                "<div class=tt><b>" +
                LNG["estr" + i] +
                "</b> (" +
                LNG.lab1 +
                " <span class=orange>" +
                edata["s" + i] +
                "</span>/" +
                data[i].max +
                ")<br />";
              var upb = "",
                build = "";
              var bon = data[i].bv * edata["s" + i];
              if (data[i].stat)
                sdetail +=
                  "<b class=green>" +
                  bon +
                  "</b> " +
                  this.item_stat(data[i].stat) +
                  "<br />";
              if (data[i].es)
                sdetail +=
                  LNG["estat" + data[i].es] +
                  " <b class=green>" +
                  bon +
                  "</b><br /><br />";
              if (edata["s" + i] < data[i].max) {
                var cls1 = "green",
                  cls2 = "green";
                var cost =
                  data[i].c1 *
                  ((edata["s" + i] + 1) * (edata["s" + i] + 1) * 50);
                var cost2 =
                  data[i].c2 *
                  ((edata["s" + i] + 1) * (edata["s" + i] + 1) * 50);
                if (cost > edata.pp) cls1 = "red";
                if (cost2 > edata.ip) cls2 = "red";
                if (can_build)
                  upb =
                    '<button class="btn_small_gold option" data-option="emp_struct" data-sid="' +
                    i +
                    '">' +
                    LNG.lab69 +
                    "</button>";
                sdetail +=
                  LNG.lab339 +
                  ":<br />" +
                  LNG.lab340 +
                  ": <b class=" +
                  cls1 +
                  ">" +
                  this.dots(cost) +
                  "</b><br />" +
                  LNG.lab341 +
                  ": <b class=" +
                  cls2 +
                  ">" +
                  this.dots(cost2) +
                  "</b>";
              }
              sdetail += "</div>";
              if (edata.s_build == i) {
                var time = this.getTime();
                var w =
                  100 -
                  ((edata.s_btime - time) / (edata.s_btime - edata.s_stime)) *
                    100;
                if (w < 0) w = 0;
                if (w > 100) w = 100;
                build =
                  '<br /><span class="red">' +
                  LNG.lab70 +
                  '...</span> <div class="main_bar">' +
                  this.showTimer(edata.s_btime - time) +
                  '</span><div class="progressBar style4" style="width:' +
                  w +
                  '%"></div></div>';
              }
              con +=
                '<div class="emp_struct"><b class="stru_name" data-toggle="tooltip" data-original-title="' +
                sdetail +
                '">' +
                LNG["estr" + i] +
                "</b> (" +
                LNG.lab1 +
                ' <span class="orange">' +
                edata["s" + i] +
                "</span>) " +
                upb +
                " " +
                build +
                "</div>";
            }
            $("#emp_structs").html(con);
          }
          if (res.buffs) {
            var time = this.getTime();
            var data = res.buffs,
              con = "";
            var len = data.length;
            for (var i = 1; i < len; i++) {
              var bdetail =
                "<b>" +
                LNG["ebuff" + i] +
                "</b><br /><span class=orange>" +
                LNG["ebufft" + data[i][1]] +
                "</span><br />" +
                LNG.lab57 +
                ":<br />";
              switch (data[i][1]) {
                case 1:
                  var cls = "green";
                  if (edata.pp < data[i][2]) cls = "red";
                  bdetail +=
                    "<span class=grey>" +
                    LNG.lab340 +
                    "</span>: <b class=" +
                    cls +
                    ">" +
                    this.dots(data[i][2]) +
                    "</b>";
                  break;
                case 2:
                  var cls = "green";
                  if (edata.ip < data[i][2]) cls = "red";
                  bdetail +=
                    "<span class=grey>" +
                    LNG.lab341 +
                    "</span>: <b class=" +
                    cls +
                    ">" +
                    this.dots(data[i][2]) +
                    "</b>";
                  break;
              }
              if (data[i][4]) bdetail += "<br /><b>" + LNG.lab347 + "</b>";
              bdetail += "<br /><br />";
              for (var j = 0; j < data[i][3].length; j += 2) {
                bdetail +=
                  "<b class=green>" +
                  data[i][3][j + 1] +
                  "</b> " +
                  this.item_stat(data[i][3][j]) +
                  "<br />";
              }
              var buffstatus = "";
              if (edata["buff" + i] > time)
                buffstatus =
                  '<span class="green">' +
                  LNG.lab164 +
                  "</span> " +
                  this.showTimer(edata["buff" + i] - time, "", "grey");
              else if (can_build)
                buffstatus =
                  '<button class="btn_small_gold option" data-option="activate_emp_buff" data-buff="' +
                  i +
                  '">' +
                  LNG.lab99 +
                  "</button>";
              con +=
                '<div class="emp_buff"><b data-toggle="tooltip" data-original-title="<div class=tt>' +
                bdetail +
                '</div>">' +
                LNG["ebuff" + i] +
                '</b> <div class="pull-right">' +
                buffstatus +
                "</div></div>";
            }
            $("#emp_buffs").html(con);
          }
          var gne = 52;
          var suma = res.good_points + res.evil_points;
          if (suma > 0)
            gne = 100 - Math.round((res.good_points / suma) * 100 - 2);
          var cubon = "",
            tt =
              "<div class=tt>" +
              LNG.lab343 +
              ":<br />&raquo; <b class=green>15</b> <span class=orange>" +
              this.item_stat(15) +
              "</span><br />&raquo; <b class=green>5</b> <span class=orange>" +
              this.item_stat(17) +
              "</span></div>";
          switch (res.last_gne) {
            case 1:
              cubon = LNG.lab342 + ' <b class="green">' + LNG.lab338 + "</b>!";
              break;
            case 2:
              cubon = LNG.lab342 + ' <b class="red">' + LNG.lab337 + "</b>!";
              break;
            default:
              cubon = "";
              tt = "";
              break;
          }
          $("#gne_good_p").text(this.dots(res.good_points));
          $("#gne_evil_p").text(this.dots(res.evil_points));
          $("#gne_satus").html(cubon).attr("data-original-title", tt);
          $("#e_gne").css({ "background-position": gne + "%" });
          var data = edata.heroes,
            con = "";
          var len = data.length;
          for (var i = 0; i < len; i++) {
            var rank = "";
            if (data[i].glory_rank)
              rank =
                '<img src="/gfx/empire/ranks/' +
                empire +
                "/" +
                data[i].glory_rank +
                '.png" data-toggle="tooltip" data-original-title="<div class=tt>' +
                LNG["erank" + empire + "_" + data[i].glory_rank] +
                '</div>" />';
            con +=
              '<tr class="activity"><td><b class="player_rank' +
              data[i].ranga +
              ' option" data-option="show_player" data-char_id="' +
              data[i].id +
              '">' +
              data[i].name +
              "</b></td><td>" +
              this.rebPref(data[i].reborn) +
              this.dots(data[i].level) +
              "</td><td>" +
              rank +
              "</td><td>" +
              this.dots(data[i].war_glory) +
              "</td></tr>";
          }
          $("#empire_heroes").html(con);
          var data = edata.efrags,
            con = "";
          var len = data.length;
          for (var i = 0; i < len; i++) {
            var rank = "";
            if (data[i].glory_rank)
              rank =
                '<img src="/gfx/empire/ranks/' +
                empire +
                "/" +
                data[i].glory_rank +
                '.png" data-toggle="tooltip" data-original-title="<div class=tt>' +
                LNG["erank" + empire + "_" + data[i].glory_rank] +
                '</div>" />';
            con +=
              '<tr class="activity"><td><b class="player_rank' +
              data[i].ranga +
              ' option" data-option="show_player" data-char_id="' +
              data[i].id +
              '">' +
              data[i].name +
              "</b></td><td>" +
              this.rebPref(data[i].reborn) +
              this.dots(data[i].level) +
              "</td><td>" +
              rank +
              "</td><td>" +
              this.dots(data[i].empire_monthly_frags) +
              "</td></tr>";
          }
          $("#empire_efrags").html(con);
          var any = false,
            con = "";
          if (res.wars) {
            var data = res.wars,
              time = this.getTime();
            var len = data.length;
            for (var i = 0; i < len; i++) {
              any = true;
              con +=
                '<div class="war_win"><span class="orange">' +
                LNG["empirewar" + data[i].war_type] +
                "</span><br /><b>" +
                LNG["empire" + data[i].empire_1] +
                "</b> vs. <b>" +
                LNG["empire" + data[i].empire_2] +
                "</b><br /><b>" +
                data[i].score_1 +
                "</b> : <b>" +
                data[i].score_2 +
                "</b><br />" +
                this.showTimer(data[i].expires - time) +
                '<br /><button class="btn_small_gold option" data-option="emp_war_table" data-war="' +
                data[i].id +
                '">' +
                LNG.lab345 +
                "</button></div>";
            }
          }
          if (!any) con = '[<span class="grey">' + LNG.lab344 + "</span>]";
          $("#emp_wars").html(con);
        }
        $("#has_empire").show();
        $("#no_empire").hide();
        option_bind();
        tooltip_bind();
      }
      break;
    case 61:
      var data = res.war_tab.sort(function (a, b) {
        return b.kills - a.kills || a.deaths - b.deaths;
      });
      var len = data.length,
        con = "";
      var n = 1;
      for (var i = 0; i < len; i++) {
        var cls = "enemy",
          shadow = "";
        if (data[i].empire == this.char_data.empire) cls = "ally";
        if (data[i].shadow) shadow = "- " + LNG.lab348;
        con +=
          '<tr class="' +
          cls +
          '"><td>' +
          n +
          '</td><td><b class="orange option" data-option="show_player" data-char_id="' +
          data[i].char_id +
          '">' +
          data[i].name +
          "</b> " +
          shadow +
          "</td><td>" +
          data[i].kills +
          "</td><td>" +
          data[i].deaths +
          "</td><td>" +
          data[i].streak +
          "</td></tr>";
        n++;
      }
      $("#war_table").html(con);
      option_bind();
      this.page_switch("game_war_table");
      break;
    case 62:
      if (res.hasOwnProperty("special_loc")) {
        $(".slocop").hide();
        if (res.special_loc) $("#special_loc_btn").show();
        else $("#no_event").show();
      }
      if (res.hasOwnProperty("challenge")) {
        var con = "";
        switch (res.challenge.status) {
          case 3:
            con +=
              "<b>" +
              LNG.lab351 +
              '</b>: <b class="green">' +
              LNG["chprize" + res.challenge.prize] +
              "</b>";
            break;
          case 2:
            con += '<b class="red">' + LNG.lab350 + "</b>";
            break;
          case 1:
            var num = res.challenge.counter;
            if (num > res.challenge.need) num = res.challenge.need;
            con +=
              '<b class="orange">' +
              LNG.lab352 +
              "</b><br />" +
              LNG.lab18 +
              ': <b class="orange">' +
              LNG["chpreq" + res.challenge.req] +
              "</b> (" +
              this.dots(num) +
              "/" +
              this.dots(res.challenge.need) +
              ")<br /><br /><b>" +
              LNG.lab353 +
              '</b>: <b class="green">' +
              LNG["chprize" + res.challenge.prize] +
              "</b>";
            break;
          default:
            con = '<b class="orange">' + LNG.lab349 + "</b>";
            break;
        }
        $("#sch_result").html(con);
      }
      if (res.hasOwnProperty("gift")) {
        console.log(res.gift);
        var con = "";
        var len = res.gift.length;
        ekw_page_items;
        for (var i = 0; i < len; i++) {
          var bons = "<br />";
          if (res.gift[i].bons) {
            var len2 = res.gift[i].bons.length;
            for (var j = 0; j < len2; j++) {
              bons +=
                "<span class=item8><b>" +
                res.gift[i].bons[j][1] +
                "</b> " +
                this.item_stat(res.gift[i].bons[j][0]) +
                "</span><br />";
            }
          }
          con +=
            '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="<div class=tt><b>' +
            res.gift[i].name +
            "</b><br />" +
            bons +
            '</div>"><img src="./gfx/items/event/' +
            res.gift[i].gift_id +
            '.png" /></div>';
        }
        $("#event_gifts").html(con);
        tooltip_bind();
      }
      if (res.hasOwnProperty("tokens"))
        $("#space_trade_tokens").text(res.tokens);
      if (res.hasOwnProperty("zeni")) $("#space_trade_zeni").text(res.zeni);

      if (res.hasOwnProperty("trader")) {
        var stat = LNG.lab354;
        if (res.trader.status) {
          stat = LNG.lab355;
        }
        $("#space_trade_status").text(stat);
        if (res.trader.goods) {
          var con = "";
          var json = res.trader.goods;
          var len = json.length;
          for (var i = 0; i < len; i++) {
            var opts = "",
              cls = "";
            if (json[i].bought_by) {
              cls = "bought";
              opts =
                LNG.lab356 +
                '<br /><span class="orange">' +
                json[i].bought_by +
                "</span>";
            } else {
              var cls2 = "red";
              if (res.tokens >= json[i].dt) cls2 = "green";
              opts =
                LNG.lab357 +
                ': <span class="' +
                cls2 +
                '">' +
                json[i].dt +
                '</span><br /><button class="option newBtn" data-option="buy_from_trader" data-item="' +
                i +
                '" data-itemid="' +
                json[i].item +
                '" data-itemam="' +
                json[i].amount +
                '">' +
                LNG.lab67 +
                "</button>";
            }
            con +=
              '<div class="trade_good ' +
              cls +
              '"><div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
              json[i].item +
              '"><img src="' +
              json[i].gfx +
              '" /><div>' +
              json[i].amount +
              "</div></div><br />" +
              opts +
              "</div>";
          }
          con += '<div class="clr"></div>';
          $("#trader_goods").html(con);
          main_ekw_item_bind();
          tooltip_bind();
          option_bind();
        }
        if (res.trader.goods2) {
          var con = "";
          var json = res.trader.goods2;
          var len = json.length;
          for (var i = 0; i < len; i++) {
            var opts = "",
              cls = "";
            if (json[i].bought_by) {
              cls = "bought";
              opts =
                LNG.lab356 +
                '<br /><span class="orange">' +
                json[i].bought_by +
                "</span>";
            } else {
              var cls2 = "red";
              if (res.zeni >= json[i].ze) cls2 = "green";
              opts =
                LNG.lab439 +
                ': <span class="' +
                cls2 +
                '">' +
                json[i].ze +
                '</span><br /><button class="option newBtn" data-option="buy_from_trader2" data-item="' +
                i +
                '" data-itemid="' +
                json[i].item +
                '" data-itemam="' +
                json[i].amount +
                '">' +
                LNG.lab67 +
                "</button>";
            }
            con +=
              '<div class="trade_good ' +
              cls +
              '"><div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
              json[i].item +
              '"><img src="' +
              json[i].gfx +
              '" /><div>' +
              json[i].amount +
              "</div></div><br />" +
              opts +
              "</div>";
          }
          con += '<div class="clr"></div>';
          $("#trader_goods2").html(con);
          main_ekw_item_bind();
          tooltip_bind();
          option_bind();
        }
      }
      break;
    case 63:
      var done = [];
      var len = this.tutorials.length;
      for (var i = 0; i < len; i++) done.push(this.tutorials[i].tutorial);
      var con = "";
      var len = this.tutorial_data.cnt;

      for (var i = 1; i <= len; i++) {
        var tut = this.tutorial_data["t" + i];
        var reqs = "";
        var canstart = true;
        var cls = "",
          rreb = 0;
        if (tut.req_reb) rreb = tut.req_reb;
        if (!this.levelReqCheck(tut.req_lvl, rreb)) {
          canstart = false;
          cls = "red";
        }
        reqs =
          LNG.lab24 +
          ' : <b class="' +
          cls +
          '">' +
          this.rebPref(rreb) +
          tut.req_lvl +
          "</b>";

        var btn = "";

        if (this.current_tutorial && this.current_tutorial.id == i) {
          btn =
            '<button class="option f_right tut_btn" data-option="cancel_tutorial" data-t="' +
            i +
            '">' +
            LNG.lab78 +
            "</button>";
        }
        var mark = "";
        var stat = LNG.lab359;
        if (done.indexOf(tut.id) != -1) {
          mark =
            '<img src="/gfx/layout/done.png" width=20 align="absmiddle" />';
          stat = LNG.lab360;
          canstart = false;
        }
        if (!this.current_tutorial && canstart)
          btn =
            '<button class="option f_right tut_btn" data-option="start_tutorial" data-t="' +
            i +
            '">' +
            LNG.lab197 +
            "</button>";
        con +=
          '<div class="tutse"><div class="tut_selector option pull-left" data-option="show_tut_data" data-t="' +
          i +
          '">' +
          tut["title_" + this.lang] +
          " " +
          mark +
          '</div><div class="pull-right">' +
          reqs +
          '</div><div id="tut_desc_' +
          i +
          '" class="clr initial_hide"><div class="pull-left">' +
          LNG.lab361 +
          ': <span class="orange">' +
          stat +
          "</span><br />" +
          LNG.lab21 +
          ":<br />" +
          this.tutprizelist(tut.prize) +
          "</div>" +
          btn +
          '</div><div class="clr"></div></div>';
      }
      $("#tutorial").toggle();
      $("#tut_list").html(con);
      option_bind();
      break;
    case 64:
      this.charValuesBind([
        "vip_level",
        "vip_score",
        "vip_show",
        "gvip_level",
        "gvip_score",
      ]);
      if (res.hasOwnProperty("vip")) this.vip_data = res.vip;
      var data = this.vip_data.monthly,
        con = "";
      var gfx = {
        minor_ball: "/gfx/layout/daily/psk.png",
        tpp: "/gfx/layout/daily/tpp.png",
      };
      var len = data.length;
      var ava = -1;
      if (this.char_data.reborn >= 3) ava = 0;
      if (this.char_data.vip_level > 0) ava = this.char_data.vip_level;
      for (var i = 0; i < len; i++) {
        var cls = "";
        if (i != ava) cls = "disabled";
        else if (res.monthly_lock) cls = "received";
        con +=
          '<div class="vip_cat ' +
          cls +
          ' option" data-option="obtain_vip" data-vip="0" data-level="' +
          i +
          '"><div class="vip_label">' +
          LNG["vip" + i] +
          '</div><div class="vip_items ekw_page_items">';
        var len2 = data[i].length;
        for (var j = 0; j < len2; j++) {
          switch (data[i][j].type) {
            case 1:
              con +=
                '<div class="ekw_slot" data-toggle="tooltip" data-original-title="<div class=tt>' +
                LNG["shop_chup_" + data[i][j].id] +
                '</div>"><img src="' +
                gfx[data[i][j].id] +
                '" /><div>' +
                data[i][j].am +
                "</div></div>";
              break;
            case 2:
              con +=
                '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
                data[i][j].id +
                '"><img src="' +
                data[i][j].gfx +
                '" /><div>' +
                data[i][j].am +
                "</div></div>";
              break;
            case 3:
              con +=
                '<div class="ekw_slot" data-toggle="tooltip" data-original-title="<div class=tt>' +
                LNG.item_func15 +
                ": <b class=green>" +
                LNG["game_buff" + data[i][j].id] +
                "</b> " +
                LNG.lab1 +
                " <b>" +
                data[i][j].level +
                "</b><br /><br />" +
                LNG.lab392 +
                ": " +
                this.convertSeconds(data[i][j].duration) +
                '</div>"><img src="/gfx/items/0/207/1750.png" /><div></div></div>';
              break;
          }
        }
        con += '<div class="clr"></div></div></div>';
      }
      $("#monthly_vip_rewards").html(con);
      var data = this.vip_data.general,
        con = "";
      var len = data.length;
      var ava = 0;
      if (this.char_data.gvip_level > 0) ava = this.char_data.gvip_level;

      for (var i = 1; i < len; i++) {
        var cls = "";
        if (i != ava) cls = "disabled";
        else if (res.general_lock) cls = "received";
        con +=
          '<div class="vip_cat ' +
          cls +
          ' option"  data-option="obtain_vip" data-vip="1" data-level="' +
          i +
          '"><div class="vip_label">' +
          LNG["vip" + i] +
          '</div><div class="vip_items ekw_page_items">';
        var len2 = data[i].length;
        for (var j = 0; j < len2; j++) {
          switch (data[i][j].type) {
            case 1:
              con +=
                '<div class="ekw_slot" data-toggle="tooltip" data-original-title="<div class=tt>' +
                LNG["shop_chup_" + data[i][j].id] +
                '</div>"><img src="' +
                gfx[data[i][j].id] +
                '" /><div>' +
                data[i][j].am +
                "</div></div>";
              break;
            case 2:
              con +=
                '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
                data[i][j].id +
                '"><img src="' +
                data[i][j].gfx +
                '" /><div>' +
                data[i][j].am +
                "</div></div>";
              break;
            case 3:
              con +=
                '<div class="ekw_slot" data-toggle="tooltip" data-original-title="<div class=tt>' +
                LNG.item_func15 +
                ": <b class=green>" +
                LNG["game_buff" + data[i][j].id] +
                "</b> " +
                LNG.lab1 +
                " <b>" +
                data[i][j].level +
                "</b><br /><br />" +
                LNG.lab392 +
                ": " +
                this.convertSeconds(data[i][j].duration) +
                '</div>"><img src="/gfx/items/0/207/1750.png" /><div></div></div>';
              break;
          }
        }
        con += '<div class="clr"></div></div></div>';
      }
      $("#general_vip_rewards").html(con);
      tooltip_bind();
      option_bind();
      main_ekw_item_bind();
      break;
    case 65:
      this.page_switch("game_weeding");
      $(".weed_page").hide();
      if (this.char_data.spouse > 0) {
        $("#is_married").show();
        $("#my_spouse").text(res.spouse_name);
        var data = res.kids;
        var len = data.length;
        $("#my_kis").text(len);
        $("#kids_limit").text(res.klim);
        var con = "";
        if (res.newborn) {
          con += "<b>" + LNG.lab367 + "</b> ";
          if (res.newborn.status == 0) {
            if (res.newborn.father_id == this.char_id)
              con =
                "<b>" +
                LNG.lab371 +
                '</b> <button class="option btn_small_gold" data-option="newborn_answer" data-ans="1">' +
                LNG.lab194 +
                '</button> <button class="option btn_small_gold" data-option="newborn_answer" data-ans="2">' +
                LNG.lab195 +
                "</button>";
            else con = "<b>" + LNG.lab370 + "</b>";
          } else
            con +=
              LNG.lab368 +
              ": <b>" +
              res.newborn.code +
              "</b> <i>" +
              LNG.lab369 +
              "</i>";
        }
        $("#newborn").html(con);
        var con = "";
        for (var i = 0; i < len; i++) {
          con +=
            '<div>&raquo; <b class="green option" data-option="show_player" data-char_id="' +
            data[i].id +
            '">' +
            data[i].name +
            "</b></div>";
        }
        $("#kids_list").html(con);
        option_bind();
      } else {
        $("#is_single").show();
        if (this.char_data.sex == 1) {
        } else {
          var data = res.invites;
          var len = data.length,
            con = "";
          for (var i = 0; i < len; i++) {
            con +=
              '<div><b class="orange option" data-option="show_player" data-char_id="' +
              data[i].send_id +
              '">' +
              data[i].name +
              "</b> " +
              LNG.lab366 +
              ' : <button class="option btn_small_gold" data-option="proposal_answer" data-pip="' +
              data[i].id +
              '" data-ans="1">' +
              LNG.lab194 +
              '</button> <button class="option btn_small_gold" data-pip="' +
              data[i].id +
              '" data-option="proposal_answer" data-ans="2">' +
              LNG.lab195 +
              "</button></div>";
          }
          $("#weed_proposal_list").html(con);
          option_bind();
        }
      }
      break;
    case 66:
      if (res.report) {
        this.parseFight(JSON.parse(res.report));
      }
      if (res.head) {
        var data = res.rounds,
          con = "<table><tr>";
        var len = data.length;
        var last_num = 0;
        for (var i = 0; i < len; i++) {
          var ado1 = 'class="',
            ado2 = 'class="';
          if (data[i].p1 == data[i].winner) {
            ado1 += "won";
            ado2 += "lost";
          } else {
            ado2 += "won";
            ado1 += "lost";
          }
          if (res.head.type == 0 && data[i].p1_type == 0)
            ado1 +=
              ' option" data-option="show_player" data-char_id="' +
              data[i].p1 +
              "";
          if (res.head.type == 0 && data[i].p2_type == 0)
            ado2 +=
              ' option" data-option="show_player" data-char_id="' +
              data[i].p2 +
              "";
          ado1 += '"';
          ado2 += '"';
          if (data[i].runda != last_num) {
            if (last_num == 0) con += "<td>";
            else con += "</td><td>";
            last_num = data[i].runda;
          }
          con +=
            '<div class="tduel" data-round="' +
            data[i].runda +
            "_" +
            data[i].numer +
            '"><span class="option" data-option="show_tour_fight" data-id="' +
            data[i].id +
            '">' +
            LNG.lab376 +
            " " +
            data[i].runda +
            "_" +
            data[i].numer +
            "</span><div " +
            ado1 +
            ">" +
            data[i].p1_name +
            "</div><div " +
            ado2 +
            ">" +
            data[i].p2_name +
            "</div></div>";
          if (i == len - 1) con += "</td>";
        }
        con += "</tr></table>";
        $("#tour_details_con").html(con);
        $("#tour_list_tab").hide();
        $("#tour_details").show();
        option_bind();
      }
      if (res.tours) {
        var pagi = "";
        var pages = res.all_pages;
        var page = res.page;
        var pagi =
          LNG.lab272 +
          " <b>" +
          page +
          "</b>/<b>" +
          pages +
          '</b> <button class="option newBtn" data-option="show_tour_page" data-page="' +
          (page - 1) +
          '"><<</button> <button class="option newBtn" data-option="show_tour_page" data-page="' +
          (page + 1) +
          '">>></button>';
        var pd = res.pet_data;
        if (pd) {
          $("#tpet_data").html(
            LNG.lab377 +
              ': <b class="item' +
              pd.class +
              '">' +
              pd.name +
              "</b> " +
              this.rebPref(pd.reborn) +
              this.dots(pd.level) +
              ' <button class="newBtn option f_right" data-option="sign_all_pets">' +
              LNG.lab380 +
              "</button>"
          );
        } else $("#tpet_data").text("");
        $("#tour_pagi").html(pagi);
        var con = "",
          data = res.tours;
        var len = data.length;
        var time = this.getTime();
        for (var i = 0; i < len; i++) {
          var ads = "",
            prize = "",
            opts = "";
          switch (data[i].status) {
            case 0:
              if (data[i].end_time < time) {
                data[i].status = 1;
              } else {
                ads =
                  LNG.lab51 + ": " + this.showTimer(data[i].end_time - time);
                var can = false;
                if (
                  data[i].type == 0 &&
                  this.isYourTourCat(
                    data[i].type,
                    data[i].cat,
                    this.char_data.reborn,
                    this.char_data.level
                  )
                )
                  can = true;
                if (
                  data[i].type == 1 &&
                  pd &&
                  pd.level &&
                  this.isYourTourCat(
                    data[i].type,
                    data[i].cat,
                    pd.reborn,
                    pd.level
                  )
                )
                  can = true;
                if (can)
                  opts +=
                    '<button class="option newBtn" data-option="tournament_sign" data-tid="' +
                    data[i].id +
                    '">' +
                    LNG.lab373 +
                    "</button>";
              }
              break;
            case 2:
              var ado = '"';
              if (data[i].type == 0)
                ado =
                  'option" data-option="show_player" data-char_id="' +
                  data[i].winner_id +
                  '"';
              ads =
                '<span class="orange">' +
                this.convertTime(data[i].end_time) +
                "</span> " +
                LNG.lab374 +
                ': <b class="orange ' +
                ado +
                ">" +
                data[i].winner +
                "</b>";
              opts +=
                '<button class="option newBtn" data-option="tournament_details" data-tid="' +
                data[i].id +
                '">' +
                LNG.lab375 +
                "</button>";
              break;
            case 3:
              ads = "" + this.convertTime(data[i].end_time) + "";
              break;
          }
          switch (data[i].prize_type) {
            case 1: //kp
              prize =
                '<span class="orange">' +
                data[i].prize_value +
                '</span> <img src="/gfx/kp.png" />';
              break;
            case 2: //kk
              prize =
                '<span class="green">' +
                data[i].prize_value +
                '</span> <img src="/gfx/kk.png" />';
              break;
            case 3: //item
              prize =
                '<div class="ekw_page_items treward"><div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
                data[i].prize_value +
                '"><img src="' +
                data[i].gfx +
                '" /><div>' +
                data[i].prize_am +
                "</div></div></div>";
              break;
            case 4:
              prize =
                '<span class="green">' +
                data[i].prize_value +
                "</span> " +
                LNG.rap_action26;
              break;
          }
          var cls = "";
          if (data[i].members_in > data[i].max_members)
            data[i].members_in = data[i].max_members;
          con +=
            "<tr><td>" +
            this.tour_kategoria(data[i].cat, data[i].type) +
            "</td><td>" +
            LNG["tour_stat" + data[i].status] +
            ' <span class="grey">' +
            ads +
            '</span></td><td><span class="orange">' +
            data[i].members_in +
            "</span> / " +
            data[i].max_members +
            "</td><td>" +
            prize +
            "</td><td>" +
            opts +
            "</td></tr>";
        }

        $("#tour_list").html(con);
        option_bind();
        tooltip_bind();
        main_ekw_item_bind();
      }
      break;
    case 67:
      if (res.card_data) this.card_data = res.card_data;
      var owned = res.owned || [];
      var len = owned.length;
      var con = "[" + LNG.lab394 + "]";
      $("#sc_slots")
        .removeClass()
        .addClass("slots" + this.char_data.soul_slots);
      if (res.hasOwnProperty("ess"))
        $("#lab_soulessences").text(this.dots(res.ess));
      if (this.char_data.soul_slots < 7)
        $("#soul_upgrade_cost").text(
          this.dots(this.soulCost(this.char_data.soul_slots))
        );
      else $("#soul_upgrade_cost").text("--");
      if (len) {
        con = "";
        $(".card_slot").html("");
        var active_cards = [];
        var sf = false;
        for (var i = 0; i < len; i++) {
          if (!this.card_data.cards[owned[i].card_id]) {
            console.log("wrong card id", owned[i].card_id);
            continue;
          }
          if (owned[i].id == GAME.selected_card) sf = true;
          owned[i].class = this.card_data.cards[owned[i].card_id].class;
          if (owned[i].slot == 0) continue;
          if (owned[i].set_id != this.char_data.sc_set) continue;
          active_cards.push(owned[i].card_id);
        }
        if (!sf) $("#soulcard_menu").hide();
        this.active_cards = active_cards;
        owned = owned.sort(function (a, b) {
          return (
            b.class - a.class || b.card_id - a.card_id || b.level - a.level
          );
        });
        for (var i = 0; i < len; i++) {
          if (owned[i].slot > 0) {
            if (owned[i].set_id == this.char_data.sc_set)
              $("#card_slot" + owned[i].slot).html(
                '<div class="small_card" data-toggle="tooltip_left2" data-original-title="' +
                  this.showCardDesc(
                    owned[i].card_id,
                    this.card_data.cards[owned[i].card_id],
                    owned[i].level
                  ) +
                  '"><span>' +
                  owned[i].level +
                  "</span><i>" +
                  owned[i].stack +
                  '</i><img src="/gfx/cards/' +
                  owned[i].card_id +
                  '.png" /></div>'
              );
          } else
            con +=
              '<div class="small_card card_option" data-card_id="' +
              owned[i].id +
              '" data-stack="' +
              owned[i].stack +
              '" data-toggle="tooltip_left2" data-original-title="' +
              this.showCardDesc(
                owned[i].card_id,
                this.card_data.cards[owned[i].card_id],
                owned[i].level
              ) +
              '"><span>' +
              owned[i].level +
              "</span><i>" +
              owned[i].stack +
              '</i><img src="/gfx/cards/' +
              owned[i].card_id +
              '.png" /></div>';
        }
      }
      $("#sc_upgrades").html(con);
      tooltip_bind();
      $(".card_option")
        .off("click")
        .on("click", function () {
          var th = $(this);
          var pos = th.position();
          $("#soulcard_menu")
            .fadeIn()
            .css({ top: pos.top + "px", left: pos.left - 30 + "px" });
          GAME.selected_card = th.data("card_id");
          GAME.selected_card_stack = th.data("stack");
        });
      break;
    case 68:
      kom_clear();
      GAME.dragged_item = { id: res.iid };
      var kom =
        "<div>" +
        LNG.lab399 +
        '<br /><img src="' +
        res.gfx +
        '" /><div class="game_input small"><input id="item_am" type="text" value="1" data-max="' +
        res.stack +
        '" /></div><button class="set_max btn_small_gold" data-target="#item_am" data-max="' +
        res.stack +
        '">MAX</button><br /><button class="option btn_small_gold" data-option="use_item_m">OK</button></div>';
      GAME.komunikat(kom);
      setmaxBind();
      option_bind();
      $("#item_am").on("input", function () {
        var val = $(this).val();
        var max = parseInt($(this).data("max"));
        if (val > max) {
          val = max;
          $(this).val(val);
        }
      });
      break;
    case 69:
      if (res.soultower) this.soultower = res.soultower;
      var bons = "";
      var len = this.soultower.levels.length;
      for (var i = 0; i < len; i++) {
        var cls = "",
          cls2 = "";
        if (this.char_data.soul_floor >= this.soultower.levels[i])
          cls = "orange";
        else {
          cls = "red";
          cls2 = "grey";
        }
        bons +=
          "&raquo; <b class=" +
          cls +
          ">" +
          this.soultower.levels[i] +
          "+</b><br />";
        if (this.soultower[this.soultower.levels[i]]) {
          var stats = this.soultower[this.soultower.levels[i]];
          var len2 = stats.length;
          for (var j = 0; j < len2; j++) {
            bons +=
              "<b class=green>" +
              stats[j].val +
              "</b> <span class=" +
              cls2 +
              ">" +
              this.item_stat(stats[j].stat) +
              "</span><br />";
          }
        }
      }
      bons += "";
      $("#soul_bonuses").html(bons);
      var time = this.getTime();
      if (res.cd > time) {
        $("#ss_cd_still").show();
        $("#ss_timer").html(this.showTimer(res.cd - time, 'data-special="11"'));
      } else $("#ss_cd_still").hide();
      break;
    case 70:
      var lock = res.list;
      var len = lock.length;
      var con = "";
      for (var i = 0; i < len; i++) {
        con +=
          '<b class="option" data-option="show_player" data-char_id="' +
          lock[i].lock_id +
          '">' +
          lock[i].name +
          '</b> <button class="newBtn option" data-option="remove_lock" data-char_id="' +
          lock[i].id +
          '">' +
          LNG.lab192 +
          "</button><br />";
      }
      $("#lock_list").html(con);
      option_bind();
      break;
    case 71:
      var lssj = res.lssj;
      var blood = parseInt(res.blood);
      $("#brolly_blood").text(this.dots(blood));
      var len = lssj.max;
      var con = "";
      for (var i = 1; i <= len; i++) {
        var cls = "green",
          bons = "",
          opt = "",
          act = "";
        if (blood < lssj[i].item[2]) cls = "red";
        for (var j = 0; j < lssj[i].bonuses.length; j++) {
          bons +=
            "<b>" +
            lssj[i].bonuses[j][1] +
            '</b> <span class="green">' +
            this.item_stat(lssj[i].bonuses[j][0]) +
            "</span><br />";
        }
        var req =
          this.rebPref(lssj[i].reborn) +
          ' <b class="' +
          cls +
          '">' +
          LNG.lab404 +
          " x" +
          lssj[i].item[2] +
          "</b>";
        if (i <= this.char_data.lssj) req = LNG.lab405;
        else if (i == this.char_data.lssj + 1)
          opt =
            '<button class="btn_small_gold option" data-option="lssj_upgrade">' +
            LNG.lab406 +
            "</button>";
        if (i == this.char_data.lssj) act = "active";
        con +=
          '<tr class="lssj ' +
          act +
          '"><td class="ac">' +
          i +
          "</td><td>" +
          req +
          '</td><td class="ac">' +
          opt +
          "</td><td>" +
          bons +
          "</td></tr>";
      }
      $("#lssj_data").html(con);
      option_bind();
      break;
    case 72:
      var data = res.masters;
      var len = data.length;
      var con = "";
      for (var i = 0; i < len; i++) {
        var r = i + 1;
        var cls = "";
        if (r <= 7) cls = "mastery";
        var type = '<img src="/gfx/kk.png" />';
        if (data[i].mastery_cost) type = '<img src="/gfx/kp.png" />';
        con +=
          '<tr class="' +
          cls +
          '"><td>' +
          r +
          '</td><td><b class="option orange" data-option="show_player" data-char_id="' +
          data[i].id +
          '">' +
          data[i].name +
          "</b></td><td>" +
          data[i].mastery_lvl +
          ' <small class="grey">( ' +
          this.dots(data[i].mastery_exp2) +
          " ) </small></td><td>" +
          type +
          "</td></tr>";
      }
      $("#top_masters").html(con);
      option_bind();
      break;
    case 73:
      var data = res.destinity;
      var bv = parseInt(res.bv);
      var wv = parseInt(res.wv);
      $("#black_bvials").text(this.dots(bv));
      $("#black_wvials").text(this.dots(wv));
      $("#black_condemed_level").text(this.char_data.black_condemed_lvl + 1);
      $("#black_saint_level").text(this.char_data.black_saint_lvl + 1);
      $("#black_bvials_needed").text(
        this.dots(this.blackFateNext(0, this.char_data.black_condemed_lvl))
      );
      $("#black_wvials_needed").text(
        this.dots(this.blackFateNext(1, this.char_data.black_saint_lvl))
      );

      var stat = "";
      var time = this.getTime();
      var cur_bons = [];
      var labs = ["#bv_bonus", "#wv_bonus"];
      var clabs = ["black_condemed_lvl", "black_saint_lvl"];
      for (var i = 0; i < 2; i++) {
        cur_bons[i] = "";
        var con = "";
        var cnt = data[i].length;
        for (var j = 0; j < cnt; j++) {
          var bons = "";
          var cval = 0;
          for (var l = 0; l < 5; l++) {
            if (this.char_data[clabs[i]] == l) {
              bons += '<b class="green">' + data[i][j].val[l] + "</b>";
            } else bons += data[i][j].val[l];
            if (l < 4) bons += "/";
            if (l == this.char_data.black_decoct_lvl) cval = data[i][j].val[l];
          }
          if (data[i][j].reborn <= this.char_data.reborn)
            cur_bons[i] +=
              '<b class="green">' +
              cval +
              '</b><span class="item_stat">' +
              this.item_stat(data[i][j].stat) +
              "</span><br />";
          con +=
            "<tr><td>" +
            this.rebPref(data[i][j].reborn) +
            "</td><td>" +
            bons +
            '<span class="item_stat">' +
            this.item_stat(data[i][j].stat) +
            "</span></td></tr>";
        }
        $(labs[i]).html(con);
      }
      if (this.char_data.black_decoct_expires > time) {
        stat =
          "<b>" +
          LNG.lab427 +
          "</b> " +
          LNG.lab1 +
          " " +
          (this.char_data.black_decoct_lvl + 1) +
          "<br />" +
          LNG.lab51 +
          " " +
          this.showTimer(this.char_data.black_decoct_expires - time) +
          "<br />" +
          cur_bons[this.char_data.black_decoct - 1];
      } else if (this.char_data.black_decoct_cd > time)
        stat =
          "<b>" +
          LNG.error194 +
          " : " +
          this.showTimer(this.char_data.black_decoct_cd - time) +
          "</b>";
      $("#decoct_status").html(stat);
      option_bind();
      break;
    case 74:
      var data = res.bardock_bonus;
      var pt = [0, 0];
      if (this.char_data.bardock_points < 0)
        pt[0] = this.char_data.bardock_points * -1;
      else pt[1] = this.char_data.bardock_points;
      $("#bardock_p0").text(pt[0]);
      $("#bardock_p1").text(pt[1]);

      var stat = "";
      var time = this.getTime();
      var cur_bons = "";
      var labs = ["#b0_bonus", "#b1_bonus"];
      for (var i = 0; i < 2; i++) {
        var con = "";
        var cnt = data[i].length;
        for (var j = 0; j < cnt; j++) {
          var bons = "";
          var cval = 0;
          var opt = "";
          bons += '<b class="green">' + data[i][j].val + "</b>";
          cval = data[i][j].val;

          if (
            this.char_data.black_decoct - 1 == i &&
            this.char_data.black_decoct_lvl == j
          )
            cur_bons =
              '<b class="green">' +
              cval +
              '</b><span class="item_stat">' +
              this.item_stat(data[i][j].stat) +
              "</span><br />";
          if (
            data[i][j].reborn <= this.char_data.reborn &&
            pt[i] >= data[i][j].cost
          )
            opt =
              '<button class="option btn_small_gold" data-option="bfate_init2" data-fid="' +
              i +
              '" data-ind="' +
              j +
              '">Aktywuj</button>';
          con +=
            "<tr><td>" +
            this.rebPref(data[i][j].reborn) +
            "</td><td>" +
            bons +
            '<span class="item_stat">' +
            this.item_stat(data[i][j].stat) +
            "</span></td><td>" +
            data[i][j].cost +
            "</td><td>" +
            opt +
            "</td></tr>";
        }
        $(labs[i]).html(con);
      }
      if (this.char_data.black_decoct_expires > time) {
        stat =
          "<b>" +
          LNG.lab443 +
          "</b> <br />" +
          LNG.lab51 +
          " " +
          this.showTimer(this.char_data.black_decoct_expires - time) +
          " : " +
          cur_bons;
      } else if (this.char_data.black_decoct_cd > time)
        stat =
          "<b>" +
          LNG.error194 +
          " : " +
          this.showTimer(this.char_data.black_decoct_cd - time) +
          "</b>";
      $("#decoct_status2").html(stat);
      option_bind();
      break;
  }
};
GAME.blackFateNext = function (fate, lvl) {
  var ratio = 150;
  if (fate == 1) ratio = 1500;
  return (lvl + 1) * ratio;
};
GAME.showCardDesc = function (card_id, card_data, level) {
  var desc =
    "<div class=cardtt><div class=soulcard><span>" +
    level +
    "</span><img src=/gfx/cards/" +
    card_id +
    ".png /></div>";
  var bon = card_data.main_stat.value * level;
  desc +=
    "<div class=card_right><h3>" +
    card_data.name +
    "</h3><b class=cardclass" +
    card_data.class +
    ">" +
    LNG["card_class" + card_data.class] +
    "</b><br />" +
    LNG.lab395 +
    ": <span class=stat><b>" +
    bon +
    "</b> " +
    this.item_stat(card_data.main_stat.stat) +
    "</span><br /><br />" +
    LNG.lab396 +
    "<br />";
  var len = card_data.base_stats.length;
  for (var i = 0; i < len; i++) {
    var cls = "green",
      cls2 = "stat";
    if (level < card_data.base_stats[i].need_lvl) {
      cls = "red";
      cls2 = "grey";
    }
    desc +=
      "<span class=" +
      cls +
      ">" +
      LNG.lab397 +
      " <b>" +
      card_data.base_stats[i].need_lvl +
      "</b> : <span class=" +
      cls2 +
      "><b>" +
      card_data.base_stats[i].value +
      "</b> " +
      this.item_stat(card_data.base_stats[i].stat) +
      "</span></span><br />";
  }
  var len = card_data.set_stats.length;
  desc += "<br />" + LNG.lab398 + ":<br />";
  for (var i = 0; i < len; i++) {
    var cls = "red";
    var set = card_data.set_stats[i].set_id;
    var len2 = this.card_data.sets[set].cards.length,
      has_all = true,
      parts = "";
    for (var j = 0; j < len2; j++) {
      var cls = "red";
      if (this.active_cards.indexOf(this.card_data.sets[set].cards[j]) != -1)
        cls = "green";
      else has_all = false;
      parts +=
        "<span class=" +
        cls +
        ">" +
        this.card_data.cards[this.card_data.sets[set].cards[j]].name +
        "</span> ";
    }
    var cls = "red",
      cls2 = "grey";
    if (has_all) {
      cls = "green";
      cls2 = "stat";
    }
    desc +=
      "<div class=cardset><b class=" +
      cls +
      ">" +
      this.card_data.sets[set][this.lang] +
      "</b>: ( " +
      parts;
    desc +=
      ")<br /><span class=" +
      cls2 +
      "><b>" +
      card_data.set_stats[i].value +
      "</b> " +
      this.item_stat(card_data.set_stats[i].stat) +
      "</span></div>";
  }
  desc += "</div><div class=clr></div></div>";
  return desc;
};
GAME.soulCost = function (current) {
  switch (current) {
    case 2:
      return 100;
    case 3:
      return 500;
    case 4:
      return 4000;
    case 5:
      return 30000;
    case 6:
      return 200000;
    default:
      return 99999999;
  }
};
GAME.tour_kategoria = function (id, type) {
  var wynik = "";
  switch (type) {
    case 1:
      switch (id) {
        case 1:
          wynik = "1-19";
          break;
        case 2:
          wynik = "20-49";
          break;
        case 3:
          wynik = "50-79";
          break;
        case 4:
          wynik = "80-99";
          break;
        case 5:
          wynik = "100-129";
          break;
        case 6:
          wynik = "130-169";
          break;
        case 7:
          wynik = "170-199";
          break;
        case 8:
          wynik = "200-249";
          break;
        case 9:
          wynik = "250-299";
          break;
        case 10:
          wynik = "300-349";
          break;
        case 11:
          wynik = "350-399";
          break;
        case 12:
          wynik = "400-449";
          break;
        case 13:
          wynik = "450-519";
          break;
        case 14:
          wynik = "520-599";
          break;
        case 15:
          wynik = "600-759";
          break;
        case 16:
          wynik = "760-839";
          break;
        case 17:
          wynik = "840-999";
          break;
        case 18:
          wynik = "1000-1169";
          break;
        case 19:
          wynik = "1170-1250";
          break;
        case 20:
          wynik = this.rebPref(1) + "1-549";
          break;
        case 21:
          wynik = this.rebPref(1) + "550-949";
          break;
        case 22:
          wynik = this.rebPref(1) + "950-1250";
          break;
        case 23:
          wynik = this.rebPref(2) + "1-549";
          break;
        case 24:
          wynik = this.rebPref(2) + "550-949";
          break;
        case 25:
          wynik = this.rebPref(2) + "950-1250";
          break;
        case 26:
          wynik = this.rebPref(3) + "1-549";
          break;
        case 27:
          wynik = this.rebPref(3) + "550-949";
          break;
        case 28:
          wynik = this.rebPref(3) + "950-1250";
          break;
        case 29:
          wynik = this.rebPref(4) + "1-549";
          break;
        case 30:
          wynik = this.rebPref(4) + "550-949";
          break;
        case 31:
          wynik = this.rebPref(4) + "950-1250";
          break;
        case 32:
          wynik = this.rebPref(5) + "1-549";
          break;
        case 33:
          wynik = this.rebPref(5) + "550-949";
          break;
        case 34:
          wynik = this.rebPref(5) + "950-1250";
          break;
      }
      break;
    default:
      switch (id) {
        case 1:
          wynik = "1-19";
          break;
        case 2:
          wynik = "20-49";
          break;
        case 3:
          wynik = "50-79";
          break;
        case 4:
          wynik = "80-99";
          break;
        case 5:
          wynik = "100-129";
          break;
        case 6:
          wynik = "130-169";
          break;
        case 7:
          wynik = "170-199";
          break;
        case 8:
          wynik = "200-249";
          break;
        case 9:
          wynik = "250-299";
          break;
        case 10:
          wynik = "300-349";
          break;
        case 11:
          wynik = "350-399";
          break;
        case 12:
          wynik = "400-449";
          break;
        case 13:
          wynik = "450-519";
          break;
        case 14:
          wynik = "520-599";
          break;
        case 15:
          wynik = "600-759";
          break;
        case 16:
          wynik = "760-839";
          break;
        case 17:
          wynik = "840-999";
          break;
        case 18:
          wynik = "1000-1169";
          break;
        case 19:
          wynik = "1170-1250";
          break;
        case 20:
          wynik = this.rebPref(1) + "1-499";
          break;
        case 21:
          wynik = this.rebPref(1) + "500-799";
          break;
        case 22:
          wynik = this.rebPref(1) + "800-899";
          break;
        case 23:
          wynik = this.rebPref(1) + "900-999";
          break;
        case 24:
          wynik = this.rebPref(1) + "1000-1099";
          break;
        case 25:
          wynik = this.rebPref(1) + "1100-1199";
          break;
        case 26:
          wynik = this.rebPref(1) + "1200-1249";
          break;
        case 27:
          wynik = this.rebPref(1) + "1250";
          break;
        case 28:
          wynik = this.rebPref(2) + "1-499";
          break;
        case 29:
          wynik = this.rebPref(2) + "500-799";
          break;
        case 30:
          wynik = this.rebPref(2) + "800-899";
          break;
        case 31:
          wynik = this.rebPref(2) + "900-999";
          break;
        case 32:
          wynik = this.rebPref(2) + "1000-1099";
          break;
        case 33:
          wynik = this.rebPref(2) + "1100-1199";
          break;
        case 34:
          wynik = this.rebPref(2) + "1200-1249";
          break;
        case 35:
          wynik = this.rebPref(2) + "1250+";
          break;
        case 36:
          wynik = this.rebPref(3) + "1-99";
          break;
        case 37:
          wynik = this.rebPref(3) + "100-499";
          break;
        case 38:
          wynik = this.rebPref(3) + "500-999";
          break;
        case 39:
          wynik = this.rebPref(3) + "1000-1249";
          break;
        case 40:
          wynik = this.rebPref(3) + "1250+";
          break;
        case 41:
          wynik = this.rebPref(4) + "1-99";
          break;
        case 42:
          wynik = this.rebPref(4) + "100-499";
          break;
        case 43:
          wynik = this.rebPref(4) + "500-999";
          break;
        case 44:
          wynik = this.rebPref(4) + "1000-1249";
          break;
        case 45:
          wynik = this.rebPref(4) + "1250-1999";
          break;
        case 46:
          wynik = this.rebPref(4) + "2000-4999";
          break;
        case 47:
          wynik = this.rebPref(4) + "5000-9999";
          break;
        case 48:
          wynik = this.rebPref(4) + "10000-14999";
          break;
        case 49:
          wynik = this.rebPref(4) + "15000-19999";
          break;
        case 50:
          wynik = this.rebPref(4) + "20000-24999";
          break;
        case 51:
          wynik = this.rebPref(4) + "25000-34999";
          break;
        case 52:
          wynik = this.rebPref(4) + "35000-49999";
          break;
        case 53:
          wynik = this.rebPref(4) + "50000-59999";
          break;
        case 54:
          wynik = this.rebPref(4) + "60000+";
          break;
        case 55:
          wynik = this.rebPref(5) + "1-99";
          break;
        case 56:
          wynik = this.rebPref(5) + "100-499";
          break;
        case 57:
          wynik = this.rebPref(5) + "500-999";
          break;
        case 58:
          wynik = this.rebPref(5) + "1000-1249";
          break;
        case 59:
          wynik = this.rebPref(5) + "1250-1999";
          break;
        case 60:
          wynik = this.rebPref(5) + "2000-4999";
          break;
        case 61:
          wynik = this.rebPref(5) + "5000-9999";
          break;
        case 62:
          wynik = this.rebPref(5) + "10000-14999";
          break;
        case 63:
          wynik = this.rebPref(5) + "15000-19999";
          break;
        case 64:
          wynik = this.rebPref(5) + "20000-24999";
          break;
        case 65:
          wynik = this.rebPref(5) + "25000-34999";
          break;
        case 66:
          wynik = this.rebPref(5) + "35000-49999";
          break;
        case 67:
          wynik = this.rebPref(5) + "50000-59999";
          break;
        case 68:
          wynik = this.rebPref(5) + "60000-79999";
          break;
        case 69:
          wynik = this.rebPref(5) + "80000+";
          break;
      }
      break;
  }
  return wynik;
};
GAME.isYourTourCat = function (type, cat, reborn, level) {
  switch (type) {
    case 1:
      switch (cat) {
        case 1:
          if (reborn == 0 && level <= 19) return true;
          break;
        case 2:
          if (reborn == 0 && level >= 20 && level <= 49) return true;
          break;
        case 3:
          if (reborn == 0 && level >= 50 && level <= 79) return true;
          break;
        case 4:
          if (reborn == 0 && level >= 80 && level <= 99) return true;
          break;
        case 5:
          if (reborn == 0 && level >= 100 && level <= 129) return true;
          break;
        case 6:
          if (reborn == 0 && level >= 130 && level <= 169) return true;
          break;
        case 7:
          if (reborn == 0 && level >= 170 && level <= 199) return true;
          break;
        case 8:
          if (reborn == 0 && level >= 200 && level <= 249) return true;
          break;
        case 9:
          if (reborn == 0 && level >= 250 && level <= 299) return true;
          break;
        case 10:
          if (reborn == 0 && level >= 300 && level <= 349) return true;
          break;
        case 11:
          if (reborn == 0 && level >= 350 && level <= 399) return true;
          break;
        case 12:
          if (reborn == 0 && level >= 400 && level <= 449) return true;
          break;
        case 13:
          if (reborn == 0 && level >= 450 && level <= 519) return true;
          break;
        case 14:
          if (reborn == 0 && level >= 520 && level <= 599) return true;
          break;
        case 15:
          if (reborn == 0 && level >= 600 && level <= 759) return true;
          break;
        case 16:
          if (reborn == 0 && level >= 760 && level <= 839) return true;
          break;
        case 17:
          if (reborn == 0 && level >= 840 && level <= 999) return true;
          break;
        case 18:
          if (reborn == 0 && level >= 1000 && level <= 1169) return true;
          break;
        case 19:
          if (reborn == 0 && level >= 1170 && level <= 1250) return true;
          break;
        case 20:
          if (reborn == 1 && level >= 1 && level <= 549) return true;
          break;
        case 21:
          if (reborn == 1 && level >= 550 && level <= 949) return true;
          break;
        case 22:
          if (reborn == 1 && level >= 950 && level <= 1250) return true;
          break;
        case 23:
          if (reborn == 2 && level >= 1 && level <= 549) return true;
          break;
        case 24:
          if (reborn == 2 && level >= 550 && level <= 949) return true;
          break;
        case 25:
          if (reborn == 2 && level >= 950 && level <= 1250) return true;
          break;
        case 26:
          if (reborn == 3 && level >= 1 && level <= 549) return true;
          break;
        case 27:
          if (reborn == 3 && level >= 550 && level <= 949) return true;
          break;
        case 28:
          if (reborn == 3 && level >= 950 && level <= 1250) return true;
          break;
        case 29:
          if (reborn == 4 && level >= 1 && level <= 549) return true;
          break;
        case 30:
          if (reborn == 4 && level >= 550 && level <= 949) return true;
          break;
        case 31:
          if (reborn == 4 && level >= 950 && level <= 1250) return true;
          break;
        case 32:
          if (reborn == 5 && level >= 1 && level <= 549) return true;
          break;
        case 33:
          if (reborn == 5 && level >= 550 && level <= 949) return true;
          break;
        case 34:
          if (reborn == 5 && level >= 950 && level <= 1250) return true;
          break;
      }
      break;
    default:
      switch (cat) {
        case 1:
          if (reborn == 0 && level <= 19) return true;
          break;
        case 2:
          if (reborn == 0 && level >= 20 && level <= 49) return true;
          break;
        case 3:
          if (reborn == 0 && level >= 50 && level <= 79) return true;
          break;
        case 4:
          if (reborn == 0 && level >= 80 && level <= 99) return true;
          break;
        case 5:
          if (reborn == 0 && level >= 100 && level <= 129) return true;
          break;
        case 6:
          if (reborn == 0 && level >= 130 && level <= 169) return true;
          break;
        case 7:
          if (reborn == 0 && level >= 170 && level <= 199) return true;
          break;
        case 8:
          if (reborn == 0 && level >= 200 && level <= 249) return true;
          break;
        case 9:
          if (reborn == 0 && level >= 250 && level <= 299) return true;
          break;
        case 10:
          if (reborn == 0 && level >= 300 && level <= 349) return true;
          break;
        case 11:
          if (reborn == 0 && level >= 350 && level <= 399) return true;
          break;
        case 12:
          if (reborn == 0 && level >= 400 && level <= 449) return true;
          break;
        case 13:
          if (reborn == 0 && level >= 450 && level <= 519) return true;
          break;
        case 14:
          if (reborn == 0 && level >= 520 && level <= 599) return true;
          break;
        case 15:
          if (reborn == 0 && level >= 600 && level <= 759) return true;
          break;
        case 16:
          if (reborn == 0 && level >= 760 && level <= 839) return true;
          break;
        case 17:
          if (reborn == 0 && level >= 840 && level <= 999) return true;
          break;
        case 18:
          if (reborn == 0 && level >= 1000 && level <= 1169) return true;
          break;
        case 19:
          if (reborn == 0 && level >= 1170 && level <= 1250) return true;
          break;
        case 20:
          if (reborn == 1 && level >= 1 && level <= 499) return true;
          break;
        case 21:
          if (reborn == 1 && level >= 500 && level <= 799) return true;
          break;
        case 22:
          if (reborn == 1 && level >= 800 && level <= 899) return true;
          break;
        case 23:
          if (reborn == 1 && level >= 900 && level <= 999) return true;
          break;
        case 24:
          if (reborn == 1 && level >= 1000 && level <= 1099) return true;
          break;
        case 25:
          if (reborn == 1 && level >= 1100 && level <= 1199) return true;
          break;
        case 26:
          if (reborn == 1 && level >= 1200 && level <= 1249) return true;
          break;
        case 27:
          if (reborn == 1 && level == 1250) return true;
          break;
        case 28:
          if (reborn == 2 && level >= 1 && level <= 499) return true;
          break;
        case 29:
          if (reborn == 2 && level >= 500 && level <= 799) return true;
          break;
        case 30:
          if (reborn == 2 && level >= 800 && level <= 899) return true;
          break;
        case 31:
          if (reborn == 2 && level >= 900 && level <= 999) return true;
          break;
        case 32:
          if (reborn == 2 && level >= 1000 && level <= 1099) return true;
          break;
        case 33:
          if (reborn == 2 && level >= 1100 && level <= 1199) return true;
          break;
        case 34:
          if (reborn == 2 && level >= 1200 && level <= 1249) return true;
          break;
        case 35:
          if (reborn == 2 && level >= 1250) return true;
          break;
        case 36:
          if (reborn == 3 && level >= 1 && level <= 99) return true;
          break;
        case 37:
          if (reborn == 3 && level >= 100 && level <= 499) return true;
          break;
        case 38:
          if (reborn == 3 && level >= 500 && level <= 999) return true;
          break;
        case 39:
          if (reborn == 3 && level >= 1000 && level <= 1249) return true;
          break;
        case 40:
          if (reborn == 3 && level >= 1250) return true;
          break;
        case 41:
          if ((reborn == 4) & (level >= 1) && level <= 99) return true;
          break;
        case 42:
          if ((reborn == 4) & (level >= 100) && level <= 499) return true;
          break;
        case 43:
          if ((reborn == 4) & (level >= 500) && level <= 999) return true;
          break;
        case 44:
          if ((reborn == 4) & (level >= 1000) && level <= 1249) return true;
          break;
        case 45:
          if ((reborn == 4) & (level >= 1250) && level <= 1999) return true;
          break;
        case 46:
          if ((reborn == 4) & (level >= 2000) && level <= 4999) return true;
          break;
        case 47:
          if ((reborn == 4) & (level >= 5000) && level <= 9999) return true;
          break;
        case 48:
          if ((reborn == 4) & (level >= 10000) && level <= 14999) return true;
          break;
        case 49:
          if ((reborn == 4) & (level >= 15000) && level <= 19999) return true;
          break;
        case 50:
          if ((reborn == 4) & (level >= 20000) && level <= 24999) return true;
          break;
        case 51:
          if ((reborn == 4) & (level >= 25000) && level <= 34999) return true;
          break;
        case 52:
          if ((reborn == 4) & (level >= 35000) && level <= 49999) return true;
          break;
        case 53:
          if ((reborn == 4) & (level >= 50000) && level <= 59999) return true;
          break;
        case 54:
          if ((reborn == 4) & (level >= 60000)) return true;
          break;
        case 55:
          if ((reborn == 5) & (level >= 1) && level <= 99) return true;
          break;
        case 56:
          if ((reborn == 5) & (level >= 100) && level <= 499) return true;
          break;
        case 57:
          if ((reborn == 5) & (level >= 500) && level <= 999) return true;
          break;
        case 58:
          if ((reborn == 5) & (level >= 1000) && level <= 1249) return true;
          break;
        case 59:
          if ((reborn == 5) & (level >= 1250) && level <= 1999) return true;
          break;
        case 60:
          if ((reborn == 5) & (level >= 2000) && level <= 4999) return true;
          break;
        case 61:
          if ((reborn == 5) & (level >= 5000) && level <= 9999) return true;
          break;
        case 62:
          if ((reborn == 5) & (level >= 10000) && level <= 14999) return true;
          break;
        case 63:
          if ((reborn == 5) & (level >= 15000) && level <= 19999) return true;
          break;
        case 64:
          if ((reborn == 5) & (level >= 20000) && level <= 24999) return true;
          break;
        case 65:
          if ((reborn == 5) & (level >= 25000) && level <= 34999) return true;
          break;
        case 66:
          if ((reborn == 5) & (level >= 35000) && level <= 49999) return true;
          break;
        case 67:
          if ((reborn == 5) & (level >= 50000) && level <= 59999) return true;
          break;
        case 68:
          if ((reborn == 5) & (level >= 60000) && level <= 79999) return true;
          break;
        case 69:
          if ((reborn == 5) & (level >= 80000)) return true;
          break;
      }
      break;
  }
};
GAME.checkTutorial = function () {
  if (!this.current_tutorial) {
    var done = [];
    var len = this.tutorials.length;
    for (var i = 0; i < len; i++) done.push(this.tutorials[i].tutorial);

    var len = this.tutorial_data.cnt;
    for (var i = 1; i <= len; i++) {
      if (done.indexOf(i) != -1) continue;
      var tut = this.tutorial_data["t" + i];
      if (tut.auto_start) {
        var rreb = 0;
        if (tut.req_reb) rreb = tut.req_reb;
        if (!this.levelReqCheck(tut.req_lvl, rreb)) continue;
        this.startTutorial(i);
        break;
      }
    }
  }
};
GAME.showTutorialStep = function () {
  $("#tutorial_button1").hide();
  $("#tutorial_arrow").hide();
  if (this.current_tutorial) {
    var tut = this.tutorial_data["t" + this.current_tutorial.id],
      step_done = true;
    if (tut && tut.steps) {
      if (tut.steps[this.current_tutorial.step]) {
        var step = tut.steps[this.current_tutorial.step];
        if (step.requirement.type == 4) $("#tutorial_button1").show();
        $("#tutorial_content").html(step["content_" + this.lang]);
        $("#tutorial_frame").fadeIn();
        if (step.arrow) this.show_arrow_move(step.arrow[0], step.arrow[1]);
        $("#tutorial_frame").show();
      } else {
        if (this.current_tutorial.step >= tut.steps.length) {
          this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 52,
            type: 0,
            tutorial: this.current_tutorial.id,
          });
          this.cancelTutorial();
        }
      }
    }
  } else {
    $("#tutorial_frame").hide();
  }
};
GAME.tutorialReqDone = function (req, opt = "") {
  if (this.current_tutorial) {
    var tut = this.tutorial_data["t" + this.current_tutorial.id];
    if (tut && tut.steps && tut.steps[this.current_tutorial.step]) {
      var step = tut.steps[this.current_tutorial.step];
      if (step.requirement && step.requirement.type == req) {
        var go = true;
        if (step.requirement.opt && opt != step.requirement.opt) go = false;
        if (go) {
          this.current_tutorial.step++;
          this.showTutorialStep();
        }
      }
    }
  }
};
GAME.show_arrow_move = function (pointer_element, move_type) {
  var coords = $(pointer_element).offset();
  if (coords) {
    $("#tutorial_arrow").css({
      top: coords.top - this.tutorial_arrow_width + "px",
      left: coords.left - this.tutorial_arrow_width + "px",
    });
    this.arrow_move($("#tutorial_arrow"), move_type, 400);
    $("#tutorial_arrow").fadeIn();
  }
};

GAME.arrow_move = function (container, direction, speed) {
  container.removeClass().addClass("ani-" + direction);
};
GAME.startTutorial = function (t) {
  this.current_tutorial = { id: t, step: 0 };
  this.showTutorialStep();
  $("#tutorial").hide();
};
GAME.cancelTutorial = function () {
  delete this.current_tutorial;
  this.showTutorialStep();
  $("#tutorial").hide();
};
GAME.tutprizelist = function (prize) {
  var list = "";
  for (var i = 0; i < prize.length; i++) {
    switch (prize[i].type) {
      case 1:
        list +=
          "<b>" + prize[i].amount + '</b> <img src="/gfx/kk.png" /><br />';
        break;
      case 2:
        list +=
          "<b>" +
          this.dots(prize[i].amount) +
          "</b> " +
          LNG.item_stat6 +
          "<br />";
        break;
      case 3:
        list +=
          "<b>" + prize[i].amount + "</b> " + LNG.quest_prize21 + "<br />";
        break;
    }
  }
  return list;
};
GAME.empireSide = function (empire) {
  if (empire == 1 || empire == 3)
    return '<b class="red">' + LNG.lab337 + "</b>";
  else return '<b class="green">' + LNG.lab338 + "</b>";
};
GAME.leader_num = function (num) {
  if (num <= 20) return LNG["lnum" + num];
  else return num;
};
GAME.getEmpDetails = function (petd) {
  var res = "<div class=ptt>";
  var nextp = this.employe_exp(petd.level + 1);
  res +=
    "<img src=/gfx/employee/" +
    petd.type +
    ".png width=100 align=left /><b>" +
    petd.name +
    "</b><br /><b>" +
    LNG["emptyp" + petd.type] +
    "</b> - <b class=item" +
    petd.class +
    ">" +
    LNG["item_class" + petd.class] +
    "</b><br />" +
    LNG.lab1 +
    ": <b>" +
    this.dots(petd.level) +
    "</b><br />EXP: <b>" +
    this.dots(petd.exp) +
    " / " +
    this.dots(nextp) +
    "</b><br /><br /><b class=orange>" +
    LNG.lab286 +
    "</b><br />";
  res +=
    LNG.lab313 +
    ": <b>" +
    petd.energy +
    "</b> / <b>" +
    petd.maxenergy +
    "</b><br />";
  if (petd.qualified) res += "<b class=green>" + LNG.lab314 + "</b><br />";
  res += "</div>";
  return res;
};
GAME.getPetDetails = function (petd) {
  var res = "<div class=ptt>";
  var evof = 0;
  if (petd.evo_lvl < 12) evof = 1;
  else if (petd.evo_lvl < 18) evof = 2;
  else evof = 3;

  var nextp = this.pet_exp(petd.level + 1, petd.reborn);
  var nexep = this.pet_eexp(petd.evo_lvl + 1);
  var moc = petd.sila + petd.szyb + petd.wytrz + petd.swoli + petd.ki;
  res +=
    "<img src=/gfx/pets/" +
    petd.type +
    "/" +
    evof +
    ".png width=100 align=left /><b>" +
    petd.name +
    "</b><br />" +
    LNG.lab283 +
    ": <b>" +
    LNG["pettyp" + petd.type] +
    "</b> - <b class=item" +
    petd.class +
    ">" +
    LNG["item_class" + petd.class] +
    "</b><br />" +
    LNG.lab284 +
    ": <b>" +
    petd.evo_lvl +
    "</b> (" +
    this.dots(petd.evo_exp) +
    "/" +
    this.dots(nexep) +
    ")<br /><br />" +
    LNG.lab1 +
    ": <b>" +
    this.rebPref(petd.reborn) +
    this.dots(petd.level) +
    "</b><br />EXP: <b>" +
    this.dots(petd.exp) +
    " / " +
    this.dots(nextp) +
    "</b><br /><br /><b class=orange>" +
    LNG.lab286 +
    "</b><br />";
  res += LNG.atr1 + ": <b>" + this.dots(petd.sila) + "</b><br />";
  res += LNG.atr2 + ": <b>" + this.dots(petd.szyb) + "</b><br />";
  res += LNG.atr3 + ": <b>" + this.dots(petd.wytrz) + "</b><br />";
  res += LNG.atr4 + ": <b>" + this.dots(petd.swoli) + "</b><br />";
  res += LNG.atr5 + ": <b>" + this.dots(petd.ki) + "</b><br />";
  res +=
    "<u>" +
    LNG.crank_moc +
    "</u>: <b>" +
    this.dots(moc) +
    LNG.lab10 +
    "</b><br />";
  if (petd.crit > 0)
    res +=
      "" +
      LNG.lab287 +
      ": <b class=green>" +
      this.dots(petd.crit) +
      "%</b><br />";
  if (petd.acrit > 0)
    res +=
      "" +
      LNG.lab288 +
      ": <b class=green>" +
      this.dots(petd.acrit) +
      "%</b><br />";
  res +=
    "<br /><b class=orange>" +
    LNG.lab289 +
    ":</b><br />1: <b>" +
    LNG["skill_name" + petd.skill1] +
    "</b> - " +
    LNG.lab1 +
    " " +
    petd.evo_lvl +
    "<br />2: <b>" +
    LNG["skill_name" + petd.skill2] +
    "</b> - " +
    LNG.lab1 +
    " " +
    petd.evo_lvl +
    "<br />";
  if (petd.skill3 > 0)
    res +=
      "3: <b>" +
      LNG["skill_name" + petd.skill3] +
      "</b> - " +
      LNG.lab1 +
      " " +
      petd.evo_lvl +
      "<br />";
  res += "<br /><b class=orange>" + LNG.lab290 + ":</b><br />";
  if (petd.bonus)
    res +=
      "&raquo; <span class=green>" +
      petd.bonus_val * petd.evo_lvl +
      "</span> " +
      this.item_stat(petd.bonus) +
      "<br />";
  if (petd.bonus2)
    res +=
      "&raquo; <span class=green>" +
      petd.bonus2_val * petd.evo_lvl +
      "</span> " +
      this.item_stat(petd.bonus2) +
      "<br />";
  if (petd.bonus3)
    res +=
      "&raquo; <span class=green>" +
      petd.bonus3_val * petd.evo_lvl +
      "</span> " +
      this.item_stat(petd.bonus3) +
      "<br />";
  if (petd.bonus4)
    res +=
      "&raquo; <span class=green>" +
      petd.bonus4_val * petd.evo_lvl +
      "</span> " +
      this.item_stat(petd.bonus4) +
      "<br />";
  res += "</div>";
  return res;
};
GAME.employe_exp = function (lvl) {
  var exp = 0;
  switch (lvl) {
    case 2:
      exp = 10;
      break;
    case 3:
      exp = 12;
      break;
    case 4:
      exp = 20;
      break;
    case 5:
      exp = 40;
      break;
    case 6:
      exp = 60;
      break;
    case 7:
      exp = 80;
      break;
    case 8:
      exp = 100;
      break;
    case 9:
      exp = 100;
      break;
    case 10:
      exp = 150;
      break;
    case 11:
      exp = 10;
      break;
    case 12:
      exp = 20;
      break;
    case 13:
      exp = 50;
      break;
    case 14:
      exp = 999999999;
      break;
  }
  return exp;
};
GAME.pet_exp = function (lvl, reborn) {
  var mod = lvl / 10;
  if (mod > 1)
    return Math.round(lvl * (2 + mod) * ((reborn + 1) * (reborn + 1)));
  else return lvl * 2;
};

GAME.pet_eexp = function (lvl) {
  return (lvl - 1) * 30 * (lvl - 1);
};
GAME.achi_prize_check = function (cp, level) {
  var prize = 0;
  if (level >= 1) prize = (level - cp) * 10;
  return prize;
};
GAME.skill_normal_cost = function (lvl, pv, id) {
  lvl++;
  if (pv == 3) {
    return lvl * 9000;
  } else if (pv == 2) {
    switch (lvl) {
      case 1:
        return 50;
      case 2:
        return 150;
      case 3:
        return 280;
      case 4:
        return 410;
      case 5:
        return 620;
      case 6:
        return 800;
      case 7:
        return 970;
      case 8:
        return 1050;
      case 9:
        return 1200;
      default:
        return (lvl - 1) * 150;
        break;
    }
  } else {
    switch (id) {
      case 21:
      case 25:
        base1 = 5000;
        break;
      case 22:
      case 26:
        base1 = 10000;
        break;
      case 23:
      case 27:
        base1 = 15000;
        break;
      case 24:
      case 28:
        base1 = 20000;
        break;
      case 29:
      case 33:
        base2 = 50000;
        break;
      case 30:
      case 34:
        base2 = 100000;
        break;
      case 31:
      case 35:
        base2 = 150000;
        break;
      case 32:
      case 36:
        base2 = 200000;
        break;
      default:
        base1 = 1000;
        base2 = 10000;
        break;
    }
    if (pv == 0) return lvl * lvl * base1;
    else return lvl * lvl * base2;
  }
};
GAME.skill_special_cost = function (skill_id, lvl) {
  lvl++;
  switch (this.skill_data[skill_id].adc) {
    case "sentinel":
    case "divine_particle":
      return lvl;
      break;
    case "divine":
      if (this.skill_data[skill_id].max == 1) return 25;
      switch (lvl) {
        case 1:
          return 5;
        case 2:
          return 7;
        case 3:
          return 10;
        case 4:
          return 13;
        case 5:
          return 15;
        case 6:
          return 18;
      }
      return 999;
      break;
  }
};
GAME.power_core_value = function (level, pr_ph, reborn, mod) {
  var bon = 0;
  if (reborn == 4) bon = Math.round((level / 20 + pr_ph / 20) * mod) + 1;
  else if (reborn == 5) bon = Math.round((level / 5 + pr_ph / 3) * mod) + 1;
  else bon = Math.round((level / 7 + pr_ph / 2) * mod) + 1;
  return bon;
};
GAME.castle_cost = function (lvl) {
  switch (lvl) {
    case 1:
      return 50;
    case 2:
      return 100;
    case 3:
      return 200;
    case 4:
      return 300;
    case 5:
      return 500;
    case 6:
      return 750;
    case 7:
      return 1000;
    case 8:
      return 1500;
    case 9:
      return 2500;
    case 10:
      return 5000;
  }
};
GAME.parseSkillSets = function () {
  if (this.learned_skills && this.skill_data) {
    $(".skill_set").removeClass("active");
    $("#skill_set_" + this.char_data.skill_set).addClass("active");

    var con = "";
    var set = [0, 0, -1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0];
    var set_cols = ["slot", "slot_1", "slot_2"];
    var col = set_cols[this.char_data.skill_set];
    var len = this.learned_skills_np.length;
    var avas = [];
    var lvls = {};
    for (var i = 0; i < len; i++) {
      lvls[this.learned_skills_np[i].skill_id] =
        this.learned_skills_np[i].level;
      if (this.learned_skills_np[i][col] > 0)
        set[this.learned_skills_np[i][col]] =
          this.learned_skills_np[i].skill_id;
      else {
        var go = true;
        if (this.skill_data[this.learned_skills_np[i].skill_id].ps) go = false;
        if (
          this.skill_data[this.learned_skills_np[i].skill_id].np &&
          this.skill_data[this.learned_skills_np[i].skill_id].np !=
            this.char_data.pact_type
        )
          go = false;
        if (go) {
          avas.push(this.learned_skills_np[i].skill_id);
        }
      }
    }
    var opts = '<option value="0">[ ' + LNG.lab203 + " ]</option>";
    var len = avas.length;
    for (var i = 0; i < len; i++) {
      opts +=
        '<option value="' +
        avas[i] +
        '">' +
        LNG["skill_name" + avas[i]] +
        " (" +
        LNG.lab1 +
        " " +
        this.learned_skills[avas[i]] +
        ")</option>";
    }
    for (var s = 1; s <= 15; s++) {
      if (s == 2 || s == 8) continue;
      con +=
        '<div class="slot"><div class="slotnum">' +
        LNG.lab201 +
        " " +
        s +
        " : </div>";
      switch (set[s]) {
        case -1:
          con += "<b>[ " + LNG.lab202 + " ]</b>";
          break;
        case 0:
          con +=
            '<div class="select_input"><select class="skill_selector" data-slot="' +
            s +
            '">' +
            opts +
            '</select></div> <img src="/gfx/skills/empty.png" />';
          break;
        default:
          con +=
            '<div class="select_input"><select class="skill_selector" data-slot="' +
            s +
            '"><option value="' +
            set[s] +
            '">[ ' +
            LNG["skill_name" + set[s]] +
            " ]</option>" +
            opts +
            '</select></div> <img data-toggle="tooltip" data-original-title="' +
            this.showSkillDesc(set[s], lvls[set[s]]) +
            '" src="/gfx/skills/' +
            set[s] +
            '.png" />';
          break;
      }
      con += "</div>";
    }
    $("#current_set_skills").html(con);
    $(".skill_selector")
      .off("change")
      .on("change", function () {
        var slot = parseInt($(this).data("slot")),
          val = parseInt($(this).val());
        GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
          a: 30,
          type: 4,
          slot: slot,
          skill: val,
        });
      });
    tooltip_bind();
  }
};
GAME.showSkillDesc = function (skill_id, lvl = 1) {
  var st = "active",
    descs = "";
  var b = (lvl * this.skill_data[skill_id].b).toFixed(2),
    desc = "";
  if (this.skill_data[skill_id].ps) {
    st = "passive";
    descs =
      "<b class=orange>" +
      b +
      "</b> " +
      this.item_stat(this.skill_data[skill_id].ps) +
      "<br />";
    if (this.skill_data[skill_id].ps2)
      descs =
        "<b class=orange>" +
        b +
        "</b> " +
        this.item_stat(this.skill_data[skill_id].ps2) +
        "<br />";
    if (LNG["item_stat" + this.skill_data[skill_id].ps + "_desc"]) {
      descs +=
        "* <span class=adse>" +
        LNG["item_stat" + this.skill_data[skill_id].ps + "_desc"] +
        "</span><br />";
    }
  } else {
    var asd = this.active_skills_statuses[skill_id];
    if (asd) {
      var len = asd.length,
        descs = "";
      descs +=
        LNG.lab384 +
        ": <span class=skill_type" +
        asd[0] +
        ">" +
        LNG["skill_type" + asd[0]] +
        "</span><br />";
      for (var i = 1; i < len; i++) {
        var val = b;
        if (asd[i][3]) {
          if (asd[i][3] == -1) val = 100;
          else val = (lvl * asd[i][3]).toFixed(2);
        }
        descs +=
          "&raquo; <b class=orange>" +
          val +
          "</b>" +
          LNG["skill_status" + asd[i][0]] +
          " - <span class=skdu>";
        var dur = asd[i][1];
        if (skill_id == 92 && lvl == 6) dur++;
        if (skill_id == 106 && lvl == 6) dur++;
        switch (dur) {
          case 0:
            descs += LNG.lab386;
            break;
          case 1:
            descs += LNG.lab388;
            break;
          case 99:
            descs += LNG.lab387;
            break;
          default:
            descs += "<b>" + dur + "</b> " + LNG.lab385;
            break;
        }
        descs += "</span><br />";
        if (LNG["skill_status" + asd[i][0] + "_desc"]) {
          var add = "";
          if (asd[i][2]) add = " <b>" + asd[i][2] + "</b>%";
          descs +=
            "* <span class=adse>" +
            LNG["skill_status" + asd[i][0] + "_desc"] +
            add +
            "</span><br />";
        }
      }
    } else
      descs =
        LNG["skill_desc" + skill_id] + " <b class=orange>" + b + "</b>%<br />";
  }
  var res =
    "<div class=stt><b class='skill_name " +
    st +
    "'>" +
    LNG["skill_name" + skill_id] +
    "</b> " +
    LNG.lab1 +
    " <b class=green>" +
    lvl +
    "</b><br /><br /><span class=item_stat>" +
    descs +
    "</span>";

  res += "</div>";
  return res;
};
GAME.showSkill = function (skill_id, upgade_allowed = true) {
  var base_lvl = 0,
    ads = "",
    st = "active",
    max = this.skill_data[skill_id].max,
    descs = "";
  if (this.learned_skills[skill_id]) base_lvl = this.learned_skills[skill_id];
  if (this.skill_data[skill_id].r3_max && this.char_data.reborn >= 3)
    max = this.skill_data[skill_id].r3_max;
  if (this.skill_data[skill_id].r4_max && this.char_data.reborn >= 4)
    max = this.skill_data[skill_id].r4_max;
  if (this.skill_data[skill_id].r5_max && this.char_data.reborn >= 5)
    max = this.skill_data[skill_id].r5_max;
  var lvl = base_lvl,
    bon = 0;
  if (base_lvl > 0) {
    bon = Math.round(this.getStat(1000 + skill_id));
    if (this.skill_data[skill_id].bon_stat)
      bon = this.getStat(this.skill_data[skill_id].bon_stat);
    if (bon > 0) {
      lvl += bon;
      ads = '+ <b class="orange">' + bon + "</b>";
    }
  }
  var b = (lvl * this.skill_data[skill_id].b).toFixed(2);
  if (this.skill_data[skill_id].ps) {
    st = "passive";
    descs =
      '<b class="orange">' +
      b +
      "</b> " +
      this.item_stat(this.skill_data[skill_id].ps) +
      "<br />";
    if (this.skill_data[skill_id].ps2)
      descs =
        '<b class="orange">' +
        b +
        "</b> " +
        this.item_stat(this.skill_data[skill_id].ps2) +
        "<br />";
  }
  //else descs=LNG['skill_desc'+skill_id]+' <b class="orange">'+b+'</b>%<br />';

  var res =
    '<div class="skill"><img data-toggle="tooltip" data-original-title="' +
    this.showSkillDesc(skill_id, lvl) +
    '" src="/gfx/skills/' +
    skill_id +
    '.png" /><b class="skill_name ' +
    st +
    '">' +
    LNG["skill_name" + skill_id] +
    "</b> " +
    LNG.lab1 +
    ' <b class="green">' +
    base_lvl +
    "</b>/<b>" +
    max +
    "</b> " +
    ads +
    ' <span class="pull-right"><b class="green">' +
    this.skill_data[skill_id].b +
    "</b>%/" +
    LNG.lab1 +
    "</span><br />" +
    descs +
    "";
  if (base_lvl < max && upgade_allowed) {
    if (this.skill_data[skill_id].req_lvl) {
      var cls = "";
      if (
        this.char_data.reborn == 0 &&
        this.char_data.level < this.skill_data[skill_id].req_lvl
      )
        cls = "red";
      res +=
        LNG.lab24 +
        ': <b class="' +
        cls +
        '">' +
        this.dots(this.skill_data[skill_id].req_lvl) +
        "</b><br />";
    }
    if (this.skill_data[skill_id].adc) {
      var cls = "";
      var cost = this.skill_special_cost(skill_id, base_lvl);
      if (cost > this.char_data[this.skill_data[skill_id].adc]) cls = "red";
      res +=
        LNG["skill_c_" + this.skill_data[skill_id].adc] +
        ': <b class="' +
        cls +
        '">' +
        cost +
        "</b>";
    }
    var kp_cost = (base_lvl + 1) * 1,
      cost = 0;
    if (this.skill_data[skill_id].nc == 3) kp_cost *= 3;
    cost = this.skill_normal_cost(
      base_lvl,
      this.skill_data[skill_id].nc,
      skill_id
    );
    var need = ["kills", "pvp", "school_rep", "instynkt"];
    var cls = "",
      cls2 = "";
    if (kp_cost > this.premium) cls = "red";
    if (cost > this.char_data[need[this.skill_data[skill_id].nc]]) cls2 = "red";
    var ph = "",
      nh = "";
    if (GAME.skill_cost == "premium") {
      nh = "initial_hide";
      ph = "";
    } else {
      ph = "initial_hide";
      nh = "";
    }
    res +=
      '<div class="skill_cost premium_cost ' +
      ph +
      '">' +
      LNG.lab57 +
      ': <b class="' +
      cls +
      '">' +
      this.dots(kp_cost) +
      '</b> <img src="/gfx/kp.png" /><button class="newBtn2 option" data-option="skill_upgrade" data-skill="' +
      skill_id +
      '" data-cost="1">' +
      LNG.quest_req52 +
      '</button></div><div class="skill_cost normal_cost ' +
      nh +
      '">' +
      LNG.lab57 +
      ': <b class="' +
      cls2 +
      '">' +
      this.dots(cost) +
      "</b> " +
      LNG["skill_cost" + this.skill_data[skill_id].nc] +
      ' <button class="newBtn2 option" data-option="skill_upgrade" data-skill="' +
      skill_id +
      '" data-cost="2">' +
      LNG.quest_req52 +
      "</button></div>";
  }
  res += "</div>";

  return res;
};

GAME.psize = function (id) {
  switch (id) {
    case 260:
      return LNG.psize1;
    case 261:
      return LNG.psize2;
    case 262:
      return LNG.psize3;
    case 263:
      return LNG.psize4;
    case 264:
      return LNG.psize5;
    case 885:
      return LNG.psize6;
  }
};
GAME.buff_cost = function (buff, reborn, level) {
  var res = [1, 1];
  if (level >= 5) res[0] = 2;
  if (level >= 8) res[0] = 3;
  if (reborn > 2 && buff <= 10) {
    res[1] = level + 5;
    res[0] = 0;
  }
  if (level >= 10) {
    res[0] = 0;
    res[1] = 15;
  }
  return res;
};
GAME.buff_calculate_points = function (reborn, level) {
  if (reborn == 2) return Math.floor(level / 50) + 1;
  else if (reborn == 5) return Math.floor(level / 40) + 1;
  else return Math.floor(level / 30) + 1;
};
GAME.buff_point_calc = function (level) {
  switch (level) {
    case 6:
      return level + 1;
      break;
    case 7:
      return level + 2;
      break;
    case 8:
      return level + 3;
      break;
    case 9:
      return level + 5;
      break;
    case 10:
      return level + 7;
      break;
    default:
      return level;
      break;
  }
};
GAME.gatherNewReps = function () {
  var arr = [];
  $(".new_rep_ct1").each(function (index) {
    arr.push($(this).data("rid"));
    $(this).fadeOut();
  });
  if (arr.length)
    GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
      a: 11,
      type: 3,
      read: arr,
    });
};
GAME.raport_action = function (action, h1, h2, v1, v2) {
  var temat = "";
  switch (action) {
    case 1:
      temat = LNG.rap_action1 + " " + v1;
      break; //(Atak) Pojedynek PvP z
    case 2:
      temat = LNG.rap_action2 + " " + v1;
      break; //(Obrona) Pojedynek PvP z
    case 3:
      var val = v2.split("#");
      temat =
        '<b class="green option" data-option="show_player" data-char_id="' +
        h1 +
        '">' +
        v1 +
        "</b> " +
        LNG.rap_action3 +
        ' <b class="item' +
        h2 +
        '">' +
        val[0] +
        "</b> x " +
        val[1];
      break; //przekazuje Ci
    case 4:
      temat = LNG.rap_action2b + " " + v1;
      break; //Pojedynek fabularny z
    case 5:
      temat =
        '<b class="green option" data-option="show_player" data-char_id="' +
        h1 +
        '">' +
        v1 +
        "</b> " +
        LNG.rap_action4 +
        " " +
        this.dots(h2) +
        ' <img src="/gfx/kp.png" align="absmiddle" /> ' +
        LNG.rap_action5;
      break; //przebija Twoją stawkę na aukcji!
    case 6:
      var nam = "";
      switch (this.lang) {
        case "en":
          nam = v2;
          break;
        default:
          nam = v1;
          break;
      }
      temat =
        LNG.rap_action6 +
        ' <b class="item' +
        h1 +
        '">' +
        nam +
        "</b> " +
        LNG.rap_action7 +
        " " +
        this.dots(h2) +
        ' <img src="/gfx/kp.png" align="absmiddle" />';
      break; //został pomyślnie sprzedany na aukcji! Otrzymujesz
    case 7:
      var nam = "";
      switch (this.lang) {
        case "en":
          nam = v2;
          break;
        default:
          nam = v1;
          break;
      }
      temat =
        LNG.rap_action8 +
        ' <b class="item' +
        h1 +
        '">' +
        nam +
        "</b> x" +
        h2 +
        "! " +
        LNG.rap_action9;
      break; //Wygrywasz aukcje o Przedmiot został dodany do Twojego ekwipunku
    case 8:
      var nam = "";
      switch (this.lang) {
        case "en":
          nam = v2;
          break;
        default:
          nam = v1;
          break;
      }
      temat =
        LNG.rap_action6 +
        ' <b class="item' +
        h1 +
        '">' +
        nam +
        "</b> x" +
        h2 +
        " " +
        LNG.rap_action10;
      break; //nie został sprzedany, więc wraca do Twojego ekwipunku
    case 9:
      temat =
        LNG.rap_action21 +
        ' <b class="orange option" data-option="show_clan" data-klan_id="' +
        h1 +
        '">' +
        v1 +
        "</b> (" +
        v2 +
        ")";
      break; //Zostałeś zaproszony do klanu
    case 10:
      temat =
        '<b class="green option" data-option="show_player" data-char_id="' +
        h1 +
        '">' +
        v1 +
        "</b> " +
        LNG.rap_action22 +
        ' <b class="orange option" data-option="show_clan" data-klan_id="' +
        h2 +
        '">' +
        v2 +
        "</b>";
      break; //wyprosił Cię z klanu
    case 11:
      temat = LNG.rap_action23 + " " + this.dots(h1) + " j+";
      break; //Twój klan wygrał wojnę! Otrzymujesz
    case 12:
      temat = LNG.rap_action24 + " ";
      break; //Gratulacje! Twój stwór wygrał
    case 13:
      temat =
        LNG.rap_action24 +
        " <b>" +
        h1 +
        "</b> " +
        LNG.rap_action25 +
        ": " +
        this.dots(h2) +
        " " +
        LNG.rap_action26;
      break; //pkt. ewolucji
    case 14:
      temat =
        LNG.rap_action27 +
        " <b>" +
        h1 +
        "</b> " +
        LNG.rap_action28 +
        " " +
        this.dots(h2) +
        ' <img src="/gfx/kp.png" align="absmiddle" />';
      break; //Gratulacje! Zostałeś wicemistrzem w
    case 15:
      temat = LNG.rap_action29;
      break; //Gratulacje! Wygrałeś
    case 16:
      temat =
        LNG.rap_action31 +
        " " +
        this.dots(h1) +
        ' <img src="/gfx/kp.png" align="absmiddle" /> ' +
        LNG.rap_action32;
      break; //Otrzymano za list gończy
    case 17:
      temat = LNG.rap_action33;
      break; //Ktoś właśnie zgarnął nagrodę za list gończy, który wcześniej zaakceptowałeś!
    case 18:
      temat = LNG.rap_action34;
      break; //Wyprawa zakończona powodzeniem!
    case 19:
      temat = LNG.rap_action35;
      break; //Wyprawa zakończona niepowodzeniem!
    case 20:
      temat =
        '<b class="green option" data-option="show_player" data-char_id="' +
        h1 +
        '">' +
        v1 +
        "</b> " +
        LNG.rap_action36 +
        "";
      break; //oświadcza Ci się!
    case 21:
      temat =
        '<b class="green option" data-option="show_player" data-char_id="' +
        h1 +
        '">' +
        v1 +
        "</b> " +
        LNG.rap_action37;
      break; //rozwodzi się z Tobą!
    case 22:
      temat =
        '<b class="green option" data-option="show_player" data-char_id="' +
        h1 +
        '">' +
        v1 +
        "</b> " +
        LNG.rap_action38;
      break; //wystawia na Ciebie list gończy!
    case 23:
      temat =
        '<b class="green option" data-option="show_player" data-char_id="' +
        h1 +
        '">' +
        v1 +
        "</b> " +
        LNG.rap_action3 +
        " " +
        this.dots(h2) +
        ' <img src="/gfx/kp.png" align="absmiddle" />!';
      break; //przekazuje Ci
    case 24:
      temat =
        LNG.rap_action39 +
        ' 10 <img src="/gfx/kp.png" align="absmiddle" /> ' +
        LNG.rap_action40 +
        ": " +
        v1 +
        " !";
      break; //za polecenie gracza
    case 25:
      temat =
        LNG.rap_action41 +
        " " +
        this.dots(h1) +
        ' <img src="/gfx/kp.png" align="absmiddle" />!';
      break; //Przelew/Przekaz - transakcja zakończona: Otrzymujesz
    case 26:
      temat = LNG.rap_action42;
      break; //Otrzymujesz ostrzeżenie od administratora serwera. Łamanie regulaminu może doprowadzić do blokady konta!
    case 27:
      temat =
        LNG.rap_action43 +
        " " +
        this.dots(h1) +
        ' <img src="/gfx/kp.png" align="absmiddle" />!';
      break; //Zwycięstwo w turnieju! Otrzymujesz
    case 28:
      temat = LNG.rap_action44 + " " + v1;
      break; //(Atak) Pojedynek PvP na Arenie z
    case 29:
      temat = LNG.rap_action45 + " " + v1;
      break; //(Obrona) Pojedynek PvP na Arenie z
    case 30:
      temat = LNG.rap_action46 + ': <b class="red">' + v1 + "</b>";
      break; //Otrzymujesz ostrzeżenie od administratora serwera. Łamanie regulaminu może doprowadzić do blokady! Powód warna:
    case 31:
      temat =
        LNG.rap_action47 +
        ': <b class="achi_' +
        h2 +
        '">' +
        LNG["achievement" + h1] +
        "</b>!";
      break; //Zdobyto osiągnięcie
    case 32:
      temat =
        LNG.rap_action39 +
        " " +
        h1 +
        " " +
        LNG.rap_action48 +
        " <b>" +
        v1 +
        "</b>!";
      break; //za zaproszenie gracza
    case 33:
      temat =
        LNG.rap_action49a +
        " <a>" +
        v1 +
        "</a> " +
        LNG.rap_action49 +
        ' <b class="bora">' +
        LNG["game_buff" + h2] +
        "</b> (" +
        v2 +
        ")";
      break; //błogosławi Cię!
    case 34:
      temat = LNG.rap_action50;
      break; //Twoi słudzy znaleźli Pomniejszą Smoczą Kulę!
    case 35:
      temat = LNG.rap_action51 + ' 1 <img src="/gfx/kp.png" />';
      break; //Ktoś właśnie zaprosił Cię na ucztę! Otrzymujesz
    case 36:
      temat =
        LNG.rap_action51 +
        ' +<b class="bora">' +
        h1 +
        "</b> " +
        LNG.rap_action52 +
        "!";
      break; //Ktoś właśnie zaprosił Cię na ucztę! Otrzymujesz siły
    case 37:
      temat =
        LNG.rap_action51 +
        ' +<b class="bora">' +
        h1 +
        "</b> " +
        LNG.rap_action53 +
        "!";
      break; //Ktoś właśnie zaprosił Cię na ucztę! Otrzymujesz szybkości
    case 38:
      temat =
        LNG.rap_action51 +
        ' +<b class="bora">' +
        h1 +
        "</b> " +
        LNG.rap_action54 +
        "!";
      break; //Ktoś właśnie zaprosił Cię na ucztę! Otrzymujesz wytrzymałości
    case 39:
      temat =
        LNG.rap_action51 +
        ' +<b class="bora">' +
        h1 +
        "</b> " +
        LNG.rap_action55 +
        "!";
      break; //Ktoś właśnie zaprosił Cię na ucztę! Otrzymujesz siły woli
    case 40:
      temat =
        LNG.rap_action51 +
        ' +<b class="bora">' +
        h1 +
        "</b> " +
        LNG.rap_action56 +
        "!";
      break; //Ktoś właśnie zaprosił Cię na ucztę! Otrzymujesz energii Ki
    case 41:
      temat =
        LNG.rap_action51 +
        ' +<b class="bora">' +
        h1 +
        "</b> " +
        LNG.rap_action57 +
        "!";
      break; //Ktoś właśnie zaprosił Cię na ucztę! Otrzymujesz Punktów Akcji
    case 42:
      temat =
        LNG.rap_action58 +
        ' <b class="bora">' +
        this.dots(h1) +
        "</b> " +
        LNG.rap_action59 +
        "!";
      break; //Na Twoją planetę spadła potężna asteroida! Zginęło
    case 43:
      temat =
        LNG.rap_action60 +
        ' <b class="bora">' +
        this.dots(h1) +
        "</b> " +
        LNG.rap_action59 +
        "!";
      break;
    case 44:
      temat =
        LNG.rap_action61 +
        ' <b class="bora">' +
        this.dots(h1) +
        "</b> " +
        LNG.rap_action59 +
        "!";
      break;
    case 45:
      temat =
        LNG.rap_action62 +
        ' <b class="bora">' +
        this.dots(h1) +
        "</b> " +
        LNG.rap_action59 +
        "!";
      break; //Na Twojej planecie wybuchła epidemia! Zginęło
    case 46:
      temat =
        LNG.rap_action63 +
        ' <b class="bora">' +
        this.dots(h1) +
        "</b> " +
        LNG.rap_action59 +
        "!";
      break; //Spory polityczne wywołały wielką wojnę na Twojej planecie! Zginęło
    case 47:
      temat =
        LNG.rap_action64 +
        ' <b class="bora">' +
        this.dots(h1) +
        "</b> " +
        LNG.rap_action59 +
        "!";
      break; //Próby atomowe na Twojej planecie wywołały kwaśne deszcze oraz burze atomowe! Zginęło
    case 48:
      temat = LNG.rap_action31 + " " + LNG.rap_action65;
      break; //<span class="item6">Czerwone Senzu</span> za bycie top-killerem w wojnie!
    case 49:
      temat = LNG.rap_action31 + " " + LNG.rap_action66;
      break; //<span class="item2">Żółte Senzu</span> za bycie top-killerem w wojnie!
    case 50:
      temat = LNG.rap_action31 + " " + LNG.rap_action67;
      break; //<span class="item3">Fioletowe Senzu</span> za drugie miejsce w rankingu zabójstw w wojnie!
    case 51:
      temat = LNG.rap_action31 + " " + LNG.rap_action68;
      break; //<span class="item4">Zielone Senzu</span> za trzecie miejsce w rankingu zabójstw w wojnie!
    case 52:
      temat = LNG.rap_action69;
      break; //Instancja nie została rozpoczęta. Zbyt mało graczy zgłosiło chęć uczestnictwa.
    case 53:
      temat = LNG.rap_action70;
      break; //Instancja nie została ukończona.  Nie otrzymujesz żadnej nagrody
    case 54:
      temat =
        LNG.rap_action31 +
        ' <b class="bora">' +
        this.dots(h1) +
        "</b> " +
        LNG.rap_action73 +
        " " +
        LNG.rap_action71;
      break; //Niebieskich Klejnotów jako nagrodę za wykonanie instancji!
    case 55:
      temat = LNG.rap_action72;
      break; //Instancja została ukończona, lecz twoja aktywność okazała się zbyt niska. Nie otrzymujesz żadnej nagrody
    case 56:
      temat =
        LNG.rap_action31 +
        ' <b class="bora">' +
        this.dots(h1) +
        "</b> " +
        LNG.rap_action74 +
        " " +
        LNG.rap_action71;
      break; //Diabelskich Klejnotów jako nagrodę za wykonanie instancji!
    case 57:
      temat =
        LNG.rap_action31 +
        ' <b class="bora">' +
        this.dots(h1) +
        "</b> " +
        LNG.rap_action75 +
        " " +
        LNG.rap_action71;
      break; //Diabelskich Klejnotów jako nagrodę za wykonanie instancji!
    case 58:
      temat =
        LNG.rap_action31 +
        ' <b class="bora">' +
        this.dots(h1) +
        "</b> " +
        LNG.rap_action76 +
        " " +
        LNG.rap_action71;
      break; //Diabelskich Klejnotów jako nagrodę za wykonanie instancji!
    case 59:
      temat = LNG.rap_action77;
      break;
    case 60:
      temat = LNG.rap_action78;
      break;
    case 61:
      temat = LNG.rap_action79;
      break;
    case 62:
      temat =
        LNG.rap_action31 +
        ' <b class="bora">' +
        this.dots(h1) +
        "</b> " +
        LNG.rap_action80 +
        " " +
        LNG.rap_action71;
      break; //Diabelskich Klejnotów jako nagrodę za wykonanie instancji!
    case 63:
      temat = LNG.rap_action81;
      break; //Skok zakończona powodzeniem!
    case 64:
      temat = LNG.rap_action82;
      break; //Skok zakończona niepowodzeniem!
    case 65:
      temat = LNG.rap_action83 + " " + v1;
      break; //(Atak) Pojedynek PvP na Arenie z
    case 66:
      temat = LNG.rap_action84 + " " + v1;
      break; //(Obrona) Pojedynek PvP na Arenie z
    case 67:
      temat = LNG.rap_action85 + " " + v1;
      break; //Podczas instancji znaleziono Skrzynię Skarbów!
    case 68:
      temat =
        LNG.rap_action86 +
        ' <b class="green option" data-option="show_player" data-char_id="' +
        h1 +
        '">' +
        v1 +
        "</b>!";
      break; //Otrzymano zaproszenie do listy przyjaciół od
    case 69:
      temat =
        '<b class="green option" data-option="show_player" data-char_id="' +
        h1 +
        '">' +
        v1 +
        "</b> " +
        LNG.rap_action87 +
        "!";
      break; //odrzcono
    case 70:
      temat =
        '<b class="green option" data-option="show_player" data-char_id="' +
        h1 +
        '">' +
        v1 +
        "</b> " +
        LNG.rap_action88 +
        "!";
      break; //usunieto
    case 71:
      temat =
        '<b class="green option" data-option="show_player" data-char_id="' +
        h1 +
        '">' +
        v1 +
        "</b> " +
        LNG.rap_action89 +
        "!";
      break; //akceptacja
    case 72:
      temat =
        '<b class="green option" data-option="show_player" data-char_id="' +
        h1 +
        '">' +
        v1 +
        "</b> " +
        LNG.rap_action90 +
        "!";
      break; //anulowano
    case 73:
      temat =
        '<b class="green option" data-option="show_player" data-char_id="' +
        h1 +
        '">' +
        v1 +
        "</b> " +
        LNG.rap_action91 +
        "!";
      break; //rozwiazuje klan
    case 74:
      temat = LNG.rap_action92 + " " + v1;
      break; //(Atak) Bitwa planetarna
    case 75:
      temat = LNG.rap_action93 + " " + v1;
      break; //(Obrona) Bitwa planetarna
    case 76:
      temat =
        LNG.rap_action31 +
        ' <b class="bora">' +
        this.dots(h1) +
        "</b> " +
        LNG.rap_action94 +
        " " +
        LNG.rap_action71;
      break; //Mroźnych Klejnotów jako nagrodę za wykonanie instancji!
    default:
      temat = LNG.rap_action0;
      break;
  }
  return temat;
};
GAME.cached_data = function () {
  var pos = $("#char_buffs").offset();
  pos.left -= 75;
  pos.top -= 75;
  this.char_buffs_pos = pos;
};
GAME.item_level = function (level) {
  if (level < 100) return 1;
  else {
    level /= 100;
    level = Math.floor(level);
    level *= 100;
    if (level > 2000) level = 2000;
    return level;
  }
};

GAME.camp_name = function (lvl) {
  switch (lvl) {
    case 1:
      return LNG.lab23;
      break;
    case 100:
      return "Mog";
      break;
    case 200:
      return "Naya";
      break;
    case 300:
      return "Fona";
      break;
    case 400:
      return "Xar";
      break;
    case 500:
      return "Drag";
      break;
    case 600:
      return "Tana";
      break;
    case 700:
      return "Oran";
      break;
    case 800:
      return "Elba";
      break;
    case 900:
      return "Hior";
      break;
    case 1000:
      return "Nargol";
      break;
    case 1100:
      return "Minas";
      break;
    case 1200:
      return "Qual";
      break;
    case 1300:
      return "Magnar";
      break;
    case 1400:
      return "Buffor";
      break;
    case 1500:
      return "Gord";
      break;
    case 1600:
      return "Ard";
      break;
    case 1700:
      return "Hex";
      break;
    case 1800:
      return "Mag";
      break;
    case 1900:
      return "Nag";
      break;
    case 2000:
      return "Gorr";
      break;
  }
};
GAME.next_tren = function (lvl) {
  var exp = 0;
  lvl++;
  switch (lvl) {
    case 1:
      exp = 1;
      break;
    case 2:
      exp = 10;
      break;
    case 3:
      exp = 30;
      break;
    case 4:
      exp = 80;
      break;
    case 5:
      exp = 170;
      break;
    case 6:
      exp = 250;
      break;
    case 7:
      exp = 500;
      break;
    case 8:
      exp = 1300;
      break;
    case 9:
      exp = 3000;
      break;
    case 10:
      exp = 5000;
      break;
    case 11:
      exp = 6000;
      break;
    case 12:
      exp = 7500;
      break;
    case 13:
      exp = 8000;
      break;
    case 14:
      exp = 8250;
      break;
    case 15:
      exp = 10000;
      break;
    default:
      exp = 9999999;
      break;
  }
  return exp;
};
GAME.trainUpgrade = function (show, time) {
  if (this.char_data) {
    if (show) {
      if (this.char_data.train_ucd < time) {
        if (!this.trainupnotisend) {
          this.pushNotification(
            '<strong class="select_page" data-page="game_train">' +
              LNG.lab364 +
              " !</strong>",
            10000
          );
          this.push_notification(LNG.lab364);
          this.trainupnotisend = true;
        }
        if (this.is_training) {
          if (!this.trainup_visible) {
            JQS.tup.show();
            $("#train_captcha").show();
            reloadSVGcaptcha($("#train_svg"));
            this.trainup_visible = true;
          }
        } else JQS.tup.hide();
      } else JQS.tup.hide();
    } else {
      delete this.trainupnotisend;
      delete this.trainup_visible;
      JQS.tup.hide();
    }
  }
};
GAME.prepareTrainForm = function () {
  this.charValuesBind(["train_lvl", "train_exp", "tpp"]);
  $("#game_train_expn").text(
    this.dots(this.next_tren(this.char_data.train_lvl))
  );
  var eff = this.char_data.train_lvl * 2;
  $("#tren_up_eff").text(eff);
  var time = this.getTime();
  var b1 = LNG.lab14;
  var max = 6;
  var lim = 1;
  if (this.char_data.bonus1 > time) {
    b1 = LNG.lab13;
    max = 12;
  }
  $("#game_train_bonus1").text(b1);
  var b2 = LNG.lab14;
  if (this.char_data.bonus14 > time) {
    b2 = LNG.lab13;
    lim = 2;
  }
  $("#game_train_bonus2").text(b2);

  var ava = true;
  if (this.timed >= lim) ava = false;
  if (ava) {
    var times = "";
    var labels = [""];
    switch (this.base_train_speed) {
      case 3600:
        for (var t = 1; t <= max; t++) labels.push(t + " " + LNG.lab11);
        break;
      case 1800:
        labels = [
          "",
          "30 " + LNG.lab12,
          "1 " + LNG.lab11,
          "1,5 " + LNG.lab11,
          "2 " + LNG.lab11,
          "2,5 " + LNG.lab11,
          "3 " + LNG.lab11,
          "3,5 " + LNG.lab11,
          "4 " + LNG.lab11,
          "4,5 " + LNG.lab11,
          "5 " + LNG.lab11,
          "5,5 " + LNG.lab11,
          "6 " + LNG.lab11,
        ];
        break;
      default:
        var tmp = parseInt(this.base_train_speed) / 60;
        for (var t = 1; t <= max; t++) {
          var m = t * tmp;
          labels.push(m + " " + LNG.lab12);
        }
        break;
    }

    for (var t = 1; t <= max; t++) {
      var sel = "";
      if (t == 2) {
        sel = "selected";
        this.selected_train_duration = t;
      }
      times +=
        '<option value="' + t + '" ' + sel + ">" + labels[t] + "</option>";
    }
    $("#train_duration").html(times);
    var masters = '<option value="0">' + LNG.lab144 + "</option>";
    var cnt = this.masters.length;
    for (var i = 0; i < cnt; i++) {
      var lock = "";
      if (this.masters[i].reborn > this.char_data.reborn) lock = "disabled";
      masters +=
        '<option value="' +
        (i + 1) +
        '" ' +
        lock +
        ">" +
        this.masters[i][this.lang] +
        "</option>";
    }
    $("#train_master").html(masters);
    var stats = "";
    var max = 3;
    if (this.char_data.level >= 20 || this.char_data.reborn) max += 2;
    if (this.char_data.reborn >= 3) max++;
    for (var t = 1; t <= max; t++) {
      var sel = "";
      if (t == this.def_train_stat) {
        sel = "selected";
        this.selected_train_stat = t;
      }
      stats +=
        '<option value="' + t + '" ' + sel + ">" + LNG["atr" + t] + "</option>";
    }
    if (this.train_captcha) {
      $("#train_svg").show().html('<img src="./captcha" />');
      reloadSVGcaptcha($("#train_svg"));
      $("#train_captcha").show();
    }
    $("#train_stat").html(stats);
    $("#tren_notava").hide();
    $("#do_tren").show();
  } else {
    $("#tren_notava").show();
    $("#do_tren").hide();
    $("#train_captcha").hide();
  }
  this.calculateTrainResult(1);
};
GAME.getStructMaxPopBonus = function (pop) {
  if (pop < 1000000) return 0;
  else if (pop < 5000000) return 1;
  else if (pop < 10000000) return 2;
  else if (pop < 50000000) return 3;
  else if (pop < 100000000) return 4;
  else if (pop < 500000000) return 5;
  else if (pop < 750000000) return 6;
  else if (pop < 1000000000) return 7;
  else if (pop < 5000000000) return 8;
  else if (pop <= 7500000000) return 9;
  else if (pop > 7500000000) return 10;
};
GAME.calculateTrainResult = function (first = 0) {
  //
  var res = this.base_train_result;
  var stat = this.selected_train_stat;
  var dur = this.selected_train_duration;
  if (stat == 4 || stat == 5) res /= 2;
  else if (stat == 6) res /= 4;
  res *= this.train_eff[dur];
  res = Math.round(res);
  if (first) JQS.trr.text(this.dots(res));
  else this.value_change_ani(PJS.trr, this.current_train_result, res, 500);
  this.current_train_result = res;
};
GAME.showMasterDetails = function (master) {
  var con = "";
  var tbc = "";
  if (this.masters[master]) {
    var data = this.masters[master];
    con =
      "<div class=tt><b>" +
      data[this.lang] +
      "</b> " +
      this.rebPref(data.reborn) +
      "<br /><br />" +
      LNG.lab414 +
      ": <b class=green>" +
      data.level +
      "</b> (+<span class=orange>" +
      data.level * 2 +
      "</span>%)<br /><br />" +
      LNG.lab415 +
      ": ";
    switch (data.hire_type) {
      case 1:
        var cls = "";
        if (this.char_data.kk < data.hire_cost) cls = "red";
        tbc =
          LNG.lab57 +
          " <b class=" +
          cls +
          ">" +
          data.hire_cost +
          "</b> <img src=/gfx/kk.png />";
        con += tbc;

        break;
      case 2:
        var cls = "";
        if (this.premium < data.hire_cost) cls = "red";
        tbc =
          LNG.lab57 +
          " <b class=" +
          cls +
          ">" +
          data.hire_cost +
          "</b> <img src=/gfx/kp.png />";
        con += tbc;
        break;
    }
    con += "</div>";
  } else con = "...";
  $("#tren_bon_cost").html(tbc);
  $("#train_master").attr("data-original-title", con);
};
GAME.parsePremiumData = function (res) {
  this.premiumData = res.path;
  this.premiumDataN = document.createElement("canvas");
  this.premiumDataN.width = 200;
  this.premiumDataN.height = 60;
  this.premiumDataN.prerender = this.premiumDataN.getContext("2d");
  var ctx = this.premiumDataN.prerender;
  ctx.font = "20px 'Play'";
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.textAlign = "center";
  ctx.strokeText(LNG.lab402, 100, 30);
  ctx.fillStyle = "white";
  ctx.fillText(LNG.lab402, 100, 30);
};
GAME.parseShop = function (type, shop_data) {
  this.shop_data = shop_data;
  $("#shop_currency")
    .removeClass()
    .addClass("currency" + shop_data.currency);
  $("#shop_header").text(LNG["currency" + shop_data.currency]);
  var cur = 0;
  var cimg = "";
  switch (shop_data.currency) {
    case 1:
      cur = this.premium;
      cimg = '<img src="/gfx/kp.png" />';
      break;
    case 2:
      cur = this.char_data.kk;
      cimg = '<img src="/gfx/kk.png" />';
      break;
  }
  this.shop_cur = cur;
  $("#shop_currency_am").text(this.dots(cur));
  $(".shop_currency")
    .removeClass()
    .addClass("shop_currency")
    .addClass("c" + shop_data.currency);

  var len = shop_data.char_upgrades.length,
    con = "";
  for (var i = 0; i < len; i++) {
    var val = 0,
      cls = "",
      buy = "",
      adv = "";
    if (
      shop_data.char_upgrades[i].available_reborns &&
      shop_data.char_upgrades[i].available_reborns.indexOf(
        this.char_data.reborn
      ) == -1
    )
      continue;
    if (shop_data.char_upgrades[i].reb_values)
      val = shop_data.char_upgrades[i].reb_values[this.char_data.reborn];
    else val = shop_data.char_upgrades[i].value;
    if (shop_data.char_upgrades[i].field == "god")
      val =
        Math.round(
          this.char_data.god * (this.god_calc(this.char_data.god) / 100)
        ) + 1000000;
    if (cur < shop_data.char_upgrades[i].cost) cls = "red";
    else {
      buy =
        '<button class="option btn_small_gold" data-option="shop_buy_upgrade" data-id="' +
        i +
        '">' +
        LNG.lab67 +
        "</button> ";
      if (!shop_data.char_upgrades[i].only_one)
        buy +=
          'x <button class="newBtn shop_up" data-dir="1" data-id="' +
          i +
          '">-</button><div class="game_input vsmall"><input type="text" id="shop_chup_am_' +
          i +
          '" class="shop_am" data-id="' +
          i +
          '" value="1" /></div><button class="newBtn shop_up" data-dir="2" data-id="' +
          i +
          '">+</button>';
    }
    if (shop_data.char_upgrades[i].percent_value)
      adv =
        '+ <b id="shop_chup_aval_' +
        i +
        '" class="orange" data-base="' +
        shop_data.char_upgrades[i].percent_value +
        '">' +
        shop_data.char_upgrades[i].percent_value +
        "</b>%";
    con +=
      '<tr><td>+ <b id="shop_chup_val_' +
      i +
      '" data-base="' +
      val +
      '" class="orange">' +
      val +
      "</b> " +
      adv +
      " " +
      LNG["shop_chup_" + shop_data.char_upgrades[i].field] +
      ' </td><td><span id="shop_chup_cost_' +
      i +
      '" class="' +
      cls +
      '">' +
      this.dots(shop_data.char_upgrades[i].cost) +
      "</span> " +
      cimg +
      "</td><td>" +
      buy +
      "</td></tr>";
  }
  $("#shop_char_up").html(con);

  $(".shop_am")
    .off("input")
    .on("input", function () {
      var id = $(this).data("id");
      var val = parseInt($(this).val());
      GAME.shop_val_handler(1, id, val);
    });
  $(".shop_up")
    .off("click")
    .on("click", function () {
      var id = $(this).data("id");
      var val = parseInt($("#shop_chup_am_" + id).val());
      switch ($(this).data("dir")) {
        case 1:
          val -= 1;
          if (val < 1) val = 1;
          break;
        case 2:
          val += 1;
          break;
      }
      $("#shop_chup_am_" + id).val(val);
      GAME.shop_val_handler(1, id, val);
    });
  //items
  var time = this.getTime();
  var con = "";
  var len = shop_data.items.length;
  for (var i = 0; i < len; i++) {
    if (shop_data.items[i].need_reb > this.char_data.reborn) continue;
    if (
      shop_data.items[i].time_limited &&
      (time < shop_data.items[i].time_limited.start ||
        shop_data.items[i].time_limited.end < time)
    ) {
      //console.log(time,shop_data.items[i].time_limited.start,shop_data.items[i].time_limited.end);
      continue;
    }
    if (
      shop_data.items[i].servers &&
      shop_data.items[i].servers.indexOf(this.server) == -1
    )
      continue;
    if (shop_data.items[i].id == 74)
      shop_data.items[i].amount += this.getStat(152);
    con +=
      '<div class="kp_item option" data-option="shop_item_buy" data-id="' +
      i +
      '"><b>' +
      shop_data.items[i].amount +
      '</b><img class="main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
      shop_data.items[i].id +
      '" src="' +
      shop_data.items[i].gfx +
      '" /><span>' +
      shop_data.items[i].cost +
      " " +
      cimg +
      "</span></div>";
  }
  $("#shop_items").html(con);
  //bonusy
  var order = [
    1, 14, 16, 2, 3, 4, 12, 17, 5, 6, 7, 8, 9, 13, 10, 18, 11, 15, 19, 20, 21,
  ];
  var con = "";
  var time = this.getTime();
  for (var i = 0; i < shop_data.bonuses; i++) {
    var b = order[i];
    var lasts = "";
    if (this.char_data["bonus" + b] > time)
      lasts =
        '<div data-toggle="tooltip" data-original-title="<div class=tt>' +
        this.convertTime(this.char_data["bonus" + b]) +
        '</div>"><b>' +
        LNG.lab164 +
        "</b> - " +
        this.showTimer(this.char_data["bonus" + b] - time) +
        "</div>";
    con +=
      '<tr><td data-toggle="tooltip" data-original-title="<div class=tt>' +
      LNG["premium_bond" + b] +
      '</div>"><img src="/gfx/bonusy/' +
      (i + 1) +
      '.png" /><span class="orange">' +
      LNG["premium_bon" + b] +
      '</span></div></td><td><div class="active_bon">' +
      lasts +
      '</div></td><td><span id="shop_bon_cost_' +
      b +
      '">5</span> ' +
      cimg +
      "</td><td>" +
      LNG.lab159 +
      ' <div class="select_input"><select id="shop_bon_' +
      b +
      '" data-bon="' +
      b +
      '" class="shop_bon_inp"><option value="1">' +
      LNG.lab160 +
      '</option><option value="2">' +
      LNG.lab161 +
      '</option><option value="3" selected>' +
      LNG.lab162 +
      '</option><option value="4">' +
      LNG.lab163 +
      '</option></select></div><button class="btn_small_gold option" data-option="shop_bon_buy" data-bon="' +
      b +
      '">' +
      LNG.lab67 +
      "</button></td></tr>";
  }
  var reduced_cost = Math.floor(5 * shop_data.bonuses * 0.75);
  con +=
    '<tr><td colspan="2"><b class="orange">' +
    LNG.lab173 +
    "</b><br />" +
    LNG.lab174 +
    '</td><td><span id="shop_bon_cost_999">' +
    reduced_cost +
    "</span> " +
    cimg +
    "</td><td>" +
    LNG.lab159 +
    ' <div class="select_input"><select id="shop_bon_999" data-bon="999" class="shop_bon_inp"><option value="1">' +
    LNG.lab160 +
    '</option><option value="2">' +
    LNG.lab161 +
    '</option><option value="3" selected>' +
    LNG.lab162 +
    '</option><option value="4">' +
    LNG.lab163 +
    '</option></select></div><button class="btn_small_gold option" data-option="shop_bon_buy" data-bon="999">' +
    LNG.lab67 +
    "</button></td></tr>";
  $("#shop_char_bon").html(con);
  $(".shop_bon_inp")
    .off("change")
    .on("change", function () {
      var b = parseInt($(this).data("bon"));
      var val = parseInt($(this).val()),
        cost = 0;
      if (b == 999) {
        var base_bons = GAME.shop_data.bonuses;
        switch (val) {
          case 1:
            cost = Math.floor(base_bons * 1 * 0.75);
            break;
          case 2:
            cost = Math.floor(base_bons * 2 * 0.75);
            break;
          case 4:
            cost = Math.floor(base_bons * 10 * 0.75);
            break;
          default:
            cost = Math.floor(base_bons * 5 * 0.75);
            break;
        }
      } else {
        switch (val) {
          case 1:
            cost = 1;
            break;
          case 2:
            cost = 2;
            break;
          case 3:
            cost = 5;
            break;
          case 4:
            cost = 10;
            break;
        }
      }
      $("#shop_bon_cost_" + b).text(cost);
    });
  main_ekw_item_bind();
  tooltip_bind();
  option_bind();
};
GAME.shop_val_handler = function (type, id, val) {
  switch (type) {
    case 1:
      var cost = GAME.shop_data.char_upgrades[id].cost * val;
      var cls = "";
      if (GAME.shop_cur < cost) cls = "red";
      $("#shop_chup_cost_" + id)
        .text(GAME.dots(cost))
        .removeClass("red")
        .addClass(cls);
      var vc = $("#shop_chup_val_" + id);
      var bv = vc.data("base");
      vc.text(GAME.dots(bv * val));
      var avc = $("#shop_chup_aval_" + id);
      if (avc.length) {
        var bv = avc.data("base");
        avc.text(GAME.dots(bv * val));
      }
      break;
  }
};
GAME.value_change_ani = function (
  container,
  old_value,
  new_value,
  speed,
  jquery = false,
  callback = function () {}
) {
  if (container) {
    if (this.animations_off) container.innerText = this.dots(new_value);
    else {
      $({ someValue: old_value }).animate(
        { someValue: new_value },
        {
          duration: speed,
          easing: "swing",
          step: function () {
            if (jquery) container.text(GAME.dots(Math.round(this.someValue)));
            else container.innerText = GAME.dots(Math.round(this.someValue));
          },
          complete: function () {
            if (jquery) container.text(GAME.dots(Math.round(this.someValue)));
            else container.innerText = GAME.dots(Math.round(this.someValue));
            callback(container);
          },
        }
      );
    }
  }
};
GAME.miningHandler = function (type, data) {
  switch (type) {
    case 1:
      var pr = 0;
      data.bar = $("#mining_bar_" + data.mine_id);
      data.mbar = $("#mining_mbar_" + data.mine_id);
      this.mining = data;

      var left = Math.floor(data.expires / 1000) - this.getTime();
      $("#mining_btn_" + data.mine_id).prop("disabled", true);
      $("#mining_pr_" + data.mine_id).html(this.showTimer(left));
      data.bar.css({ width: pr + "%" });

      data.mbar.slideDown();
      data.bar.animate(
        { width: "100%" },
        data.expires - this.getmTime(),
        "linear",
        function () {
          if (GAME.mining) {
            GAME.mining.mbar.slideUp();
            $("#mining_res_" + GAME.mining.mine_id).html(
              LNG.lab134 +
                " " +
                GAME.showTimer(
                  300,
                  'data-special="8" data-mid="' + GAME.mining.mine_id + '"'
                )
            );
            if (
              GAME.map_mines &&
              GAME.map_mines.coords[GAME.mining.x + "_" + GAME.mining.y]
            ) {
              var arr =
                GAME.map_mines.coords[GAME.mining.x + "_" + GAME.mining.y];
              var len = arr.length;
              for (var i = 0; i < len; i++) {
                if (arr[i][0] == GAME.mining.mine_id)
                  arr[i][2] = GAME.getTime() + 300;
              }
            }
            GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder(
              { a: 22, type: 8 },
              true
            );
          }
        }
      );
      break;
  }
};
GAME.commonMobLevel = function (rank, level) {
  var res = level;
  switch (rank) {
    case 1:
      res = parseInt(level * 1.3);
      break;
    case 2:
      res = parseInt(level * 2.3);
      break;
    case 3:
      res = parseInt(level * 10);
      break;
    case 4:
      res = parseInt(level * 50);
      break;
    case 5:
      res = parseInt(level * 100);
      break;
  }
  return res;
};
GAME.mobRank = function (rank) {
  switch (rank) {
    case 1:
      return LNG.mob_rank1;
    case 2:
      return LNG.mob_rank2;
    case 3:
      return LNG.mob_rank3;
    case 4:
      return LNG.mob_rank4;
    case 5:
      return LNG.mob_rank5;
    default:
      return LNG.mob_rank0;
  }
};
GAME.convertTime = function (time) {
  var now = moment(this.getmTime());
  var data;
  var d1 = parseInt(now.format("DD"));
  var m1 = parseInt(now.format("M"));
  var y1 = parseInt(now.format("YYYY"));
  var check = moment(time * 1000);
  var d2 = parseInt(check.format("DD"));
  var m2 = parseInt(check.format("M"));
  var y2 = parseInt(check.format("YYYY"));
  var f = false;
  if (d1 == d2 && m1 == m2 && y1 == y2) {
    f = true;
    data = LNG.lab6 + " " + check.format("HH:mm");
  }
  if (d1 + 1 == d2 && m1 == m2 && y1 == y2) {
    f = true;
    data = LNG.lab7 + " " + check.format("HH:mm");
  }
  if (d1 + 2 == d2 && m1 == m2 && y1 == y2) {
    f = true;
    data = LNG.lab8 + " " + check.format("HH:mm");
  }
  if (d1 - 1 == d2 && m1 == m2 && y1 == y2) {
    f = true;
    data = LNG.lab9 + " " + check.format("HH:mm");
  }
  if (!f) data = check.format("HH:mm DD.MM.YYYY");
  return data;
};
GAME.showChatChannel = function (opening = 0) {
  var con = "";
  var ismod = this.hasModLaw();
  if (
    this.chat_data[this.chat_channel].messages &&
    this.chat_data[this.chat_channel].messages.length
  ) {
    var chd = this.chat_data[this.chat_channel].messages;
    var len = chd.length;
    for (var i = 0; i < len; i++) {
      if (!chd[i]) continue;
      var modop = "",
        talker = "",
        opt = "";
      if (chd[i].talker)
        talker = '<div class="talker t' + chd[i].talker + '"></div>';
      if (chd[i].swiat == this.server) opt = "option";
      if (ismod)
        modop =
          '<div class="addop"><button class="option chat_icon clear" data-option="delete_entry" data-entry="' +
          chd[i].id +
          '" data-channel="' +
          this.chat_channel +
          '"></button><button class="option chat_icon mute" data-option="mute_entry_player" data-entry="' +
          chd[i].id +
          '"></button></div>';
      con +=
        '<div id="chat_entry_' +
        chd[i].id +
        '" class="chat_row"><div class="avatar_side"><img class="avatar" src="' +
        chd[i].avatar +
        '" alt="avatar" /><span>' +
        LNG["server" + chd[i].swiat] +
        '</span></div><div class="right_side"><div class="entry_header"><div class="autor player_rank' +
        chd[i].ranga +
        " " +
        opt +
        '" data-option="show_player" data-char_id="' +
        chd[i].autor_id +
        '">' +
        chd[i].autor +
        '</div><div class="date">' +
        this.convertTime(chd[i].time) +
        talker +
        '</div><div class="clr"></div></div>' +
        this.parseEmots(chd[i].mess) +
        "</div>" +
        modop +
        '<div class="clr"></div></div>';
    }
  } else con = LNG.lab3;
  JQS.ctm.html(con);
  option_bind();
  if (opening || GAME.chat_scrolled)
    JQS.ctm.animate({ scrollTop: JQS.ctm[0].scrollHeight }, 300);
};
GAME.parseContent = function (str) {
  return str.replaceAll(/\n/g, "<br />").replaceAll(/\\/g, "");
};
GAME.loadMapJson = function (callback) {
  if (this.map_json_loaded) return callback(true);
  else {
    $.getJSON("/json/graphic.json", function (json) {
      GAME.map_titles = json;
      GAME.map_json_loaded = 1;
      callback(true);
    });
  }
};
GAME.parseDaily = function (res) {
  var data = res.daily_data;
  var len = data.length;
  var con = "";
  for (var i = 0; i < len; i++) {
    var day = i + 1,
      am = "",
      cls = "",
      name = "",
      ncls = "";
    if (data[i].type == "premium_bon") {
      am = data[i].duration / 3600 + "h";
      name =
        LNG.lab178 +
        " <b class=orange>" +
        LNG["premium_bon" + data[i].bon] +
        "</b>";
    } else {
      if (data[i].amount > 100) cls = ' class="sm"';
      am = "x" + data[i].amount;
      if (data[i].type == "char_attr")
        name =
          "<span class=green>" +
          data[i].amount +
          "</span>x <b class=orange>" +
          LNG["shop_chup_" + data[i].atr] +
          "</b>";
      else if (data[i].type == "kk") name = LNG.currency2;
      else name = LNG.item_desc1;
    }
    if (i < this.char_data.online_received) {
      ncls = "taken";
      name += "<br /><span class=red>" + LNG.lab179 + "</span>";
    }
    if (i == this.char_data.online_received) {
      ncls = "current option";
      name += "<br /><span class=green>" + LNG.lab180 + "</span>";
    }
    con +=
      '<div class="' +
      ncls +
      '" data-option="take_daily" data-toggle="tooltip" data-original-title="<div class=tt>' +
      name +
      '</div>"><img src="' +
      data[i].gfx +
      '" /><b' +
      cls +
      ">" +
      am +
      "</b><span>" +
      LNG.lab177 +
      " " +
      day +
      "</span></div>";
  }
  $("#daily_con").html(con);
  $("#daily_reward").fadeIn();
  tooltip_bind();
  option_bind();
};
GAME.png_color = function (plvl, mlvl) {
  var gif;
  if (mlvl > plvl) gif = 4;
  if (mlvl - 5 > plvl) gif = 5;
  if (mlvl == plvl) gif = 3;
  if (mlvl < plvl) gif = 2;
  if (mlvl + 5 < plvl) gif = 1;
  return gif;
};
GAME.load_res_start = function () {
  this.is_loading = true;
  $("#res_loader").show();
};
GAME.load_res_stop = function () {
  this.is_loading = false;
  $("#res_loader").hide();
};
GAME.prepareImage = function (img) {
  img.ready = true;
  if (img.sprite) {
    var rcnt = img.data.length;
    var last_x = 0;
    for (var j = 0; j < rcnt; j++) {
      if (!img.data[j].af) img.data[j].af = 1;
      var id = j + 1;
      var name = img.res_id;
      if (img.data[j].s) name += img.data[j].s;
      else name += id;
      this.map_resources[name] = {};
      var width = parseInt(img.data[j].w);
      var height = width * parseInt(img.data[j].af);
      this.map_resources[name].add_effect = img.add_effect;
      this.map_resources[name].pre_effect = img.pre_effect;
      if (
        this.map_resources[name].add_effect == "tps_ssjb_lighting" &&
        this.char_data.ssjb >= 26
      )
        this.map_resources[name].add_effect = "tps_ssjbk_lighting";
      this.map_resources[name].width = width;
      this.map_resources[name].height = height;
      this.map_resources[name].mx = 0;
      this.map_resources[name].my = 0;
      if (img.data[j].hasOwnProperty("mx"))
        this.map_resources[name].mx = parseInt(img.data[j].mx);
      if (img.data[j].hasOwnProperty("my"))
        this.map_resources[name].my = parseInt(img.data[j].my);
      if (img.data[j].af > 1) {
        this.map_resources[name].animation = true;
        this.map_resources[name].animation_frames = img.data[j].af;
        this.map_resources[name].animation_speed = img.data[j].as;
        this.map.frame_control[
          this.map_resources[name].animation_speed +
            "_" +
            this.map_resources[name].animation_frames
        ] = { animation_current_frames: 0, animation_next_time: 0 };
      } else this.map_resources[name].animation = false;
      this.map_resources[name].precanvas = document.createElement("canvas");
      this.map_resources[name].precanvas.width = width;
      this.map_resources[name].precanvas.height = height;
      this.map_resources[name].prerender =
        this.map_resources[name].precanvas.getContext("2d");
      this.map_resources[name].prerender.drawImage(
        img,
        last_x,
        0,
        width,
        height,
        0,
        0,
        width,
        height
      );
      delete this.map_resources[name].prerender;
      last_x += width;
    }
  } else {
    img.precanvas = document.createElement("canvas");
    img.precanvas.width = img.width;
    img.precanvas.height = img.height;
    img.prerender = img.precanvas.getContext("2d");
    var last_x = 0;
    img.prerender.drawImage(
      img,
      last_x,
      0,
      img.width,
      img.height,
      0,
      0,
      img.width,
      img.height
    );
    delete img.prerenderr;
  }
};
GAME.loadingProcess = function () {
  this.res_loaded++;
  JQS.ltt.text(this.res_loaded + " / " + this.res_initiated);
  var pr = Math.floor((this.res_loaded / this.res_initiated) * 100);
  JQS.ltb.css({ width: pr + "%" });
  if (this.res_loaded >= this.res_initiated) {
    this.load_res_stop();
    return true;
  }
  return false;
};
GAME.processAwaitingResources = function (callback) {
  var cnt = this.awaiting_resources.length;
  this.res_initiated = cnt;
  if (this.res_initiated == 0) return callback(true);
  this.load_res_start();
  this.res_loaded = 0;
  var parent = this;
  JQS.ltt.text("0 / " + this.res_initiated);
  JQS.ltb.css({ width: "0%" });

  for (var i = 0; i < cnt; i++) {
    switch (this.awaiting_resources[i].type) {
      default:
        this.map_resources[this.awaiting_resources[i].res_id] = new Image();
        this.map_resources[this.awaiting_resources[i].res_id].ready = false;
        this.map_resources[this.awaiting_resources[i].res_id].src =
          this.awaiting_resources[i].src + "?v=" + locals.version;
        this.map_resources[this.awaiting_resources[i].res_id].sprite =
          this.awaiting_resources[i].sprite;
        this.map_resources[this.awaiting_resources[i].res_id].res_id =
          this.awaiting_resources[i].res_id;
        this.map_resources[this.awaiting_resources[i].res_id].add_effect =
          this.awaiting_resources[i].adef;
        this.map_resources[this.awaiting_resources[i].res_id].pre_effect =
          this.awaiting_resources[i].pdef;
        this.map_resources[this.awaiting_resources[i].res_id].data =
          this.awaiting_resources[i].data;
        this.map_resources[this.awaiting_resources[i].res_id].onload =
          function () {
            parent.prepareImage(this);
            if (parent.loadingProcess()) {
              parent.awaiting_resources = [];
              return callback();
            }
          };
        break;
    }
  }
};
GAME.pushNewResourcefromMapTitle = function (res_id, type, json) {
  if (!this.loaded_resources[res_id] && json) {
    this.loaded_resources[res_id] = true;
    this.awaiting_resources.push({
      res_id: res_id,
      src: this.gfx_path + json.src,
      type: type,
      sprite: json.sprite,
      data: json.data,
      adef: json.additional_effect,
      pdef: json.pre_additional_effect,
    });
  }
};
GAME.prepareMap = function () {
  if (!this.maploaded) {
    this.load_start();
    this.loadMapJson(function () {
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder(
        { a: 3, vo: GAME.map_options.vo },
        1
      );
    });
  }
};
GAME.map_cam_center_big = function (x, y) {
  this.map.cam_x = Math.floor(x - this.map.cX / 2 + 20);
  this.map.cam_y = Math.floor(y - this.map.cY / 2 + 20);
  this.map_cam_calc();
};
GAME.map_cam_center = function (x, y) {
  this.map.cam_x = (x - 1 - Math.floor(this.map.rX / 2)) * this.map.fX;
  this.map.cam_y = (y - 1 - Math.floor(this.map.rY / 2)) * this.map.fY;
  this.map_cam_calc();
};
GAME.map_cam_calc = function () {
  if (this.map.cam_x + this.map.cX > this.map.smax_x)
    this.map.cam_x = this.map.smax_x - this.map.cX;
  if (this.map.cam_y + this.map.cY > this.map.smax_y)
    this.map.cam_y = this.map.smax_y - this.map.cY;
  if (this.map.cam_x < 0) this.map.cam_x = 0;
  if (this.map.cam_y < 0) this.map.cam_y = 0;
  //if(this.map.smax_x<this.map.cX) this.map.cam_x-=(this.map.cX-this.map.smax_x)/2;
  //if(this.map.smax_y<this.map.cY) this.map.cam_y-=(this.map.cY-this.map.smax_y)/2;
  this.map.scam_x = Math.floor(this.map.cam_x / this.map.fX) + 1;
  this.map.scam_y = Math.floor(this.map.cam_y / this.map.fY) + 1;
  if (this.map.scam_x < 1) this.map.scam_x = 1;
  if (this.map.scam_y < 1) this.map.scam_y = 1;
  if (this.map.scam_x - this.map.rX > this.map.max_x)
    this.map.scam_x = this.map.max_x - this.map.rX;
  if (this.map.scam_y - this.map.rY > this.map.max_y)
    this.map.scam_y = this.map.max_y - this.map.rY;
};
GAME.ask_confirm = function (id, order) {
  this.confirm_order = order;
  var kom =
    LNG["confirm" + id] +
    '<br /><button class="pull-left option btn_small_gold" data-option="confirm_cancel">' +
    LNG.lab78 +
    '</div> <button class="pull-right option btn_small_gold" data-option="confirm_accept" data-cid="' +
    id +
    '">' +
    LNG.lab172 +
    "</div>";
  GAME.komunikat(kom);
  option_bind();
};
GAME.map_move = function (dir) {
  if (
    this.xxx033e84b4ad4e13163999a881534cbda1[this.char_id] &&
    this.xxxf6f70a0385c98b579791bb18658629d9
  ) {
    var ox = (nx = this.char_data.x);
    var oy = (ny = this.char_data.y);
    switch (dir) {
      case 1:
        oy++;
        break;
      case 2:
        oy--;
        break;
      case 3:
        ox++;
        oy++;
        break;
      case 4:
        ox--;
        oy++;
        break;
      case 5:
        ox++;
        oy--;
        break;
      case 6:
        ox--;
        oy--;
        break;
      case 7:
        ox++;
        break;
      case 8:
        ox--;
        break;
    }
    this.xxx033e84b4ad4e13163999a881534cbda1[this.char_id].dir = dir;
    if (
      !this.xxxf6f70a0385c98b579791bb18658629d9[ox + "_" + oy] ||
      this.xxxf6f70a0385c98b579791bb18658629d9[ox + "_" + oy].m == 0
    ) {
      JQS.mko.html(
        '<div class="fight_reward floating">' + LNG.error5 + "</div>"
      );
      this.floatingBind();
    } else {
      delete this.mining;
      this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
        a: 4,
        dir: dir,
        vo: GAME.map_options.vo,
      });
    }
    hide_tooltips();
  }
};
GAME.map_cam_move = function (dir) {
  var x = 0,
    y = 0;
  if (this.map.animate) {
    switch (dir) {
      case 1:
        x = 0;
        y = -40;
        break;
      case 2:
        x = 0;
        y = 40;
        break;
      case 3:
        x = -40;
        y = 0;
        break;
      case 4:
        x = 40;
        y = 0;
        break;
    }
    this.map.cam_x += x;
    this.map.cam_y += y;
    this.map_cam_calc();
  }
};
GAME.senzu_limit = function () {
  var lim = 0;
  lim = this.char_data.pr_max / 100;
  if (this.char_data.reborn >= 3) lim *= 2;
  var bon = this.getStat(99);
  if (bon > 0) lim *= 1 + bon / 100;
  return Math.floor(lim);
};
GAME.questAction = function (e) {
  if (!e || !e.originalEvent || !e.originalEvent.isTrusted) return;
  clearTimeout(this.quest_action_tim);
  var parent = this;
  if (this.quest_action) {
    this.quest_action_count++;
    if (this.quest_action_count > this.quest_action_max) {
      this.quest_action_count = this.quest_action_max;
    } else this.quest_action_tmp++;
    $("#quest_bar_val_span").text("+ " + this.quest_action_tmp);
    this.quest_action_tim = setTimeout(function () {
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
        a: 22,
        type: 7,
        id: parent.quest_action_qid,
        cnt: parent.quest_action_tmp,
      });
      parent.quest_action_tmp = 0;
      $("#quest_bar_val_span").text("");
    }, 300);
  }
};
GAME.preparePlayer = function (player) {
  var res = player;
  res.state = { order: 0 };
  if (this.map_titles && this.map_titles.characters[res.style]) {
    this.pushNewResourcefromMapTitle(
      "body_" + res.style,
      1,
      this.map_titles.characters[res.style].body
    );
    var hjson = this.map_titles.characters[res.style].hairs[res.hair];
    if (!hjson) {
      res.hair = 0;
      this.map_titles.characters[res.style].hairs[res.hair];
    }
    this.pushNewResourcefromMapTitle(
      "hair_" + res.style + "_" + res.hair,
      1,
      hjson
    );
    if (hjson && hjson.use_cloth) {
      res.old_cloth = res.cloth;
      res.cloth = hjson.use_cloth;
    }
    this.pushNewResourcefromMapTitle(
      "cloth_" + res.cloth,
      1,
      this.map_titles.cloths[res.cloth]
    );
  } else console.log("wrong player data", res);
  res.precanvas = document.createElement("canvas");
  res.precanvas.width = 100;
  res.precanvas.height = 40;
  res.prerender = res.precanvas.getContext("2d");
  var ctx = res.prerender;
  ctx.font = "15px 'Play'";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.textAlign = "center";
  res.vip_x = Math.floor(ctx.measureText(res.name).width / 2);
  ctx.strokeText(res.name, 50, 15);
  ctx.fillStyle = "white";
  ctx.fillText(res.name, 50, 15);
  if (player.title && player.title[this.lang]) {
    res.precanvas2 = document.createElement("canvas");
    res.precanvas2.width = 200;
    res.precanvas2.height = 20;
    res.prerender2 = res.precanvas2.getContext("2d");
    var ctx = res.prerender2;
    ctx.font = "11px 'Play'";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.textAlign = "center";
    ctx.strokeText("<" + player.title[this.lang].toUpperCase() + ">", 100, 15);
    ctx.fillStyle = player.title.color;
    ctx.fillText("<" + player.title[this.lang].toUpperCase() + ">", 100, 15);
  }
  return res;
};
GAME.prepareMapPlayers = function (players) {
  var res = {};
  var len = players.length;
  for (var i = 0; i < len; i++) {
    res[players[i].id] = players[i];
    res[players[i].id] = this.preparePlayer(players[i]);
  }
  return res;
};
GAME.parseInstance = function () {
  if (this.instance_data) {
    var len = this.instance_data.players.length;
    $("#instance_head").show();
    $("#instance_timer").html(
      this.showTimer(this.instance_data.timer - this.getTime())
    );
    var con = "";
    for (var i = 0; i < len; i++) {
      con +=
        '<div class="iplayer"><b>' +
        this.instance_data.players[i].name +
        '</b> [<span id="inst_playerpoints_' +
        this.instance_data.players[i].char_id +
        "_" +
        this.instance_data.players[i].server +
        '" data-value="' +
        this.instance_data.players[i].points +
        '">' +
        this.dots(this.instance_data.players[i].points) +
        "</span>]</div>";
    }
    $("#inst_players").html(con);
  }
};
GAME.loadMap = function (
  loc,
  map,
  players,
  tps,
  castles = [],
  private_data = {},
  quests = {},
  mines = {},
  instance_data = {},
  wanteds = {},
  balls = {},
  bosses = {}
) {
  this.current_loc = loc;
  this.xxxf6f70a0385c98b579791bb18658629d9 = map;
  this.xxx033e84b4ad4e13163999a881534cbda1 = this.prepareMapPlayers(players);
  this.map_private = false;
  this.map_castles = false;
  this.map_mines = false;
  this.mobs_prepared = false;
  this.md = {};
  this.mf = {};
  this.map_quests = quests;
  this.map_wanteds = wanteds;
  this.map_balls = balls;
  this.map_bosses = bosses;
  $("#instance_head").hide();
  if (instance_data && instance_data.timer) {
    this.instance_data = instance_data;
    this.parseInstance();
  }
  if (mines) this.map_mines = mines;
  if (private_data && private_data.id > 0) {
    this.map_private = private_data;
    for (var i = 1; i <= 9; i++) {
      this.map_private["sl" + i] = Math.floor(this.map_private["s" + i] / 3);
    }
    if (this.map_titles)
      this.pushNewResourcefromMapTitle(
        "private_",
        1,
        this.map_titles.private_planet
      );
  }
  if (castles.length) {
    var len = castles.length;
    this.map_castles = {};
    for (var i = 0; i < len; i++) {
      this.map_castles[castles[i].x + "_" + castles[i].y] = castles[i];
    }
    if (this.map_titles)
      this.pushNewResourcefromMapTitle("castle_", 1, this.map_titles.castles);
  }
  var parent = this;
  this.map.max_x = this.current_loc.x_max;
  this.map.max_y = this.current_loc.y_max;
  this.map.smax_x = this.current_loc.x_max * this.map.fX;
  this.map.smax_y = this.current_loc.y_max * this.map.fY;
  this.minimap.smax_x = this.current_loc.x_max * this.minimap.w;
  this.minimap.smax_y = this.current_loc.y_max * this.minimap.h;
  this.map_cam_center(this.char_data.x, this.char_data.y);
  var bons = this.parseLocBons(this.current_loc);
  $("#loc_bons").html(bons);
  tooltip_bind();
  $("#map_name").text(this.current_loc[this.lang_data["lokacje"][this.lang]]);
  $("#map_canvas_container").hide();
  if (tps) {
    var len = tps.length;
    for (var i = 0; i < len; i++) {
      this.xxxf6f70a0385c98b579791bb18658629d9[
        tps[i].x + "_" + tps[i].y
      ].hastp = 1;
    }
  }
  this.map.others = [];
  this.map.deft = 0;
  if (this.map_titles) {
    for (var x = 1; x <= this.current_loc.x_max; x++) {
      for (var y = 1; y <= this.current_loc.y_max; y++) {
        if (this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y]) {
          var cell = this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y];
          cell.cc = { x: (x - 1) * this.map.fX, y: (y - 1) * this.map.fY };
          if (cell.t > 0) {
            this.pushNewResourcefromMapTitle(
              "terrain_" + cell.t,
              1,
              this.map_titles.terrains[cell.t]
            );
            if (this.map.deft == 0) this.map.deft = cell.t;
            if (cell.t != this.map.deft) {
              if (this.map.others.indexOf(cell.t) == -1)
                this.map.others.push(cell.t);
            }
          }
          if (cell.b > 0)
            this.pushNewResourcefromMapTitle(
              "biom_" + cell.b + "_",
              1,
              this.map_titles.bioms[cell.b]
            );
        }
      }
    }

    this.pushNewResourcefromMapTitle("tps_", 1, this.map_titles.tps);
    this.pushNewResourcefromMapTitle("minimap_", 1, this.map_titles.minimapa);
  }
  this.processAwaitingResources(function () {
    if (!parent.map.initiated) {
      parent.map.canvas = document.getElementById("map_canvas");
      parent.map.ctx = parent.map.canvas.getContext("2d");
      parent.map.ctx.imageSmoothingEnabled = false;
      parent.map.canvas.addEventListener(
        "contextmenu",
        function (evt) {
          if (evt.which == 3) {
            evt.preventDefault();
            return false;
          }
        },
        false
      );
      parent.map.initiated = true;
      //minimap
      parent.minimap.canvas = document.getElementById("minimap_canvas");
      parent.minimap.grid_canvas = document.getElementById(
        "minimap_grid_canvas"
      );
      parent.minimap.canvas.width = parent.minimap.cX;
      parent.minimap.canvas.height = parent.minimap.cY;
      parent.minimap.grid_canvas.width = parent.minimap.cX;
      parent.minimap.grid_canvas.height = parent.minimap.cY;
      parent.minimap.ctx = parent.minimap.canvas.getContext("2d");
      parent.minimap.ctx.imageSmoothingEnabled = false;
      parent.minimap.gctx = parent.minimap.grid_canvas.getContext("2d");
      parent.minimap.gctx.imageSmoothingEnabled = false;
      parent.minimap.grid_canvas.addEventListener(
        "contextmenu",
        function (evt) {
          if (evt.which == 3) {
            evt.preventDefault();
            return false;
          }
        },
        false
      );
      parent.updateMinimap();
    }
    parent.maploaded = true;
    if (parent.map.smax_x < parent.map.cX)
      parent.map.canvas.width = parent.map.smax_x;
    else parent.map.canvas.width = parent.map.cX;
    if (parent.map.smax_y < parent.map.cY)
      parent.map.canvas.height = parent.map.smax_y;
    else parent.map.canvas.height = parent.map.cY;
    $("#map_canvas_container").show();
    parent.map.animate = true;
    if (!parent.already_animated) {
      parent.animate();
      parent.already_animated = 1;
    }
  });
};
GAME.updateMinimap = function () {
  var parent = this;
  if (this.map.animate && this.minimap.active) this.draw_minimap();
  window.setTimeout(function () {
    parent.updateMinimap();
  }, 500);
};
GAME.drawImage = function (ctx, resn, x, y, once = 0, id = "") {
  var result = { end: false, frame: 0 };
  x = parseInt(x);
  y = parseInt(y);
  var sy = 0,
    ox = x,
    oy = y;
  var res = this.map_resources[resn];
  if (this.map_resources && res && res.precanvas) {
    if (res.animation) {
      var time = this.getmTime();
      var ti = res.animation_speed + "_" + res.animation_frames;
      var fc = this.map.frame_control[ti];
      if (once) {
        if (!this.map.frame_control[id])
          this.map.frame_control[id] = {
            animation_current_frames: 0,
            animation_next_time: 0,
          };
        fc = this.map.frame_control[id];
      }
      if (fc) {
        sy = fc.animation_current_frames * res.width;
        if (fc.animation_next_time < time) {
          fc.animation_current_frames++;
          fc.animation_next_time = time + res.animation_speed;
        }
        if (fc.animation_current_frames >= res.animation_frames) {
          result.end = true;
          fc.animation_current_frames = 0;
        }
        result.frame = fc.animation_current_frames;
      }
    }
    if (res.hasOwnProperty("mx")) x += res.mx;
    if (res.hasOwnProperty("my")) y += res.my;
    if (res.pre_effect) {
      this.drawImage(ctx, res.pre_effect, ox, oy);
    }
    ctx.drawImage(
      res.precanvas,
      0,
      sy,
      res.width,
      res.width,
      x,
      y,
      res.width,
      res.width
    );
    if (res.add_effect) {
      this.drawImage(ctx, res.add_effect, ox, oy);
    }
  } else if (this.debug) console.log("tes", res, resn);
  return result;
};
GAME.mapPlayerSSJCancel = function (char_id) {
  if (this.xxx033e84b4ad4e13163999a881534cbda1[char_id]) {
    var parent = this;
    this.pushNewResourcefromMapTitle(
      "hair_" + this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style + "_0",
      1,
      this.map_titles.characters[
        this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style
      ].hairs[0]
    );
    if (this.xxx033e84b4ad4e13163999a881534cbda1[char_id].old_cloth) {
      this.xxx033e84b4ad4e13163999a881534cbda1[char_id].cloth =
        this.xxx033e84b4ad4e13163999a881534cbda1[char_id].old_cloth;
      this.pushNewResourcefromMapTitle(
        "cloth_" + this.xxx033e84b4ad4e13163999a881534cbda1[char_id].cloth,
        1,
        this.map_titles.cloths[
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].cloth
        ]
      );
    }
    this.processAwaitingResources(function () {
      parent.xxx033e84b4ad4e13163999a881534cbda1[char_id].hair = 0;
      parent.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir = 1;
    });
  }
};
GAME.mapPlayerSSJStart = function (char_id, type) {
  if (this.xxx033e84b4ad4e13163999a881534cbda1[char_id]) {
    var parent = this;
    var hjson =
      this.map_titles.characters[
        this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style
      ].hairs[type];
    if (!hjson) {
      type = 0;
      hjson =
        this.map_titles.characters[
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style
        ].hairs[type];
    }
    this.pushNewResourcefromMapTitle(
      "hair_" +
        this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style +
        "_" +
        type,
      1,
      hjson
    );
    if (hjson && hjson.use_cloth) {
      this.xxx033e84b4ad4e13163999a881534cbda1[char_id].old_cloth =
        this.xxx033e84b4ad4e13163999a881534cbda1[char_id].cloth;
      this.xxx033e84b4ad4e13163999a881534cbda1[char_id].cloth = hjson.use_cloth;
      this.pushNewResourcefromMapTitle(
        "cloth_" + this.xxx033e84b4ad4e13163999a881534cbda1[char_id].cloth,
        1,
        this.map_titles.cloths[
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].cloth
        ]
      );
    }
    this.processAwaitingResources(function () {
      parent.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir = 1;
      parent.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.order = 4;
      parent.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.hair = type;
      parent.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.frame = 0;
    });
  }
};
GAME.drawMiniMap = function () {
  var msx = this.map.scam_x - 6;
  var msy = this.map.scam_y - 5;
  var cam_x = msx * this.minimap.w;
  var cam_y = msy * this.minimap.h;
  if (cam_x + this.minimap.cX > this.minimap.smax_x)
    cam_x = this.minimap.smax_x - this.minimap.cX;
  if (cam_y + this.minimap.cY > this.minimap.smax_y)
    cam_y = this.minimap.smax_y - this.minimap.cY;
  if (cam_x < 0) cam_x = 0;
  if (cam_y < 0) cam_y = 0;
  if (this.minimap.smax_x < this.minimap.cX)
    cam_x -= Math.floor((this.minimap.cX - this.minimap.smax_x) / 16) * 8;
  if (this.minimap.smax_y < this.minimap.cY)
    cam_y -= Math.floor((this.minimap.cY - this.minimap.smax_y) / 16) * 8;
  for (var y = 1; y <= this.map.max_y; y++) {
    for (var x = 1; x <= this.map.max_x; x++) {
      var cx = (x - 1) * this.minimap.w - cam_x;
      var cy = (y - 1) * this.minimap.h - cam_y;
      if (this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y]) {
        var cell = this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y];
        if (cell.m == 0) {
          this.minimap.ctx.fillStyle = "rgba(5, 76, 10, 1)";
          this.minimap.ctx.fillRect(cx, cy, this.minimap.w, this.minimap.h);
        } else if (cell.f) {
          this.minimap.ctx.fillStyle = "rgba(5, 76, 10, 0.3)";
          this.minimap.ctx.fillRect(cx, cy, this.minimap.w, this.minimap.h);
        }
      }
    }
  }
  for (var y = 1; y <= this.map.max_y; y++) {
    for (var x = 1; x <= this.map.max_x; x++) {
      var cx = (x - 1) * this.minimap.w - cam_x;
      var cy = (y - 1) * this.minimap.h - cam_y;
      if (this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y]) {
        var cell = this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y];
        if (cell.hastp) {
          this.drawImage(this.minimap.ctx, "minimap_portal", cx, cy);
        }
        if (this.map_castles && this.map_castles[x + "_" + y]) {
          //castle
        }
        if (this.map_bosses && this.map_bosses[x + "_" + y]) {
          this.drawImage(this.minimap.ctx, "minimap_boss", cx, cy);
        }
        if (this.map_balls && this.map_balls[x + "_" + y]) {
          this.drawImage(this.minimap.ctx, "minimap_ball", cx, cy);
        }
        if (this.map_quests[x + "_" + y] && this.map_options.vo[1]) {
          var len = this.map_quests[x + "_" + y].length,
            move = 0,
            q = false;
          for (var i = 0; i < len; i++) {
            var q = this.map_quests[x + "_" + y][i];
            if (q) {
              q = true;
              break;
            }
          }
          if (q) this.drawImage(this.minimap.ctx, "minimap_quest", cx, cy);
        }
        if (
          this.map_wanteds &&
          this.map_wanteds.x == x &&
          this.map_wanteds.y == y
        ) {
          this.drawImage(this.minimap.ctx, "minimap_wanted", cx, cy);
        }
      }
    }
  }
  for (var char_id in this.xxx033e84b4ad4e13163999a881534cbda1) {
    char_id = parseInt(char_id);
    if (char_id < 1) continue;
    if (
      this.xxx033e84b4ad4e13163999a881534cbda1.hasOwnProperty(char_id) &&
      char_id != this.char_id
    ) {
      var x = this.xxx033e84b4ad4e13163999a881534cbda1[char_id].x;
      var y = this.xxx033e84b4ad4e13163999a881534cbda1[char_id].y;
      var cx = (x - 1) * this.minimap.w - cam_x;
      var cy = (y - 1) * this.minimap.h - cam_y;
      this.drawImage(this.minimap.ctx, "minimap_enemy", cx, cy);
    }
  }
  if (this.xxx033e84b4ad4e13163999a881534cbda1[this.char_id]) {
    var x = this.char_data.x;
    var y = this.char_data.y;
    var cx = (x - 1) * this.minimap.w - cam_x;
    var cy = (y - 1) * this.minimap.h - cam_y;
    this.drawImage(this.minimap.ctx, "minimap_player", cx, cy);
  }
};
GAME.drawSmallMap = function () {
  if (!this.maploaded) return;
  var time = this.getmTime();
  var rx = this.map.scam_x + this.map.rX;
  var ry = this.map.scam_y + this.map.rY;
  if (rx > this.map.max_x) rx = this.map.max_x;
  if (ry > this.map.max_y) ry = this.map.max_y;
  if (rx < this.map.rX) rx = this.map.rX;
  if (ry < this.map.rY) ry = this.map.rY;

  //var others=[];
  //var deft=0;
  for (var y = this.map.scam_y; y <= ry; y++) {
    for (var x = this.map.scam_x; x <= rx; x++) {
      if (this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y]) {
        var cell = this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y];
        if (cell.t > 0) {
          //if(deft==0) deft=cell.t;
          if (cell.t != this.map.deft) {
            //if(others.indexOf(cell.t)==-1) others.push(cell.t);
            continue;
          }
          //terrain
          var cx = cell.cc.x - this.map.cam_x;
          var cy = cell.cc.y - this.map.cam_y;
          var ta = cell.ta || 1;
          this.drawImage(this.map.ctx, "terrain_" + cell.t + "f", cx, cy);
        } else if (cell.t == 0) {
          var cx = cell.cc.x - this.map.cam_x;
          var cy = cell.cc.y - this.map.cam_y;
          this.map.ctx.fillStyle = "rgba(0, 0, 0, 1)";
          this.map.ctx.fillRect(cx, cy, 40, 40);
        }
      } else {
        var cx = (x - 1) * this.map.fX - this.map.cam_x;
        var cy = (y - 1) * this.map.fY - this.map.cam_y;
        this.map.ctx.fillStyle = "rgba(0, 0, 0, 1)";
        this.map.ctx.fillRect(cx, cy, 40, 40);
      }
    }
  }
  if (this.map.others.length > 0) {
    for (var y = this.map.scam_y; y <= ry; y++) {
      for (var x = this.map.scam_x; x <= rx; x++) {
        if (this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y]) {
          var cell = this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y];
          if (cell.t == this.map.deft || cell.t == 0) {
            continue;
          }
          //terrain
          var cx = cell.cc.x - this.map.cam_x;
          var cy = cell.cc.y - this.map.cam_y;
          var ta = cell.ta || 1;
          this.drawImage(this.map.ctx, "terrain_" + cell.t + "f", cx, cy);
        }
      }
    }
  }
  for (var y = this.map.scam_y; y <= ry; y++) {
    for (var x = this.map.scam_x; x <= rx; x++) {
      if (this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y]) {
        var cell = this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y],
          cc = true,
          cx = 0,
          cy = 0;
        if (this.map_castles && this.map_castles[x + "_" + y]) {
          cx = cell.cc.x - this.map.cam_x;
          cy = cell.cc.y - this.map.cam_y;
          cc = false;
          this.drawImage(this.map.ctx, "castle_ani", cx, cy);
          this.drawImage(
            this.map.ctx,
            "castle_l" + this.map_castles[x + "_" + y].level,
            cx,
            cy
          );
        } else if (
          this.map_private &&
          this.map_private.type &&
          this.planet_str[this.map_private.type][x + "_" + y]
        ) {
          if (cc) {
            cx = cell.cc.x - this.map.cam_x;
            cy = cell.cc.y - this.map.cam_y;
            cc = false;
          }
          var s = this.planet_str[this.map_private.type][x + "_" + y];
          if (this.map_private["sl" + s] > 0)
            this.drawImage(
              this.map.ctx,
              "private_s" + s + "_" + this.map_private["sl" + s],
              cx,
              cy
            );
        } else if (cell.f > 0) {
          if (cc) {
            cx = cell.cc.x - this.map.cam_x;
            cy = cell.cc.y - this.map.cam_y;
            cc = false;
          }
          this.drawImage(this.map.ctx, "biom_" + cell.b + "_" + cell.f, cx, cy);
        }
        if (this.premiumData && this.premiumData[x + "_" + y]) {
          if (cc) {
            cx = cell.cc.x - this.map.cam_x;
            cy = cell.cc.y - this.map.cam_y;
            cc = false;
          }
          if (this.premiumData[x + "_" + y] == 1)
            this.map.ctx.fillStyle = "rgba(51, 153, 255,0.75)";
          else this.map.ctx.fillStyle = "rgba(255, 51, 0,0.75)";
          this.map.ctx.fillRect(cx, cy, 40, 40);
        }
      }
    }
  }
  for (var y = this.map.scam_y; y <= ry; y++) {
    for (var x = this.map.scam_x; x <= rx; x++) {
      if (this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y]) {
        var cell = this.xxxf6f70a0385c98b579791bb18658629d9[x + "_" + y],
          cc = true,
          cx = 0,
          cy = 0;
        if (cell.e) {
          if (cc) {
            cx = cell.cc.x - this.map.cam_x;
            cy = cell.cc.y - this.map.cam_y;
            cc = false;
          }
          this.drawImage(this.map.ctx, cell.e, cx, cy);
        }
        if (cell.hastp) {
          if (cc) {
            cx = cell.cc.x - this.map.cam_x;
            cy = cell.cc.y - this.map.cam_y;
            cc = false;
          }
          this.drawImage(this.map.ctx, "tps_field", cx, cy);
        }
        if (this.map_mines && this.map_mines.coords[x + "_" + y]) {
          if (cc) {
            cx = cell.cc.x - this.map.cam_x;
            cy = cell.cc.y - this.map.cam_y;
            cc = false;
          }
          this.drawImage(this.map.ctx, "tps_mine", cx, cy);
        }
        if (this.map_quests[x + "_" + y] && this.map_options.vo[1]) {
          if (cc) {
            cx = cell.cc.x - this.map.cam_x;
            cy = cell.cc.y - this.map.cam_y;
            cc = false;
          }
          var len = this.map_quests[x + "_" + y].length,
            move = 0;
          for (var i = 0; i < len; i++) {
            var q = this.map_quests[x + "_" + y][i];
            if (q) {
              if (q.move) {
                var tx = (x - 1) * this.map.fX;
                var ty = (y - 1) * this.map.fY;
                var nx = (q.move.new_x - 1) * this.map.fX;
                var ny = (q.move.new_y - 1) * this.map.fY;
                var percent = (time - q.move.start) / q.move.duration;

                cx = tx + (nx - tx) * percent - this.map.cam_x;
                cy = ty + (ny - ty) * percent - this.map.cam_y;
                this.drawImage(this.map.ctx, "tps_quest", cx, cy);
                if (percent >= 1) {
                  var nx = q.move.new_x;
                  var ny = q.move.new_y;
                  delete q.move;
                  if (this.map_quests[nx + "_" + ny])
                    this.map_quests[nx + "_" + ny].push(q);
                  else this.map_quests[nx + "_" + ny] = [q];
                  this.map_quests[x + "_" + y][i] = false;
                }
              } else if (q.end) {
                var tmp = this.drawImage(
                  this.map.ctx,
                  "tps_quest_end",
                  cx + move,
                  cy,
                  1,
                  q.qb_id
                );
                if (tmp.end) {
                  this.map_quests[x + "_" + y][i] = false;
                }
              } else this.drawImage(this.map.ctx, "tps_quest", cx + move, cy);
              move += 10;
            }
          }
        }
      }
    }
  }
  for (var char_id in this.xxx033e84b4ad4e13163999a881534cbda1) {
    char_id = parseInt(char_id);
    if (char_id < 1) continue;
    if (
      this.xxx033e84b4ad4e13163999a881534cbda1.hasOwnProperty(char_id) &&
      char_id != this.char_id
    ) {
      this.drawMapPlayer(char_id);
    }
  }
  if (this.xxx033e84b4ad4e13163999a881534cbda1[this.char_id])
    this.drawMapPlayer(this.char_id);
  if (this.premiumData) {
    this.map.ctx.drawImage(this.premiumDataN, 0, 0, 200, 60, 200, 20, 200, 60);
  }
};
GAME.drawMapPlayer = function (char_id) {
  var time = this.getmTime();
  var time2 = this.getTime();
  var cell =
    this.xxxf6f70a0385c98b579791bb18658629d9[
      this.xxx033e84b4ad4e13163999a881534cbda1[char_id].x +
        "_" +
        this.xxx033e84b4ad4e13163999a881534cbda1[char_id].y
    ];
  if (cell) {
    var cx = cell.cc.x - this.map.cam_x;
    var cy = cell.cc.y - this.map.cam_y;
    var draw = true;
    //console.log('tewst',this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style);
    switch (this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.order) {
      case 4:
        this.drawImage(
          this.map.ctx,
          "body_" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style +
            "transform",
          cx,
          cy,
          2,
          char_id + "tstyle"
        );
        this.drawImage(
          this.map.ctx,
          "cloth_" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].cloth +
            "transform",
          cx,
          cy,
          2,
          char_id + "tcloth"
        );
        var tmp = this.drawImage(
          this.map.ctx,
          "hair_" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style +
            "_0transform_" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.hair,
          cx,
          cy,
          2,
          char_id + "ttrans"
        );
        if (tmp.end) {
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].hair =
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.hair;
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.order = 0;
          draw = false;
        }
        break;
      case 3:
        if (
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.frame == 1 ||
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.frame == 3
        ) {
          this.drawImage(
            this.map.ctx,
            "body_" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style +
              "dir" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir,
            cx,
            cy
          );
          this.drawImage(
            this.map.ctx,
            "cloth_" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].cloth +
              "dir" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir,
            cx,
            cy
          );
          this.drawImage(
            this.map.ctx,
            "hair_" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style +
              "_" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].hair +
              "dir" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir,
            cx,
            cy
          );
        }
        var tmp = this.drawImage(
          this.map.ctx,
          "tps_out",
          cx,
          cy,
          2,
          char_id + "tpout"
        );
        if (tmp.end) {
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.order = 0;
          delete this.xxx033e84b4ad4e13163999a881534cbda1[char_id];
          draw = false;
        } else
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.frame =
            tmp.frame;
        break;
      case 2:
        if (
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.frame == 1 ||
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.frame == 3
        ) {
          this.drawImage(
            this.map.ctx,
            "body_" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style +
              "dir" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir,
            cx,
            cy
          );
          this.drawImage(
            this.map.ctx,
            "cloth_" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].cloth +
              "dir" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir,
            cx,
            cy
          );
          this.drawImage(
            this.map.ctx,
            "hair_" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style +
              "_" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].hair +
              "dir" +
              this.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir,
            cx,
            cy
          );
        }
        var tmp = this.drawImage(
          this.map.ctx,
          "tps_in",
          cx,
          cy,
          2,
          char_id + "tpin"
        );
        if (tmp.end)
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.order = 0;
        else
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.frame =
            tmp.frame;
        break;
      case 1:
        var tx =
          (this.xxx033e84b4ad4e13163999a881534cbda1[char_id].x - 1) *
          this.map.fX;
        var ty =
          (this.xxx033e84b4ad4e13163999a881534cbda1[char_id].y - 1) *
          this.map.fY;
        var nx =
          (this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.nx - 1) *
          this.map.fX;
        var ny =
          (this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.ny - 1) *
          this.map.fY;
        var percent =
          (time -
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.start) /
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.duration;

        cx = Math.floor(tx + (nx - tx) * percent);
        cy = Math.floor(ty + (ny - ty) * percent);
        if (char_id == this.char_id && this.hero_cen)
          this.map_cam_center_big(cx, cy);
        cx -= this.map.cam_x;
        cy -= this.map.cam_y;
        if (this.xxx033e84b4ad4e13163999a881534cbda1[char_id].hair == 8) {
          this.drawImage(this.map.ctx, "tps_instinct_aura", cx, cy);
        }
        this.drawImage(
          this.map.ctx,
          "body_" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style +
            "mdir" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir,
          cx,
          cy
        );
        this.drawImage(
          this.map.ctx,
          "cloth_" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].cloth +
            "mdir" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir,
          cx,
          cy
        );
        this.drawImage(
          this.map.ctx,
          "hair_" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style +
            "_" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].hair +
            "mdir" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir,
          cx,
          cy
        );
        if (percent >= 1) {
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].x =
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.nx;
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].y =
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.ny;
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.order = 0;
        }
        break;
      default:
        if (this.xxx033e84b4ad4e13163999a881534cbda1[char_id].hair == 8) {
          this.drawImage(this.map.ctx, "tps_instinct_aura", cx, cy);
        }
        this.drawImage(
          this.map.ctx,
          "body_" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style +
            "dir" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir,
          cx,
          cy
        );
        this.drawImage(
          this.map.ctx,
          "cloth_" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].cloth +
            "dir" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir,
          cx,
          cy
        );
        this.drawImage(
          this.map.ctx,
          "hair_" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].style +
            "_" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].hair +
            "dir" +
            this.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir,
          cx,
          cy
        );
        break;
    }
    if (draw) {
      this.map.ctx.drawImage(
        this.xxx033e84b4ad4e13163999a881534cbda1[char_id].precanvas,
        0,
        0,
        100,
        20,
        cx - 30,
        cy - 20,
        100,
        20
      );
      if (this.xxx033e84b4ad4e13163999a881534cbda1[char_id].vip)
        this.drawImage(
          this.map.ctx,
          "tps_vip" + this.xxx033e84b4ad4e13163999a881534cbda1[char_id].vip,
          cx - this.xxx033e84b4ad4e13163999a881534cbda1[char_id].vip_x - 13,
          cy - 30
        );
      if (this.xxx033e84b4ad4e13163999a881534cbda1[char_id].precanvas2)
        this.map.ctx.drawImage(
          this.xxx033e84b4ad4e13163999a881534cbda1[char_id].precanvas2,
          0,
          0,
          200,
          20,
          cx - 80,
          cy - 35,
          200,
          20
        );
    }
  }
};
GAME.playersSort = function () {
  var tmp = this.xxx033e84b4ad4e13163999a881534cbda1;
  var newt = {};
  newt[this.char_id] = tmp[this.char_id];
  for (var char_id in tmp) {
    char_id = parseInt(char_id);
    if (char_id < 1) continue;
    if (tmp.hasOwnProperty(char_id) && char_id != this.char_id) {
      newt[char_id] = tmp[char_id];
    }
  }

  this.xxx033e84b4ad4e13163999a881534cbda1 = newt;
};
GAME.locPlayerIn = function (char_id, data) {
  if (!this.xxx033e84b4ad4e13163999a881534cbda1[char_id]) {
    this.xxx033e84b4ad4e13163999a881534cbda1[char_id] = data;
    this.xxx033e84b4ad4e13163999a881534cbda1[char_id].char_id = char_id;
    this.xxx033e84b4ad4e13163999a881534cbda1[char_id] =
      this.preparePlayer(data);
    this.processAwaitingResources(function () {});
  } else {
    if (data.x) this.xxx033e84b4ad4e13163999a881534cbda1[char_id].x = data.x;
    if (data.y) this.xxx033e84b4ad4e13163999a881534cbda1[char_id].y = data.y;
  }
  this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.order = 2;
  this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.frame = 0;
};
GAME.locPlayerOut = function (char_id) {
  if (this.xxx033e84b4ad4e13163999a881534cbda1[char_id]) {
    this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.order = 3;
    this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.frame = 0;
  }
};
GAME.mapCharMove = function (char_id, x, y, dir) {
  if (this.xxx033e84b4ad4e13163999a881534cbda1[char_id]) {
    if (this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.order == 4) {
      this.xxx033e84b4ad4e13163999a881534cbda1[char_id].hair =
        this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.hair;
    }
    if (this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.order == 1) {
      this.xxx033e84b4ad4e13163999a881534cbda1[char_id].x =
        this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.nx;
      this.xxx033e84b4ad4e13163999a881534cbda1[char_id].y =
        this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.ny;
    }
    this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.order = 1;
    this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.nx = x;
    this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.ny = y;
    this.xxx033e84b4ad4e13163999a881534cbda1[char_id].dir = dir;
    this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.start =
      this.getmTime();
    this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.duration =
      this.move_speed;
    this.xxx033e84b4ad4e13163999a881534cbda1[char_id].state.p = 0;
  }
};
GAME.parseUsedItems = function (items) {
  //restore defaults
  for (var s = 1; s <= this.item_slots; s++) {
    $("#ekw_use_slot" + s)
      .empty()
      .attr(
        "data-original-title",
        '<div class="tt">' + LNG["item_slot" + s] + "</div>"
      )
      .removeClass("player_ekw_item")
      .attr("data-item_id", 0)
      .attr("data-load_go", 0)
      .attr("data-item_class", 0)
      .attr("draggable", false)
      .off("mouseover")
      .off("dragstart")
      .off("dragend");
  }
  if (items && items.length) {
    var len = items.length;
    for (var i = 0; i < len; i++) {
      var slot = items[i].slot;
      var item =
        '<img src="/gfx/items/' +
        items[i].class +
        "/" +
        items[i].type +
        "/" +
        items[i].item_id +
        '.png" />';
      $("#ekw_use_slot" + slot)
        .html(item)
        .addClass("player_ekw_item")
        .attr("data-item_id", items[i].id)
        .attr("draggable", true);
    }
  }
  player_ekw_item_bind();
};
GAME.clan_scost = function (i, lvl) {
  var cost = 9999;
  switch (i) {
    case 1:
    case 7:
    case 8:
    case 36:
      cost = (lvl + 1) * (lvl + 1) * 9;
      if (lvl > 15) cost = 16 * 16 * 9 + lvl * 10;
      break;
    case 2:
      cost = (lvl + 1) * (lvl + 1) * 7;
      if (lvl > 15) cost = 16 * 16 * 7 + lvl * 10;
      break;
    case 3:
    case 5:
    case 9:
    case 12:
    case 13:
    case 14:
    case 15:
      cost = (lvl + 1) * (lvl + 1) * 8;
      if (lvl > 15) cost = 16 * 16 * 8 + lvl * 10;
      break;
    case 4:
    case 10:
      cost = (lvl + 1) * (lvl + 1) * 6;
      if (lvl > 15) cost = 16 * 16 * 6 + lvl * 10;
      break;
    case 6:
      cost = (lvl + 1) * (lvl + 1) * 2;
      if (lvl > 15) cost = 16 * 16 * 2 + lvl * 10;
      break;
    case 11:
      cost = (lvl + 1) * (lvl + 1) * 10;
      if (lvl > 15) cost = 16 * 16 * 10 + lvl * 10;
      break;
    case 16:
    case 18:
      cost = (lvl + 1) * (lvl + 1) * 3;
      if (lvl > 15) cost = 16 * 16 * 3 + lvl * 10;
      break;
    case 17:
    case 19:
      cost = (lvl + 1) * (lvl + 1) * 4;
      if (lvl > 15) cost = 16 * 16 * 4 + lvl * 10;
      break;
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
      cost = (lvl + 1) * (lvl + 1) * 2;
      if (lvl > 15) cost = 16 * 16 * 2 + lvl * 10;
      break;
    case 27:
    case 28:
    case 29:
      switch (lvl + 1) {
        case 1:
          cost = 500;
          break;
        case 2:
          cost = 1200;
          break;
        case 3:
          cost = 2400;
          break;
        case 4:
          cost = 3900;
          break;
        case 5:
          cost = 5600;
          break;
        case 6:
          cost = 7200;
          break;
        case 7:
          cost = 9600;
          break;
        case 8:
          cost = 12500;
          break;
        case 9:
          cost = 18500;
          break;
        case 10:
          cost = 25500;
          break;
      }
      break;
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
      switch (lvl + 1) {
        case 1:
          cost = 1000;
          break;
        case 2:
          cost = 2000;
          break;
        case 3:
          cost = 4000;
          break;
        case 4:
          cost = 8000;
          break;
        case 5:
          cost = 10000;
          break;
        case 6:
          cost = 12000;
          break;
        case 7:
          cost = 14000;
          break;
        case 8:
          cost = 16000;
          break;
        case 9:
          cost = 18000;
          break;
        case 10:
          cost = 20000;
          break;
      }
      break;
  }
  return cost;
};
GAME.klan_struct_mcs = function (i, lvl) {
  var cost = 9999;
  switch (i) {
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
      switch (lvl + 1) {
        case 1:
          cost = 100000;
          break;
        case 2:
          cost = 500000;
          break;
        case 3:
          cost = 1000000;
          break;
        case 4:
          cost = 2000000;
          break;
        case 5:
          cost = 4000000;
          break;
        case 6:
          cost = 8000000;
          break;
        case 7:
          cost = 16000000;
          break;
        case 8:
          cost = 32000000;
          break;
        case 9:
          cost = 62000000;
          break;
        case 10:
          cost = 124000000;
          break;
      }
      break;
  }
  return cost;
};
GAME.clan_planet_cost = function (lvl) {
  switch (lvl) {
    case 1:
      return 150;
    case 2:
      return 250;
    case 3:
      return 410;
    case 4:
      return 620;
    case 5:
      return 850;
    case 6:
      return 970;
    case 7:
      return 1050;
    case 8:
      return 1150;
    case 9:
      return 1300;
    case 10:
      return 1500;
    case 11:
      return 1700;
    case 12:
      return 1900;
    case 13:
      return 2100;
    case 14:
      return 2500;
    case 15:
      return 2750;
    case 16:
      return 3000;
    case 17:
      return 3500;
    case 18:
      return 4000;
    case 19:
      return 5000;
  }
};
GAME.clanPlanetLimit = function (level) {
  var res = 1 + Math.floor(level / 20);
  return Math.min(res, 6);
};
GAME.editClanPlayer = function (pind) {
  if (this.clan_players && this.clan_players[pind]) {
    var player = this.clan_players[pind];
    var laws = player.laws;
    $("#clan_assign").hide();
    $(".clan_law_chck").prop("checked", false).prop("disabled", false);
    if (laws) {
      $("#clan_player_rank").val(laws.rank);
      var len = this.clan_law_labels.length;
      for (var i = 0; i < len; i++) {
        if (laws[this.clan_law_labels[i]])
          $("#ced_law_" + this.clan_law_labels[i]).prop("checked", true);
      }
    } else {
      $("#clan_player_rank").val("");
    }
    if (this.klan_data.chief_id == player.id) {
      $(".clan_law_chck").prop("checked", true).prop("disabled", true);
    } else if (this.klan_data.chief_id == this.char_id) {
      $("#clan_assign").show().data("char_id", player.id);
    }
    $("#edited_player").text(player.name);
    $("#cpout").data("char_id", player.id);
    $("#cedgo").data("char_id", player.id);
    $("#edit_clan_player").show();
  }
};
GAME.processClanData = function () {
  if (this.klan_data) {
    $("#uploading").hide();
    $("#clan_name").html(
      '<img src="' + this.klan_data.emblem + '" /> ' + this.klan_data.long
    );
    $("#clan_logo").attr("src", this.klan_data.logo);
    $("#clan_logo_s").attr("src", this.klan_data.logo);
    $("#clan_emblem_s").attr("src", this.klan_data.emblem);
    $("#clan_kp").text(this.dots(this.klan_data.kp));
    $("#clan_pu").text(this.dots(this.klan_data.symbols));
    $("#clan_dp").text(this.dots(this.klan_data.planet_dp));
    $("#clan_ms").text(this.dots(this.klan_data.mses));
    var lim = 40 + (this.klan_data.s10 + this.klan_data.s10u) * 3;
    $("#clan_mem_max").text(lim);
    $("#klan_change_short").val(this.klan_data.short);
    $("#klan_change_long").val(this.klan_data.long);
    $("#clan_text").sceditor("instance").val(this.klan_data.text);
    $("#clan_opis").sceditor("instance").val(this.klan_data.opis);
    var html = this.parseBB(this.klan_data.text);
    $("#clan_text_unp").html(html);
    var lim = 1 + this.klan_data.s4 + this.klan_data.s4u;
    $("#max_wars").text(lim);
    $("#klan_war_won").text(this.klan_data.war_wins);
    $("#kln_war_lost").text(this.klan_data.war_loses);
    $("#kln_war_frags").text(this.klan_data.war_limit);
    $("#kln_last_score").text(this.klan_data.last_score);
    $(".cp_switch").hide();
    $("#clan_stel_slots").text(this.klan_data.s6 + this.klan_data.s6u);
    $("#clan_max_planets").text(this.clanPlanetLimit(this.klan_data.level));
    $("#challl_counter").text(this.dots(this.klan_data.g_kills));
    if (this.klan_data.planet_lvl) {
      $("#klan_planet_lvl").text(this.klan_data.planet_lvl);
      $("#has_clan_planet").show();
      $("#clan_dp2").text(this.dots(this.klan_data.planet_dp));
      $("#clan_pr").text(this.dots(this.klan_data.planet_pr));
      var ch = (this.klan_data.s29 + this.klan_data.s29u) * 2.5;
      $("#clan_exp_chace").text(ch);
      if (this.klan_data.planet_lvl < 20) {
        var cls = "";
        var koszt = this.clan_planet_cost(this.klan_data.planet_lvl);
        if (koszt > this.klan_data.planet_pr) cls = "red";
        $("#clan_planet_up").html(
          LNG.lab57 + ' <b class="' + cls + '">' + koszt + "</b> " + LNG.lab255
        );
        $("#clan_planet_up_btn").show();
      } else {
        $("#clan_planet_up_btn").hide();
        $("#clan_planet_up").html(LNG.error113);
      }
      switch (this.klan_data.boss_activied) {
        case 0:
          $("#planet_boss").html(
            LNG.lab260 +
              "<br />" +
              LNG.lab261 +
              '<br /><button class="option newBtn" data-option="start_boss" data-diff="3">' +
              LNG.lab262 +
              '</button><br /><button class="option newBtn" data-option="start_boss" data-diff="2">' +
              LNG.lab263 +
              '</button><br /><button class="option newBtn" data-option="start_boss" data-diff="1">' +
              LNG.lab264 +
              "</button><br />"
          );
          option_bind();
          break;
        case 1:
          var con = "";
          if (this.klan_data.boss_expires > this.getTime()) {
            con =
              '<b class="orange">' + LNG.lab267 + "</b> " + LNG.lab268 + ": ";
            switch (this.klan_data.boss_type) {
              case 3:
                con += '<span class="red">' + LNG.lab262 + "</span>";
                break;
              case 2:
                con += '<span class="orange">' + LNG.lab263 + "</span>";
                break;
              default:
                con += '<span class="green">' + LNG.lab264 + "</span>";
                break;
            }
            con +=
              "<br />" +
              LNG.lab51 +
              ": " +
              this.showTimer(this.klan_data.boss_expires - this.getTime()) +
              '<br /><button class="gold_button option" data-option="attack_boss">' +
              LNG.lab269 +
              "</button><br />";
          } else con = LNG.lab266;
          $("#planet_boss").html(con);
          option_bind();
          break;
        case 2:
          $("#planet_boss").html(LNG.lab265);
          break;
      }
    } else {
      $("#no_clan_planet").show();
    }
  }
};
GAME.parseClanData = function (res, type) {
  switch (type) {
    case 18:
      var tid = parseInt(res.tren_changed);
      if (
        res.target == this.char_id &&
        $("#current_train_result" + tid).length
      ) {
        var tmp = $("#current_train_result" + tid);
        var total = res.result + res.new_value;
        this.value_change_ani(
          tmp,
          parseInt(tmp.data("current")),
          parseInt(total),
          500,
          true
        );
      }
      if ($("#clan_tren_" + tid).length) {
        $("#clan_train_up" + tid).fadeOut();
        $("#clan_train_helpers" + tid).append(
          '<b class="orange option" data-option="show_player" data-char_id="' +
            res.assistant[0] +
            '">' +
            res.assistant[1] +
            "</b>, "
        );
        var tmp = $("#clan_tren_" + tid);
        var current = parseInt(tmp.data("current"));
        var total = res.result + res.new_value;
        this.value_change_ani(tmp, current, parseInt(total), 500, true);

        var tmp = $("#clan_tren_bon_" + tid);
        var init = parseInt(tmp.data("initial"));
        var old = init;
        var newv = parseInt(res.new_value);
        this.value_change_ani(tmp, old, newv, 500, true);
      }
      break;
    case 17:
      var data = res.trains;
      //console.log(data);
      var len = data.length,
        con =
          '<table class="tablen1" width="100%"><tr><td>' +
          LNG.lab235 +
          "</td><td>" +
          LNG.lab51 +
          "</td><td>" +
          LNG.lab17 +
          "</td><td>" +
          LNG.lab411 +
          "</td><td>" +
          LNG.lab410 +
          "</td></tr>";
      for (var i = 0; i < len; i++) {
        var opts = "...";
        if (data[i].helpers.chars.indexOf(this.char_id) == -1)
          opts =
            '<button id="clan_train_up' +
            data[i].id +
            '" class="btn_small_gold option" data-option="clan_assist" data-tid="' +
            data[i].id +
            '" data-target="' +
            data[i].char_id +
            '">' +
            LNG.lab411 +
            "</button>";
        if (data[i].char_id == this.char_id) opts = "===";
        var helpers = "";
        for (var j = 0; j < data[i].helpers.chars.length; j++)
          helpers +=
            '<b class="orange option" data-option="show_player" data-char_id="' +
            data[i].helpers.chars[j] +
            '">' +
            data[i].helpers.names[data[i].helpers.chars[j]] +
            "</b>, ";
        con +=
          '<tr><td><b class="orange option" data-option="show_player" data-char_id="' +
          data[i].char_id +
          '">' +
          data[i].char_name +
          '</b></td><td class="grey">' +
          this.showTimer(data[i].end - this.getTime()) +
          "</td><td>" +
          LNG.train_action1 +
          " <b>" +
          LNG["atr" + data[i].action] +
          '</b> + <span id="clan_tren_' +
          data[i].id +
          '" data-current="' +
          (data[i].result + data[i].bonus_result) +
          '" span="white">' +
          this.dots(data[i].result + data[i].bonus_result) +
          '</span> (+<b id="clan_tren_bon_' +
          data[i].id +
          '" class="green" data-initial="' +
          data[i].bonus_result +
          '">' +
          this.dots(data[i].bonus_result) +
          "</b>)</td><td>" +
          opts +
          '</td><td id="clan_train_helpers' +
          data[i].id +
          '">' +
          helpers +
          "</td></tr>";
      }
      con += "</table>";
      $("#clan_trains").html(con);
      option_bind();
      break;
    case 16:
      var data = res.notes;
      var len = data.length,
        con = "";
      for (var i = 0; i < len; i++) {
        con +=
          '<div class="chat_row stick' +
          data[i].stick +
          ' klan_notes"><span class="grey">[' +
          this.convertTime(data[i].time) +
          ']</span> <b class="orange option" data-option="show_player" data-char_id="' +
          data[i].char_id +
          '">' +
          data[i].name +
          "</b>: " +
          this.parseEmots(data[i].text) +
          ' <button class="pull-right option chat_icon clear" data-option="delete_note_entry" data-entry="' +
          data[i].id +
          '"></button></div>';
      }
      $("#clan_notes").html(con);
      option_bind();
      break;
    case 15:
      var pages = res.all_pages;
      var page = res.page;
      var pagi =
        LNG.lab272 +
        " <b>" +
        page +
        "</b>/<b>" +
        pages +
        '</b> <button class="option newBtn" data-option="load_rent_log" data-page="' +
        (page - 1) +
        '"><<</button> <button class="option newBtn" data-option="load_rent_log" data-page="' +
        (page + 1) +
        '">>></button>';
      $("#cln_rent_pagi").html(pagi);
      var data = res.rlogs;
      var len = data.length,
        con = "";
      for (var i = 0; i < len; i++) {
        con +=
          "<tr><td>" +
          this.convertTime(data[i].time) +
          ": </td><td><b>" +
          data[i].login +
          "</b> " +
          LNG.lab273 +
          ' <b class="orange">' +
          data[i].name +
          "</b></tr>";
      }
      $("#cln_rent_log").html(con);
      option_bind();
      break;
    case 14:
      var data = res.rented;
      var len = data.length,
        con = "";
      for (var i = 0; i < len; i++) {
        var opt = "",
          online = '<img src="/gfx/dots/5.png" />';
        if (data[i].online) online = '<img src="/gfx/dots/1.png" />';
        if (data[i].player_id != this.pid)
          opt =
            '<button class="btn_small_gold option" data-option="use_rent" data-char_id="' +
            data[i].id +
            '">' +
            LNG.lab271 +
            "</button>";
        opt +=
          ' <button class="btn_small_gold option" data-option="cancel_rent" data-char_id="' +
          data[i].id +
          '">' +
          LNG.lab78 +
          "</button>";
        con +=
          "<tr><td>" +
          online +
          ' <b class="orange option" data-option="show_player" data-char_id="' +
          data[i].id +
          '">' +
          data[i].name +
          "</b></td><td>" +
          this.rebPref(data[i].reborn) +
          this.dots(data[i].level) +
          "</td><td>" +
          LNG["clan_rent" + data[i].klan_rent_type] +
          "</td><td>" +
          opt +
          "</td></tr>";
      }
      $("#clan_rented").html(con);
      option_bind();
      break;
    case 13:
      var max = 4;
      var data = res.glories;
      var fields = ["", "glory", "glory2", "glory3", "glory4"];
      var con = "";
      for (var i = 1; i <= max; i++) {
        var bon = "",
          upgrade = "";
        var lvl = this.klan_data[fields[i]];
        var val = lvl * data[i].val;
        if (data[i].stat) {
          var pp = "[" + data[i].val + "/" + LNG.lab1 + "]";
          bon +=
            "<b>" +
            LNG.lab247 +
            "</b>: <span class=green>" +
            val +
            "</span> " +
            this.item_stat(data[i].stat) +
            " " +
            pp +
            " ";
        }
        if (data[i].clan_stat) {
          var pp = "[" + data[i].val + "/" + LNG.lab1 + "]";
          bon +=
            "<b>" +
            LNG.lab248 +
            "</b>: <span class=green>" +
            val +
            "</span> " +
            LNG["clan_stat" + data[i].clan_stat] +
            " " +
            pp +
            "";
        }
        if (lvl < data[i].max_level) {
          upgrade =
            "<b>" +
            LNG.lab18 +
            "</b>: " +
            LNG["clan_challenge_req" + i] +
            " - " +
            LNG.lab259 +
            ' <b class="red">' +
            this.convertSeconds(data[i].duration) +
            '</b> <button class="btn_small_gold option" data-option="activate_clan_challenge" data-glory="' +
            i +
            '">' +
            LNG.lab99 +
            "</button> ";
        } else upgrade = '<span class="green">' + LNG.lab244 + "</span>";
        con +=
          '<div class="glory"><h3 class="orange">' +
          LNG["klan_glory" + i] +
          "</h3>" +
          LNG.lab1 +
          ': <b class="orange">' +
          lvl +
          "</b> / " +
          data[i].max_level +
          "<br />" +
          bon +
          "<br />" +
          upgrade +
          "</div>";
      }
      $("#clan_glories").html(con);
      if (this.klan_data.g_active && data[this.klan_data.g_active]) {
        var glory = this.klan_data.g_active;
        var len2 = data[glory].req_count.length;
        var progress = "";
        for (var j = 0; j < len2; j++) {
          var lvl = j + 1,
            cls = "";
          if (this.klan_data[fields[glory]] >= lvl) cls = "obtained";
          else if (this.klan_data.g_kills > data[glory].req_count[j])
            cls = "achieved";
          progress +=
            '<span class="glory_lvl ' +
            cls +
            '">' +
            lvl +
            '</span><span class="glory_val ' +
            cls +
            '">' +
            this.dots(data[glory].req_count[j]) +
            "</span>";
        }
        $("#glory_progress").html(progress);
        $("#challl_req").text(LNG["clan_challenge_req" + glory]);
        $("#challl_expires").html(
          this.showTimer(this.klan_data.g_expires - this.getTime())
        );
        $("#current_glory").text(LNG["klan_glory" + glory]);

        $("#curreny_glory").show();
        if (res.glory_tab) {
          var data = res.glory_tab.sort(function (a, b) {
            return b.value - a.value;
          });
          var con = "",
            len = data.length;
          for (var i = 0; i < len; i++) {
            con +=
              '<b class="orange option" data-option="show_player" data-char_id="' +
              data[i].char_id +
              '">' +
              data[i].name +
              "</b> [" +
              this.dots(data[i].value) +
              "]<br />";
          }
          $("#glory_principants").html(con);
        }
      } else $("#curreny_glory").hide();
      option_bind();
      break;
    case 12:
      if (res.planets) {
        var data = res.planets;
        var len = data.length,
          con = "";
        for (var i = 0; i < len; i++) {
          con +=
            '<option value="' +
            data[i].id +
            '">' +
            data[i][this.lang] +
            "</option>";
        }
        $("#start_teleportation_list").html(con);
      }
      if (res.telep) {
        var tp = res.telep;
        $("#kd_telep_target").text(tp[this.lang]);
        $("#kd_telep_pnum").text(tp.pnum);
        $("#kd_telep_pmax").text(this.klan_data.s6 + this.klan_data.s6u);
        $("#already_telep").show();
        $("#new_telep").hide();
        var pdc = "";
        var len = tp.players.length;
        for (var i = 0; i < len; i++) {
          pdc += '<b class="orange">' + tp.players[i].name + "</b> ";
        }
        $("#clan_tp_declared").html(pdc);
      } else {
        $("#new_telep").show();
        $("#already_telep").hide();
      }
      if (res.planetaries) {
        var data = res.planetaries.sort(function (a, b) {
          return b.reborn - a.reborn || b.moc - a.moc;
        });
        var len = data.length,
          con = "";
        for (var i = 0; i < len; i++) {
          var status =
            '<button class="option btn_small_gold" data-option="clan_tp_assign" data-char_id="' +
            data[i].id +
            '">' +
            LNG.lab194 +
            "</button>";
          if (!data[i].canTP)
            status = '[<span class="red">' + LNG.lab257 + "</span>]";
          con +=
            '<tr><td><b class="option orange" data-option="show_player" data-char_id="' +
            data[i].id +
            '">' +
            data[i].name +
            "</b></td><td>" +
            this.rebPref(data[i].reborn) +
            this.dots(data[i].level) +
            "</td><td>" +
            this.dots(data[i].moc) +
            LNG.lab10 +
            "</td><td>" +
            status +
            "</td></tr>";
        }
        $("#planetaries").html(con);
      }
      $("#stelep_counter").html(
        this.showTimer(res.planet_counter - this.getTime())
      );
      option_bind();
      break;
    case 11:
      var on_planet = {};
      if (res.players) {
        var players = res.players;
        var len = players.length;
        for (var i = 0; i < len; i++) {
          var loc = players[i].loc;
          if (!on_planet[loc]) on_planet[loc] = 0;
          on_planet[loc]++;
        }
      }
      var data = res.planets;
      var len = data.length,
        con = "",
        simple = '<table class="tablen1">',
        clanp = 0;
      for (var i = 0; i < len; i++) {
        (akcja = ""), (klann = "---"), (czl = 0), (cls = "");
        if (on_planet[data[i].loc_id]) czl = on_planet[data[i].loc_id];
        if (czl > 0) {
          cls = "green";
          akcja =
            '<button class="btn_small_gold option" data-option="invade_planet" data-planet="' +
            data[i].id +
            '">' +
            LNG.lab258 +
            " [" +
            czl +
            "]</button>";
        }
        if (data[i].klan_id > 0) {
          if (data[i].klan_id == this.char_data.klan_id) clanp++;
          klann =
            '<span class="orange option" data-option="show_clan" data-klan_id="' +
            data[i].klan_id +
            '"><img class="emblem" src="' +
            data[i].emblem +
            '" /> ' +
            data[i].klan_short +
            "</span>";
        }
        con +=
          '<div class="planet_pos pos_' +
          data[i].id +
          '"><div class="planet_desc"><div class="planet planet_' +
          data[i].id +
          '"></div><div class="planet_val">' +
          data[i].kp +
          ' <img src="/gfx/kp.png" /></div><div class="planet_rest"><b>' +
          data[i][this.lang] +
          "</b><br />" +
          klann +
          "<br />" +
          akcja +
          "</div></div></div>";
        simple +=
          "<tr><td>&raquo; " +
          data[i][this.lang] +
          "</td><td>" +
          klann +
          "</td><td>" +
          data[i].kp +
          ' <img src="/gfx/kp.png" /></td><td>' +
          akcja +
          "</td></tr>";
      }
      $("#clan_owned_planets").text(clanp);
      simple += "</table>";
      $("#clan_planets").html(con);
      $("#clan_planets_simple").html(simple);
      option_bind();
      break;
    case 10:
      var data = res.planet_buffs;
      var len = data.length,
        con = "";
      for (var i = 1; i < len; i++) {
        var koszt = data[i].amount;
        var cls = "",
          link = "",
          cls1 = "",
          cls2 = "";
        if (this.klan_data.prp_buff >= i) cls = "activied";
        if (this.klan_data.prp_buff == i - 1)
          link =
            '<button class="newBtn option" data-option="activate_prp_buff">' +
            LNG.lab99 +
            "</button>";
        if (koszt > this.klan_data.planet_dp) cls2 = "red";
        con +=
          '<tr class="' +
          cls +
          '"><td>' +
          i +
          '</td><td><span class="green">' +
          data[i].value +
          "</span>" +
          this.item_stat(data[i].attr) +
          '</td><td align="center" class="' +
          cls2 +
          '">' +
          this.dots(koszt) +
          "</td><td>" +
          link +
          "</td></tr>";
      }
      $("#clan_planet_buffs").html(con);
      option_bind();
      break;
    case 9:
      var data = res.buffs;
      var len = data.length,
        con = "";
      for (var i = 1; i < len; i++) {
        var koszt = this.klan_data.players * 100 * i;
        if (i >= 19) koszt *= 10000;
        var cls = "",
          link = "",
          cls1 = "",
          cls2 = "";
        if (this.klan_data.last_score < data[i].amount) cls = "disabled";
        if (this.klan_data.war_buff >= i) cls = "activied";
        if (this.klan_data.war_buff == i - 1)
          link =
            '<button class="newBtn option" data-option="activate_war_buff">' +
            LNG.lab99 +
            "</button>";
        if (data[i].amount > this.klan_data.last_score) cls1 = "red";
        if (koszt > this.klan_data.symbols) cls2 = "red";
        con +=
          '<tr class="' +
          cls +
          '"><td>' +
          i +
          '</td><td class="' +
          cls1 +
          '">' +
          this.dots(data[i].amount) +
          '</td><td><span class="green">' +
          data[i].value +
          "</span>" +
          this.item_stat(data[i].attr) +
          '</td><td align="center" class="' +
          cls2 +
          '">' +
          this.dots(koszt) +
          "</td><td>" +
          link +
          "</td></tr>";
      }
      $("#clan_buffs").html(con);
      option_bind();
      break;
    case 8:
      var data = res.war_tab.sort(function (a, b) {
        return b.kills - a.kills || a.deaths - b.deaths;
      });
      var len = data.length,
        con = "";
      var n = 1;
      for (var i = 0; i < len; i++) {
        var cls = "enemy";
        if (data[i].klan_id == this.char_data.klan_id) cls = "ally";
        con +=
          '<tr class="' +
          cls +
          '"><td>' +
          n +
          '</td><td><b class="orange option" data-option="show_player" data-char_id="' +
          data[i].char_id +
          '">' +
          data[i].name +
          "</b></td><td>" +
          data[i].kills +
          "</td><td>" +
          data[i].deaths +
          "</td><td>" +
          data[i].streak +
          "</td></tr>";
        n++;
      }
      $("#war_table").html(con);
      option_bind();
      this.page_switch("game_war_table");
      break;
    case 7:
      var data = res.declare_result;
      var len = data.length;
      var kom = "";
      for (var i = 0; i < len; i++) {
        kom += "<b>" + data[i].short + "</b>: ";
        if (data[i].e)
          kom += '<span class="red">' + LNG["error" + data[i].e] + "</span>";
        if (data[i].done)
          kom += "<span>" + LNG["done" + data[i].done] + "</span>";
        kom += "<br />";
      }
      this.komunikat(kom);
      break;
    case 6: //wars
      var time = this.getTime();
      var data = res.wars,
        con1 =
          '<tr><td colspan="4"><b class="orange" align="left">&raquo; ' +
          LNG.lab250 +
          "</b></td></tr>",
        con2 =
          '<tr><td colspan="4"><b class="orange">&raquo; ' +
          LNG.lab251 +
          "</b></td></tr>",
        any1 = false,
        any2 = false;
      var len = data.length,
        own = 0;
      for (var i = 0; i < len; i++) {
        var tmp =
          "<tr><td>" +
          LNG.lab252 +
          ' <b class="option orange" data-option="show_clan" data-klan_id="' +
          data[i].klan1 +
          '">' +
          data[i].short1 +
          '</b> - <b class="option orange" data-option="show_clan" data-klan_id="' +
          data[i].klan2 +
          '">' +
          data[i].short2 +
          "</b></td><td>" +
          this.showTimer(data[i].expires - time) +
          '</td><td align="center"><b class="option orange" data-option="show_clan" data-klan_id="' +
          data[i].klan1 +
          '">' +
          data[i].short1 +
          '</b> <img src="' +
          data[i].emblem1 +
          '" /> : <img src="' +
          data[i].emblem2 +
          '" /> <b class="option orange" data-option="show_clan" data-klan_id="' +
          data[i].klan2 +
          '">' +
          data[i].short2 +
          "</b><br /> " +
          data[i].kills1 +
          " : " +
          data[i].kills2 +
          "</td></tr>";
        if (data[i].klan1 == this.char_data.klan_id) {
          con1 += tmp;
          own++;
          any1 = true;
        } else {
          con2 += tmp;
          any2 = true;
        }
      }
      if (!any1)
        con1 += '<tr><td colspan="3" align="center">' + LNG.lab3 + "</td></tr>";
      if (!any2)
        con2 += '<tr><td colspan="3" align="center">' + LNG.lab3 + "</td></tr>";
      $("#clan_wars").html(con1 + con2);
      $("#current_wars").text(own);
      option_bind();
      break;
    case 5: //clan profile
      $("#player_desc_con").hide();
      var kd = res.klan_data;
      $("#kd_name").html(
        '<img src="' + kd.emblem + '" />' + kd.long + " [" + kd.short + "]"
      );
      $("#kd_logo").attr("src", kd.logo);
      $("#kd_opis").html(this.parseBB(kd.opis));
      $("#kd_level").text(this.dots(kd.level));
      $("#kd_war_won").text(this.dots(kd.war_wins));
      $("#kd_war_lost").text(this.dots(kd.war_loses));
      var players = res.players;
      $("#kd_current_players").text(players.length);
      var lim = 40 + (kd.s10 + kd.s10u) * 3;
      $("#kd_max_players").text(lim);
      $("#klan_desc_con").show();
      var con = "",
        len = players.length;
      for (var i = 0; i < len; i++) {
        var online = '<img src="/gfx/dots/5.png" />',
          ranga = "",
          cls = "orange";
        if (players[i].online) online = '<img src="/gfx/dots/1.png" />';

        if (players[i].laws && players[i].laws.rank)
          ranga = "<span>( " + players[i].laws.rank + " )</span>";
        if (players[i].id == kd.chief_id) cls = "green";
        con +=
          '<div class="kd_player option" data-option="show_player" data-char_id="' +
          players[i].id +
          '">' +
          online +
          ' <b class="' +
          cls +
          '">' +
          players[i].name +
          " " +
          ranga +
          "</b> " +
          this.rebPref(players[i].reborn) +
          this.dots(players[i].level) +
          "</div>";
      }
      $("#kd_players").html(con);
      var con = "",
        data = res.structure_data;
      var len = this.clan_structs_cats.length;
      for (var c = 1; c < len; c++) {
        var lenw = this.clan_structs_cats[c].length;
        con += '<div class="clan_struct_header">&nbsp;</div>';
        for (var i = 0; i < lenw; i++) {
          var s = this.clan_structs_cats[c][i];
          if (kd["s" + s] == 0) continue;
          var lvl = kd["s" + s] + "/" + data[s].max;
          if (kd["s" + s + "u"] > 0)
            lvl += ' <span class="orange">+ ' + kd["s" + s + "u"] + "</span>";
          var tooltip = "";
          var fl = kd["s" + s] + kd["s" + s + "u"];
          var val = data[s].val * fl;
          if (data[s].stat) {
            var pp = "[" + data[s].val + "/" + LNG.lab1 + "]",
              ads = "";
            if (data[s].type) {
              val = data[s].b1 + fl * fl * data[s].b2;
              pp = "";
            }
            if (data[s].stat2) {
              var val2 = data[s].val2 * fl,
                pp2 = "[" + data[s].val2 + "/" + LNG.lab1 + "]";
              ads =
                "<br /><span class=green>" +
                val2 +
                "</span> " +
                this.item_stat(data[s].stat2) +
                " " +
                pp2 +
                "";
            }
            tooltip +=
              "<div class=tt><b>" +
              LNG.lab247 +
              "</b>:<br /><span class=green>" +
              val +
              "</span> " +
              this.item_stat(data[s].stat) +
              " " +
              pp +
              " " +
              ads +
              "</div>";
          }
          if (data[s].clan_stat) {
            var pp = "[" + data[s].val + "/" + LNG.lab1 + "]";
            tooltip +=
              "<div class=tt><b>" +
              LNG.lab248 +
              "</b>:<br /><span class=green>" +
              val +
              "</span> " +
              LNG["clan_stat" + data[s].clan_stat] +
              " " +
              pp +
              "</div>";
          }
          con +=
            '<div class="clan_struct"><div class="stru_name" data-toggle="tooltip" data-original-title="' +
            tooltip +
            '"><b>' +
            LNG["klan_str" + s] +
            '</b> <div class="pull-right"><span class="grey">' +
            LNG.lab1 +
            "</span> " +
            lvl +
            "</div></div></div>";
        }
      }
      $("#kd_structures").html(con);
      option_bind();
      tooltip_bind();
      break;
    case 4:
      $("#edit_clan_player").hide();
      var con = "",
        data = res.players;
      var len = data.length,
        p = 1;
      this.clan_players = data;

      for (var i = 0; i < len; i++) {
        var online = '<img src="/gfx/dots/5.png" />',
          rank = "",
          cls = "",
          laws = "";
        if (data[i].id == this.klan_data.chief_id) cls = "isme";
        if (data[i].online) online = '<img src="/gfx/dots/1.png" />';
        else if (data[i].additional_status) {
          switch (data[i].additional_status) {
            case 1:
              online =
                '<img src="/gfx/dots/2.png" title="' + LNG.lab419 + '"/>';
              break;
            case 2:
              online =
                '<img src="/gfx/dots/3.png" title="' + LNG.lab420 + '"/>';
              break;
            case 3:
              online =
                '<img src="/gfx/dots/4.png" title="' + LNG.lab421 + '"/>';
              break;
            case 4:
              online =
                '<img src="/gfx/dots/5.png" title="' + LNG.lab422 + '"/>';
              break;
            case 5:
              online =
                '<img src="/gfx/dots/5.png" title="' + LNG.lab423 + '"/>';
              break;
            case 9:
              online =
                '<img src="/gfx/dots/6.png" title="' + LNG.lab418 + '" />';
              break;
          }
        }
        if (data[i].laws && data[i].laws.rank)
          rank = "(" + data[i].laws.rank + ")";
        var len2 = this.clan_law_labels.length;
        for (var j = 0; j < len2; j++) {
          if (
            (data[i].laws && data[i].laws[this.clan_law_labels[j]]) ||
            data[i].id == this.klan_data.chief_id
          )
            laws += '<div class="claw has"></div>';
          else laws += '<div class="claw nop"></div>';
        }

        con +=
          '<tr class="' +
          cls +
          '"><td>' +
          p +
          '</td><td class="cpl"><b class="orange option" data-option="show_player" data-char_id="' +
          data[i].id +
          '">' +
          online +
          " " +
          data[i].name +
          "</b> " +
          rank +
          "</td><td>" +
          this.rebPref(data[i].reborn) +
          this.dots(data[i].level) +
          "</td><td>" +
          this.dots(data[i].fragsd) +
          "</td><td>" +
          this.dots(data[i].clan_pu) +
          "</td><td>" +
          this.dots(data[i].trybut) +
          "</td><td>" +
          laws +
          '</td><td><button class="newBtn option" data-option="edit_clan_player" data-pind="' +
          i +
          '">' +
          LNG.lab249 +
          "</button></td></tr>";
        p++;
      }
      $("#clan_mem_curr").text(len);
      $("#clan_players").html(con);
      option_bind();
      break;
    case 3:
      if (this.klan_data) {
        var con = "",
          data = res.castles;
        var len = data.length;
        for (var i = 0; i < len; i++) {
          var upg = "";
          if (data[i].level < 10) {
            var cls = "";
            var need = this.castle_cost(data[i].level + 1);
            if (need > this.klan_data.kp) cls = "red";
            upg =
              '<button class="option btn_small_gold" data-option="clan_castle_up" data-castle="' +
              data[i].id +
              '">' +
              LNG.lab56 +
              '</button> <span class="' +
              cls +
              '">' +
              this.dots(need) +
              '</span> <img src="/gfx/kp.png" />';
          }
          con +=
            '<div class="clan_fort"><b>' +
            data[i].location[this.lang] +
            "</b> [" +
            data[i].x +
            "|" +
            data[i].y +
            "]<br />" +
            LNG.lab1 +
            " " +
            data[i].level +
            "<br />" +
            upg +
            "</div>";
        }
        $("#clan_castles").html(con);
        option_bind();
      }
      break;
    case 2:
      if (this.klan_data) {
        var con = "",
          data = res.structure_data;
        var len = this.clan_structs_cats.length;
        for (var c = 1; c < len; c++) {
          var lenw = this.clan_structs_cats[c].length;
          con +=
            '<div class="clan_struct_header">' + LNG["cscat" + c] + "</div>";
          for (var i = 0; i < lenw; i++) {
            var s = this.clan_structs_cats[c][i];
            var lvl = this.klan_data["s" + s] + "/" + data[s].max;
            if (this.klan_data["s" + s + "u"] > 0)
              lvl +=
                ' <span class="orange">+ ' +
                this.klan_data["s" + s + "u"] +
                "</span>";
            var koszt =
              '<button class="option btn_small_gold" data-option="clan_struct_up" data-struct="' +
              s +
              '">' +
              LNG.lab69 +
              "</button>";
            switch (data[s].cost_type) {
              case 3:
                var cls = "";
                var need = this.clan_scost(s, this.klan_data["s" + s]);
                if (need > this.klan_data.planet_dp) cls = "red";
                koszt +=
                  '<span class="' +
                  cls +
                  '">' +
                  this.dots(need) +
                  " " +
                  LNG.lab245 +
                  "</span>";
                var need2 = this.klan_struct_mcs(s, this.klan_data["s" + s]);
                var cls = "";
                if (need2 > this.klan_data.mses) cls = "red";
                koszt +=
                  '+ <span class="' +
                  cls +
                  '">' +
                  this.dots(need2) +
                  " MS</span>";
                break;
              case 2:
                var cls = "";
                var need = this.clan_scost(s, this.klan_data["s" + s]);
                if (need > this.klan_data.planet_dp) cls = "red";
                koszt +=
                  '<span class="' +
                  cls +
                  '">' +
                  this.dots(need) +
                  " " +
                  LNG.lab245 +
                  "</span>";
                break;
              default:
                var cls = "";
                var need = this.clan_scost(s, this.klan_data["s" + s]);
                if (need > this.klan_data.kp) cls = "red";
                koszt +=
                  '<span class="' +
                  cls +
                  '">' +
                  need +
                  ' <img src="/gfx/kp.png" /></span>';
                break;
            }
            var opts = '<div class="stru_cost">' + koszt + "</div>";
            if (this.klan_data["s" + s] >= data[s].max)
              opts = '<div class="stru_maxed">[' + LNG.lab244 + "]</div>";
            if (this.klan_data["s" + s + "u"] < this.klan_data["s" + s]) {
              var cls = "";
              var need = this.clan_str_upg_cost(this.klan_data["s" + s + "u"]);
              if (need > this.klan_data.symbols) cls = "red";
              opts +=
                '<div class="str_up"><button class="option btn_small_gold" data-option="clan_struct_upgrade" data-struct="' +
                s +
                '">' +
                LNG.lab56 +
                '</button> <span class="' +
                cls +
                '">' +
                this.dots(need) +
                " " +
                LNG.lab246 +
                "</span></div>";
            }
            var tooltip = "";
            var fl = this.klan_data["s" + s] + this.klan_data["s" + s + "u"];
            var val = data[s].val * fl;
            if (data[s].stat) {
              var pp = "[" + data[s].val + "/" + LNG.lab1 + "]",
                ads = "";
              if (data[s].type) {
                val = data[s].b1 + fl * fl * data[s].b2;
                pp = "";
              }
              if (data[s].stat2) {
                var val2 = data[s].val2 * fl,
                  pp2 = "[" + data[s].val2 + "/" + LNG.lab1 + "]";
                ads =
                  "<br /><span class=green>" +
                  val2 +
                  "</span> " +
                  this.item_stat(data[s].stat2) +
                  " " +
                  pp2 +
                  "";
              }
              tooltip +=
                "<div class=tt><b>" +
                LNG.lab247 +
                "</b>:<br /><span class=green>" +
                val +
                "</span> " +
                this.item_stat(data[s].stat) +
                " " +
                pp +
                " " +
                ads +
                "</div>";
            }
            if (data[s].clan_stat) {
              var pp = "[" + data[s].val + "/" + LNG.lab1 + "]";
              tooltip +=
                "<div class=tt><b>" +
                LNG.lab248 +
                "</b>:<br /><span class=green>" +
                val +
                "</span> " +
                LNG["clan_stat" + data[s].clan_stat] +
                " " +
                pp +
                "</div>";
            }
            con +=
              '<div class="clan_struct"><div class="stru_name" data-toggle="tooltip" data-original-title="' +
              tooltip +
              '"><b>' +
              LNG["klan_str" + s] +
              '</b> <div class="pull-right"><span class="grey">' +
              LNG.lab1 +
              "</span> " +
              lvl +
              "</div></div>" +
              opts +
              "</div>";
          }
        }
        $("#clan_structs").html(con);
        option_bind();
        tooltip_bind();
      }
      break;
    default:
      $(".clan_page").hide();
      if (res.klan_data) {
        this.klan_data = res.klan_data;
        this.processClanData();
        $("#has_clan").show();
        $(".clan_inner_page").hide();
        $("#clan_inner_start").show();
      } else {
        $("#no_clan").show();
      }
      break;
  }
};
GAME.clan_str_upg_cost = function (lvl) {
  lvl++;
  return lvl * 10000 * lvl;
};
GAME.clanLogParse = function (ev, p1, p2, s1, s2) {
  var player1 = s1;
  var player2 = s2;
  var log = "";
  switch (ev) {
    case 1:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log1"];
      break;
    case 2:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log2"] +
        ' <a class="orange option" data-option="show_player" data-char_id="' +
        p2 +
        '">' +
        player2 +
        "</a>.";
      break;
    case 3:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p2 +
        '">' +
        player2 +
        "</a> " +
        LNG["klan_log3"] +
        ' <a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a>.";
      break;
    case 4:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log4"];
      break;
    case 5:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log5"];
      break;
    case 6:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log6"];
      break;
    case 7:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p2 +
        '">' +
        player2 +
        "</a> " +
        LNG["klan_log7"] +
        ' <a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a>.";
      break;
    case 8:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log8"] +
        ' <a class="orange option" data-option="show_player" data-char_id="' +
        p2 +
        '">' +
        player2 +
        "</a>.";
      break;
    case 9:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log9"] +
        " <b>" +
        p2 +
        '</b> <img src="../gfx/kp.png" align=absmiddle>.';
      break;
    case 10:
      log = LNG["klan_log10"] + " <b>" + s1 + "</b> " + LNG["klan_log11"] + "!";
      break;
    case 11:
      log =
        LNG["klan_log10"] +
        " <b>" +
        s1 +
        "</b> " +
        LNG["klan_log12"] +
        ' <a class="orange option" data-option="show_clan" data-klan_id="' +
        p2 +
        '">' +
        player2 +
        "</a>!";
      break;
    case 12:
      log =
        LNG["klan_log10"] +
        " <b>" +
        s1 +
        "</b> " +
        LNG["klan_log13"] +
        ' <a class="orange option" data-option="show_clan" data-klan_id="' +
        p2 +
        '">' +
        player2 +
        "</a>, " +
        LNG["klan_log14"] +
        "!";
      break;
    case 13:
      log =
        LNG["klan_log15"] +
        " <b>" +
        s1 +
        "</b> " +
        LNG["klan_log16"] +
        ' <a class="orange option" data-option="show_clan" data-klan_id="' +
        p2 +
        '">' +
        player2 +
        "</a>!";
      break;
    case 14:
      log =
        LNG["klan_log17"] +
        " " +
        p2 +
        ' <img src="/gfx/kp.png"> ' +
        LNG["klan_log18"] +
        " <b>" +
        s1 +
        "</b>";
      break;
    case 15:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log19"] +
        ' <a href="game.php?a=klan&c=view_clan&id=' +
        p2 +
        '">' +
        player2 +
        "</a>.";
      break;
    case 16:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log20"] +
        " <b>" +
        LNG["klan_str" + p2] +
        "</b>.";
      break;
    case 17:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log21"] +
        ' <a class="orange option" data-option="show_player" data-char_id="' +
        p2 +
        '">' +
        player2 +
        "</a>.";
      break;
    case 18:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log22"] +
        ' <a class="orange option" data-option="show_player" data-char_id="' +
        p2 +
        '">' +
        player2 +
        "</a>.";
      break;
    case 19:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log23"];
      break; //inicjuje wyzwanie klanowe!
    case 20:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log24"];
      break; //kończy wyzwanie! Rezultat: <b class="bora">Sukces</b>!
    case 21:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log25"];
      break; //kończy wyzwanie! Rezultat: <b class="wora">Porażka</b>!
    case 22:
      log =
        LNG["klan_log26"] +
        ' <b class="wora">' +
        s1 +
        '</b> <img src="/gfx/kp.png"> ' +
        LNG["klan_log27"];
      break; //Klan otrzymuje za rekord wygranych wojen!
    case 23:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log28"];
      break; //wybudował Siedzibę klanową!
    case 24:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log29"] +
        " " +
        p2 +
        "!";
      break; //ulepsza Siedzibę klanową do poziomu
    case 25:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log29"] +
        " " +
        p2 +
        "!";
      break;
    case 26:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log30"] +
        " <b>" +
        LNG["klan_str" + p2] +
        "</b>!";
      break; //ulepsza strukturę
    case 27:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log31"] +
        " <b>" +
        p2 +
        "</b> " +
        LNG["klan_log32"] +
        "!";
      break; //przekazuje symbole o wartości PU
    case 28:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log33"];
      break; //aktywuje buff wojenny!
    case 29:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log34"];
      break; //kupuje Planetę Klanową!
    case 30:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log35"] +
        " <b>" +
        p2 +
        "</b>";
      break; //kupuje Planetę Klanową!
    case 31:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log36"];
      break; //wykonuje zadanie na planecie klanowej!
    case 32:
      log =
        LNG["klan_log37"] +
        "<b>" +
        p1 +
        '</b> <img src="/gfx/kp.png" /> ' +
        LNG["klan_log37b"] +
        " +<b>" +
        this.dots(p2) +
        "</b>";
      break; //boss pokonany
    case 33:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log38"] +
        ' <a class="orange option" data-option="show_player" data-char_id="' +
        p2 +
        '">' +
        player2 +
        "</a>";
      break; //usuwa status klanowej postaci x!
    case 34:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log39"];
      break; //aktywuje buff planetarny!
    case 35:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log40"] +
        ' <a class="orange option" data-option="show_player" data-char_id="' +
        p2 +
        '">' +
        player2 +
        "</a>.";
      break;
    case 36:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log41"];
      break; //aktywuje buff planetarny!
    case 37:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log42"];
      break; //edytuje tekst/profil klanu
    case 38:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log43"] +
        ' <b class="green">' +
        p2 +
        '</b> <img src="/gfx/kp.png" />';
      break; //pomyślna ekspedycja
    case 39:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log44"];
      break; //nieudana ekspedycja
    case 40:
      log =
        '<a class="orange option" data-option="show_player" data-char_id="' +
        p1 +
        '">' +
        player1 +
        "</a> " +
        LNG["klan_log45"];
      break; //telepotruje
  }
  return log;
};
GAME.parseClanLog = function (res) {
  var pagi = "";
  var pages = res.all_pages;
  var page = res.page;
  var pagi =
    LNG.lab272 +
    " <b>" +
    page +
    "</b>/<b>" +
    pages +
    '</b> <button class="option newBtn" data-option="show_clan_log" data-page="' +
    (page - 1) +
    '"><<</button> <button class="option newBtn" data-option="show_clan_log" data-page="' +
    (page + 1) +
    '">>></button>';
  $("#clan_log_pagi").html(pagi);
  var data = res.logs;
  var con = "",
    len = data.length;
  for (var i = 0; i < len; i++) {
    var logg = this.clanLogParse(
      data[i].action,
      data[i].player1,
      data[i].player2,
      data[i].s1,
      data[i].s2
    );
    con +=
      '<div class="clan_log">' +
      this.convertTime(data[i].time) +
      ": " +
      logg +
      "</div>";
  }
  $("#clan_log").html(con);
  option_bind();
};
GAME.parseClanInvites = function (res, target) {
  if (target == 1) {
    var data = res.invs;
    var con = "",
      len = data.length;
    for (var i = 0; i < len; i++) {
      con +=
        '<div class="clan_inv"><b class="orange option" data-option="show_player" data-char_id="' +
        data[i].player_id +
        '">' +
        data[i].player_name +
        '</b> <button class="btn_small_gold option" data-option="cancel_inv" data-inv="' +
        data[i].id +
        '">' +
        LNG.lab78 +
        "</button></div>";
    }
    $("#clan_invites").html(con);
  } else {
    var data = res.own_invs;
    var con = "",
      len = data.length;
    for (var i = 0; i < len; i++) {
      con +=
        '<div class="clan_inv">&raquo; <b class="orange option" data-option="show_clan" data-klan_id="' +
        data[i].klan_id +
        '">' +
        data[i].klan_name +
        '</b> <button class="btn_small_gold option" data-option="inv_decision" data-dec="1" data-inv="' +
        data[i].id +
        '">' +
        LNG.lab195 +
        '</button> <button class="btn_small_gold option" data-option="inv_decision" data-dec="2"  data-inv="' +
        data[i].id +
        '">' +
        LNG.lab194 +
        "</button></div>";
    }
    $("#no_clan_invs").html(con);
  }
  option_bind();
};
GAME.parseWars = function (res) {
  var time = this.getTime();
  if (res.hasOwnProperty("wars")) {
    var data = res.wars;
    this.clan_wars = data;
    var len = data.length;
    this.clan_enemies = [];
    if (len > 0) {
      var list = "";
      for (var i = 0; i < len; i++) {
        if (this.char_data.klan_id == data[i].klan1)
          this.clan_enemies.push(data[i].klan2);
        else this.clan_enemies.push(data[i].klan1);
        if (data[i].klan1) {
          list +=
            '<div class="option" data-option="show_clan_war_table" data-war_id="' +
            data[i].id +
            '">' +
            LNG.lab253 +
            '<br /><img class="option" data-option="show_clan" data-klan_id="' +
            data[i].klan1 +
            '" src="' +
            data[i].emblem1 +
            '" /> <span id="war_' +
            data[i].id +
            '_s1" class="green">' +
            this.dots(data[i].kills1) +
            '</span> : <span id="war_' +
            data[i].id +
            '_s2" class="green">' +
            this.dots(data[i].kills2) +
            '</span> <img class="option" data-option="show_clan" data-klan_id="' +
            data[i].klan2 +
            '" src="' +
            data[i].emblem2 +
            '" /><br />' +
            this.showTimer(data[i].expires - time) +
            "</div>";
        }
      }
      $("#war_list").html(list);
    }
  }
  if (res.hasOwnProperty("ewars")) {
    var data = res.ewars;
    this.emp_wars = data;
    var len = data.length;
    this.emp_enemies = [];
    this.emp_enemies_t = {};
    if (len > 0) {
      var list = "";
      for (var i = 0; i < len; i++) {
        var op = -1;
        if (this.char_data.empire == data[i].empire_1) op = data[i].empire_2;
        else op = data[i].empire_1;
        this.emp_enemies.push(op);
        this.emp_enemies_t[op] = data[i].war_type;
        list +=
          '<div class="option emp" data-option="emp_war_table" data-war="' +
          data[i].id +
          '">' +
          LNG["empirewar" + data[i].war_type] +
          '<br /><img src="/gfx/empire/' +
          data[i].empire_1 +
          '.png" /> <span id="ewar_' +
          data[i].id +
          '_s1" class="green">' +
          this.dots(data[i].score_1) +
          '</span> : <span id="ewar_' +
          data[i].id +
          '_s2" class="green">' +
          this.dots(data[i].score_2) +
          '</span> <img src="/gfx/empire/' +
          data[i].empire_2 +
          '.png" /><br />' +
          this.showTimer(data[i].expires - time) +
          "</div>";
      }
      $("#ewar_list").html(list);
    }
  }
  $("#emp_war_cnt").text(this.emp_wars.length);
  $("#clan_war_cnt").text(this.clan_wars.length);
  var len = this.clan_wars.length + this.emp_wars.length;
  if (len > 0) {
    $("#war_cnt").text(len);
    option_bind();
    $("#war_container").show();
  } else $("#war_container").hide();
};
GAME.parseSSJ = function (data) {
  var atrs = ["", "sila", "szyb", "wytrz", "swoli", "ki"];
  this.ssj = data;
  var ratios = [0, 1, 1, 1, 1, 1];
  $(".ssj_opt").hide();
  if (data) {
    $("#ssj_type").text(data.name);
    $(".ssj_opt").show();
    //var bon=this.getStat(169);
    for (var s = 1; s <= 5; s++) {
      ratios[s] = data.ratio[s - 1];
      //if(bon>0) ratios[s]+=Math.floor(ratios[s]*bon/100);
      $("#ssj_ratio_" + s).text("x" + ratios[s]);
    }
    $("#ssj_status").html(
      this.showTimer(data.end - this.getTime(), 'data-special="4"')
    );
    this.ssj_end = data.end;
    this.ssj_dur = data.duration;
  }
  var pow = 0;
  for (var i = 1; i <= 5; i++) {
    var val = this.char_data[atrs[i]] * ratios[i];
    pow += val;
    $("#char_atr" + i).attr(
      "data-original-title",
      "<div class=tt>" +
        LNG["atr" + i] +
        '<br /><span class="green">' +
        this.dots(val) +
        "</span></div>"
    );
  }
  pow += this.char_data.wta;
  $("#char_powe").attr(
    "data-original-title",
    "<div class=tt>" +
      LNG.apow +
      '<br /><span class="orange">' +
      this.dots(pow) +
      "</span></div>"
  );
};
GAME.parseTooltipItem = function (type, id, data) {
  var con = "",
    upgr = "",
    rclass = "",
    itemlv = "",
    item_header = "",
    iid = data.id,
    item_id = data.item_id;
  if (type == 2) {
    item_id = data.id;
  }
  if (data.upgrade > 0 && data.type != 56 && data.slot > 0)
    upgr = "+ " + data.upgrade;
  var reb = 0;
  if (data.level > 1250) reb = 2;
  if (data.class == 11) reb = 3;
  if (data.class == 12) reb = 4;
  if (!this.levelReqCheck(data.level, reb)) rclass = "red";
  if (data.level > 0)
    itemlv =
      "<span>" +
      LNG.lab24 +
      ": <b class=" +
      rclass +
      ">" +
      this.rebPref(reb) +
      "" +
      data.level +
      "</b></span>";
  switch (this.lang) {
    case "en":
      item_header =
        LNG["item_class" + data.class] + " " + LNG["item_slot" + data.slot];
      break;
    default:
      item_header =
        LNG["item_slot" + data.slot] + " " + LNG["item_class" + data.class];
      break;
  }
  con =
    '<div class="item_desc c' +
    data.class +
    '"><span class=item_name><b class=item' +
    data.class +
    ">" +
    data[this.lang_data["nauki"][this.lang]] +
    " " +
    upgr +
    "</b></span><br /><img class=img_sep src=/gfx/ekw_pages/item_desc_sep1.png /><img class=img_item src=/gfx/items/" +
    data.class +
    "/" +
    data.type +
    "/" +
    item_id +
    ".png /><div class=item_add><span class=item" +
    data.class +
    ">" +
    item_header +
    "</span></div><div class=item_add2>" +
    itemlv +
    "</div><div class=sep2></div><div class=inner_content>";
  if (data.ball) {
    con += "<div class=ball_desc>";
    var grade = "";
    for (var g = 1; g <= data.ball.grade; g++)
      grade += '<img src="/gfx/ekw_pages/star.png" />';
    con +=
      "<table><tr><td width=80>" +
      LNG.lab1 +
      ":</td><td>" +
      data.ball.level +
      "</td></tr><tr><td>EXP:</td><td>" +
      data.ball.exp +
      "</td></tr><tr><td>" +
      LNG.lab28 +
      ":</td><td>" +
      grade +
      "</td></tr></table><br /></div>";
  }

  if (LNG["item_addd" + data.type]) {
    con += '<div class="add_desc">' + LNG["item_addd" + data.type] + "</div>";
  }
  con += '<div class="clearfix"></div>';
  con += "<div class=item_stats>";
  if (data.type == 168)
    con +=
      LNG.item_func19 +
      ' <span class="green">' +
      this.convertSeconds(data.upgrade) +
      "</span>";
  if (data.ada) {
    var ada = data.ada;
    if (ada.travel_interface)
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_desc">' +
        LNG.item_func1 +
        "</span><br />";
    if (ada.teleport_interface)
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_desc">' +
        LNG.item_func7 +
        "</span><br />";
    if (ada.class_upgradeable)
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_desc">' +
        LNG.item_func20 +
        " [" +
        LNG.item_func21 +
        ": " +
        ada.nedd_amount +
        "]</span><br />";
    if (ada.ap_add_constant)
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_desc">' +
        LNG.item_func8 +
        " : " +
        this.dots(ada.ap_add_constant) +
        "</span><br />";
    if (ada.ap_add_percent)
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_desc">' +
        LNG.item_func8 +
        " : " +
        this.dots(ada.ap_add_percent) +
        "%</span><br />";
    if (ada.add_kk)
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_val">' +
        ada.add_kk +
        ' <img src="/gfx/kk.png" /></span><br />';
    if (ada.add_kk_by_upgrade)
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_val">' +
        data.upgrade +
        ' <img src="/gfx/kk.png" /></span><br />';
    if (ada.add_max_pr_by_upgrade)
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_val">' +
        data.upgrade +
        " </span> " +
        LNG.quest_prize19 +
        "<br />";
    if (ada.add_pr_ph_by_upgrade)
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_val">' +
        data.upgrade +
        " </span> " +
        LNG.quest_prize18 +
        "<br />";
    if (ada.add_stats_by_upgrade)
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_val">' +
        data.upgrade +
        " </span> " +
        LNG.item_stat12 +
        "<br />";
    if (ada.pet_evolution)
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_val">' +
        LNG.quest_prize51 +
        " + " +
        ada.pet_evolution +
        "</span><br />";
    if (ada.doubler) {
      var rate = 1;
      if (ada.doubler.type == 1) rate = ada.doubler.rate;
      if (ada.doubler.type == 2)
        rate = 20 + Math.floor(this.char_data.pr_max / 5000);
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_desc"><b>' +
        this.dots(rate) +
        "</b>x " +
        LNG.item_func9 +
        " " +
        LNG.lab43 +
        " " +
        this.convertSeconds(ada.doubler.duration) +
        "</span><br />";
    }
    if (ada.add_stat) {
      var len = ada.add_stat.length;
      con += '<span class="stat_val">' + LNG.item_func11 + "</span><br />";
      for (var i = 0; i < len; i++) {
        con +=
          '<div class="list_sep' +
          data.class +
          '"></div> <span class="stat_val">' +
          this.dots(ada.add_stat[i].value) +
          '</span> <span class="stat_desc">' +
          LNG["char_stat_" + ada.add_stat[i].stat] +
          "</span><br />";
      }
    }
    if (ada.ap_battery) {
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_desc">' +
        LNG.item_func12 +
        ". " +
        LNG.lab45 +
        '</span> <strong class="stat_val">' +
        this.dots(data.upgrade) +
        "</strong><br />";
    }
    if (ada.give_title) {
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_desc">' +
        LNG.item_func13 +
        "</span><br />";
    }
    if (ada.give_special_upgrades) {
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_desc">' +
        LNG.item_func25 +
        '</span> <span class="green">x' +
        ada.give_special_upgrades +
        "</span><br />";
    }
    if (ada.pet) {
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_desc">' +
        LNG.item_func10 +
        '</span> <span class="item' +
        ada.pet.class +
        '">' +
        LNG["item_class" + ada.pet.class] +
        "</span><br />";
      if (ada.pet.chances_for_class) {
        var len = ada.pet.chances_for_class.length;
        var clss = "";
        for (var i = 0; i < len; i++)
          clss +=
            '<span class="item' +
            ada.pet.chances_for_class[i] +
            '">' +
            LNG["item_class" + ada.pet.chances_for_class[i]] +
            "</span> ";
        con += LNG.item_func23 + ": " + clss + "<br />";
      }
      if (ada.pet.special_on_event) {
        con +=
          LNG.item_func24 +
          ' <span class="item' +
          ada.pet.special_on_event +
          '">' +
          LNG["item_class" + ada.pet.special_on_event] +
          "</span><br />";
      }
    }
    if (ada.employe) {
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_desc">' +
        LNG.item_func14 +
        '</span> <span class="item' +
        ada.employe.class +
        '">' +
        LNG["item_class" + ada.employe.class] +
        "</span><br />";
      if (ada.employe.chances_for_class) {
        var len = ada.employe.chances_for_class.length;
        var clss = "";
        for (var i = 0; i < len; i++)
          clss +=
            '<span class="item' +
            ada.employe.chances_for_class[i] +
            '">' +
            LNG["item_class" + ada.employe.chances_for_class[i]] +
            "</span> ";
        con += LNG.item_func23 + ": " + clss + "<br />";
      }
    }
    if (ada.grant_buff) {
      var len = ada.grant_buff.length;
      con += '<span class="stat_desc">' + LNG.item_func15 + "</span><br />";
      for (var i = 0; i < len; i++) {
        var bon = ada.grant_buff[i].data.val * ada.grant_buff[i].level;
        con +=
          '<div class="list_sep' +
          data.class +
          '"></div> <span class="stat_val">' +
          LNG["game_buff" + ada.grant_buff[i].buff_id] +
          "</span> [" +
          LNG.lab1 +
          " " +
          ada.grant_buff[i].level +
          ']<br /><span class="stat_sval">' +
          bon +
          " " +
          LNG["item_stat" + ada.grant_buff[i].data.stat] +
          "</span><br /> " +
          LNG.lab43 +
          " " +
          this.convertSeconds(ada.grant_buff[i].duration) +
          "<br />";
      }
    }
    if (ada.item_fragment) {
      var nm = "nazwa_en";
      if (this.lang == "pl") nm = "nazwa";
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_desc">' +
        LNG.item_func17 +
        '</span> <span class="item' +
        ada.item_fragment.target_class +
        '">' +
        ada.item_fragment["target_" + nm] +
        "</span><br />" +
        LNG.lab48 +
        ": <b>" +
        ada.item_fragment.need +
        "</b>";
    }
    if (ada.item_upgrade) {
      var nm = "nazwa_en";
      if (this.lang == "pl") nm = "nazwa";
      var des = LNG.lab46;
      if (ada.item_upgrade.destroy_on_fail) des = LNG.lab47;
      con +=
        '<div class="list_sep' +
        data.class +
        '"></div> <span class="stat_desc">' +
        LNG.item_func16 +
        '</span> <span class="item' +
        ada.item_upgrade.source_class +
        '">' +
        ada.item_upgrade["source_" + nm] +
        '</span> do <span class="item' +
        ada.item_upgrade.target_class +
        '">' +
        ada.item_upgrade["target_" + nm] +
        "</span><br />" +
        LNG.lab36 +
        ": <b>" +
        ada.item_upgrade.chance +
        "</b>%<br /><br />" +
        des;
    }
    if (ada.items) {
      con += '<span class="stat_val">' + LNG.item_func2 + "</span><br />";
      var len = ada.items.length;
      for (var i = 0; i < len; i++) {
        var lid = 5;
        if (this.lang == "pl") lid = 4;
        var up = "";
        if (ada.items[i][1] > 0) up = "(+" + ada.items[i][1] + ")";
        con +=
          '<div class="list_sep' +
          data.class +
          '"></div> <span class="stat_val">' +
          this.dots(ada.items[i][2]) +
          'x</span> <span class="item' +
          ada.items[i][6] +
          ' stat_desc">' +
          ada.items[i][lid] +
          " " +
          up +
          "</span><br />";
      }
    }
    if (ada.premium_bonuses) {
      con +=
        '<span class="stat_val">' +
        LNG.item_func3 +
        " " +
        this.convertSeconds(ada.premium_bonuses.duration) +
        "</span><br />";
      var len = ada.premium_bonuses.concerns.length;
      for (var i = 0; i < len; i++) {
        con +=
          '<div class="list_sep' +
          data.class +
          '"></div> <span class="stat_desc">' +
          LNG["premium_bon" + ada.premium_bonuses.concerns[i]] +
          "</span><br />";
      }
    }
    if (ada.activate_events) {
      var len = ada.activate_events.length;
      con += '<span class="stat_val">' + LNG.item_func4 + "</span><br />";
      for (var i = 0; i < len; i++) {
        var rate = "+<b>" + ada.activate_events[i].rate + "</b>";
        if (ada.activate_events[i].pr)
          rate = "+<b>" + ada.activate_events[i].rate + "</b>%";
        con +=
          '<div class="list_sep' +
          data.class +
          '"></div> <span class="stat_desc">' +
          LNG["event_type_" + ada.activate_events[i].type] +
          " " +
          rate +
          " " +
          LNG.lab43 +
          " " +
          this.convertSeconds(ada.activate_events[i].duration) +
          "</span><br />";
      }
    }
    if (ada.item_chance) {
      var len = ada.item_chance.length;
      con += '<span class="stat_val">' + LNG.item_func5 + "</span><br />";
      for (var i = 0; i < len; i++) {
        var lid = 5;
        if (this.lang == "pl") lid = 4;
        var item = ada.item_chance[i].item;
        var up = "";
        if (item[1] > 0) up = "(+" + item[1] + ")";
        con +=
          '<div class="list_sep' +
          data.class +
          '"></div>[1:' +
          ada.item_chance[i].chance +
          '] <span class="stat_val">' +
          this.dots(item[2]) +
          'x</span> <span class="item' +
          item[3] +
          ' stat_desc">' +
          item[lid] +
          " " +
          up +
          "</span><br />";
      }
    }
    if (ada.random_item) {
      var len = ada.random_item.length;
      for (var i = 0; i < len; i++) {
        con +=
          '<span class="stat_val">' +
          LNG.item_func6 +
          "</span> [" +
          ada.random_item[i].amount +
          " " +
          LNG.lab44 +
          "]<br />";
        var lid = 7;
        if (this.lang == "pl") lid = 6;
        var len2 = ada.random_item[i].items.length;
        for (var j = 0; j < len2; j++) {
          var item = ada.random_item[i].items[j];
          var up = "";
          if (item[2] > 0) up = "(+" + item[2] + ")";
          var chance = parseFloat(
            ((item[0][1] - item[0][0] + 1) / ada.random_item[i].max_rand) * 100
          ).toFixed(2);
          var iname =
            '<span class="stat_val">' +
            this.dots(item[3]) +
            'x</span> <span class="item' +
            item[5] +
            ' stat_desc">' +
            item[lid] +
            " " +
            up +
            "</span>";
          if (item[1] == -1 && item[4]) {
            var add = item[4];
            if (add.pet)
              iname =
                '<span class="stat_desc">' +
                LNG.item_func10 +
                '</span> <span class="item' +
                add.pet.class +
                '">' +
                LNG["item_class" + add.pet.class] +
                "</span>";
          }
          con +=
            '<div class="list_sep' +
            data.class +
            '"></div>[' +
            chance +
            "%] " +
            iname +
            "<br />";
        }
      }
    }
    if (ada.give_outfit) {
      con +=
        '<span class="stat_val">' +
        LNG.item_func18 +
        "</span> " +
        LNG.lab417 +
        ' <span class="stat_val">25 <img src="/gfx/kk.png" /></span><br />';
    }
    if (ada.pvp_balancer) {
      con += '<span class="stat_val">' + LNG.item_func22 + "</span><br />";
    }
    if (ada.experience_reduction) {
      con +=
        '<span class="stat_val">' +
        LNG.item_func26 +
        '</span> <b class="red">' +
        ada.experience_reduction +
        "</b>%<br />";
    }
    if (ada.random_soul_card) {
      con += '<span class="stat_val">' + LNG.item_func27 + "</span><br />";
    }
    if (ada.add_pvp_depending_on_reborn) {
      var points = 10000;
      switch (this.char_data.reborn) {
        case 1:
          points = 50000;
          break;
        case 2:
          points = 100000;
          break;
        case 3:
          points = 500000;
          break;
        case 4:
          points = 1000000;
          break;
        case 5:
          points = 1250000;
          break;
        case 6:
          points = 1500000;
          break;
      }
      con +=
        '<span class="stat_val">' +
        LNG.item_func28 +
        " : <b>" +
        this.dots(points) +
        "</b></span><br />";
    }
  }
  for (var s = 1; s <= 9; s++) {
    var blood_add = false;
    var statn = data["stat" + s];
    if (statn) {
      var statval = data["stat" + s + "_val"];
      if (
        (data.type == 9 || data.type == 86 || data.type == 125) &&
        s == 1 &&
        statn == 15 &&
        this.char_data.father_id == 0
      )
        blood_add = true;

      var cls = "stat_val";
      if (data["stat" + s + "_scls"]) cls = "stat_sval";
      con +=
        "<div class=list_sep" +
        data.class +
        "></div> <span class=" +
        cls +
        ">" +
        this.dots(statval) +
        "</span> <span class=stat_desc>" +
        this.item_stat(statn) +
        "</span>";
      if (blood_add)
        con += " <span class=stat_val>(+100% - " + LNG.lab25 + ")</span>";
      con += "<br />";
    }
  }
  con += "</div>";
  if (data.set_id > 0 && data.set) {
    con +=
      "<div class=set_span><span>" +
      LNG.lab27 +
      " " +
      data.set.name +
      "</span> (" +
      data.set.set_items_owned +
      "/" +
      data.set.set_items_max +
      ")</div><div class=set_lines><div class=set_item_list>";
    var len = data.set.set_items.length;
    for (var i = 0; i < len; i++) {
      var si = data.set.set_items[i];
      var cls = "set_itm2";
      if (si.owned) cls = "set_itm1";
      con += "<span class=" + cls + ">" + si.name + "</span><br />";
    }
    con += "</div><div class=set_stat_list>";
    var len = data.set.stats.length;
    for (var i = 0; i < len; i++) {
      var st = data.set.stats[i];
      var cls = "set_itm2";
      if (st.a) cls = "set_itm1";
      con +=
        "<span class=" +
        cls +
        ">" +
        st.val +
        " " +
        this.item_stat(st.stat) +
        "</span><br />";
    }
    con += '</div><div class="clr"></div></div>';
  }
  if (data.expires > 0)
    con +=
      '<div class="clr"><b class="red">' +
      LNG.lab213 +
      "</b> " +
      LNG.lab51 +
      " " +
      this.showTimer(data.expires - this.getTime());
  if (data.bound == 1)
    con += '<div class="clr"><b class="bound">' + LNG.lab26 + "</b></div>";
  if (data.bound == 2)
    con += '<div class="clr"><b class="bound">' + LNG.lab403 + "</b></div>";
  con += "</div></div>";
  switch (type) {
    case 1:
      var sel = $('.player_ekw_item[data-item_id="' + data.id + '"]');
      sel.attr("data-original-title", con).attr("data-item_class", data.class);
      break;
    case 2:
      var sel = $('.main_ekw_item[data-item_id="' + data.id + '"]');
      sel.attr("data-original-title", con).attr("data-item_class", data.class);
      break;
  }
  if (this.current_item_tooltip) this.current_item_tooltip.tooltip("show");
};
GAME.item_stat = function (type) {
  if (type >= 21 && type <= 50) {
    var sid = type - 20;
    return LNG.item_statSK + LNG["skill_name" + sid];
  } else if (type >= 100 && type <= 131) {
    var sid = type - 63;
    return LNG.item_statSK + LNG["skill_name" + sid];
  } else if (type >= 1001 && type <= 1500) {
    var sid = type - 1000;
    return LNG.item_statSK + LNG["skill_name" + sid];
  } else return LNG["item_stat" + type];
};
GAME.parseTracker = function (track) {
  var con = "";
  if (track && track.length) {
    var len = track.length;
    con += '<div class="sekcja">' + LNG.lab181 + "</div>";
    for (var i = 0; i < len; i++) {
      var qn = track[i].header;
      if (qn.length > 20) qn = qn.slice(0, 20) + "...";
      con +=
        '<div id="track_quest_' +
        track[i].qb_id +
        '" class="qtrack"><div class="sep2"></div><b>' +
        qn +
        "</b> " +
        this.quest_want(track[i].want, track[i].qb_id) +
        "</div>";
    }
  }
  con += '<div class="clr"></div>';
  $("#quest_track_con").html(con);
};
GAME.parseZast = function () {
  this.locked_pages = [];
  if (this.safe_zone) {
    $("#char_premium").hide();
    $("#char_spremium").hide();
    $("#chat_containter").hide();
    this.locked_pages = [
      "game_kk",
      "game_kp",
      "game_substitution",
      "game_sett",
      "game_auctions",
      "game_vip",
    ];
    if (this.safe_zone.lock_trn) this.locked_pages.push("game_train");
    if (this.safe_zone.lock_ekw) this.locked_pages.push("game_ekw");
    if (this.safe_zone.lock_pw) this.locked_pages.push("game_pw");
    if (this.safe_zone.lock_klan && !this.safe_zone.clan_use)
      this.locked_pages.push("game_klan");
    if (this.safe_zone.lock_pet) {
      this.locked_pages.push("game_pets");
      this.locked_pages.push("game_emp");
    }
    if (this.safe_zone.lock_skills) this.locked_pages.push("game_skills");
    if (this.safe_zone.lock_balls) this.locked_pages.push("game_balls");
    if (this.safe_zone.lock_travel) {
      this.locked_pages.push("game_travel");
      this.locked_pages.push("game_teleport");
    }
    if (this.safe_zone.lock_empire) this.locked_pages.push("game_empire");
    if (this.safe_zone.lock_pp) this.locked_pages.push("game_private");
    if (this.safe_zone.clan_use) {
      $(".cps").hide();
      $("#kone_btn").show();
    }
  }
};
GAME.page_switch = function (page, arg = 0) {
  if (this.is_loading) return;
  $(".menu_bar").hide();
  kom_clear();
  JQS.qcc.hide();
  this.menu = "";
  if (this.locked_pages.indexOf(page) != -1) {
    this.komunikat(LNG.error65);
  } else {
    switch (page) {
      case "game_map":
        this.prepareMap();
        break;
      case "game_stats":
        this.parseData(4, this.char_bonuses);
        break;
      case "game_train":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 8, type: 1 });
        break;
      case "game_know":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
          a: 9,
          type: 1,
          page: 1,
        });
        break;
      case "game_camp":
        this.parseData(10, {});
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 10, type: 1 });
        break;
      case "game_raps":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
          a: 11,
          page: 1,
          cat: 0,
        });
        break;
      case "game_ekw":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
          a: 12,
          page: GAME.ekw_page,
          used: 1,
        });
        break;
      case "game_buffs":
        $("#bless_reset").hide();
        if (this.char_data.reborn == 2) $("#bless_reset").show();
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 14, type: 1 });
        break;
      case "game_buff_use":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 14, type: 3 });
        break;
      case "game_private":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 15, type: 1 });
        break;
      case "game_techs":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 18, type: 1 });
        break;
      case "game_cstats":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 20, type: 1 });
        break;
      case "game_qb":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 22, type: 3 });
        break;
      case "game_kp":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 25, type: 1 });
        this.currency = 1;
        break;
      case "game_kk":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 25, type: 3 });
        page = "game_kp";
        this.currency = 2;
        break;
      case "currency_log":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
          a: 25,
          type: 6,
          c: this.currency,
          page: 1,
        });
        break;
      case "game_substitution":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 27, type: 0 });
        break;
      case "game_wardobe":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 28, type: 0 });
        break;
      case "game_instances":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 29, type: 0 });
        break;
      case "game_skills":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 30, type: 0 });
        break;
      case "skill_sets":
        this.parseSkillSets();
        break;
      case "sword_upgrade":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
          a: 31,
          type: 0,
          item_id: arg,
        });
        break;
      case "game_wanted":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 32, type: 0 });
        break;
      case "game_balls":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 33, type: 0 });
        break;
      case "game_friends":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 35, type: 0 });
        break;
      case "game_achievements":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 36, type: 0 });
        break;
      case "game_pw":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 37, page: 1 });
        break;
      case "game_rank":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
          a: 38,
          page: 1,
          rank_type: GAME.ranking_type,
        });
        break;
      case "game_klan":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 0 });
        break;
      case "game_lab":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 41, type: 0 });
        break;
      case "game_pets":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 43, type: 0 });
        break;
      case "game_emp":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 44, type: 0 });
        break;
      case "game_arena":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 46, type: 0 });
        break;
      case "game_auctions":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
          a: 47,
          type: 0,
          page: 1,
        });
        break;
      case "game_wb":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 48, type: 0 });
        break;
      case "game_activities":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 49, type: 0 });
        break;
      case "game_empire":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
          a: 50,
          type: 0,
          empire: arg,
        });
        break;
      case "game_events":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 51, type: 0 });
        break;
      case "kp_transfer":
        this.load_captcha("#transfer_captcha", "transfer_captcha");
        break;
      case "game_vip":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 54, type: 0 });
        break;
      case "game_tournaments":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
          a: 57,
          type: 0,
          type2: GAME.tour_type,
          page: 1,
        });
        break;
      case "game_cards":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 58, type: 0 });
        break;
      case "game_soultower":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 59, type: 0 });
        break;
      case "game_lock":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 60, type: 0 });
        break;
      case "game_lssj":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 61, type: 0 });
        break;
      case "game_destinity":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 63, type: 0 });
        break;
      case "game_bardock":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 63, type: 3 });
        break;
      case "game_mastery":
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 62, type: 0 });
        this.parseMastery();
        break;
    }
    $(".page_switch").hide();
    $("#page_" + page).show();
    this.tutorialReqDone(3, page);
  }
};
GAME.parseMastery = function () {
  $("#mastery_upgrade_cost").text(
    this.dots(this.masteryExp(this.char_data.mastery_lvl))
  );
  var cost = '<img src="/gfx/kk.png" />';
  if (this.char_data.mastery_cost) cost = '<img src="/gfx/kp.png" />';
  $("#mastery_type").html(cost);
};
GAME.masteryExp = function (lvl) {
  lvl++;
  return lvl * lvl * 200;
};
GAME.rebornET = function (lvl) {
  if (lvl < 50) return 2;
  if (lvl < 100) return 3;
  if (lvl < 150) return 4;
  if (lvl < 200) return 5;
  if (lvl < 250) return 6;
  if (lvl < 300) return 7;
  if (lvl < 350) return 8;
  if (lvl < 400) return 9;
  if (lvl < 450) return 10;
  if (lvl < 500) return 11;
  if (lvl < 550) return 12;
  if (lvl < 600) return 13;
  if (lvl < 650) return 15;
  if (lvl < 700) return 16;
  if (lvl < 800) return 17;
  if (lvl < 900) return 30;
  if (lvl < 1249) return 50;
  if (lvl < 1250) return 71;
};
GAME.lvlUpSim = function (char_id) {
  var hero = JSON.parse(JSON.stringify(this.char_data));
  var lvls_gained = 0;
  var clvl = hero.level;
  var cexp = hero.exp;
  var next = this.nextLevelExp(clvl, hero.reborn);
  if (hero.reborn >= 2) {
    while (cexp >= next && clvl < 100000) {
      clvl++;
      lvls_gained++;
      cexp -= next;
      next = this.nextLevelExp(clvl, hero.reborn);
    }
  } else {
    while (cexp >= next && clvl < 1250) {
      clvl++;
      lvls_gained++;
      next = this.nextLevelExp(clvl, hero.reborn);
    }
  }
  return clvl;
};
GAME.nextLevelExp = function (level, reborn) {
  var nextl = level + 1;
  var next = nextl * 10 * nextl * nextl;
  switch (reborn) {
    case 1:
      next *= this.rebornET(level);
      break;
    case 2:
    case 4:
      next *= reborn;
      if (level > 1250) next = next * (level / 100);
      break;
    case 3:
      next *= reborn;
      if (level > 2000) next = next * level;
      else next = next * level * 10;
      break;
    case 5:
      next *= reborn;
      if (level > 125) next = next * (level / 10);
      if (level >= 30000) next *= 5;
      if (level >= 50000) next *= 10;
      if (level >= 70000) next *= 15;
      if (level >= 90000) next *= 20;
      break;
    default:
      if (nextl > 1160) next *= (level + 1) / 900;
      break;
  }
  return Math.round(next);
};
GAME.timers_tick = function () {
  var time = this.getTime();
  var now = moment(this.getmTime());
  var minute = parseInt(now.format("m"));
  if (minute <= 5) this.trainUpgrade(1, time);
  else this.trainUpgrade(0, time);

  $(".timer").each(function (i) {
    var th = $(this);
    var endt = th.data("end");
    var left = endt - time;
    var end = false;
    var res = "";
    if (left > 0) {
      res = GAME.convertSeconds(left);
      th.text(res);
    } else {
      res = "--:--:--";
      th.text(res).removeClass("timer");
      end = true;
    }
    var special = parseInt(th.data("special"));
    switch (special) {
      case 1:
        var pr =
          100 - Math.floor(((GAME.timed_end - time) / GAME.timed_dur) * 100);
        if (pr > 100) pr = 100;
        if (GAME.timed_pr != pr) $("#timed_bar").css({ width: pr + "%" });
        document.title = "[" + res + "] " + LNG.page_title;
        if (end) {
          setTimeout(function () {
            GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 8, type: 4 });
          }, 1000);
          document.title = LNG.page_title;
        }
        break;
      case 2:
        if (end) {
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 15, type: 4 });
        }
        break;
      case 3:
        if (end) {
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 17 });
        }
        break;
      case 4:
        var pr = Math.floor(((GAME.ssj_end - time) / GAME.ssj_dur) * 100);
        if (pr > 100) pr = 100;
        if (GAME.ssj_pr != pr) {
          GAME.ssj_pr = pr;
          $("#main_ssj_bar").css({ width: pr + "%" });
        }
        if (end) {
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 18, type: 6 });
        }
        break;
      case 5:
        var pr = Math.floor(((GAME.doubler_end - time) / 3600) * 100);
        if (pr > 100) pr = 100;
        if (GAME.doubler_pr != pr) {
          GAME.doubler_pr = pr;
          $("#main_sub_bar").css({ width: pr + "%" });
        }
        if (end) {
          $("#doubler_bar").fadeOut();
        }
        break;
      case 6:
        if (end) {
          $(".quest_btn").prop("disabled", false);
          $(".quest_duel_lock").hide();
        }
        break;
      case 7:
        if (GAME.mining) {
          var pr =
            100 -
            Math.floor(
              ((GAME.mining.expires / 1000 - time) / GAME.mining.duration) * 100
            );
          if (pr > 100) pr = 100;
          if (GAME.mining.pr != pr) {
            GAME.mining.pr = pr;
            GAME.mining.bar.finish().animate({ width: pr + "%" }, 1000);
          }
          if (end) {
            GAME.mining.bar.finish().css({ width: "100%" });
            GAME.mining.mbar.slideUp();
            $("#mining_res_" + GAME.mining.mine_id).html(
              LNG.lab134 +
                " " +
                GAME.showTimer(
                  300,
                  'data-special="8" data-mid="' + GAME.mining.mine_id + '"'
                )
            );
            if (
              GAME.map_mines &&
              GAME.map_mines.coords[GAME.mining.x + "_" + GAME.mining.y]
            ) {
              var arr =
                GAME.map_mines.coords[GAME.mining.x + "_" + GAME.mining.y];
              var len = arr.length;
              for (var i = 0; i < len; i++) {
                if (arr[i][0] == GAME.mining.mine_id) arr[i][2] = time + 300;
              }
            }
            GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder(
              { a: 22, type: 8 },
              true
            );
          }
        }
        break;
      case 8:
        if (end) {
          var mid = th.data("mid");
          $("#mining_btn_" + mid).prop("disabled", false);
          $("#mining_res_" + mid).empty();
        }
        break;
      case 9:
        if (end) {
          $("#lb" + th.data("bid")).remove();
          GAME.buffs_cnt--;
          $("#char_buffs_cnt").text(GAME.buffs_cnt);
        }
        break;
      case 10: //
        if (end) {
          var pd = th.data("pd");
          $(".playercd" + pd).hide();
          $(".playericons" + pd)
            .fadeIn()
            .removeClass("initial_hide_forced");
        }
        break;
      case 11:
        if (end) {
          GAME.pushNotification(
            '<strong class="select_page" data-page="game_soultower">' +
              LNG.lab401 +
              " !</strong>",
            10000
          );
          GAME.push_notification(LNG.lab401);
        }
        break;
    }
  });
};
GAME.showTimer = function (duration, atrs = "", aclass = "") {
  duration = Math.floor(duration);
  var end = this.getTime() + duration;
  return (
    '<span class="timer ' +
    aclass +
    '" ' +
    atrs +
    ' data-end="' +
    end +
    '">' +
    this.convertSeconds(duration) +
    "</span>"
  );
};
GAME.convertSeconds = function (totalSec) {
  if (!totalSec) totalSec = 0;
  var hours = parseInt(totalSec / 3600);
  var minutes = parseInt(totalSec / 60) % 60;
  var seconds = totalSec % 60;
  if (hours < 0) hours = 0;
  if (minutes < 0) minutes = 0;
  if (seconds < 0) seconds = 0;
  return (
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds)
  );
};
GAME.timedActionLabel = function (current) {
  var label = "";
  switch (current.type) {
    case 1:
      var total = current.result + current.bonus_result;
      label =
        LNG.train_action1 +
        " <b>" +
        LNG["atr" + current.action] +
        '</b> + <span id="current_train_result' +
        current.id +
        '" data-current="' +
        total +
        '">' +
        this.dots(total) +
        "</span>";
      break;
    case 2:
      label = LNG.train_action2 + ": <b>" + current.name + "</b>";
      break;
    case 3:
      if (current.action == 1) label = LNG.train_action3b;
      else label = LNG.train_action3;
      break;
    case 4:
      label = LNG.train_action4 + ": <b>" + current.name + "</b>";
      break;
  }
  return label;
};
GAME.parseTimed = function () {
  var time = this.getTime();
  this.is_training = false;
  if (this.char_tables && this.char_tables["timed_actions"]) {
    var len = this.char_tables["timed_actions"].length;
    if (len > 0) {
      var actions = this.char_tables["timed_actions"].sort(function (a, b) {
        return a.start - b.start;
      });
      var current = actions[0];
      $("#timed_label").html(
        '<div class="sep right"></div>' +
          LNG.lab17 +
          ": " +
          this.timedActionLabel(current) +
          ". " +
          LNG.lab16 +
          " " +
          this.convertTime(current.end)
      );
      var left = current.end - time;
      if (left < 1)
        this.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 8, type: 4 });
      var dur = current.end - current.start;
      if (current.type == 1) this.is_training = true;
      this.timed = len;
      this.timed_dur = dur;
      this.timed_end = current.end;
      var pr = 100 - Math.floor((left / dur) * 100);
      if (pr > 100) pr = 100;
      this.timed_pr = pr;
      $("#timed_left").html(this.showTimer(left, 'data-special="1"'));
      $("#timed_bar").css({ width: pr + "%" });
      if (actions[1] && actions[1].end > time) {
        var plan = LNG.lab15 + " :";
        $("#timed_planed_con").html(
          '<div class="sep"></div>' +
            plan +
            " " +
            this.timedActionLabel(actions[1]) +
            ". " +
            LNG.lab16 +
            " " +
            this.convertTime(actions[1].end)
        );
        $("#timed_planned").show();
      } else $("#timed_planned").hide();
      $("#timed_con").fadeIn();
    } else {
      this.timed = 0;
      $("#timed_left").text("--");
      $("#timed_con").hide();
    }
  } else {
    this.timed = 0;
    $("#timed_left").text("--");
    $("#timed_con").hide();
  }
  if (this.base_train_speed) this.prepareTrainForm();
};
GAME.item_upgradeable = function (type) {
  var unormal = [
    3, 5, 9, 16, 17, 19, 21, 22, 23, 24, 66, 73, 74, 75, 86, 95, 125,
  ];
  var usuper = [159];
  if (type == 288) return [true, 1972];
  if (usuper.indexOf(type) != -1) return [true, 1599];
  else if (unormal.indexOf(type) != -1) return [true, 57];
  return [false, 0];
};
GAME.item_joinable = function (type, iclass, item_id = 0) {
  var ultra = [
    1238, 1375, 837, 838, 848, 1538, 1397, 1396, 1291, 1357, 1228, 1655, 1643,
  ];
  var normal = [
    3, 5, 9, 11, 16, 17, 18, 19, 21, 22, 23, 24, 62, 63, 66, 73, 74, 75, 78, 86,
    111, 121, 142, 182, 183, 188, 189, 244, 248,
  ];
  if (ultra.indexOf(item_id) != -1) return [true, 1482];
  else if (iclass < 10 && normal.indexOf(type) != -1) return [true, 74];
  return [false, 0];
};
GAME.parsePremiumAmount = function (new_amount) {
  var old = this.premium;
  this.premium = new_amount;
  this.value_change_ani(PJS.pra, old, this.premium, 500);
  if (this.shop_data && this.shop_data.currency == 1)
    $("#shop_currency_am").text(this.dots(this.premium));
};
GAME.parseQuickOpts = function () {
  var opts = "";
  if (this.quick_opts.tutorial) {
    this.tutorials = this.quick_opts.tutorial;
    opts +=
      '<img id="open_tuts" src="/gfx/layout/helper.png" class="qlink2 option" data-option="open_tuts" data-toggle="tooltip" data-original-title="<div class=tt>' +
      LNG.lab358 +
      '</div>" />';
    $.getJSON("/json/tutorial.json", function (json) {
      GAME.tutorial_data = json.tuts;
      GAME.checkTutorial();
    });
  }
  if (this.quick_opts.private_planet)
    opts +=
      '<div class="option qlink priv" data-option="private_teleport" data-toggle="tooltip" data-original-title="<div class=tt>' +
      LNG.lab138 +
      '</div>"></div>';
  if (this.quick_opts.teleport)
    opts +=
      '<div class="option qlink tele" data-option="use_teleport" data-toggle="tooltip" data-original-title="<div class=tt>' +
      LNG.lab140 +
      '</div>"></div>';
  if (this.quick_opts.travel)
    opts +=
      '<div class="option qlink trav" data-option="use_travel" data-toggle="tooltip" data-original-title="<div class=tt>' +
      LNG.lab141 +
      '</div>"></div>';
  if (this.quick_opts.ssj)
    opts +=
      '<div class="option qlink ssj' +
      this.quick_opts.ssj[1] +
      '" data-option="use_transform" data-tech="' +
      this.quick_opts.ssj[0] +
      '"data-toggle="tooltip" data-original-title="<div class=tt>' +
      LNG.lab139 +
      '</div>"></div>';
  if (this.quick_opts.online_reward)
    opts +=
      '<div class="option qlink dail" data-option="daily_reward" data-toggle="tooltip" data-original-title="<div class=tt>' +
      LNG.lab176 +
      '</div>"></div>';
  if (this.quick_opts.bless)
    opts +=
      '<div class="select_page qlink bles" data-page="game_buffs" data-toggle="tooltip" data-original-title="<div class=tt>' +
      LNG.lab188 +
      '</div>"></div>';
  if (this.quick_opts.sub && this.quick_opts.sub.length)
    opts +=
      '<div class="option qlink subs" data-option="quick_use_subs" data-toggle="tooltip" data-original-title="<div class=tt>' +
      LNG.lab189 +
      '</div>"></div>';
  if (this.quick_opts.senzus && this.quick_opts.senzus.length) {
    opts +=
      '<div class="option qlink senz" data-option="quick_use_senzu" data-toggle="tooltip" data-original-title="<div class=tt>' +
      LNG.lab190 +
      '</div>"></div>';
  }
  if (this.quick_opts.empire)
    opts +=
      '<div class="select_page qlink emp' +
      this.quick_opts.empire +
      '" data-page="game_empire" data-toggle="tooltip" data-original-title="<div class=tt>' +
      LNG["empire" + this.quick_opts.empire] +
      '</div>"></div>';

  $("#quick_bar").html(opts);
  option_bind();
  tooltip_bind();
  page_bind();
};
GAME.parseServerData = function () {
  $("#server_exp_rate").text(
    Math.round((this.server_rates.exp_rate + this.getStat(200)) * 100) / 100
  );
  $("#server_trn_rate").text(
    Math.round((this.server_rates.trn_rate + this.getStat(201)) * 100) / 100
  );
  var con = "";
  if (this.server_rates.power_chance)
    con +=
      "<div>" + this.server_rates.power_chance + this.item_stat(53) + "</div>";
  if (this.server_rates.power_value)
    con +=
      "<div>" + this.server_rates.power_value + this.item_stat(54) + "</div>";
  if (this.server_rates.psk_chance)
    con +=
      "<div>" + this.server_rates.psk_chance + this.item_stat(67) + "</div>";
  if (this.server_rates.drop_rate)
    con +=
      "<div>" + this.server_rates.drop_rate + this.item_stat(55) + "</div>";
  $("#server_events").html(con);
  var con = "<table>";
  if (this.server_helpers && this.server_helpers.admin)
    con +=
      '<tr><td width="200"><span class="player_rank6">' +
      LNG["prank6"] +
      '</span> :</td><td><b class="orange option" data-option="show_player" data-char_id="' +
      this.server_helpers.admin.id +
      '">' +
      this.server_helpers.admin.name +
      "</b></td></tr>";
  if (this.server_helpers && this.server_helpers.kaioh)
    con +=
      '<tr><td width="200"><span class="player_rank4">' +
      LNG["prank4"] +
      '</span> :</td><td><b class="orange option" data-option="show_player" data-char_id="' +
      this.server_helpers.kaioh.id +
      '">' +
      this.server_helpers.kaioh.name +
      "</b></td></tr>";
  if (this.server_helpers && this.server_helpers.almighty)
    con +=
      '<tr><td width="200"><span class="player_rank3">' +
      LNG["prank3"] +
      '</span> :</td><td><b class="orange option" data-option="show_player" data-char_id="' +
      this.server_helpers.almighty.id +
      '">' +
      this.server_helpers.almighty.name +
      "</b></td></tr>";
  con += "</table>";
  $("#server_helpers").html(con);
  option_bind();
};

GAME.paBarUpdate = function (ani) {
  var w = this.char_data.pr / this.getCharMaxPr();
  w = Math.ceil(w * 100);
  if (w > 100) w = 100;
  if (ani)
    $("#main_pa_bar")
      .finish()
      .animate({ width: w + "%" });
  else $("#main_pa_bar").css({ width: w + "%" });
};
GAME.isLastLevel = function (level, reborn) {
  var res = false;
  switch (reborn) {
    case 0:
    case 1:
      if (level >= 1250) res = true;
      break;
    case 2:
    case 3:
    case 4:
      if (level >= 100000) res = true;
      break;
  }
  return res;
};
GAME.god_calc = function (god) {
  var mod = 1;
  if (god < 1000000000) mod = 10;
  if (god > 1000000000) mod = 9;
  if (god > 2000000000) mod = 8;
  if (god > 3000000000) mod = 7;
  if (god > 4000000000) mod = 6;
  if (god > 5000000000) mod = 5;
  if (god > 6000000000) mod = 4;
  if (god > 7000000000) mod = 3;
  if (god > 8000000000) mod = 2;
  if (god > 9000000000) mod = 1;
  if (god > 10000000000) mod = 0.5;
  if (god > 11000000000) mod = 0.25;
  if (god > 12000000000) mod = 0.2;
  if (god > 13000000000) mod = 0.15;
  if (god > 13000000000) mod = 0.1;
  if (god > 15000000000) mod = 0.05;
  if (god > 16000000000) mod = 0.01;
  if (god > 17000000000) mod = 0.001;
  if (god > 18000000000) mod = 0.0001;
  if (god > 19000000000) mod = 0.00001;
  if (god > 20000000000) mod = 0.000001;
  return mod;
};
GAME.expTooltipUpdate = function (ani) {
  var nextl = this.nextLevelExp(this.char_data.level, this.char_data.reborn),
    w = 0;
  this.exp_next = nextl;
  if (this.char_data.reborn >= 2) w = this.char_data.exp / nextl;
  else {
    var next2 = this.nextLevelExp(
      this.char_data.level - 1,
      this.char_data.reborn
    );
    this.exp_next2 = next2;
    w = (this.char_data.exp - next2) / (nextl - next2);
  }
  w = Math.round(w * 100);
  if (w > 100) w = 100;
  if (this.isLastLevel(this.char_data.level, this.char_data.reborn)) {
    w = 100;
    nextl = "...";
  } else nextl = this.dots(nextl);
  $("#needexp").text(nextl);
  $("#needexppr").text(w);
  $("#hasexp").text(this.number_format_classic(this.char_data.exp, 0, "", " "));

  if (ani)
    $("#main_exp_bar")
      .finish()
      .animate({ width: w + "%" });
  else $("#main_exp_bar").css({ width: w + "%" });
};
GAME.updateExpBar = function () {
  var w = 0,
    next = 0;
  if (this.isLastLevel(this.char_data.level, this.char_data.reborn)) {
    w = 100;
    next = "...";
  } else {
    if (this.char_data.reborn >= 2) w = this.char_data.exp / this.exp_next;
    else
      w =
        (this.char_data.exp - this.exp_next2) /
        (this.exp_next - this.exp_next2);
    w = Math.ceil(w * 100);
    if (w > 100) w = 100;
    next = this.dots(this.exp_next);
  }
  if (this.exp_w != w) {
    this.exp_w = w;
    $("#main_exp_bar")
      .finish()
      .animate({ width: w + "%" });
    $("#needexp").text(next);
    $("#needexppr").text(w);
  }
};
GAME.premiumBonCnt = function () {
  var cnt = 0,
    time = this.getTime();
  for (var b = 1; b <= 21; b++) {
    if (this.char_data["bonus" + b] > time) cnt++;
  }
  if (cnt > 0) $("#bon_counter").text(cnt).show();
  else $("#bon_counter").hide();
};
GAME.hasClanLaw = function (law) {
  var res = false;
  if (this.char_data.klan_id > 0) {
    if (this.is_clan_chief) return true;
    if (this.clan_laws && this.clan_laws[law]) return true;
  }
  return res;
};
GAME.useChar = function (res) {
  this.locked_pages = [];
  $("#war_container").hide();
  $("#ewar_list").html("");
  $("#war_list").html("");
  $(".brolly").hide();
  $(".bblack").hide();
  $(".bardock").hide();
  $(".cps").show();
  this.koms = [];
  this.safe_zone = false;
  this.page_switch("game_intro");
  this.char_id = res.char_id;
  this.char_data = res.char_data;
  this.char_tables = res.char_tables;
  this.char_bonuses = res.char_bonuses;
  this.premium = res.main_premium;
  this.parseSSJ(res.ssj);
  this.server_rates = res.server_rates;
  this.server_helpers = res.server_helpers;
  this.skill_data = res.skill_data;
  this.masters = res.masters;
  this.parseServerData();
  this.maploaded = false;
  this.premiumBonCnt();
  this.map.initiated = false;
  this.clan_laws = res.clan_laws;
  this.is_clan_chief = res.clan_chief;
  PJS.pra.innerText = this.dots(this.premium);
  this.parseTimed();
  $("#godness").hide();
  if (this.char_data.god) $("#godness").show();
  if (this.char_data.race == 4) $(".brolly").show();
  if (this.char_data.race == 5) $(".bblack").show();
  if (this.char_data.race == 6) $(".bardock").show();
  $(".char_avatar").attr("src", res.avatar);
  $(".need_reborn").hide();
  $(".restoreonrelog").show();
  $("#ekw_back")
    .removeClass()
    .addClass("ekw_bck")
    .addClass("tlo_ekw" + this.char_data.race);
  if (this.char_data.last_map) $("#lastmap_bar").show();
  else $("#lastmap_bar").hide();
  if (this.char_data.reborn >= 2) $(".need_reborn2").show();
  if (this.char_data.reborn >= 3) $(".need_reborn3").show();
  if (this.char_data.reborn == 4) $(".need_reborn4").show();
  if (this.char_data.reborn >= 5) $(".need_reborn5").show();
  this.expTooltipUpdate(0);
  this.charValuesBind([
    "name",
    "mastery_hired",
    "mastery_exp2",
    "mastery_lvl",
    "lssj",
    "rage",
    "bardock_points",
    "anger",
    "soul_slots",
    "soul_floor_resets",
    "sila",
    "szyb",
    "wytrz",
    "swoli",
    "ki",
    "exp",
    "reborn",
    "level",
    "pr",
    "pr_max",
    "pr_ph",
    "pr_time",
    "moc",
    "x",
    "y",
    "doubler_rate",
    "divine_particle",
    "doublerx",
    "kk",
    "god",
    "wta",
    "gki",
    "instynkt",
    "pvp",
    "kills",
    "school_rep",
    "senzu_limit",
    "sentinel",
    "divine",
    "minor_ball",
    "friend_limit",
    "trybut",
    "clan_pu",
    "planetary",
    "level_lock",
    "soul_floor",
    "item_drop_mode",
    "ekw_max_sets",
    "ekw_set",
    "sc_set",
  ]);
  this.paBarUpdate(0);
  $("#char_stat_100").text(this.dots(this.senzu_limit()));
  $(".char_logged").show();
  for (var i = 0; i <= this.chat_channels; i++) {
    this.chat_data[i] = {
      messages: [],
      last_message: this.getTime(),
      old_loaded: false,
      new_msg_cnt: 0,
    };
  }
  this.chat_nonread = 0;
  this.updateChatRead(-1);
  this.cached_data();
  this.prepareMapOpts();
  $(".kom").remove();
  this.chat_switch = 0;
  $(".clan_channel").hide();
  this.prepareChatChannels();
  $("#chat_swi").text(LNG.lab379);
  select_chat_channel(1);
  if (this.char_data.race == 3) $("#trunks_camp").show();
  else $("#trunks_camp").hide();
  $("#char_prifile").data("char_id", this.char_id);
  $("#bless_players").val(this.char_data.name);
  $(".mdragon_balls").hide();
  this.mf = {};
  this.md = {};
  $(".mdbb").removeClass("active");
  this.cancelTutorial();
  this.parseChatNotifications();
  if (this.any_captcha) grecaptcha.reset();
  delete this.trainupnotisend;
  delete this.trainup_visible;
};
GAME.parseChatNotifications = function () {
  for (var i = 1; i <= this.chat_channels; i++) {
    if (this.chat_notifications[i]) $("#chat_noti_" + i).prop("checked", true);
    else $("#chat_noti_" + i).prop("checked", false);
  }
};
GAME.hasModLaw = function () {
  var res = false;
  if (this.safe_zone) return false;
  var modr = [3, 4, 5, 6, 7, 8];
  if (modr.indexOf(this.char_data.ranga) != -1) res = true;
  return res;
};
GAME.prepareChatChannels = function () {
  $(".common_channel").show();
  if (this.char_data.empire == 0) $("#chat_channel_5").hide();
  if (this.char_data.klan_id == 0) $("#chat_klan_switch").hide();
  else $("#chat_klan_switch").show();
  if (this.char_data.instance_id == 0) $("#chat_channel_8").hide();
  if (!this.hasModLaw()) $("#chat_channel_7").hide();
};
GAME.updateChatRead = function (channel) {
  if (this.chat_nonread == 0) $("#chat_msg_cnt").text("").addClass("empty");
  else {
    if (this.chat_nonread > 99)
      $("#chat_msg_cnt").text("99+").removeClass("empty");
    else $("#chat_msg_cnt").text(this.chat_nonread).removeClass("empty");
  }
};
GAME.prepareMapOpts = function () {
  for (var r = 0; r <= 4; r++) {
    if (this.map_options.ma[r]) $("#mapop_rank" + r).prop("checked", true);
    else $("#mapop_rank" + r).prop("checked", false);
  }
  for (var v = 0; v <= 5; v++) {
    if (v == 5 && !this.map_options.vo.hasOwnProperty(v))
      this.map_options.vo[v] = 1;
    if (this.map_options.vo[v]) $("#mapop_view" + v).prop("checked", true);
    else $("#mapop_view" + v).prop("checked", false);
  }
  for (var b = 0; b <= 1; b++) {
    if (this.map_options.bo[b]) $("#mapop_fo" + b).prop("checked", true);
    else $("#mapop_fo" + b).prop("checked", false);
  }
  $(".mapo_rank")
    .off("change")
    .on("change", function () {
      var th = $(this);
      var rank = parseInt(th.data("rank"));
      if (th.prop("checked")) GAME.map_options.ma[rank] = 1;
      else GAME.map_options.ma[rank] = 0;
      localStorage.setItem("map_opts_ma", JSON.stringify(GAME.map_options.ma));
    });
  $(".mapo_view")
    .off("change")
    .on("change", function () {
      var th = $(this);
      var opt = parseInt(th.data("opt"));
      if (th.prop("checked")) GAME.map_options.vo[opt] = 1;
      else GAME.map_options.vo[opt] = 0;
      //console.log(GAME.map_options.vo);
      localStorage.setItem("map_opts_vo", JSON.stringify(GAME.map_options.vo));
    });
  $(".mapo_fi")
    .off("change")
    .on("change", function () {
      var th = $(this);
      var opt = parseInt(th.data("opt"));
      if (th.prop("checked")) GAME.map_options.bo[opt] = 1;
      else GAME.map_options.bo[opt] = 0;
      localStorage.setItem("map_opts_bo", JSON.stringify(GAME.map_options.bo));
    });
};
GAME.getStat = function (id) {
  var res = 0;
  if (this.char_bonuses && this.char_bonuses[id] && this.char_bonuses[id].value)
    res = this.char_bonuses[id].value;
  return res;
};
GAME.getCharMaxPr = function () {
  var max = this.char_data["pr_max"];
  max +=
    Math.floor((max * this.getStat(171)) / 100) + parseInt(this.getStat(19));
  return max;
};
GAME.getCharPAPh = function () {
  var ph = this.char_data["pr_ph"];
  ph += Math.floor((ph * this.getStat(140)) / 100) + parseInt(this.getStat(20));
  return ph;
};
GAME.locHandler = function (res) {
  if (
    this.xxxf6f70a0385c98b579791bb18658629d9 &&
    this.xxxf6f70a0385c98b579791bb18658629d9[res.x + "_" + res.y]
  ) {
    var cell = res.field;
    cell.cc = { x: (res.x - 1) * this.map.fX, y: (res.y - 1) * this.map.fY };
    this.xxxf6f70a0385c98b579791bb18658629d9[res.x + "_" + res.y] = cell;
  }
};
GAME.eventHandler = function (res) {
  //console.log(res);
  if (!this.special_event) this.special_event = 1;
  else this.special_event++;

  $("#game_win").append(
    '<div id="evs_' +
      this.special_event +
      '" class="special_event e' +
      res.event +
      "_" +
      res.cid +
      '" data-cid="' +
      res.cid +
      '"></div>'
  );

  var con = $("#evs_" + this.special_event);
  con.css({ top: "0%", left: "" + this.getRandomInt(5, 90) + "%" }).fadeIn();
  this.move_down(con, this.getRandomInt(500, 1000));
  setTimeout(function () {
    con.animate({ opacity: 0 }, 2000, function () {
      con.remove();
    });
  }, 8000);
  con.on("mouseover click", function (e) {
    if (e.screenX && e.screenX != 0 && e.screenY && e.screenY != 0) {
      con.stop().fadeOut().off("mouseover click");
      if ($(this).data("cid") == 1) {
        //console.log('emit sent');
        GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder(
          { a: 256, type: 1 },
          true
        );
      }
    }
  });
};

GAME.instanceHandler = function (res) {
  if (res.hasOwnProperty("applies")) {
    var data = res.applies;
    var len = data.length,
      con = "";
    for (var i = 0; i < len; i++) {
      con +=
        "<tr><td>" +
        data[i].data.name +
        "</td><td>" +
        LNG["server" + data[i].data.server] +
        '</td><td><button class="newBtn option" data-option="room_apply" data-room="' +
        data[i].data.room_id +
        '" data-apply="' +
        data[i].id +
        '" data-state="1">' +
        LNG.lab194 +
        '</button> <button class="newBtn option" data-option="room_apply" data-room="' +
        data[i].data.room_id +
        '" data-apply="' +
        data[i].id +
        '" data-state="2">' +
        LNG.lab195 +
        "</button></td></tr>";
    }
    $("#room_applies_list").html(con);
    option_bind();
  }
  if (res.hasOwnProperty("rooms")) {
    $("#room_applies").hide();
    $("#instance_view").show();
    $("#current_inst_name").text(
      this.raids[res.instance_id][this.lang_data["lokacje"][this.lang]]
    );
    var con = "",
      len = res.rooms.length,
      data = res.rooms,
      any = true;
    for (var i = 0; i < len; i++) {
      any = false;
      var opts = "",
        time = 0;
      if (data[i].status <= 2) {
        if (data[i].owner_id == this.char_id) {
          if (data[i].status == 1)
            opts +=
              '<button class="newBtn option" data-option="start_instance_room" data-room="' +
              data[i].id +
              '">' +
              LNG.lab197 +
              "</button>";
          opts +=
            '<button class="newBtn option" data-option="delete_instance_room" data-room="' +
            data[i].id +
            '">' +
            LNG.lab192 +
            "</button>";
          $("#room_applies").show();
        } else {
          if (res.own_room && res.own_room == data[i].id)
            opts =
              '<button class="newBtn option" data-option="leave_instance_room" data-room="' +
              data[i].id +
              '">' +
              LNG.lab196 +
              "</button>";
          else
            opts =
              '<button class="newBtn option" data-option="join_instance_room" data-room="' +
              data[i].id +
              '" data-instance="' +
              res.instance_id +
              '">' +
              LNG.lab193 +
              "</button>";
        }
        time = data[i].register_end - this.getTime();
      }
      if (data[i].status == 3) {
        opts =
          '<button class="newBtn option" data-option="enter_instance_room" data-room="' +
          data[i].id +
          '">' +
          LNG.lab198 +
          "</button>";
        time = data[i].expires - this.getTime();
      }
      con +=
        "<tr><td>" +
        data[i].owner_nick +
        " [" +
        LNG["server" + data[i].owner_server] +
        "]</td><td>" +
        this.showTimer(time) +
        "</td><td>" +
        data[i].players +
        "</td><td>" +
        LNG["instance_status_" + data[i].status] +
        "</td><td>" +
        opts +
        "</td></tr>";
    }
    if (any) con = '<tr><td colspan="8">' + LNG.lab3 + "</td></tr>";
    $("#inst_rooms_container").html(con);
    this.current_instance = res.instance_id;
    option_bind();
  }
};
GAME.charValuesBind = function (fields, olds = []) {
  var cnt = fields.length;
  for (var f = 0; f < cnt; f++) {
    var field = fields[f];
    if (this.bindings[field]) {
      var bl = this.bindings[field].length;
      if (bl > 0) {
        for (var i = 0; i < bl; i++) {
          var vl = this.char_data[field],
            base = this.char_data[field];
          if (this.bindings[field][i].type == 2) {
            switch (this.bindings[field][i].option) {
              case 1:
                var time = this.getTime();
                if (vl > time) {
                  $("#doubler_status").html(
                    this.showTimer(vl - time, 'data-special="5"')
                  );
                  $("#doubler_bar").show();
                  this.doubler_end = vl;
                  this.doubler_start = vl - 3600;
                } else $("#doubler_bar").hide();
                break;
              case 2:
                if (vl == "") $("#lastmap_bar").hide();
                else $("#lastmap_bar").show();
                break;
              case 3:
                var time = this.getTime();
                var newpa = vl + 3600;
                var pamax = this.getCharMaxPr();
                var paph = this.getCharPAPh();
                var full_pa =
                  Math.ceil((pamax - this.char_data.pr) / paph) * 3600;
                full_pa = this.char_data.pr_time - time + full_pa;
                if (full_pa < 0) full_pa = 0;
                $("#newpa1").text(this.convertTime(newpa));
                $("#newpa2").html(
                  this.showTimer(newpa - time, 'data-special="3"')
                );
                $("#fullpa1").text(this.convertTime(full_pa + time));
                $("#fullpa2").html(this.showTimer(full_pa));
                $("#baseprmax").text(this.dots(this.char_data["pr_max"]));
                $("#baseprph").text(this.dots(this.char_data["pr_ph"]));
                break;
              case 4:
                $("#char_rebp").html(this.rebPref(vl));
                break;
              case 5:
                if (this.shop_data && this.shop_data.currency == 2)
                  $("#shop_currency_am").text(this.dots(vl));
                break;
              case 6:
                if (vl) $("#char_planetary").text(LNG.lab13);
                else $("#char_planetary").text(LNG.lab14);
                break;
              case 7:
                if (vl) $("#level_lock").text(LNG.lab13);
                else $("#level_lock").text(LNG.lab14);
                break;
              case 8:
                var next = this.next_arena(this.char_data.arena_lvl + 1);
                $("#arena_exp").text(vl + "/" + next);
                if (vl >= next) $("#arena_lvlup").show();
                else $("#arena_lvlup").hide();
                var w = (vl / next) * 100;
                if (w < 0) w = 0;
                if (w > 100) w = 100;
                $("#arena_exp_bar").css({ width: w + "%" });
                break;
              case 9:
                if (vl) $("#monthly_vip_status").text(LNG.lab362);
                else $("#monthly_vip_status").text(LNG.lab363);
                break;
              case 10:
                var max = this.getMaxRage();
                var pr = Math.floor(((vl + max) / (max * 2)) * 100);

                $("#rpoint").animate({ left: 10 + pr * 2 - 2 + "px" });
                var bon = "";
                if (vl == 0) bon = '<span class="grey">' + LNG.lab407 + "</b>";
                else if (vl < 0) {
                  var tmp = vl * -1;
                  var v = 1 * tmp;
                  bon +=
                    '<b class="green">' +
                    v +
                    '</b><span class="item9">' +
                    this.item_stat(15) +
                    "</span><br />";
                  var v = 0.5 * tmp;
                  bon +=
                    '<b class="green">' +
                    v +
                    '</b><span class="item9">' +
                    this.item_stat(72) +
                    "</span><br />";
                  var v = 0.5 * tmp;
                  bon +=
                    '<b class="red">-' +
                    v +
                    '</b><span class="item9">' +
                    this.item_stat(16) +
                    "</span><br />";
                  var v = 0.5 * tmp;
                  bon +=
                    '<b class="red">-' +
                    v +
                    '</b><span class="item9">' +
                    this.item_stat(54) +
                    "</span><br />";
                } else {
                  var tmp = vl;
                  var v = 0.5 * tmp;
                  bon +=
                    '<b class="red">-' +
                    v +
                    '</b><span class="item9">' +
                    this.item_stat(15) +
                    "</span><br />";
                  var v = 0.25 * tmp;
                  bon +=
                    '<b class="red">-' +
                    v +
                    '</b><span class="item9">' +
                    this.item_stat(72) +
                    "</span><br />";
                  var v = 1 * tmp;
                  bon +=
                    '<b class="green">' +
                    v +
                    '</b><span class="item9">' +
                    this.item_stat(16) +
                    "</span><br />";
                  var v = 1 * tmp;
                  bon +=
                    '<b class="green">' +
                    v +
                    '</b><span class="item9">' +
                    this.item_stat(54) +
                    "</span><br />";
                }
                $("#rage_bonus").html(bon);

                break;
              case 11:
                if (vl) $("#drop_mode").text(LNG.lab13);
                else $("#drop_mode").text(LNG.lab14);
                break;
              case 12:
                var max = vl + 1;
                var con = "";
                for (var i = 0; i < max; i++) {
                  var cls = "";
                  if (this.char_data.ekw_set == i) cls = "current";
                  con +=
                    '<div id="ek_set' +
                    i +
                    '" class="option ek_sets_all ' +
                    cls +
                    '" data-option="change_ekw_set" data-set="' +
                    i +
                    '">' +
                    GAME.romanNumbers(i + 1) +
                    "</div>";
                }
                $("#ekw_sets").html(con);
                if (max > 5) $("#ekw_sets_buy").hide();
                option_bind();
                break;
              case 13:
                $(".ek_sets_all").removeClass("current");
                $("#ek_set" + vl).addClass("current");
                break;
              case 14:
                var max = this.getMaxRage();
                var pr = Math.floor(((vl + max) / (max * 2)) * 100);
                $("#ppoint").animate({ left: 10 + pr * 2 - 2 + "px" });
                var bon = "";
                if (vl > 0) bon = LNG.lab441 + ": " + vl;
                else bon = LNG.lab442 + ": " + vl * -1;
                $("#path_bonus").html(bon);
                break;
              case 15:
                $(".sc_sets_all").removeClass("current");
                $("#sc_set" + vl).addClass("current");
                break;
            }
          } else {
            if (this.bindings[field][i].add_pbonus)
              vl += Math.floor(
                (base * this.getStat(this.bindings[field][i].add_pbonus)) / 100
              );
            if (this.bindings[field][i].add_bonus)
              vl += this.getStat(this.bindings[field][i].add_bonus);
            if (olds[f] && this.bindings[field][i].ani)
              this.value_change_ani(
                this.bindings[field][i].c,
                olds[f],
                vl,
                500
              );
            else {
              if (this.bindings[field][i].dots) vl = this.dots(vl);
              this.bindings[field][i].c.innerText = vl;
            }
          }
        }
      }
    }
  }
};

GAME.romanNumbers = function (value) {
  switch (value) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
  }
};

GAME.processCharDataUpdate = function (field, value) {
  if (this.char_data) {
    var old = this.char_data[field];
    this.char_data[field] = value;
    if (field == "level") {
      var lg = this.char_data[field] - old;
      if (lg > 0) {
        //this.komunikat('Awansowano o '+lg+' poziom(y)!');
        this.expTooltipUpdate(0);
      }
    }
    if (field == "exp") this.updateExpBar();
    if (field == "pr" || field == "pr_max") this.paBarUpdate(1);
    if (field == "bot_lock" && value == 0) delete this.premiumData;
    this.charValuesBind([field], [old]);
    //this.prepareChatChannels();
    this.premiumBonCnt();
  }
};
GAME.getMaxRage = function () {
  var max = 50;
  if (this.char_data.reborn >= 1) max = 75;
  if (this.char_data.reborn >= 2) max = 100;
  if (this.char_data.reborn >= 3) max = 150;
  if (this.char_data.reborn >= 4) max = 200;
  return max;
};
GAME.completeProgress = function () {
  var res = this.progress;
  switch (res.a) {
    case 45:
      if (res.ball) {
        this.parseData(55, res);
      }
      break;
  }
  delete this.progress;
};
GAME.showProgress = function (res) {
  this.progress = res;
  var progress = res.game_progress;
  $("#upgrade_bar").show();
  JQS.upb.css({ width: "0%" });
  $({ someValue: 1 }).animate(
    { someValue: 100 },
    {
      duration: progress,
      step: function () {
        var val = Math.round(this.someValue);
        JQS.upb.css({ width: val + "%" });
        JQS.upp.text(val);
      },
      complete: function () {
        var val = Math.round(this.someValue);
        JQS.upb.css({ width: val + "%" });
        JQS.upp.text(val);
        $("#upgrade_bar").hide();
        GAME.completeProgress();
      },
    }
  );
};
GAME.socket.on("disconnect", function (res) {
  GAME.load_stop();
  if (GAME.pid > 0) {
    GAME.pid = 0;
    GAME.komunikat(
      LNG.error2 +
        '<br /><button class="option newBtn" data-option="logout">' +
        LNG.lab135 +
        "</button>"
    );
    $("#game_win").hide();
    option_bind();
  }
});
GAME.socket.on("gr", function (res) {
  debugger;
  var e = parseInt(res.e);
  var me = 0,
    done = 0;
  if (res.me) me = parseInt(res.me);
  if (res.done) done = parseInt(res.done);
  GAME.load_stop();
  if (done > 0) {
    GAME.komunikat(LNG["done" + done]);
    if (GAME.push_actions.indexOf(done) != -1)
      GAME.push_notification(LNG["done" + done]);
  }
  if (e > 0) {
    var kom = LNG["error" + e];
    var op = false;
    if (GAME.return_errors.indexOf(e) != -1) {
      op = true;
      kom +=
        '<br /><button class="option newBtn" data-option="logout">' +
        LNG.lab135 +
        "</button>";
    }
    if (e == 153) {
      kom +=
        '<button class="option newBtn" data-option="reload">' +
        LNG.lab320 +
        "</button>";
      op = true;
    }
    if (e == 56 || e == 60 || e == 78 || e == 90)
      kom += " " + GAME.showTimer(res.cd - GAME.getTime());
    if (e == 114) kom += ": <b>" + res.n + "</b>";
    GAME.komunikat(kom);
    if (op) option_bind();
    $("#uploading").hide();
  } else if (me > 0) {
    JQS.mko.html(
      '<div class="fight_reward floating">' + LNG["error" + me] + "</div>"
    );
    GAME.floatingBind();
  } else if (res.game_progress) GAME.showProgress(res);
  else {
    if (res.reload_map) GAME.maploaded = false;
    if (res.show_map) GAME.page_switch("game_map");
    switch (res.a) {
      case 1:
        GAME.parseData(1, res);
        break;
      case 2:
        GAME.useChar(res);
        break;
      case 3:
        if (res.more_players) {
          GAME.loadMorePlayers(res.more_players);
        } else {
          if (GAME.map_titles) {
            GAME.loadMap(
              res.loc,
              res.map,
              res.players,
              res.tps,
              res.kcastles,
              res.private_data,
              res.quests,
              res.mines,
              res.instance_data,
              res.wanted,
              res.balls,
              res.bosses
            );
          } else {
            GAME.loadMapJson(function () {
              GAME.loadMap(
                res.loc,
                res.map,
                res.players,
                res.tps,
                res.kcastles,
                res.private_data,
                res.quests,
                res.mines,
                res.instance_data,
                res.wanted,
                res.balls,
                res.bosses
              );
            });
          }
          GAME.parseTracker(res.track);
        }
        break;
      case 4:
        GAME.mapCharMove(res.char_id, res.x, res.y, res.dir);
        break;
      case 6:
        //
        break;
      case 7:
        if (res.quick) {
          GAME.parseFightResult(res.result, 1, res.result.reward);
        } else {
          GAME.parseFight(res.result);
          GAME.parseFightResult(res.result);
        }
        if (res.remove_mob) GAME.removeMob(res.remove_mob);
        if (res.pvp_cd) {
          var pvp_master = false;
          if (GAME.char_data.bonus19 > GAME.getTime()) pvp_master = true;
          var tid = res.pvp_cd.target;
          var qb = "";
          qb += GAME.showTimer(
            res.pvp_cd.cd - GAME.getTime(),
            'data-special="10" data-pd="' + tid + '"',
            " playercd" + tid + ""
          );
          qb +=
            '<button class="poption map_bicon initial_hide_forced playericons' +
            tid +
            '" data-option="xxx3bdbccbc26ce4b50689c2b2e36aa25f7" data-char_id="' +
            tid +
            '"><i class="ca"></i></button>';
          if (pvp_master)
            qb +=
              '<button class="poption map_bicon initial_hide_forced playericons' +
              tid +
              '" data-option="xxx3bdbccbc26ce4b50689c2b2e36aa25f7" data-char_id="' +
              tid +
              '" data-quick="1"><i class="qa"></i></button>';
          $("#pvp_opts_" + tid).html(qb);
          pvp_option_bind();
        }
        if (res.gpvp_cd) {
          var pvp_master = false;
          if (GAME.char_data.bonus19 > GAME.getTime()) pvp_master = true;
          var tid = res.gpvp_cd.target;
          var qb = "";
          qb += GAME.showTimer(
            res.gpvp_cd.cd - GAME.getTime(),
            'data-special="10" data-pd="' + tid + '"',
            " playercd" + tid + ""
          );
          qb +=
            '<button class="poption map_bicon initial_hide_forced playericons' +
            tid +
            '" data-option="gxxx3bdbccbc26ce4b50689c2b2e36aa25f7" data-char_id="' +
            tid +
            '"><i class="ca"></i></button>';
          if (pvp_master)
            qb +=
              '<button class="poption map_bicon initial_hide_forced playericons' +
              tid +
              '" data-option="gxxx3bdbccbc26ce4b50689c2b2e36aa25f7" data-char_id="' +
              tid +
              '" data-quick="1"><i class="qa"></i></button>';
          $("#gpvp_opts_" + tid).html(qb);
          pvp_option_bind();
        }
        break;
      case 8:
        if (res.done) {
          GAME.train_captcha = 0;
          $("#train_captcha").hide();
        }
        delete GAME.trainup_visible;
        if (res.hasOwnProperty("captcha")) GAME.train_captcha = res.captcha;
        if (res.type == 1) GAME.parseData(6, res);
        if (res.timed) {
          GAME.char_tables["timed_actions"] = res.timed;
          GAME.parseTimed();
        }
        if (res.multi) GAME.parseData(7, res.multi);
        break;
      case 9:
        if (res.learned) GAME.learned_know = res.learned;
        if (res.available) GAME.parseData(8, res);
        if (res.old) GAME.parseData(9, res);
        if (res.timed) {
          GAME.char_tables["timed_actions"] = res.timed;
          GAME.parseTimed();
        }
        break;
      case 10:
        if (res.hasOwnProperty("captcha")) GAME.camp_captcha = res.captcha;
        if (res.done) GAME.camp_captcha = 0;
        GAME.parseData(11, res);
        if (res.timed) {
          GAME.char_tables["timed_actions"] = res.timed;
          GAME.parseTimed();
        }
        if (res.owncamps) {
          GAME.parseData(12, res);
        }
        break;
      case 11:
        if (res.raps) GAME.parseData(13, res);
        if (res.report) {
          GAME.parseFight(JSON.parse(res.report));
        }
        break;
      case 12:
        if (res.used) GAME.parseUsedItems(res.used);
        if (res.tip_id) GAME.parseTooltipItem(1, res.tip_id, res.item);
        if (res.iip_id) GAME.parseTooltipItem(2, res.iip_id, res.item);
        if (res.ekw) GAME.parseData(15, res);
        if (res.points)
          GAME.komunikat(
            LNG.lab30 + " <b>" + GAME.dots(res.points) + "</b> " + LNG.lab31
          );
        if (res.joined)
          GAME.komunikat(
            LNG.lab33 +
              "<br />" +
              LNG.lab34 +
              ': <b class="green">' +
              GAME.dots(res.succ) +
              "</b><br /> " +
              LNG.lab35 +
              ': <b class="red">' +
              GAME.dots(res.failed) +
              "</b>"
          );
        if (res.upgraded) {
          if (res.super == 2) {
            $(
              '.ekw_list_item[data-base_item_id="' +
                res.bid +
                '"][data-upgrade="' +
                res.newupg +
                '"]'
            ).trigger("click");
            upgrade_item();
            if (res.succ)
              $(".super_upgrade_result").html(
                '<b class="green">' + LNG.lab425 + "</b>"
              );
            else
              $(".super_upgrade_result").html(
                '<b class="red">' + LNG.lab445 + "</b>"
              );
          } else if (res.super == 1) {
            $(
              '.ekw_list_item[data-base_item_id="' +
                res.bid +
                '"][data-upgrade="' +
                res.newupg +
                '"]'
            ).trigger("click");
            upgrade_item();
            if (res.succ)
              $(".super_upgrade_result").html(
                '<b class="green">' + LNG.lab425 + "</b>"
              );
            else
              $(".super_upgrade_result").html(
                '<b class="red">' + LNG.lab426 + "</b>"
              );
          } else
            GAME.komunikat(
              LNG.lab33 +
                "<br />" +
                LNG.lab34 +
                ': <b class="green">' +
                GAME.dots(res.succ) +
                "</b><br /> " +
                LNG.lab35 +
                ': <b class="red">' +
                GAME.dots(res.failed) +
                "</b>"
            );
        }
        if (res.jch) {
          $("#join_succes_chance").text(res.jch);
          $("#join_ess_left").text(GAME.dots(res.ess));
        }
        if (res.uch) {
          $("#upg_succes_chance").text(res.uch);
          $("#upg_sub_left").text(GAME.dots(res.sub));
        }
        if (res.spls) $("#spl_sub_left").text(GAME.dots(res.spls));
        if (res.need_amount) GAME.parseData(16, res);
        if (res.need_amount_pack) GAME.parseData(68, res);
        if (res.exchange) GAME.parseData(18, res);
        if (res.item_reward) GAME.parseData(17, res.item_reward);
        if (res.travel_list) GAME.parseData(25, res);
        if (res.tp_list) GAME.parseData(26, res);
        if (res.timed) {
          GAME.char_tables["timed_actions"] = res.timed;
          GAME.parseTimed();
        }
        if (res.set_fav) {
          if (res.fav == 0) $(".travel_loc_" + res.set_fav).removeClass("fav");
          else $(".travel_loc_" + res.set_fav).addClass("fav");
        }
        if (res.weeding) {
          GAME.parseData(65, res);
        }
        break;
      case 14:
        if (res.buffs) GAME.parseData(20, res);
        if (res.ubuffs) GAME.parseData(21, res);
        if (res.char_list) GAME.parseData(22, res);
        if (res.result) GAME.parseData(23, res);
        if (res.reset_done) GAME.komunikat(LNG.lab102);
        break;
      case 15:
        if (res.private_list) GAME.parseData(27, res);
        if (res.private_data) GAME.parseData(28, res);
        if (res.pr_added)
          GAME.komunikat(
            LNG.lab433 + " : <b>" + GAME.dots(res.pr_added) + "</b>"
          );
        break;
      case 18:
        if (res.techs) GAME.parseData(29, res);
        if (res.tech_change) {
          $("#current_tech" + res.slot + "_name").text(res.tech_name);
          $("#current_tech" + res.slot).show();
        }
        if (res.tech_remove) {
          $("#current_tech" + res.slot + "_name").text("");
          $("#current_tech" + res.slot).hide();
        }
        if (res.mystic_stat) {
          GAME.parseData(30, res);
        }
        if (res.mystic_stat_done) {
          $("#mystic_stat_up").hide();
          $("#mystic_stat_" + res.mystic_stat_done).text(res.mystic_stat_ratio);
        }
        if (res.ssj) GAME.parseSSJ(res.ssj);
        if (res.cancel_ssj) GAME.parseSSJ(false);
        if (res.player_cancels_ssj) GAME.mapPlayerSSJCancel(res.char_id);
        if (res.player_turns_ssj)
          GAME.mapPlayerSSJStart(res.char_id, res.player_turns_ssj);
        break;
      case 20:
        if (res.char_stats) GAME.parseData(31, res);
        break;
      case 21:
        if (res.black_gained) {
          JQS.mko.html(
            '<div class="fight_reward floating">' + LNG.lab108 + "</div>"
          );
          $(".floating").finish().animate({ opacity: 0, top: "-=100px" }, 5000);
        }
        if (res.black_not_gained) {
          JQS.mko.html(
            '<div class="fight_reward floating">' + LNG.error10 + "</div>"
          );
          $(".floating").finish().animate({ opacity: 0, top: "-=50px" }, 5000);
        }
        break;
      case 22:
        if (res.q_step) GAME.parseQuest(res);
        if (res.quest_end) GAME.endQuest(res.quest_end);
        if (res.quest_move) GAME.moveQuest(res.quest_move);
        if (res.qb) GAME.parseData(32, res);
        if (res.set_track) {
          var html =
            '<button class="option btn_small_gold" data-option="cancel_track" data-qid="' +
            res.set_track +
            '">' +
            LNG.lab78 +
            "</option>";
          $("#quest_track_td" + res.set_track).html(html);
          option_bind();
          GAME.maploaded = false;
        }
        if (res.cancel_track) {
          var html =
            '<button class="option btn_small_gold disabled" data-option="activate_track" data-qid="' +
            res.cancel_track +
            '">' +
            LNG.lab99 +
            "</option>";
          $("#quest_track_td" + res.cancel_track).html(html);
          option_bind();
          GAME.maploaded = false;
        }
        if (res.forget_quest) {
          $("#quest_log_tr" + res.forget_quest).fadeOut();
          GAME.maploaded = false;
        }
        if (res.tracked) GAME.parseTracker(res.tracked);
        if (res.ipoints && res.ipoints.length) {
          var len = res.ipoints.length;
          for (var i = 0; i < len; i++) {
            var pp = $(
              "#inst_playerpoints_" +
                res.ipoints[i].char_id +
                "_" +
                res.ipoints[i].server
            );
            var jp = document.getElementById(
              "inst_playerpoints_" +
                res.ipoints[i].char_id +
                "_" +
                res.ipoints[i].server
            );
            pp.addClass("changing");
            GAME.value_change_ani(
              jp,
              pp.data("value"),
              res.ipoints[i].points,
              300,
              false,
              function (el) {
                pp.removeClass("changing");
              }
            );
            pp.data("value", res.ipoints[i].points);
          }
        }
        if (res.track) {
          $(".quest_warunek" + res.track).each(function (index) {
            var th = $(this);
            var max = parseInt(th.data("max"));
            var cnt = parseInt(th.data("count"));
            cnt += res.amount;
            if (cnt >= max) {
              cnt = max;
              var par = th.parent();
              par.removeClass("red3").addClass("green");
            }
            th.data("count", cnt);
            th.html(GAME.dots(cnt) + "/" + GAME.dots(max));
          });
          if (res.track == GAME.quest_action_qid) {
            GAME.quest_action_count = res.new_amount;
            var pr = Math.min(
              (GAME.quest_action_count / GAME.quest_action_max) * 100,
              100
            );
            $("#quest_bar_val").css({ width: pr + "%" });
          }
        }
        if (res.mining) {
          GAME.miningHandler(1, res.mining);
        }
        break;
      case 23:
        GAME.parseData(33, res);
        break;
      case 25:
        if (res.server) GAME.server = res.server;
        if (res.shop_data) GAME.parseShop(1, res.shop_data);
        if (res.logs) GAME.parseData(34, res);
        break;
      case 26:
        if (res.daily_data) GAME.parseDaily(res);
        break;
      case 27:
        if (res.hasOwnProperty("available")) {
          $(".subopt").hide();
          if (res.available) $("#sub_available").show();
          else $("#sub_notavailable").show();
        }
        if (res.login) $("#sub_own_login").text(res.login);
        if (res.log) GAME.parseData(35, res);
        if (res.zast_data) {
          GAME.safe_zone = res.zast_data;
          GAME.parseZast();
        }
        break;
      case 28:
        if (res.default_gear) GAME.parseData(36, res);
        break;
      case 29:
        if (res.raids) GAME.parseData(37, res);
        break;
      case 30:
        if (res.learned_skills) GAME.parseData(38, res);
        if (res.set_refresh) GAME.parseSkillSets();
        break;
      case 31:
        if (res.sword) GAME.parseData(39, res);
        break;
      case 32:
        if (res.wanted) GAME.parseData(40, res);
        break;
      case 33:
        if (res.dbp) GAME.parseData(41, res);
        if (res.hide_db) {
          $(".dbsection").fadeOut();
          GAME.map_balls[res.hide_db] = false;
        }
        if (res.history) GAME.parseData(42, res);
        break;
      case 34:
        if (res.pd) GAME.parseData(43, res);
        break;
      case 35:
        if (res.friend_page) GAME.parseData(44, res);
        if (res.friend_added) {
          GAME.komunikat(
            LNG.done47 +
              "<br />" +
              LNG.lab236 +
              '<br /><button class="btn_small_gold option" data-option="friend_invite">' +
              LNG.lab237 +
              "</button>"
          );
          $("#friend_invite").val(res.friend_added);
          option_bind();
        }
        break;
      case 36:
        if (res.achi_page) GAME.parseData(45, res);
        break;
      case 37:
        if (res.pw_list) GAME.parseData(46, res);
        if (res.pw_head) GAME.parseData(48, res);
        break;
      case 38:
        if (res.ranking) GAME.parseData(49, res);
        break;
      case 39:
        if (res.klan_page) GAME.parseClanData(res, 1);
        if (res.logs) GAME.parseClanLog(res);
        if (res.invs) GAME.parseClanInvites(res, 1);
        if (res.own_invs) GAME.parseClanInvites(res, 2);
        if (res.structure_data) GAME.parseClanData(res, 2);
        if (res.castles) GAME.parseClanData(res, 3);
        if (res.players) GAME.parseClanData(res, 4);
        if (res.wars) GAME.parseClanData(res, 6);
        if (res.declare_result) GAME.parseClanData(res, 7);
        if (res.war_tab) GAME.parseClanData(res, 8);
        if (res.buffs) GAME.parseClanData(res, 9);
        if (res.planet_buffs) GAME.parseClanData(res, 10);
        if (res.planets) GAME.parseClanData(res, 11);
        if (res.stelep) GAME.parseClanData(res, 12);
        if (res.glories) GAME.parseClanData(res, 13);
        if (res.rented) GAME.parseClanData(res, 14);
        if (res.rlogs) GAME.parseClanData(res, 15);
        if (res.notes) GAME.parseClanData(res, 16);
        if (res.trains) GAME.parseClanData(res, 17);
        if (res.tren_changed) GAME.parseClanData(res, 18);
        break;
      case 40:
        if (res.klan_data) GAME.parseClanData(res, 5);
        break;
      case 41:
        if (res.upgrades) GAME.parseData(50, res);
        break;
      case 42:
        if (res.shareds) GAME.parseData(51, res);
        if (res.pp) GAME.parseData(52, res);
        break;
      case 43:
        if (res.pets) GAME.parseData(53, res);
        if (res.hasOwnProperty("karmy")) {
          $("#ilosc_karm").text(GAME.dots(res.karmy));
        }
        if (res.bonchange) pet_bon_change(res.bonchange);
        break;
      case 44:
        if (res.emps) GAME.parseData(54, res);
        if (res.inst_list) {
          var len = res.inst_list.count,
            con = "";
          for (var i = 1; i <= len; i++) {
            con +=
              '<option value="' +
              i +
              '">' +
              res.inst_list.list[i][GAME.lang_data["lokacje"][GAME.lang]] +
              "</option>";
          }
          $("#emp_instances").html(con);
        }
        if (res.crystals_gained)
          GAME.komunikat(
            LNG.done75 +
              ' <b class="orange">' +
              GAME.dots(res.crystals_gained) +
              "</b>"
          );
        break;
      case 45:
        if (res.ball) {
          GAME.parseData(55, res);
        }
        break;
      case 46:
        if (res.area_oponents) {
          GAME.parseData(56, res);
        }
        break;
      case 47:
        if (res.auctions) {
          GAME.parseData(57, res);
        }
        break;
      case 48:
        if (res.bosses) {
          GAME.parseData(58, res);
        }
        break;
      case 49:
        if (res.activities) {
          GAME.parseData(59, res);
        }
        if (res.remove_promo) $("#promo_item").hide();
        break;
      case 50:
        if (res.emp_page) {
          GAME.parseData(60, res);
        }
        if (res.war_tab) GAME.parseData(61, res);
        break;
      case 51:
        GAME.parseData(62, res);
        break;
      case 54:
        GAME.parseData(64, res);
        break;
      case 57:
        GAME.parseData(66, res);
        break;
      case 58:
        if (res.owned) GAME.parseData(67, res);
        break;
      case 59:
        if (res.soultower_info) GAME.parseData(69, res);
        if (res.show_fight) {
          GAME.parseFight(res.result);
          GAME.parseFightResult(res.result);
        }
        break;
      case 60:
        if (res.list) GAME.parseData(70, res);
        break;
      case 61:
        if (res.lssj) GAME.parseData(71, res);
        break;
      case 62:
        if (res.masters) GAME.parseData(72, res);
        if (res.mrec) GAME.parseMastery();
        break;
      case 63:
        if (res.destinity) GAME.parseData(73, res);
        if (res.bardock_bonus) GAME.parseData(74, res);
        break;
      case 595:
        var con = '<div class="fight_reward floating">';
        console.log(res);
        if (res.items) {
          var items = "";
          var was_any = false;
          var cnt = res.items.length;
          for (var ind = 0; ind < cnt; ind++) {
            was_any = true;
            items +=
              '<div class="item"><img src="/gfx/items/' +
              res.items[ind].item_class +
              "/" +
              res.items[ind].item_type +
              "/" +
              res.items[ind].item_id +
              '.png" alt="item"><div>' +
              res.items[ind].amount +
              "</div></div>";
          }
          if (was_any) {
            con += "<b>" + LNG.lab175 + "</b><br />" + items;
          }
        }
        con += '</div><div class="clearfix"></div>';
        $("#quick_bar").append(con);
        GAME.floatingBind();
        break;
      case 596:
        $("#ewar_" + res.war + "_s1").text(res.s1);
        $("#ewar_" + res.war + "_s2").text(res.s2);
        break;
      case 597:
        var con =
          '<div class="ekw_slot main_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
          res.promo.item_id +
          '"><img src="' +
          res.promo.gfx +
          '" /><div>' +
          res.promo.amount +
          "</div></div>";
        $("#promo_item_con").html(con);
        $("#promo_timer").html(
          GAME.showTimer(res.promo.expires - GAME.getTime())
        );
        $("#promo_item").show();
        $("#promo_price").text(res.promo.price);
        tooltip_bind();
        main_ekw_item_bind();

        break;
      case 598:
        $("#war_" + res.war + "_s1").text(res.s1);
        $("#war_" + res.war + "_s2").text(res.s2);
        break;
      case 599:
        GAME.parseWars(res);
        break;
      case 600:
        GAME.parseData(2, res);
        break;
      case 601:
        GAME.parseData(3, res);
        break;
      case 602:
        GAME.parseData(5, res);
        break;
      case 603:
        GAME.parseData(19, res);
        break;
      case 604:
        GAME.parsePremiumAmount(res.new_amount);
        break;
      case 605:
        GAME.parseData(24, res);
        break;
      case 606:
        $(".char_avatar").attr("src", res.avatar);
        $("#uploading").hide();
        break;
      case 607:
        GAME.quick_opts = res.quick_opts;
        GAME.parseQuickOpts();
        break;
      case 608:
        if (res.delete_entry) {
          var channel = res.delete_channel;
          $("#chat_entry_" + res.delete_entry).slideUp();
          var tmp = [];
          var len = GAME.chat_data[channel].messages.length;
          for (var i = 0; i < len; i++) {
            if (GAME.chat_data[channel].messages[i].id == res.delete_entry)
              continue;
            tmp.push(GAME.chat_data[channel].messages[i]);
          }
          GAME.chat_data[channel].messages = tmp;
        }
        if (res.muted_by)
          GAME.komunikat(
            LNG.lab208 +
              " <b>" +
              res.dur +
              '</b> h - <b class="red">' +
              res.muted_by +
              "</b>"
          );
        break;
      case 777:
        GAME.instanceHandler(res);
        break;
      case 778:
        GAME.locHandler(res);
        break;
      case 779:
        GAME.eventHandler(res);
        break;
      case 888:
        GAME.parsePremiumData(res);
        break;
      case 990:
        GAME.klan_data = res.kd;
        GAME.processClanData();
        break;
      case 991:
        if (res.text_id == GAME.current_pw_text) {
          var ans = res.answer;
          var cls = "other";
          if (ans.autor == GAME.char_id) cls = "me";
          var con =
            '<div class="message ' +
            cls +
            '"><div class="message_header"><b class="orange option pull-left" data-option="show_player" data-char_id="' +
            ans.autor +
            '">' +
            ans.autor_name +
            '</b> <span class="pull-right">' +
            GAME.convertTime(ans.time) +
            '</span></div><div class="clr">' +
            GAME.parseContent(ans.tresc) +
            "</div></div>";
          $("#answer_list").prepend(con);
        }
        break;
      case 992:
        GAME.pushNotification(
          "<b>" +
            res.nick +
            "</b> " +
            LNG.lab240 +
            ' <span class="achi_' +
            res.al +
            '">' +
            LNG["game_achievement" + res.ai] +
            "</span> !"
        );
        break;
      case 993:
        GAME.pushNotification("<b>" + res.nick + "</b> " + LNG["noti" + res.n]);
        break;
      case 994:
        GAME.char_bonuses = res.bonuses;
        GAME.charValuesBind(["pr_max", "pr_ph", "pr_time"]);
        GAME.parseServerData();
        break;
      case 995:
        if (res.t == 2) GAME.parseData(14, res);
        if (res.t == 1) GAME.parseData(47, res);
        break;
      case 996:
        GAME.locPlayerOut(res.char_id);
        break;
      case 997:
        GAME.locPlayerIn(res.char_id, res.data);
        break;
      case 998:
        if (res.fl) {
          var len = res.fl.length;
          for (var i = 0; i < len; i++) {
            GAME.processCharDataUpdate(res.fl[i].f, res.fl[i].v);
          }
        } else GAME.processCharDataUpdate(res.f, res.v);
        break;
      case 999:
        GAME.pid = res.pid;
        GAME.login = res.login;
        GAME.server = res.server;
        GAME.servers = res.servers;
        GAME.main_page = res.main_page;
        GAME.initiate();
        break;
    }
  }
});
////////////////
$(window).on("beforeunload", function () {
  GAME.pid = 0;
  GAME.socket.close();
});
var ts = timesync.create({
  server: "/timesync2",
});
ts.send = function (to, data) {
  $.ajax({
    url: to,
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
    dataType: "json",
  })
    .done(function (data) {
      ts.receive(to, data);
    })
    .fail(function (err) {
      console.log("Error", err);
    });
};
function page_bind() {
  $(".select_page").on("click", function () {
    var page = $(this).data("page");
    var arg = $(this).data("arg");
    GAME.page_switch(page, arg);
    $("#player_desc_con").hide();
  });
}
page_bind();
$("#chat_form").on("submit", function (e) {
  var mes = JQS.chm.val();
  JQS.chm.val("");
  GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
    a: 601,
    channel: GAME.chat_channel,
    mes: mes,
  });
  e.preventDefault();
  return false;
});
$("#klan_form").on("submit", function (e) {
  var con = $("#klan_message");
  var mes = con.val();
  con.val("");
  var stick = $("#ced_stick").prop("checked");
  $("#ced_stick").prop("checked", false);
  GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
    a: 39,
    type: 52,
    mes: mes,
    stick: stick,
  });
  e.preventDefault();
  return false;
});
$("#do_tren").on("submit", function (e) {
  var stat = $("#train_stat").val();
  localStorage.setItem("def_train_stat", stat);
  this.def_train_stat = stat;
  var data = {
    a: 8,
    type: 2,
    stat: stat,
    duration: $("#train_duration").val(),
    code: $("#train_code").val(),
    master: $("#train_master").val(),
  };
  GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder(data);
  $("#train_code").val("");
  e.preventDefault();
  return false;
});
$("#train_master").on("change", function () {
  var master = parseInt($("#train_master").val()) - 1;
  GAME.showMasterDetails(master);
});
function select_chat_channel(channel) {
  $(".chat_channel").removeClass("active");
  $('.chat_channel[data-channel="' + channel + '"]').addClass("active");
  GAME.chat_channel = channel;
  if (GAME.chat_data[GAME.chat_channel].old_loaded) {
    $("#old_chat_opt").hide();
  } else $("#old_chat_opt").show();
  GAME.showChatChannel(1);
  GAME.chat_data[channel].new_msg_cnt = 0;
  $("#chat_channel_" + channel + "_cnt")
    .text("")
    .addClass("empty");
}
function keybinds() {
  /*
	$(document).bind('keydown', 'c', function(){
		if(JQS.chm.is(":focus") == false) switch_chat(2);
		return false;
	});
	*/
  $(document).bind("keydown", "w up", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.map_move(2); //0,-40
    }
    return false;
  });
  $(document).bind("keydown", "s down", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.map_move(1); //0,40
    }
    return false;
  });
  $(document).bind("keydown", "a left", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.map_move(8); //-40,0
    }
    return false;
  });
  $(document).bind("keydown", "d right", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.map_move(7); //40,0
    }
    return false;
  });
  $(document).bind("keydown", "q", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.map_move(6);
    }
    return false;
  });
  $(document).bind("keydown", "e", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.map_move(5);
    }
    return false;
  });
  $(document).bind("keydown", "z", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.map_move(4);
    }
    return false;
  });
  $(document).bind("keydown", "c", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.map_move(3);
    }
    return false;
  });
  $(document).bind("keydown", "t", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
        a: 7,
        mob_num: 0,
        rank: 0,
        quick: 1,
      });
    }
    return false;
  });
  $(document).bind("keydown", "u", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
        a: 7,
        mob_num: 0,
        rank: 1,
        quick: 1,
      });
    }
    return false;
  });
  $(document).bind("keydown", "p", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
        a: 7,
        mob_num: 0,
        rank: 2,
        quick: 1,
      });
    }
    return false;
  });
  $(document).bind("keydown", "g", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
        a: 7,
        mob_num: 0,
        rank: 3,
        quick: 1,
      });
    }
    return false;
  });
  $(document).bind("keydown", "f", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
        a: 7,
        order: 1,
        quick: 1,
        fo: GAME.map_options.ma,
      });
    }
    return false;
  });
  $(document).bind("keydown", "v", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
        a: 7,
        order: 2,
        quick: 1,
        fo: GAME.map_options.ma,
      });
    }
    return false;
  });
  $(document).bind("keydown", "r", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
        a: 13,
        mob_num: GAME.field_mob_id,
        fo: GAME.map_options.ma,
      });
    }
    return false;
  });
  $(document).bind("keydown", "h", function (e) {
    if (JQS.chm.is(":focus") == false) {
      GAME.questAction(e);
    }
    return false;
  });
  $(document).bind("keydown", "m", function () {
    if (JQS.chm.is(":focus") == false) {
      GAME.minimapToggle();
    }
    return false;
  });
  $(document).bind("keydown", "x", function () {
    if (JQS.chm.is(":focus") == false) {
      if (GAME.spacebind) {
        GAME.executeIx();
        //$(GAME.spacebind).trigger('click');
      }
    }
    return false;
  });
}
$("#train_stat").on("change", function () {
  GAME.selected_train_stat = parseInt($(this).val());
  GAME.calculateTrainResult();
});
$("#train_duration").on("change", function () {
  GAME.selected_train_duration = parseInt($(this).val());
  GAME.calculateTrainResult();
});
function pvp_option_bind() {
  $(".poption")
    .off("click")
    .on("click", function () {
      var th = $(this);
      if (th.is(":disabled")) return false;
      th.tooltip("hide");
      var option = th.data("option");
      switch (option) {
        case "show_player":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 34,
            type: 0,
            char_id: th.data("char_id"),
          });
          break;
        case "show_clan":
          var klan_id = parseInt(th.data("klan_id"));
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 40,
            klan_id: klan_id,
          });
          break;
        case "xxx3bdbccbc26ce4b50689c2b2e36aa25f7":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 24,
            char_id: th.data("char_id"),
            quick: th.data("quick"),
          });
          break;
        case "gxxx3bdbccbc26ce4b50689c2b2e36aa25f7":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 24,
            type: 1,
            char_id: th.data("char_id"),
            quick: th.data("quick"),
          });
          break;
        case "load_more_players":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 3,
            type: 1,
            start: th.data("start_from"),
            vo: GAME.map_options.vo,
          });
          $(".more_players").remove();
          break;
      }
    });
}
function option_bind() {
  $(".option")
    .off("click")
    .on("click", function (e) {
      if (!e || !e.originalEvent || !e.originalEvent.isTrusted) return false;
      var th = $(this);
      if (th.is(":disabled")) return false;
      th.tooltip("hide");
      var option = th.data("option");
      switch (option) {
        case "reload":
          GAME.redirect("/", 0);
          break;
        case "logout":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 1, type: 1 });
          GAME.redirect(locals.main_url, 0);
          break;
        case "relog":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 5 });
          break;
        case "select_char":
          var char_id = parseInt(th.data("char_id"));
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 2,
            char_id: char_id,
          });
          break;
        case "select_zast":
          var char_id = parseInt(th.data("char_id"));
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 2,
            char_id: char_id,
            type: 1,
          });
          break;
        case "chat_switch":
          if (GAME.chat_visible) {
            GAME.chat_visible = 0;
            $("#chat_inner_container").hide();
            $("#chat_containter").css({ width: "85px", height: "32px" });
            $("#chat_drag").hide();
          } else {
            $("#chat_containter").css({
              width: "620px",
              height: GAME.chat_height + "px",
            });
            $("#chat_drag").show();
            GAME.chat_visible = 1;
            $("#chat_inner_container").show();
            select_chat_channel(GAME.chat_channel);
            GAME.chat_nonread = 0;
            GAME.updateChatRead(-1);
          }
          break;
        case "change_chat_size":
          switch (GAME.chat_height) {
            case 426:
              GAME.chat_height = 526;
              break;
            case 526:
              GAME.chat_height = 326;
              break;
            default:
              //316
              GAME.chat_height = 426;
              break;
          }
          $("#chat_containter").css({
            height: GAME.chat_height + "px",
            bottom: 0,
          });
          $("#chat_messages").css({ height: GAME.chat_height - 126 + "px" });
          break;
        case "clear_chat_history":
          GAME.chat_data[GAME.chat_channel].messages = [];
          $("#chat_messages").empty();
          break;
        case "load_chat_history":
          if (!GAME.chat_data[GAME.chat_channel].old_loaded) {
            GAME.chat_data[GAME.chat_channel].old_loaded = 1;
            GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
              a: 600,
              channel: GAME.chat_channel,
              lm: GAME.chat_data[GAME.chat_channel].last_message,
            });
          }
          $("#old_chat_opt").hide();
          break;
        case "delete_entry":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 608,
            entry: th.data("entry"),
            ch: th.data("channel"),
          });
          break;
        case "mute_entry_player":
          kom_clear();
          var kom =
            "<div><h3>" +
            LNG.lab206 +
            ' <div class="game_input small"><input id="mute_dur" type="text" value="1" /></div> h</h3>' +
            LNG.lab391 +
            ': <div class="game_input"><input id="mute_reason" type="text" value="" /></div><br /><br /><button class="option btn_small_gold" data-option="mute_entry_player_go" data-entry="' +
            th.data("entry") +
            '">' +
            LNG.lab207 +
            "</button></div>";
          GAME.komunikat(kom);
          option_bind();
          break;
        case "mute_entry_player_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 609,
            entry: th.data("entry"),
            dur: $("#mute_dur").val(),
            reason: $("#mute_reason").val(),
          });
          kom_clear();
          break;
        case "common_attack":
          var mob_num = parseInt(th.data("mob_id"));
          var rank = parseInt(th.data("mob-rank"));
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 7,
            mob_num: mob_num,
            rank: rank,
          });
          GAME.tutorialReqDone(6);
          break;
        case "quick_attack":
          var mob_num = parseInt(th.data("mob_id"));
          var rank = parseInt(th.data("mob-rank"));
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 7,
            mob_num: mob_num,
            rank: rank,
            quick: 1,
          });
          break;
        case "wanted_attack":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 32,
            type: 1,
            wanted_id: th.data("mob_id"),
            quick: th.data("quick"),
          });
          break;
        case "multi_attack":
          var mob_num = parseInt(th.data("mob_id"));
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 13,
            mob_num: mob_num,
            fo: GAME.map_options.ma,
          });
          break;
        case "close_fight":
          clearInterval(GAME.fight_timer);
          $("#fight_view").fadeOut();
          break;
        case "use_loc_tp":
          var tpid = parseInt(th.data("tpid"));
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 6, tpid: tpid });
          break;
        case "timed_cancel":
          GAME.ask_confirm(15, { a: 8, type: 3, order: th.data("order") });
          break;
        case "train_upgrade":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 8,
            type: 5,
            doublec: $("#train_upgrade_double").is(":checked"),
            multi: $("#train_upgrade_multi").is(":checked"),
            code: $("#train_code").val(),
            apud: "vzaaa",
          });
          $("#train_upgrade_double").prop("checked", false);
          $("#train_upgrade_multi").prop("checked", false);
          break;
        case "show_know":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 9,
            type: 1,
            page: th.data("page"),
          });
          break;
        case "show_know2":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 9,
            type: 2,
            page: th.data("page"),
          });
          break;
        case "know_learn":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 9,
            type: 3,
            nid: th.data("know"),
          });
          break;
        case "start_camp":
          var data = {
            a: 10,
            type: 2,
            ct: th.data("ct"),
            code: $("#camp_code").val(),
          };
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder(data);
          $("#camp_code").val("");
          break;
        case "show_reps":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 11,
            page: th.data("page"),
            cat: th.data("cat"),
          });
          break;
        case "raps_delete":
          var arr = $.map($(".rep_check:checked"), function (e, i) {
            return +e.value;
          });
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 11,
            type: 2,
            delete: arr,
            page: GAME.rap_page,
            cat: GAME.rap_cat,
          });
          break;
        case "raps_delete_all":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 11,
            type: 5,
            cat: GAME.rap_cat,
          });
          break;
        case "raps_resend":
          var arr = $.map($(".rep_check:checked"), function (e, i) {
            return +e.value;
          });
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 11,
            type: 6,
            list: arr,
            page: GAME.rap_page,
            cat: GAME.rap_cat,
            nick: $("#rep_send_to").val(),
          });
          break;
        case "open_rap":
          var rid = th.data("rid");
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 11,
            type: 4,
            rid: rid,
          });
          $("#new_rap_id" + rid).fadeOut();
          break;
        case "show_ekw_page":
          var page = parseInt(th.data("page"));
          GAME.ekw_page = page;
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            page: GAME.ekw_page,
          });
          break;
        case "field_option_switch":
          $("#field_options").toggle();
          break;
        case "destroy_item":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 6,
            iid: GAME.dragged_item.id,
            page: GAME.ekw_page,
            am: parseInt($("#des_am").val()),
          });
          kom_clear();
          break;
        case "join_item":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 7,
            iid: GAME.dragged_item.id,
            page: GAME.ekw_page,
            am: parseInt($("#join_am").val()),
          });
          kom_clear();
          break;
        case "upg2_item":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 10,
            iid: GAME.dragged_item.id,
            page: GAME.ekw_page,
            am: parseInt($("#upg_am").val()),
          });
          kom_clear();
          break;
        case "split_item":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 12,
            iid: GAME.dragged_item.id,
            page: GAME.ekw_page,
            am: parseInt($("#split_am").val()),
          });
          kom_clear();
          break;
        case "bind_item":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 13,
            iid: GAME.dragged_item.id,
            page: GAME.ekw_page,
            am: parseInt($("#bin_am").val()),
          });
          kom_clear();
          break;
        case "trade_item":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 20,
            iid: GAME.dragged_item.id,
            page: GAME.ekw_page,
            am: parseInt($("#tra_am").val()),
            nick: $("#trade_nick").val(),
          });
          kom_clear();
          break;
        case "donate_item":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 21,
            iid: GAME.dragged_item.id,
            page: GAME.ekw_page,
            am: parseInt($("#don_am").val()),
          });
          kom_clear();
          break;
        case "des_item":
          destroy_item();
          break;
        case "joi_item":
          join_item();
          break;
        case "upg_item":
          upgrade_item();
          break;
        case "spl_item":
          split_item();
          break;
        case "bin_item":
          bind_item();
          break;
        case "tra_item":
          var kom =
            "<div>" +
            LNG.lab234 +
            '<br /><img src="' +
            GAME.dragged_item.img +
            '" /><div class="game_input small"><input id="tra_am" type="text" value="1" /></div><button class="set_max btn_small_gold" data-target="#tra_am" data-max="' +
            GAME.dragged_item.stack +
            '">MAX</button><br />' +
            LNG.lab235 +
            '<div class="game_input small"><input id="trade_nick" type="text" value="" /></div><br /><button class="option newBtn" data-option="trade_item">' +
            LNG.lab234 +
            "</button></div>";
          GAME.komunikat(kom);
          setmaxBind();
          option_bind();
          break;
        case "auc_item":
          var kom =
            "<div>" +
            LNG.lab321 +
            '<br /><img src="' +
            GAME.dragged_item.img +
            '" /><div class="game_input vsmall"><input id="auc_am" type="text" value="1" /></div><button class="set_max btn_small_gold" data-target="#auc_am" data-max="' +
            GAME.dragged_item.stack +
            '">MAX</button><br />' +
            LNG.lab322 +
            ': <div class="game_input vsmall"><input id="auc_start_bid" type="text" value="1" /></div><img src="/gfx/kp.png" /><br />' +
            LNG.lab323 +
            ': <div class="game_input vsmall"><input id="auc_buy_now" type="text" value="0" /></div><img src="/gfx/kp.png" /><br /><button class="option newBtn" data-option="auc_item_go">' +
            LNG.lab328 +
            "</button><br /><i>" +
            LNG.lab324 +
            '</i><br ><b class="red">' +
            LNG.lab325 +
            "</b><br /><br />" +
            LNG.lab326 +
            " (" +
            LNG.lab327 +
            ' <b class="green">' +
            GAME.char_data.auc_points +
            "</b>)</div>";
          GAME.komunikat(kom);
          setmaxBind();
          option_bind();
          break;
        case "auc_item_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 47,
            type: 1,
            iid: GAME.dragged_item.id,
            amount: $("#auc_am").val(),
            start: $("#auc_start_bid").val(),
            buynow: $("#auc_buy_now").val(),
          });
          kom_clear();
          break;
        case "use_item":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 14,
            iid: GAME.dragged_item.id,
            page: GAME.ekw_page,
          });
          break;
        case "use_item_m":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 14,
            iid: GAME.dragged_item.id,
            page: GAME.ekw_page,
            am: parseInt($("#item_am").val()),
          });
          kom_clear();
          break;
        case "use_item_sel":
          th.tooltip("hide");
          var sel = parseInt(th.data("sel"));
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 14,
            iid: GAME.dragged_item.id,
            page: GAME.ekw_page,
            sel: sel,
            am: $("#exchange_item_" + sel).val(),
          });
          kom_clear();
          break;
        case "don_item":
          var kom =
            "<div>" +
            LNG.lab243 +
            '<br /><img src="' +
            GAME.dragged_item.img +
            '" /><div class="game_input small"><input id="don_am" type="text" value="1" /></div><button class="set_max btn_small_gold" data-target="#don_am" data-max="' +
            GAME.dragged_item.stack +
            '">MAX</button><br /><button class="option newBtn" data-option="donate_item">' +
            LNG.lab234 +
            "</button></div>";
          GAME.komunikat(kom);
          setmaxBind();
          option_bind();
          break;
        case "buff_upgrade":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 14,
            type: 2,
            buff: th.data("buff"),
          });
          break;
        case "doubler_cancel":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 12, type: 15 });
          break;
        case "use_bless":
          GAME.page_switch("game_buff_use");
          break;
        case "grant_buff":
          var arr = $.map($(".use_buff:checked"), function (e, i) {
            return +e.value;
          });
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 14,
            type: 5,
            buffs: arr,
            players: $("#bless_players").val(),
          });
          break;
        case "buff_list":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 14,
            type: 4,
            type2: th.data("type"),
          });
          break;
        case "buff_list_clear":
          $("#bless_players").val(GAME.char_data.name);
          break;
        case "bless_reset":
          GAME.ask_confirm(1, { a: 14, type: 6 });
          break;
        case "db_page_switch":
          $(".dragon_balls").hide();
          $("#dbp_" + parseInt(th.data("page"))).show();
          $(".dbb").removeClass("active");
          th.addClass("active");
          break;
        case "mdb_page_switch":
          $(".mdragon_balls").hide();
          $("#mdbp_" + parseInt(th.data("page"))).show();
          $(".mdbb").removeClass("active");
          th.addClass("active");
          break;
        case "go_travel":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 16,
            loc: th.data("loc"),
          });
          break;
        case "set_fav_loc":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 17,
            id: th.data("loc"),
          });
          break;
        case "go_teleport":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 18,
            loc: th.data("loc"),
          });
          break;
        case "buy_private":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 15,
            type: 2,
            pid: th.data("pid"),
          });
          break;
        case "private_str_up":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 15,
            type: 3,
            str: th.data("str"),
          });
          break;
        case "private_name_change":
          var kom =
            "<div>" +
            LNG.lab71 +
            ': <div class="game_input small"><input id="pname" type="text" value="' +
            $("#private_planet_name").text() +
            '" /></div><br />' +
            LNG.lab57 +
            ': 1 <img src="/gfx/kp.png" /><br /><button class="option btn_small_gold" data-option="private_name_change_go">' +
            LNG.lab72 +
            "</button></div>";
          GAME.komunikat(kom);
          option_bind();
          break;
        case "private_name_change_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 15,
            type: 5,
            name: $("#pname").val(),
          });
          kom_clear();
          break;
        case "private_buy_pr":
          var kom =
            "<div><h3>" +
            LNG.lab67 +
            " " +
            LNG.lab73 +
            "</h3>" +
            LNG.lab74 +
            ' <div class="game_input small"><input id="ppr_kp" type="text" value="1" /></div><img src="/gfx/kp.png" /><button class="set_max btn_small_gold" data-target="#ppr_kp" data-max="' +
            GAME.premium +
            '">MAX</button><br />' +
            LNG.lab75 +
            ': <b id="ppr_rec">250</b> ' +
            LNG.lab73 +
            '<br /><button class="option btn_small_gold" data-option="private_buy_pr_go">' +
            LNG.lab74 +
            "</button></div>";
          GAME.komunikat(kom);
          setmaxBind();
          option_bind();
          $("#ppr_kp")
            .off()
            .on("input", function () {
              var am = parseInt(th.val());
              if (am > 0) {
                if (am > GAME.premium) {
                  am = GAME.premium;
                  th.val(am);
                }
                pr_amount(am);
              }
            });
          break;
        case "private_buy_pr_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 15,
            type: 6,
            kp: $("#ppr_kp").val(),
          });
          kom_clear();
          break;
        case "private_expedition":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 15, type: 7 });
          break;
        case "private_destroy":
          var kom =
            "<div>" +
            LNG.lab76 +
            ': <button class="option btn_small_gold" data-option="private_destroy_go">' +
            LNG.lab77 +
            '</button><button class="option btn_small_gold" data-option="private_destroy_cancel">' +
            LNG.lab78 +
            "</button></div>";
          GAME.komunikat(kom);
          option_bind();
          break;
        case "private_destroy_cancel":
          kom_clear();
          break;
        case "private_destroy_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 15, type: 8 });
          kom_clear();
          break;
        case "private_gravity":
          var koszt = 1;
          var curr = GAME.PRIVATE.gravity;
          if (curr >= 100) koszt = 2;
          if (curr >= 200) koszt = 3;
          var kom =
            "<div><h3>" +
            LNG.lab79 +
            "</h3> " +
            LNG.lab57 +
            ": " +
            koszt +
            ' <img src="/gfx/kp.png" /><br /><button class="option btn_small_gold" data-option="private_gravity_go">' +
            LNG.lab80 +
            "</button></div>";
          GAME.komunikat(kom);
          option_bind();
          break;
        case "private_gravity_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 15, type: 9 });
          kom_clear();
          break;
        case "private_conds":
          var koszt = 1;
          var curr = GAME.PRIVATE.conditions;
          if (curr >= 100) koszt = 2;
          if (curr >= 200) koszt = 3;
          var kom =
            "<div><h3>" +
            LNG.lab81 +
            "</h3> " +
            LNG.lab57 +
            ": " +
            koszt +
            ' <img src="/gfx/kp.png" /><br /><button class="option btn_small_gold" data-option="private_conds_go">' +
            LNG.lab80 +
            "</button></div>";
          GAME.komunikat(kom);
          option_bind();
          break;
        case "private_conds_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 15, type: 10 });
          kom_clear();
          break;
        case "private_size":
          if (GAME.PRIVATE.type == 885) {
            GAME.komunikat(LNG.error41);
          } else {
            var koszt = (GAME.PRIVATE.type - 260 + 1) * 75;
            if (GAME.PRIVATE.type == 264) koszt = 1000;
            var kom =
              "<div><h3>" +
              LNG.lab82 +
              "</h3> " +
              LNG.lab57 +
              ": " +
              koszt +
              ' <img src="/gfx/kp.png" /><br /><button class="option btn_small_gold" data-option="private_size_go">' +
              LNG.lab80 +
              "</button></div>";
            GAME.komunikat(kom);
            option_bind();
          }
          break;
        case "private_size_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 15, type: 11 });
          kom_clear();
          break;
        case "private_style":
          var koszt = 100;
          var kom =
            "<div><h3>" +
            LNG.lab428 +
            '</h3><button class="option btn_small_gold" data-option="private_style_go" data-style="0">' +
            LNG.private_style0 +
            "</button> " +
            LNG.lab57 +
            ': 1 <img src="/gfx/kp.png" /><br /><button class="option btn_small_gold" data-option="private_style_go" data-style="1">' +
            LNG.private_style1 +
            "</button> " +
            LNG.lab57 +
            ": " +
            koszt +
            ' <img src="/gfx/kp.png" /><br /><button class="option btn_small_gold" data-option="private_style_go" data-style="2">' +
            LNG.private_style2 +
            "</button> " +
            LNG.lab57 +
            ": " +
            koszt +
            ' <img src="/gfx/kp.png" /><br /><button class="option btn_small_gold" data-option="private_style_go" data-style="3">' +
            LNG.private_style3 +
            "</button> " +
            LNG.lab57 +
            ": " +
            koszt +
            ' <img src="/gfx/kp.png" /><br /><button class="option btn_small_gold" data-option="private_style_go" data-style="4">' +
            LNG.private_style4 +
            "</button> " +
            LNG.lab57 +
            ": " +
            koszt +
            ' <img src="/gfx/kp.png" /><br /></div>';
          GAME.komunikat(kom);
          option_bind();

          break;
        case "private_style_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 15,
            type: 14,
            style: th.data("style"),
          });
          kom_clear();
          break;
        case "do_terra":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 15, type: 12 });
          break;
        case "private_teleport":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 15, type: 13 });
          break;
        case "lastmap_back":
          if (GAME.fast_locations.indexOf(GAME.char_data.loc) != -1)
            GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 16 });
          else GAME.ask_confirm(19, { a: 16 });
          break;
        case "use_tech":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 18,
            type: 2,
            slot: th.data("slot"),
            tech_id: th.data("tech"),
          });
          break;
        case "tech_imbue":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 18,
            type: 7,
            tech_id: th.data("tech"),
          });
          break;
        case "unuse_tech":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 18,
            type: 3,
            slot: th.data("slot"),
          });
          break;
        case "upgrade_transform":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 18,
            type: 4,
            tech_id: th.data("tech"),
          });
          break;
        case "tech_list":
          $(".tech_list").hide();
          $("#tech_list" + th.data("list")).show();
          break;
        case "use_teleport":
          th.tooltip("hide");
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 19, type: 1 });
          break;
        case "use_travel":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 19, type: 0 });
          break;
        case "upgrade_mystic":
          GAME.page_switch("game_mystic_up");
          var th = th;
          $("#mystic_stat_1").text(th.data("m1"));
          $("#mystic_stat_2").text(th.data("m2"));
          $("#mystic_stat_3").text(th.data("m3"));
          $("#mystic_stat_4").text(th.data("m4"));
          $("#mystic_stat_5").text(th.data("m5"));
          break;
        case "mystic_stat_up":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 18,
            type: 4,
            tech_id: 66,
            stat: th.data("stat"),
          });
          break;
        case "mystic_stat_up2":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 18,
            type: 4,
            tech_id: 66,
            stat: GAME.mystic_stat_choosen,
            item_id: $("#mystic_item_ava").val(),
          });
          break;
        case "use_transform":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 18,
            type: 5,
            tech_id: th.data("tech"),
          });
          break;
        case "ssj_cancel":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 18, type: 6 });
          break;
        case "show_quest":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 22,
            type: 1,
            id: th.data("qb"),
          });
          break;
        case "finish_quest":
          GAME.tutorialReqDone(8);
          var go = true;
          if (th.data("confirm")) {
            go = false;
          }
          if (go) {
            GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
              a: 22,
              type: 2,
              button: th.data("button"),
              id: th.data("qb_id"),
            });
          } else {
            GAME.ask_confirm(14, {
              a: 22,
              type: 2,
              button: th.data("button"),
              id: th.data("qb_id"),
            });
          }
          break;
        case "quest_duel":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 22,
            type: 6,
            id: th.data("qid"),
          });
          break;
        case "quest_riddle":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 22,
            type: 7,
            id: th.data("qid"),
            ans: $("#quest_riddle").val(),
          });
          break;
        case "start_mine":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 22,
            type: 8,
            mid: th.data("mid"),
          });
          break;
        case "quest_try_again":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 22,
            type: 9,
            id: th.data("qb_id"),
          });
          break;
        case "activate_track":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 22,
            type: 4,
            id: th.data("qid"),
          });
          break;
        case "cancel_track":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 22,
            type: 5,
            id: th.data("qid"),
          });
          break;
        case "forget_quest":
          GAME.ask_confirm(21, { a: 22, type: 11, id: th.data("qid") });
          break;

        case "mob_desc":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 23,
            id: th.data("mob"),
            rank: th.data("rank"),
          });
          GAME.tutorialReqDone(7);
          break;
        case "close_parent":
          th.parent().hide();
          break;
        case "new_character":
          $("#newCharPopUp").fadeIn();
          break;
        case "new_char_cancel":
          $("#newCharPopUp").fadeOut();
          break;
        case "create_character":
          var sex = $("input[name=sex]:checked").val();
          var fab = $("input[name=race]:checked").val();
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 1,
            type: 2,
            sex: sex,
            fab: fab,
            kod: $("#kod_dziecka").val(),
            name: $("#imie_postaci").val(),
          });
          break;
        case "open_menu":
          $(".menu_bar").hide();
          var em = th.data("menu");
          if (GAME.menu != em) {
            GAME.menu = em;
            $("#" + GAME.menu + "_menu").slideDown();
          } else {
            GAME.menu = "";
          }
          break;
        case "avatar_go":
          var file = $("#avatar_file").prop("files")[0];
          var stream = ss.createStream();
          if (file.type == "image/png") {
            GAME.is_loading = true;
            $("#uploading").show();
            $("#up_progress").text("0%");
            ss(GAME.socket).emit("player_avatar", stream, {
              size: file.size,
              name: file.name,
              type: file.type,
            });
            var blobStream = ss.createBlobReadStream(file);
            var size = 0;
            blobStream.on("data", function (chunk) {
              size += chunk.length;
              var prog = Math.floor((size / file.size) * 100);
              $("#up_progress").text(prog + "%");
            });
            blobStream.pipe(stream);
          } else GAME.komunikat(LNG.error53 + file.type);
          break;
        case "buffs_toggle":
          $("#char_buffs").toggle();
          break;
        case "wea_item":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 5,
            iid: GAME.dragged_item.id,
            page: GAME.ekw_page,
          });
          break;
        case "close_ekw_menu":
          $("#ekw_item_menu").hide();
          break;
        case "xxx3bdbccbc26ce4b50689c2b2e36aa25f7":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 24,
            char_id: th.data("char_id"),
            quick: th.data("quick"),
          });
          break;
        case "gxxx3bdbccbc26ce4b50689c2b2e36aa25f7":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 24,
            type: 1,
            char_id: th.data("char_id"),
            quick: th.data("quick"),
          });
          break;
        case "shop_buy_upgrade":
          var id = th.data("id");
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 25,
            type: 2,
            id: id,
            c: GAME.shop_data.currency,
            am: parseInt($("#shop_chup_am_" + id).val()),
          });
          break;
        case "shop_item_buy":
          var id = parseInt(th.data("id"));
          GAME.shop_item_sel = id;
          var cim = "";
          if (GAME.shop_data.currency == 1) cim = '<img src="/gfx/kp.png" />';
          else cim = '<img src="/gfx/kk.png" />';
          var dis = "";
          if (GAME.shop_data.items[id].only_one) dis = "disabled";
          var kom =
            "<div>" +
            LNG.lab157 +
            '<br /><img src="' +
            GAME.shop_data.items[id].gfx +
            '" /><br /><br />' +
            LNG.lab158 +
            ': <div class="game_input small"><input id="shop_buyi_am" type="text" value="1" ' +
            dis +
            " /></div> x " +
            GAME.shop_data.items[id].amount +
            ' = <b id="shop_buyi_allam">' +
            GAME.shop_data.items[id].amount +
            "</b><br />" +
            LNG.lab57 +
            ': <span id="shop_buyi_cost">' +
            GAME.shop_data.items[id].cost +
            "</span>" +
            cim +
            '<br /><button class="option btn_small_gold" data-option="shop_buy_item_go">' +
            LNG.lab67 +
            "</button></div>";
          GAME.komunikat(kom);
          option_bind();
          $("#shop_buyi_am")
            .off()
            .on("input", function () {
              var id = GAME.shop_item_sel;
              var val = parseInt($(this).val());
              var cost = val * GAME.shop_data.items[id].cost;
              $("#shop_buyi_cost").text(cost);
              var allam = val * GAME.shop_data.items[id].amount;
              $("#shop_buyi_allam").text(allam);
            });
          break;
        case "shop_buy_item_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 25,
            type: 4,
            id: GAME.shop_item_sel,
            c: GAME.shop_data.currency,
            am: parseInt($("#shop_buyi_am").val()),
          });
          kom_clear();
          break;
        case "shop_bon_buy":
          var b = parseInt(th.data("bon"));
          var dur = parseInt($("#shop_bon_" + b).val());

          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 25,
            type: 5,
            id: b,
            c: GAME.shop_data.currency,
            am: dur,
          });
          break;
        case "confirm_cancel":
          kom_clear();
          delete GAME.confirm_order;
          break;
        case "confirm_accept":
          kom_clear();
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder(GAME.confirm_order);
          delete GAME.confirm_order;
          switch (parseInt(th.data("cid"))) {
            case 11:
              $("#transfer_nick_name").val("");
              $("#transfer_amount").val("1");
              GAME.load_captcha("#transfer_captcha", "transfer_captcha");
              break;
          }
          break;
        case "daily_reward":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 26, type: 0 });
          break;
        case "daily_close":
          $("#daily_reward").fadeOut();
          break;
        case "take_daily":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 26, type: 1 });
          break;
        case "minimap_toggle":
          GAME.minimapToggle();
          break;
        case "quick_use_item":
          hide_tooltips();
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 12,
            type: 19,
            iid: th.data("item_id"),
          });
          kom_clear();
          break;
        case "quick_use_senzu":
          kom_clear();
          var senzus = GAME.quick_opts.senzus;
          var len = senzus.length;
          var kom = '<div class="quest_desc">';
          for (var i = 0; i < len; i++) {
            kom +=
              '<div class="option fast_ekw" data-option="quick_use_item" data-item_id="' +
              senzus[i].id +
              '"><div class="ekw_slot player_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
              senzus[i].id +
              '"><img src="' +
              senzus[i].gfx +
              '" /><div>' +
              senzus[i].stack +
              "</div></div></div>";
          }
          kom += "</div>";
          GAME.komunikat(kom);
          option_bind();
          player_ekw_item_bind();
          tooltip_bind();
          break;
        case "quick_use_subs":
          kom_clear();
          var senzus = GAME.quick_opts.sub;
          var len = senzus.length;
          var kom = '<div class="quest_desc">';
          for (var i = 0; i < len; i++) {
            kom +=
              '<div class="option fast_ekw" data-option="quick_use_item" data-item_id="' +
              senzus[i].id +
              '"><div class="ekw_slot player_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
              senzus[i].id +
              '"><img src="' +
              senzus[i].gfx +
              '" /><div>' +
              senzus[i].stack +
              "</div></div></div>";
          }
          kom += "</div>";
          GAME.komunikat(kom);
          option_bind();
          player_ekw_item_bind();
          tooltip_bind();
          break;
        case "compress_items":
          kom_clear();
          var senzus = GAME.compress_items;
          var len = senzus.length;
          var kom = '<div class="quest_desc">';
          for (var i = 0; i < len; i++) {
            kom +=
              '<div class="option fast_ekw" data-option="quest_use_item" data-item_id="' +
              senzus[i].id +
              '" data-qb_id="' +
              th.data("qb_id") +
              '"><div class="ekw_slot player_ekw_item" data-toggle="tooltip" data-original-title="?" data-item_id="' +
              senzus[i].id +
              '"><img src="' +
              senzus[i].gfx +
              '" /><div>' +
              senzus[i].stack +
              "</div></div></div>";
          }
          kom += "</div>";
          GAME.komunikat(kom);
          option_bind();
          player_ekw_item_bind();
          tooltip_bind();
          break;
        case "quest_use_item":
          kom_clear();
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 22,
            type: 10,
            item_id: th.data("item_id"),
            qb_id: th.data("qb_id"),
          });
          break;
        case "close_quest":
          $("#quest_con").fadeOut();
          break;
        case "show_logs":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 25,
            type: 6,
            c: GAME.currency,
            page: th.data("page"),
          });
          break;
        case "set_substitution":
          var opts = [0];
          for (var i = 1; i <= 14; i++) {
            if ($("#subs_mode_" + i).prop("checked")) opts[i] = 1;
            else opts[i] = 0;
          }
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 27,
            type: 1,
            login: $("#subs_login").val(),
            duration: $("#subs_duration").val(),
            opts: opts,
          });
          break;
        case "map_move":
          GAME.map_move(th.data("dir"));
          GAME.tutorialReqDone(5);
          break;
        case "map_multi":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 13,
            mob_num: GAME.field_mob_id,
            fo: GAME.map_options.ma,
          });
          break;
        case "qmattack":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 7,
            mob_num: 0,
            rank: th.data("rank"),
            quick: 1,
          });
          break;
        case "qmattacko":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 7,
            order: th.data("order"),
            quick: 1,
            fo: GAME.map_options.ma,
          });
          break;
        case "obtain_free_cloth":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 28,
            type: 1,
            cloth: th.data("cloth"),
          });
          break;
        case "use_cloth":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 28,
            type: 2,
            cloth: th.data("cloth"),
          });
          break;
        case "show_instance":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 29,
            type: 1,
            instance: th.data("instance"),
          });
          break;
        case "instance_create_room":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 29,
            type: 2,
            instance: GAME.current_instance,
          });
          break;
        case "delete_instance_room":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 29,
            type: 3,
            room: th.data("room"),
          });
          break;
        case "join_instance_room":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 29,
            type: 4,
            room: th.data("room"),
            instance: th.data("instance"),
          });
          break;
        case "room_apply":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 29,
            type: 5,
            room: th.data("room"),
            apply: th.data("apply"),
            state: th.data("state"),
          });
          break;
        case "leave_instance_room":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 29,
            type: 6,
            room: th.data("room"),
          });
          break;
        case "start_instance_room":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 29,
            type: 7,
            room: th.data("room"),
          });
          break;
        case "enter_instance_room":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 29,
            type: 8,
            room: th.data("room"),
          });
          break;
        case "skill_page_switch":
          var page = parseInt(th.data("page"));
          $(".skill_page").hide();
          $(".skb").removeClass("active");
          $('.skb[data-page="' + page + '"]').addClass("active");
          $("#skill_page_" + page).show();
          break;
        case "skill_cost_switch":
          GAME.skill_cost = th.data("cost");
          $(".skill_cost").hide();
          $("." + GAME.skill_cost + "_cost").show();
          break;
        case "divine_tree_choose":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 30,
            type: 1,
            tree: th.data("tree"),
          });
          break;
        case "hiper_tree_choose":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 30,
            type: 8,
            tree: th.data("tree"),
          });
          break;
        case "skill_upgrade":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 30,
            type: 2,
            skill: th.data("skill"),
            cost: th.data("cost"),
          });
          break;
        case "select_skill_set":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 30,
            type: 3,
            set: th.data("set"),
          });
          break;
        case "close_sc_menu":
          $("#soulcard_menu").hide();
          break;
        case "pact_reset":
          GAME.ask_confirm(2, { a: 30, type: 5 });
          break;
        case "sentinel_reset":
          GAME.ask_confirm(3, { a: 30, type: 6 });
          break;
        case "god_reset":
          GAME.ask_confirm(4, { a: 30, type: 7 });
          break;
        case "god_reset2":
          GAME.ask_confirm(22, { a: 30, type: 9 });
          break;
        case "hiper_reset":
          GAME.ask_confirm(23, { a: 30, type: 10 });
          break;
        case "hiper_reset2":
          GAME.ask_confirm(24, { a: 30, type: 11 });
          break;
        case "upgrade_sword":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 31,
            type: 2,
            item_id: GAME.sword_data.id,
          });
          break;
        case "create_soul":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 31,
            type: 3,
            item_id: GAME.sword_data.id,
          });
          break;
        case "wanted_prize":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 32,
            type: 2,
            wanted: th.data("wanted"),
          });
          break;
        case "psk_wish":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 33,
            type: 1,
            am: $("#psk_wish_am").val(),
            wish: $('input[name="psk_wish"]:checked').val(),
          });
          break;
        case "bsk_wish":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 33,
            type: 2,
            am: $("#bsk_wish_am").val(),
            wish: $('input[name="bsk_wish"]:checked').val(),
          });
          break;
        case "pick_db":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 33,
            type: 3,
            id: th.data("id"),
          });
          break;
        case "mdb_wish":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 33,
            type: 4,
            wish: $('input[name="mdb_wish"]:checked').val(),
          });
          break;
        case "load_db_history":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 33,
            type: 5,
            btype: th.data("type"),
          });
          break;
        case "ball_fight":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 33,
            type: 6,
            char_id: th.data("char_id"),
            ball: th.data("ball_id"),
          });
          break;
        case "show_player":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 34,
            type: 0,
            char_id: th.data("char_id"),
          });
          break;
        case "bless_player":
          GAME.page_switch("game_buff_use");
          $("#bless_players").val(th.data("char_name"));
          $("#player_desc_con").hide();
          break;
        case "invite_friend":
          GAME.page_switch("game_friends");
          $("#friend_invite").val(th.data("char_name"));
          $("#player_desc_con").hide();
          break;
        case "friend_invite":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 35,
            type: 1,
            nick: $("#friend_invite").val(),
          });
          break;
        case "process_friend_req":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 35,
            type: 2,
            dec: th.data("decision"),
            rid: th.data("rid"),
          });
          break;
        case "delete_friend":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 35,
            type: 3,
            target: th.data("char_id"),
          });
          break;
        case "delete_friend_from":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 35,
            type: 4,
            rid: th.data("rid"),
          });
          break;
        case "receive_achi_prize":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 36,
            type: 1,
            achi: th.data("achi"),
          });
          break;
        case "new_pw":
          $("#new_pw_btn").hide();
          $("#new_pw_container").show();
          $("#pw_view").hide();
          $("#pw_topic").val("");
          $("#pw_content").val("");
          break;
        case "cancel_pw":
          $("#new_pw_btn").show();
          $("#new_pw_container").hide();
          $("#pw_view").hide();
          break;
        case "send_pw":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 37,
            type: 1,
            page: 1,
            nick: $("#pw_nick").val(),
            topic: $("#pw_topic").val(),
            content: $("#pw_content").val(),
          });
          $("#new_pw_container").hide();
          $("#new_pw_btn").show();
          $("#pw_view").hide();
          break;
        case "open_pw":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 37,
            type: 2,
            ans_page: th.data("page"),
            pid: th.data("pid"),
          });
          break;
        case "pw_answer":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 37,
            type: 3,
            pid: GAME.current_pw,
            ans: $("#answer_area").val(),
          });
          $("#answer_area").val("");
          break;
        case "show_pws":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 37,
            page: th.data("page"),
          });
          break;
        case "pws_delete":
          var arr = $.map($(".pw_check:checked"), function (e, i) {
            return +e.value;
          });
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 37,
            type: 4,
            delete: arr,
            page: 1,
          });
          break;
        case "send_pw_to":
          GAME.page_switch("game_pw");
          $("#pw_nick").val(th.data("char_name"));
          $("#player_desc_con").hide();
          $("#new_pw_btn").hide();
          $("#new_pw_container").show();
          $("#pw_view").hide();
          break;
        case "rank_page":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 38,
            page: th.data("page"),
            rank_type: GAME.ranking_type,
            field: GAME.rank_field,
            searchv: GAME.rank_findby,
            value: GAME.rank_findbyv,
          });
          break;
        case "rank_pos_search":
          var page = Math.ceil(parseInt($("#rank_search_pos").val()) / 20);
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 38,
            page: page,
            rank_type: GAME.ranking_type,
            field: GAME.rank_field,
          });
          break;
        case "rank_name_search":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 38,
            page: 1,
            rank_type: GAME.ranking_type,
            field: GAME.rank_field,
            search: $("#rank_search_name").val(),
          });
          break;
        case "delete_buff":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 14,
            type: 7,
            buff: th.data("buff"),
          });
          break;
        case "create_klan":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 1,
            short: $("#new_clan_short").val(),
            name: $("#new_clan_name").val(),
          });
          break;
        case "clan_page_switch":
          var page = th.data("page");
          $(".clan_inner_page").hide();
          $("#clan_inner_" + page).show();
          switch (page) {
            case "invites":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 3 });
              break;
            case "structures":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 9 });
              break;
            case "castles":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
                a: 39,
                type: 12,
              });
              break;
            case "players":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
                a: 39,
                type: 15,
              });
              break;
            case "wars":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
                a: 39,
                type: 23,
              });
              break;
            case "clan_planet":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
                a: 39,
                type: 28,
              });
              break;
            case "planets":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
                a: 39,
                type: 33,
              });
              break;
            case "stelep":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
                a: 39,
                type: 35,
              });
              break;
            case "glory":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
                a: 39,
                type: 41,
              });
              break;
            case "krent":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
                a: 39,
                type: 47,
              });
              break;
            case "notes":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
                a: 39,
                type: 51,
              });
              break;
            case "ktrain":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
                a: 39,
                type: 54,
              });
              break;
          }
          break;
        case "clan_invite":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 2,
            nick: $("#clan_inv_nick").val(),
          });
          break;
        case "cancel_inv":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 4,
            inv: th.data("inv"),
          });
          break;
        case "inv_decision":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 5,
            inv: th.data("inv"),
            dec: th.data("dec"),
          });
          break;
        case "lssj_upgrade":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 61, type: 1 });
          break;
        case "clan_donate_kp":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 7,
            am: $("#klan_donate_kp").val(),
          });
          break;
        case "show_clan_log":
          var kpo = 0;
          if ($("#clan_log_premium").prop("checked")) kpo = 1;
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 8,
            page: th.data("page"),
            kpo: kpo,
          });
          break;
        case "clan_struct_up":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 10,
            struct: th.data("struct"),
          });
          break;
        case "clan_struct_upgrade":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 11,
            struct: th.data("struct"),
          });
          break;
        case "create_castle":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 13 });
          break;
        case "clan_castle_up":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 14,
            castle: th.data("castle"),
          });
          break;
        case "edit_clan_player":
          GAME.editClanPlayer(parseInt(th.data("pind")));
          break;
        case "clan_player_edit_go":
          var laws = {};
          var len = GAME.clan_law_labels.length;
          for (var i = 0; i < len; i++) {
            laws[GAME.clan_law_labels[i]] = $(
              "#ced_law_" + GAME.clan_law_labels[i]
            ).prop("checked");
          }
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 16,
            char_id: th.data("char_id"),
            rank: $("#clan_player_rank").val(),
            laws: laws,
          });
          break;
        case "clan_player_out":
          GAME.ask_confirm(18, {
            a: 39,
            type: 17,
            char_id: th.data("char_id"),
          });
          break;
        case "clan_change_name":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 18,
            short: $("#klan_change_short").val(),
            long: $("#klan_change_long").val(),
          });
          break;
        case "clan_player_assign":
          GAME.ask_confirm(5, { a: 39, type: 19, char_id: th.data("char_id") });
          break;
        case "clan_disband":
          GAME.ask_confirm(6, { a: 39, type: 20 });
          break;
        case "clan_send_pw":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 21,
            targets: $("#clan_pw_target").val(),
            topic: $("#clan_pw_topic").val(),
            content: $("#clan_pw_content").val(),
          });
          break;
        case "clan_leave":
          GAME.ask_confirm(7, { a: 39, type: 6 });
          break;
        case "clan_assist":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 55,
            tid: th.data("tid"),
            target: th.data("target"),
          });
          break;
        case "clan_assist_all":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 56 });
          break;
        case "logo_go":
          var file = $("#logo_file").prop("files")[0];
          var stream = ss.createStream();
          if (file.type == "image/png") {
            GAME.is_loading = true;
            $("#uploading").show();
            $("#up_progress").text("0%");
            ss(GAME.socket).emit("clan_logo", stream, {
              size: file.size,
              name: file.name,
              type: file.type,
            });
            var blobStream = ss.createBlobReadStream(file);
            var size = 0;
            blobStream.on("data", function (chunk) {
              size += chunk.length;
              var prog = Math.floor((size / file.size) * 100);
              $("#up_progress").text(prog + "%");
            });
            blobStream.pipe(stream);
          } else GAME.komunikat(LNG.error53 + file.type);
          break;
        case "emblem_go":
          var file = $("#emblem_file").prop("files")[0];
          var stream = ss.createStream();
          if (file.type == "image/png") {
            GAME.is_loading = true;
            $("#uploading").show();
            $("#up_progress").text("0%");
            ss(GAME.socket).emit("clan_emblem", stream, {
              size: file.size,
              name: file.name,
              type: file.type,
            });
            var blobStream = ss.createBlobReadStream(file);
            var size = 0;
            blobStream.on("data", function (chunk) {
              size += chunk.length;
              var prog = Math.floor((size / file.size) * 100);
              $("#up_progress").text(prog + "%");
            });
            blobStream.pipe(stream);
          } else GAME.komunikat(LNG.error53 + file.type);
          break;
        case "clan_text_edit":
          var type = parseInt(th.data("type")),
            val = "";
          if (type == 1) val = $("#clan_text").sceditor("instance").val();
          else val = $("#clan_opis").sceditor("instance").val();
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 22,
            type2: type,
            text: val,
          });
          break;
        case "show_clan":
          var klan_id = parseInt(th.data("klan_id"));
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 40,
            klan_id: klan_id,
          });
          break;
        case "clan_war":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 24,
            shorts: $("#war_field").val(),
          });
          $("#war_field").val("");
          break;
        case "show_clan_war_table":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 25,
            war: th.data("war_id"),
          });
          break;
        case "activate_war_buff":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 26 });
          break;
        case "war_switch":
          $("#all_war_con").toggle();
          break;
        case "e_war_switch":
          $("#ewar_list").toggle();
          break;
        case "c_war_switch":
          $("#war_list").toggle();
          break;
        case "clan_buy_planet":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 27 });
          break;
        case "activate_prp_buff":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 29 });
          break;
        case "clan_upgrade_planet":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 30 });
          break;
        case "clan_planet_expedition":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 31 });
          break;
        case "clan_planet_travel":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 32 });
          break;
        case "char_planetary_change":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 34 });
          break;
        case "char_stelep_run":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 36,
            planet: $("#start_teleportation_list").val(),
          });
          break;
        case "clan_tp_cancel":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 37 });
          break;
        case "clan_tp_assign":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 38,
            target: th.data("char_id"),
          });
          break;
        case "clan_tp_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 39 });
          break;
        case "invade_planet":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 40,
            planet: th.data("planet"),
          });
          break;
        case "clan_challenge_end":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 42 });
          break;
        case "activate_clan_challenge":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 43,
            glory: th.data("glory"),
          });
          break;
        case "start_boss":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 44,
            diff: th.data("diff"),
          });
          break;
        case "attack_boss":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 39, type: 45 });
          break;
        case "set_as_clan_char":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 46,
            rent: $("#rent_type").val(),
          });
          break;
        case "use_rent":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 48,
            target: th.data("char_id"),
          });
          break;
        case "cancel_rent":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 49,
            target: th.data("char_id"),
          });
          break;
        case "load_rent_log":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 50,
            page: th.data("page"),
          });
          break;
        case "rank_choose":
          var page = parseInt(th.data("page"));
          GAME.ranking_type = page;
          $(".ranking_choose").removeClass("active");
          th.addClass("active");
          $(".ranking_page").hide();
          $("#rank_" + page).show();
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 38,
            page: 1,
            rank_type: GAME.ranking_type,
          });
          break;
        case "lab_upgrade":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 41,
            type: 1,
            upg: th.data("upg"),
          });
          break;
        case "sett_page":
          $(".sett_pageb").removeClass("active");
          th.addClass("active");
          $(".sett_page").hide();
          var page = th.data("page");
          $("#sett_page_" + page).show();
          switch (page) {
            case "shared":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 42, type: 1 });
              break;
            case "char":
              GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 42, type: 9 });
              break;
          }
          break;
        case "init_shared":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 42,
            type: 2,
            login: $("#shared_login").val(),
          });
          break;
        case "accept_shared":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 42, type: 3 });
          break;
        case "cancel_shared":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 42,
            type: 4,
            shared: th.data("shared"),
          });
          break;
        case "sett_change_name":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 42,
            type: 5,
            nick: $("#new_name").val(),
          });
          break;
        case "sett_level_calc":
          if (GAME.char_data.level_lock) {
            $("#real_lvl").text(GAME.lvlUpSim());
          } else GAME.komunikat(LNG.error193);
          break;
        case "sett_change_level_lock":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 42, type: 6 });
          break;
        case "sett_change_item_mode":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 42, type: 12 });
          break;
        case "char_reset":
          GAME.ask_confirm(8, { a: 42, type: 7 });
          break;
        case "delete_character":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 42,
            type: 8,
            pass: $("#cg_password_delete").val(),
          });
          break;
        case "char_text_edit":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 42,
            type: 10,
            text: 1,
            content: $("#profile_text").sceditor("instance").val(),
          });
          break;
        case "char_notes_edit":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 42,
            type: 10,
            text: 2,
            content: $("#notes_text").sceditor("instance").val(),
          });
          break;
        case "select_title":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 42,
            type: 11,
            title: th.data("title"),
          });
          break;
        case "pet_active":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 43,
            type: 1,
            pet: th.data("pet"),
          });
          break;
        case "pet_lvlup":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 43,
            type: 2,
            pet: th.data("pet"),
            method: th.data("type"),
          });
          break;
        case "pet_evoup":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 43,
            type: 3,
            pet: th.data("pet"),
          });
          break;
        case "pet_release":
          GAME.ask_confirm(9, { a: 43, type: 4, pet: th.data("pet") });
          break;
        case "pet_namech":
          var pet = GAME.pets[parseInt(th.data("pet_local"))];
          if (pet) {
            var kom =
              '<div class="quest_desc">' +
              LNG.lab295 +
              ': <div class="game_input"><input type="text" id="pet_nname" value="' +
              pet.name +
              '" /></div><button class="option newBtn" data-option="pet_namech_go" data-pet="' +
              th.data("pet") +
              '">' +
              LNG.lab72 +
              "</button></div>";
            GAME.komunikat(kom);
            option_bind();
          }
          break;
        case "pet_namech_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 43,
            type: 5,
            pet: th.data("pet"),
            name: $("#pet_nname").val(),
          });
          kom_clear();
          break;
        case "pet_bonch":
          var pet = GAME.pets[parseInt(th.data("pet_local"))];
          pet_bon_change(pet);
          break;
        case "pet_bonch_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 43,
            type: 7,
            pet: th.data("pet"),
          });
          kom_clear();
          break;
        case "pet_reborn1":
          var kom =
            '<div class="quest_desc al"><b>' +
            LNG.lab300 +
            "</b><br />" +
            LNG.lab301 +
            "<br />" +
            LNG.lab302 +
            ':<br /><span class="orange">' +
            LNG.lab303 +
            '</span><br /><span class="orange">' +
            LNG.lab304 +
            '</span><br /><span class="orange">' +
            LNG.lab305 +
            '</span><br /><span class="orange">' +
            LNG.lab306 +
            '</span><br /><br /><span class="red">' +
            LNG.lab307 +
            '</span><br /><button class="option newBtn" data-option="pet_reborn_go" data-pet="' +
            th.data("pet") +
            '">REBORN</button></div>';
          GAME.komunikat(kom);
          option_bind();
          break;
        case "pet_reborn2":
          var kom =
            '<div class="quest_desc al"><b>' +
            LNG.lab300 +
            "</b><br />" +
            LNG.lab308 +
            "<br />" +
            LNG.lab302 +
            ':<br /><span class="orange">' +
            LNG.lab303 +
            '</span><br /><span class="orange">' +
            LNG.lab304 +
            '</span><br /><span class="orange">' +
            LNG.lab309 +
            '</span><br /><span class="orange">' +
            LNG.lab310 +
            '</span><br /><br /><span class="red">' +
            LNG.lab307 +
            '</span><br /><button class="option newBtn" data-option="pet_reborn_go" data-pet="' +
            th.data("pet") +
            '">REBORN</button></div>';
          GAME.komunikat(kom);
          option_bind();
          break;
        case "pet_reborn3":
          var kom =
            '<div class="quest_desc al"><b>' +
            LNG.lab300 +
            "</b><br />" +
            LNG.lab412 +
            "<br />" +
            LNG.lab302 +
            ':<br /><span class="orange">' +
            LNG.lab303 +
            '</span><br /><span class="orange">' +
            LNG.lab304 +
            '</span><br /><span class="orange">' +
            LNG.lab309 +
            '</span><br /><span class="orange">' +
            LNG.lab413 +
            '</span><br /><br /><span class="red">' +
            LNG.lab307 +
            '</span><br /><button class="option newBtn" data-option="pet_reborn_go" data-pet="' +
            th.data("pet") +
            '">REBORN</button></div>';
          GAME.komunikat(kom);
          option_bind();
          break;
        case "pet_reborn_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 43,
            type: 8,
            pet: th.data("pet"),
          });
          break;
        case "load_more_players":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 3,
            type: 1,
            start: th.data("start_from"),
            vo: GAME.map_options.vo,
          });
          $(".more_players").remove();
          break;
        case "emp_active":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 44,
            type: 1,
            emp: th.data("emp"),
          });
          break;
        case "emp_lvlup":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 44,
            type: 2,
            emp: th.data("emp"),
          });
          break;
        case "emp_release":
          GAME.ask_confirm(10, { a: 44, type: 3, emp: th.data("emp") });
          break;
        case "emp_namech":
          var pet = GAME.emps[parseInt(th.data("emp_local"))];
          if (pet) {
            var kom =
              '<div class="quest_desc">' +
              LNG.lab295 +
              ': <div class="game_input"><input type="text" id="emp_nname" value="' +
              pet.name +
              '" /></div><button class="option newBtn" data-option="emp_namech_go" data-emp="' +
              th.data("emp") +
              '">' +
              LNG.lab72 +
              "</button></div>";
            GAME.komunikat(kom);
            option_bind();
          }
          break;
        case "emp_namech_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 44,
            type: 4,
            emp: th.data("emp"),
            name: $("#emp_nname").val(),
          });
          kom_clear();
          break;
        case "emp_innene":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 44,
            type: 5,
            emp: th.data("emp"),
          });
          break;
        case "emp_advace":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 44,
            type: 6,
            emp: th.data("emp"),
          });
          break;
        case "emp_job":
          var pet = GAME.emps[parseInt(th.data("emp_local"))];
          if (pet) {
            var chance = pet.level * 6 + pet.class * 2 + pet.qualified * 10;
            var kom =
              '<div class="quest_desc">&raquo; ' +
              LNG.lab317 +
              " <b>" +
              pet.name +
              '</b>:<br /><div class="select_input"><select id="emp_instances"></select></div><br />' +
              LNG.lab36 +
              ": <b>" +
              chance +
              '</b>%<br /><button class="option newBtn" data-option="emp_job_go" data-emp="' +
              th.data("emp") +
              '">' +
              LNG.lab312 +
              "</button></div>";
            GAME.komunikat(kom);
            option_bind();
            GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 44, type: 7 });
          }
          break;
        case "emp_job_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 44,
            type: 8,
            emp: th.data("emp"),
            inst: $("#emp_instances").val(),
          });
          //kom_clear();
          break;
        case "emp_restore":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 44,
            type: 9,
            emp: th.data("emp"),
          });
          break;
        case "emp_restore_all":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 44,
            type: 10,
            emp: th.data("emp"),
          });
          break;
        case "ball_upgrade":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 45,
            type: 0,
            bid: th.data("bid"),
          });
          break;
        case "ss_page":
          var page = th.data("page");
          $(".ss_page").hide();
          $("#ss_page_" + page).show();
          break;
        case "ss_reset":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 45,
            type: 1,
            bid: GAME.ball_id,
          });
          break;
        case "ss_lvlup":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 45,
            type: 2,
            bid: GAME.ball_id,
          });
          break;
        case "ss_upgrade":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 45,
            type: 3,
            bid: GAME.ball_id,
          });
          break;
        case "ss_upgrade_refuse":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 45,
            type: 4,
            bid: GAME.ball_id,
          });
          break;
        case "ss_upgrade_accept":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 45,
            type: 5,
            bid: GAME.ball_id,
          });
          break;
        case "arena_attack":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 46,
            type: 1,
            index: th.data("index"),
            quick: th.data("quick"),
          });
          break;
        case "arena_lvlup":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 46, type: 2 });
          break;
        case "show_auctions":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 47,
            type: 0,
            page: th.data("page"),
            atype: $("#acution_type").val(),
            aclass: $("#auction_class").val(),
          });
          break;
        case "withdraw_auction":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 47,
            type: 2,
            page: th.data("page"),
            aid: th.data("aid"),
            atype: $("#acution_type").val(),
            aclass: $("#auction_class").val(),
          });
          break;
        case "buynow_auction":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 47,
            type: 3,
            page: th.data("page"),
            aid: th.data("aid"),
            atype: $("#acution_type").val(),
            aclass: $("#auction_class").val(),
          });
          break;
        case "bid_auction":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 47,
            type: 4,
            page: th.data("page"),
            aid: th.data("aid"),
            bid: $("#a_bid_" + th.data("aid")).val(),
            atype: $("#acution_type").val(),
            aclass: $("#auction_class").val(),
          });
          break;
        case "boss_attack":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 48,
            type: 1,
            boss_id: th.data("boss_id"),
          });
          break;
        case "receive_activity_reward":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 49,
            type: 1,
            ind: th.data("ind"),
          });
          break;
        case "promo_decision":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 49,
            type: 2,
            dec: th.data("dec"),
          });
          break;
        case "promo_accept":
          GAME.ask_confirm(13, { a: 49, type: 2, dec: 2 });
          break;
        case "empire_test":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 50, type: 1 });
          break;
        case "empire_test_answer":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 50,
            type: 2,
            answers: [
              0,
              $("#quiz_ans_1a").prop("checked"),
              $("#quiz_ans_2a").prop("checked"),
              $("#quiz_ans_3a").prop("checked"),
              $("#quiz_ans_4a").prop("checked"),
            ],
          });
          break;
        case "quiz_end":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 50,
            type: 3,
            empire: $('#quiz_result_3 input[name="empire"]:checked').val(),
          });
          break;
        case "emp_struct":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 50,
            type: 4,
            sid: th.data("sid"),
          });
          break;
        case "empire_teleport":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 50,
            type: 5,
            e: $("#emp_teleport").val(),
          });
          break;
        case "activate_emp_buff":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 50,
            type: 6,
            buff: th.data("buff"),
          });
          break;
        case "empire_war_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 50,
            type: 7,
            target: $("#emp_war_declare").val(),
          });
          break;
        case "emp_war_table":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 50,
            type: 8,
            war: th.data("war"),
          });
          break;
        case "special_loc_move":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 51, type: 1 });
          break;
        case "buy_from_trader":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 51,
            type: 2,
            item: th.data("item"),
            iid: th.data("itemid"),
            am: th.data("itemam"),
          });
          break;
        case "buy_from_trader2":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 51,
            type: 3,
            item: th.data("item"),
            iid: th.data("itemid"),
            am: th.data("itemam"),
          });
          break;
        case "open_tuts":
          GAME.parseData(63, {});
          GAME.tutorialReqDone(2);
          break;
        case "show_tut_data":
          $("#tut_desc_" + th.data("t")).toggle();
          break;
        case "start_tutorial":
          var t = parseInt(th.data("t"));
          GAME.startTutorial(t);
          break;
        case "cancel_tutorial":
          GAME.cancelTutorial(t);
          break;
        case "tut_step":
          GAME.tutorialReqDone(4);
          break;
        case "send_kp":
          GAME.ask_confirm(11, {
            a: 53,
            type: 0,
            captchaResponse: grecaptcha.getResponse(
              GAME.response["transfer_captcha"]
            ),
            nick: $("#transfer_nick_name").val(),
            amount: $("#transfer_amount").val(),
          });
          break;
        case "obtain_vip":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 54,
            type: 1,
            vip: th.data("vip"),
            level: th.data("level"),
          });
          break;
        case "vip_status":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 54, type: 2 });
          break;
        case "delete_note_entry":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 39,
            type: 53,
            entry: $(this).data("entry"),
          });
          break;
        case "weed_proposal":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 55,
            type: 1,
            nick: $("#weed_proposal").val(),
          });
          break;
        case "proposal_answer":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 55,
            type: 2,
            pip: $(this).data("pip"),
            ans: $(this).data("ans"),
          });
          break;
        case "divorce":
          GAME.ask_confirm(12, { a: 55, type: 3 });
          break;
        case "newborn":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 55, type: 4 });
          break;
        case "newborn_answer":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 55,
            type: 5,
            ans: $(this).data("ans"),
          });
          break;
        case "promo_code":
          kom_clear();
          var kom =
            '<div class="quest_desc">&raquo; ' +
            LNG.lab372 +
            ':<br /><div class="game_input"><input id="promo_code" type="text" /></div><br /><br /><div id="promo_captcha" class="captcha_container"></div><br /><button class="option newBtn" data-option="promo_code_go">OK</button></div>';
          GAME.komunikat(kom);
          option_bind();
          GAME.load_captcha("#promo_captcha", "promo_captcha", 0, 1);
          break;
        case "promo_code_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 56,
            type: 0,
            code: $("#promo_code").val(),
            captchaResponse: grecaptcha.getResponse(
              GAME.response["promo_captcha"]
            ),
          });
          kom_clear();
          break;
        case "tournament_sign":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 57,
            type: 1,
            tid: $(this).data("tid"),
          });
          break;
        case "tournament_details":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 57,
            type: 2,
            tid: $(this).data("tid"),
          });
          break;
        case "sign_all_pets":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 57,
            type: 4,
            tid: $(this).data("tid"),
          });
          break;
        case "cancel_tour_details":
          $("#tour_details").hide();
          $("#tour_list_tab").show();
          break;
        case "show_tour_fight":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 57,
            type: 3,
            fid: $(this).data("id"),
          });
          break;
        case "tour_switch_players":
          GAME.tour_type = 0;
          $(".ttype").removeClass("active");
          $("#to_players").addClass("active");
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 57,
            type: 0,
            type2: GAME.tour_type,
            page: 1,
          });
          break;
        case "tour_switch_pets":
          GAME.tour_type = 1;
          $(".ttype").removeClass("active");
          $("#to_pets").addClass("active");
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 57,
            type: 0,
            type2: GAME.tour_type,
            page: 1,
          });
          break;
        case "show_tour_page":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 57,
            type: 0,
            type2: GAME.tour_type,
            page: $(this).data("page"),
          });
          break;
        case "chat_clan_switch":
          switch (GAME.chat_switch) {
            case 1:
              GAME.chat_switch = 0;
              $(".clan_channel").hide();
              GAME.prepareChatChannels();
              $("#chat_swi").text(LNG.lab379);
              select_chat_channel(1);
              break;
            default:
              GAME.chat_switch = 1;
              $(".common_channel").hide();
              $(".clan_channel").show();
              if (
                GAME.hasClanLaw("clan_boss") ||
                GAME.hasClanLaw("struct_build") ||
                GAME.hasClanLaw("player_manage") ||
                GAME.hasClanLaw("planetary")
              ) {
              } else $("#chat_channel_11").hide();
              $("#chat_swi").text(LNG.lab378);
              select_chat_channel(6);
              break;
          }
          $("#chat_channel_scnt").text("").addClass("empty");
          GAME.chat_scnt = 0;
          break;
        case "chat_noti_change":
          var ch = parseInt(th.data("channel")),
            v = 0;
          if (th.prop("checked")) v = 1;

          GAME.chat_notifications[ch] = v;
          localStorage.setItem(
            "chat_notifications",
            JSON.stringify(GAME.chat_notifications)
          );
          break;
        case "use_card":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 58,
            type: 1,
            card: GAME.selected_card,
          });
          $("#soulcard_menu").hide();
          break;
        case "clear_sslot":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 58,
            type: 2,
            slot: th.data("slot"),
          });
          break;
        case "boost_card":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 58,
            type: 3,
            card: GAME.selected_card,
          });
          //$('#soulcard_menu').hide();
          break;
        case "des_card":
          var kom =
            "<div>" +
            LNG.lab158 +
            '<div class="game_input small"><input id="des_am" type="text" value="1" /></div><button class="set_max btn_small_gold" data-target="#des_am" data-max="' +
            GAME.selected_card_stack +
            '">MAX</button><br /><button class="option btn_small_gold" data-option="des_card_go">OK</button></div>';
          GAME.komunikat(kom);
          setmaxBind();
          option_bind();
          //GAME.ask_confirm(16,{a:58,type:4,card:GAME.selected_card});
          $("#soulcard_menu").hide();
          break;
        case "des_card_go":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 58,
            type: 4,
            card: GAME.selected_card,
            am: $("#des_am").val(),
          });
          break;
        case "change_sc_set":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 58,
            type: 7,
            set: th.data("set"),
          });
          break;
        case "mass_des_card":
          GAME.ask_confirm(16, { a: 58, type: 6, subtype: 1 });
          $("#soulcard_menu").hide();
          break;
        case "mass_des_card2":
          GAME.ask_confirm(16, { a: 58, type: 6, subtype: 2 });
          $("#soulcard_menu").hide();
          break;
        case "soul_slots_upgrade":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 58, type: 5 });
          break;
        case "soulfight":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 59, type: 1 });
          break;
        case "soul_short":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 59, type: 2 });
          break;
        case "soul_reset":
          GAME.ask_confirm(17, { a: 59, type: 3 });
          break;
        case "use_lock":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 60,
            type: 1,
            name: $("#lock_name").val(),
          });
          break;
        case "remove_lock":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 60,
            type: 2,
            char_id: th.data("char_id"),
          });
          break;
        case "masterylvl_upgrade":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 62, type: 1 });
          break;
        case "mastery_cost":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 62, type: 2 });
          break;
        case "bfate_upgrade":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 63,
            type: 1,
            fid: th.data("fid"),
          });
          break;
        case "bfate_init":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 63,
            type: 2,
            fid: th.data("fid"),
          });
          break;
        case "bfate_init2":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 63,
            type: 4,
            fid: th.data("fid"),
            ind: th.data("ind"),
          });
          break;
        case "buy_ekw_slots":
          GAME.ask_confirm(20, { a: 64, type: 1 });
          break;
        case "change_ekw_set":
          GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
            a: 64,
            type: 2,
            set: th.data("set"),
          });
          break;
      }
    });
}
function pet_bon_change(pet) {
  if (pet) {
    var bons = "";
    var fields = ["bonus", "bonus2", "bonus3", "bonus4"];
    var len = fields.length;
    for (var i = 0; i < len; i++) {
      var field = fields[i];
      if (pet[field] > 0)
        bons +=
          '<b class="green">' +
          pet[field + "_val"] * pet.evo_lvl +
          "</b>" +
          GAME.item_stat(pet[field]) +
          "<br />";
    }
    var kom =
      '<div class="quest_desc">&raquo; ' +
      LNG.lab297 +
      " <b>" +
      pet.name +
      "</b><br />" +
      LNG.lab298 +
      '<br /><div class="ekw_slot"><img src="/gfx/items/0/60/1266.png" /><div id="ilosc_karm">??</div></div><br />' +
      LNG.lab299 +
      ":<br />" +
      bons +
      '<br /><button class="option newBtn" data-option="pet_bonch_go" data-pet="' +
      pet.id +
      '">' +
      LNG.lab72 +
      "</button></div>";
    GAME.komunikat(kom);
    option_bind();
    GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 43, type: 6 });
  }
}
function pr_amount(am) {
  var points = 250 * am;
  $("#ppr_rec").text(GAME.dots(points));
}
function main_ekw_item_bind() {
  $(".main_ekw_item")
    .off("mouseover")
    .on("mouseover", function () {
      var el = $(this);
      if (parseInt(el.attr("data-load_go")) == 1) return;
      var iid = el.data("item_id");
      var upg = parseInt(el.data("upgrade"));
      var upgr = 0;
      if (upg > 0) upgr = upg;
      el.attr("data-load_go", 1);
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder(
        { a: 12, type: 3, iid: iid, upgrade: upg },
        1
      );
      GAME.current_item_tooltip = el;
    });
}
function hide_tooltips() {
  $(".tooltip").remove();
}
function player_ekw_item_bind() {
  $(".player_ekw_item")
    .off("mouseover")
    .off("dragstart")
    .off("dragend")
    .on("mouseover", function () {
      var el = $(this);
      if (parseInt(el.attr("data-load_go")) == 1) return;
      el.attr(
        "data-original-title",
        '<div class="tt"><div class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></div></div>'
      );
      var iid = parseInt(el.attr("data-item_id"));
      el.attr("data-load_go", 1);
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder(
        { a: 12, type: 2, iid: iid },
        1
      );
      GAME.current_item_tooltip = el;
    })
    .on("dragstart", function () {
      var el = $(this);
      hide_tooltips();
      var us = 0,
        slot = 0,
        iid = parseInt(el.attr("data-item_id")),
        bid = parseInt(el.data("base_item_id")),
        type = parseInt(el.data("type")),
        stack = parseInt(el.data("stack")),
        iclass = parseInt(el.data("class")),
        upgrade = parseInt(el.data("upgrade"));
      if (el.data("usable")) {
        us = 1;
        slot = parseInt(el.data("slot"));
        $("#ekw_page_items").addClass("active");
      } else {
        slot = parseInt(el.data("slot"));
        $("#ekw_use_slot" + slot).addClass("active");
        if (slot > 0) $("#delete_item").addClass("active");
        if (stack >= 2 && GAME.item_joinable(type, iclass, bid)[0])
          $("#join_item").addClass("active");
        if (GAME.item_upgradeable(type)[0]) $("#upg_item").addClass("active");
        if (
          iclass >= 2 &&
          iclass <= 10 &&
          GAME.item_joinable(type, iclass - 1, bid)[0]
        )
          $("#split_item").addClass("active");
      }
      GAME.dragged_item = {
        id: iid,
        sel: el,
        usable: us,
        slot: slot,
        stack: stack,
        img: el.data("img"),
        bid: bid,
        type: type,
        iclass: iclass,
        upgrade: upgrade,
      };
    })
    .on("dragend", function () {
      var el = $(this);
      if (el.data("usable")) {
        $("#ekw_page_items").removeClass("active");
      } else {
        $("#ekw_use_slot" + GAME.dragged_item.slot).removeClass("active");
        $(".drag_action").removeClass("active");
      }
      hide_tooltips();
      //delete GAME.dragged_item;
    });
}
function kom_clear() {
  $(".kom").remove();
  GAME.koms = [];
}
function kom_close_bind() {
  $(".close_kom")
    .off()
    .click(function () {
      var ind = parseInt($(this).data("ind"));
      GAME.koms[ind] = false;
      $(this).parent().remove();
    });
}
function tooltip_bind() {
  $(".tooltip").remove();
  $('[data-toggle="tooltip"]')
    .tooltip(GAME.tooltip_options)
    .off("hide.bs.tooltip")
    .on("hide.bs.tooltip", function () {
      GAME.current_item_tooltip = false;
    });
  $('[data-toggle="tooltip_left"]').tooltip({
    html: true,
    placement: "top",
    container: "body",
    trigger: "hover",
  });
  $('[data-toggle="tooltip_left2"]').tooltip({
    html: true,
    placement: "auto",
    container: "body",
    trigger: "hover",
  });
}
$("#ekw_page_items")
  .on("drop", function (ev) {
    ev.preventDefault();
    if (GAME.dragged_item && GAME.dragged_item.usable) {
      var slot = parseInt(GAME.dragged_item.slot);
      $("#ekw_page_items").removeClass("active");
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
        a: 12,
        type: 4,
        slot: slot,
        page: GAME.ekw_page,
      });
    }
  })
  .on("dragover", function (ev) {
    if (GAME.dragged_item && GAME.dragged_item.usable) ev.preventDefault();
  });
$("#split_item")
  .on("drop", function (ev) {
    ev.preventDefault();
    if (
      GAME.dragged_item &&
      GAME.dragged_item.usable == 0 &&
      GAME.dragged_item.iclass >= 2 &&
      GAME.dragged_item.iclass <= 10 &&
      GAME.item_joinable(
        GAME.dragged_item.type,
        GAME.dragged_item.iclass - 1,
        GAME.dragged_item.bid
      )[0]
    ) {
      $(this).removeClass("active");
      split_item();
    }
  })
  .on("dragover", function (ev) {
    if (
      GAME.dragged_item &&
      GAME.dragged_item.usable == 0 &&
      GAME.dragged_item.iclass >= 2 &&
      GAME.dragged_item.iclass <= 10 &&
      GAME.item_joinable(
        GAME.dragged_item.type,
        GAME.dragged_item.iclass - 1,
        GAME.dragged_item.bid
      )[0]
    )
      ev.preventDefault();
  });
function split_item() {
  var iid = parseInt(GAME.dragged_item.sel.data("item_id"));
  var max = GAME.dragged_item.stack;
  var kom =
    "<div>" +
    LNG.lab42 +
    '<br /><img src="' +
    GAME.dragged_item.img +
    '" /><div class="game_input small"><input id="split_am" type="text" value="1" /></div><button class="set_max btn_small_gold" data-target="#split_am" data-max="' +
    max +
    '">MAX</button><br /><br />' +
    LNG.lab41 +
    ': <b id="spl_sub_left"></b><br /><button class="option btn_small_gold" data-option="split_item">OK</button></div>';
  GAME.komunikat(kom);
  setmaxBind();
  option_bind();
  GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 12, type: 11, iid: iid });
}
$(".usable_slot")
  .on("drop", function (ev) {
    ev.preventDefault();
    if (
      GAME.dragged_item &&
      GAME.dragged_item.usable == 0 &&
      GAME.dragged_item.slot == $(this).data("slot")
    ) {
      var iid = parseInt(GAME.dragged_item.sel.data("item_id"));
      $(this).removeClass("active");
      GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
        a: 12,
        type: 5,
        iid: iid,
        page: GAME.ekw_page,
      });
    }
  })
  .on("dragover", function (ev) {
    if (
      GAME.dragged_item &&
      GAME.dragged_item.usable == 0 &&
      GAME.dragged_item.slot == $(this).data("slot")
    )
      ev.preventDefault();
  });
$("#delete_item")
  .on("drop", function (ev) {
    ev.preventDefault();
    if (
      GAME.dragged_item &&
      GAME.dragged_item.usable == 0 &&
      GAME.dragged_item.slot > 0
    ) {
      $(this).removeClass("active");
      destroy_item();
    }
  })
  .on("dragover", function (ev) {
    if (
      GAME.dragged_item &&
      GAME.dragged_item.usable == 0 &&
      GAME.dragged_item.slot > 0
    )
      ev.preventDefault();
  });
function destroy_item() {
  var kom =
    "<div>" +
    LNG.lab29 +
    '<br /><img src="' +
    GAME.dragged_item.img +
    '" /><div class="game_input small"><input id="des_am" type="text" value="1" /></div><button class="set_max btn_small_gold" data-target="#des_am" data-max="' +
    GAME.dragged_item.stack +
    '">MAX</button><br /><br />' +
    LNG.lab38 +
    ':<br /><b id="shard_gain">0</b> x' +
    LNG.lab39 +
    '<br /><button class="option newBtn" data-option="destroy_item">' +
    LNG.lab29 +
    "</button></div>";
  GAME.komunikat(kom);
  des_shards(1);
  setmaxBind();
  option_bind();
  $("#des_am")
    .off()
    .on("input", function () {
      var am = parseInt($(this).val());
      if (am > 0) {
        if (am > GAME.dragged_item.stack) {
          am = GAME.dragged_item.stack;
          $(this).val(am);
        }
        des_shards(am);
      }
    });
}
function bind_item() {
  var kom =
    "<div>" +
    LNG.lab49 +
    '<br /><img src="' +
    GAME.dragged_item.img +
    '" /><div class="game_input small"><input id="bin_am" type="text" value="1" /></div><button class="set_max btn_small_gold" data-target="#bin_am" data-max="' +
    GAME.dragged_item.stack +
    '">MAX</button><br /><br /><button class="option newBtn" data-option="bind_item">' +
    LNG.lab49 +
    "</button></div>";
  GAME.komunikat(kom);
  setmaxBind();
  option_bind();
}

function des_shards(am) {
  var points =
    (GAME.dragged_item.iclass * GAME.dragged_item.iclass +
      GAME.dragged_item.upgrade) *
    am;
  $("#shard_gain").text(GAME.dots(points));
}
$("#join_item")
  .on("drop", function (ev) {
    ev.preventDefault();
    if (
      GAME.dragged_item &&
      GAME.dragged_item.usable == 0 &&
      GAME.dragged_item.stack >= 2 &&
      GAME.item_joinable(
        GAME.dragged_item.type,
        GAME.dragged_item.iclass,
        GAME.dragged_item.bid
      )[0]
    ) {
      $(this).removeClass("active");
      join_item();
    }
  })
  .on("dragover", function (ev) {
    if (
      GAME.dragged_item &&
      GAME.dragged_item.usable == 0 &&
      GAME.dragged_item.stack >= 2 &&
      GAME.item_joinable(
        GAME.dragged_item.type,
        GAME.dragged_item.iclass,
        GAME.dragged_item.bid
      )[0]
    )
      ev.preventDefault();
  });
function join_item() {
  var iid = parseInt(GAME.dragged_item.sel.data("item_id"));
  var max = Math.floor(GAME.dragged_item.stack / 2);
  var kom =
    "<div>" +
    LNG.lab32 +
    '<br /><img src="' +
    GAME.dragged_item.img +
    '" /><div class="game_input small"><input id="join_am" type="text" value="1" /></div><button class="set_max btn_small_gold" data-target="#join_am" data-max="' +
    max +
    '">MAX</button><br /><br />' +
    LNG.lab36 +
    ': <b id="join_succes_chance">??</b>%<br />' +
    LNG.lab37 +
    ': <b id="join_ess_left"></b><br /><button class="option btn_small_gold" data-option="join_item">OK</button></div>';
  GAME.komunikat(kom);
  setmaxBind();
  option_bind();
  GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 12, type: 8, iid: iid });
}
$("#upg_item")
  .on("drop", function (ev) {
    ev.preventDefault();
    if (
      GAME.dragged_item &&
      GAME.dragged_item.usable == 0 &&
      GAME.item_upgradeable(GAME.dragged_item.type)[0]
    ) {
      $(this).removeClass("active");
      upgrade_item();
    }
  })
  .on("dragover", function (ev) {
    if (
      GAME.dragged_item &&
      GAME.dragged_item.usable == 0 &&
      GAME.item_upgradeable(GAME.dragged_item.type)[0]
    )
      ev.preventDefault();
  });
function upgrade_item() {
  var iid = parseInt(GAME.dragged_item.sel.data("item_id"));
  var max = GAME.dragged_item.stack;
  var kom =
    "<div>" +
    LNG.lab40 +
    '<br /><img src="' +
    GAME.dragged_item.img +
    '" /><div class="game_input small"><input id="upg_am" type="text" value="1" /></div><button class="set_max btn_small_gold" data-target="#upg_am" data-max="' +
    max +
    '">MAX</button><br /><span class="super_upgrade_result"></span><br />' +
    LNG.lab36 +
    ': <b id="upg_succes_chance">??</b>%<br />' +
    LNG.lab41 +
    ': <b id="upg_sub_left"></b><br />' +
    LNG.lab424 +
    ": +<b>" +
    GAME.dragged_item.upgrade +
    '</b><br /><button class="option btn_small_gold" data-option="upg2_item">OK</button></div>';
  GAME.komunikat(kom);
  setmaxBind();
  option_bind();
  GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({ a: 12, type: 9, iid: iid });
}
function ekw_list_bind() {
  $(".ekw_list_item")
    .off("contextmenu")
    .off("click")
    .on("contextmenu", function (e) {
      return false;
    })
    .on("click", function () {
      var th = $(this);
      th.tooltip("hide");
      $(".ekw_menu_btn").hide();
      var slot = parseInt(th.data("slot")),
        iid = parseInt(th.attr("data-item_id")),
        bid = parseInt(th.data("base_item_id")),
        type = parseInt(th.data("type")),
        stack = parseInt(th.data("stack")),
        iclass = parseInt(th.data("class")),
        upgrade = parseInt(th.data("upgrade")),
        bound = parseInt(th.data("bound"));
      var any = false;
      if (th.data("usable") == 1) {
        $("#ekw_menu_use").show();
        any = true;
      }
      if (slot > 0) {
        if (type != 56) $("#ekw_menu_des").show();
        $("#ekw_menu_wea").show();
        any = true;
        if (type != 137 && type != 56) $("#ekw_menu_tra").show();
        if (bound == 0) $("#ekw_menu_auc").show();
      }
      if (stack >= 2 && GAME.item_joinable(type, iclass, bid)[0]) {
        any = true;
        $("#ekw_menu_joi").show();
      }
      if (GAME.item_upgradeable(type)[0]) {
        any = true;
        $("#ekw_menu_upg").show();
      }
      if (
        iclass >= 2 &&
        iclass <= 10 &&
        GAME.item_joinable(type, iclass - 1, bid)[0]
      ) {
        $("#ekw_menu_spl").show();
        any = true;
      }
      if (
        type == 137 ||
        type == 184 ||
        type == 185 ||
        type == 186 ||
        type == 223 ||
        type == 242 ||
        type == 265 ||
        type == 285
      )
        $("#ekw_menu_for").show().data("arg", iid);
      if (type == 56) $("#ekw_menu_bup").show().data("bid", iid);
      if (type == 4 || type == 124) {
        $("#ekw_menu_don").show().data("arg", iid);
        any = true;
      }
      if (bound == 0) {
        $("#ekw_menu_bin").show();
        any = true;
      }
      GAME.dragged_item = {
        id: iid,
        sel: th,
        usable: 0,
        slot: slot,
        stack: stack,
        img: th.data("img"),
        bid: bid,
        type: type,
        iclass: iclass,
        upgrade: upgrade,
      };
      if (any) {
        var pos = th.position();
        $("#ekw_item_menu")
          .fadeIn()
          .css({ top: pos.top + "px", left: pos.left - 30 + "px" });
      }
    });
}
$(".field_selector").on("change", function () {
  GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
    a: 38,
    page: 1,
    rank_type: GAME.ranking_type,
    field: $(this).val(),
  });
});
$(".rank_selector").on("change", function () {
  GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
    a: 38,
    page: 1,
    rank_type: GAME.ranking_type,
    field: $("#rank_field").val(),
    searchv: $(this).data("search"),
    value: $(this).val(),
  });
});
$("#fight_speed").on("change", function () {
  GAME.fight_speed = parseInt($(this).val());
  localStorage.setItem("fight_speed", GAME.fight_speed);
});
$("#animations_off").on("change", function () {
  GAME.animations_off = parseInt($(this).val());
  localStorage.setItem("animations_off", GAME.animations_off);
});
$(".auction_changer").on("change", function () {
  GAME.xxx1de4b6ac15d3b3b135c17f1a14faac8cOrder({
    a: 47,
    type: 0,
    page: $(this).data("page"),
    atype: $("#acution_type").val(),
    aclass: $("#auction_class").val(),
  });
});
$("#tp_reb_choose").on("change", function () {
  var type = parseInt($(this).find(":selected").val());
  $(".loc2_option").show();
  if (type >= 0) {
    $(".loc2_option").each(function () {
      if (parseInt($(this).data("reborn")) != type) $(this).hide();
    });
  }
});
$("#travel_reb_choose").on("change", function () {
  var type = parseInt($(this).find(":selected").val());
  $(".loc_option").show();
  if (type >= 0) {
    $(".loc_option").each(function () {
      if (parseInt($(this).data("reborn")) != type) $(this).hide();
    });
  }
});
$("#tp_name_search").on("keyup", function () {
  $(".loc2_option").hide();
  var s = $(this).val();
  $(".loc2_option").each(function () {
    if (
      $(this)
        .data("nazwa")
        .toLowerCase()
        .indexOf(escapeHtml(s.toLowerCase())) != -1
    )
      $(this).show();
  });
});
$("#travel_name_search").on("keyup", function () {
  $(".loc_option").hide();
  var s = $(this).val();
  $(".loc_option").each(function () {
    if (
      $(this)
        .data("nazwa")
        .toLowerCase()
        .indexOf(escapeHtml(s.toLowerCase())) != -1
    )
      $(this).show();
  });
});
$("#psk_wish_am").on("input", function () {
  var th = $(this);
  var am = parseInt(th.val());
  var pow = GAME.mdb_base * am;
  $(".pck_result").text(GAME.dots(pow));
});

$("#ekw_item_menu").on("mouseleave", function () {
  $(this).hide();
});
JQS.ctm.on("scroll", function () {
  if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
    GAME.chat_scrolled = true;
  } else GAME.chat_scrolled = false;
});
$("#chat_drag").mousedown(function () {
  $("#chat_containter").draggable();
});

$("#chat_drag").mouseup(function () {
  $("#chat_containter").draggable("destroy");
});
$("#drag_pilot").mousedown(function () {
  $("#map_pilot").draggable();
});
$("#promo_dragger").mousedown(function () {
  $("#promo_item").draggable();
});

$("#drag_pilot").mouseup(function () {
  $("#map_pilot").draggable("destroy");
});
$("#war_switch").mousedown(function () {
  $("#war_container").draggable();
});
$("#war_switch").mouseup(function () {
  $("#war_container").draggable("destroy");
});
$("#promo_dragger").mouseup(function () {
  $("#promo_item").draggable("destroy");
});

$("#gostek2").mousedown(function () {
  $("#tutorial_frame").draggable();
  GAME.tutorialReqDone(1);
});
function qaction_bind() {
  $(".quest_action")
    .off()
    .on("click", function (e) {
      GAME.questAction(e);
    });
}
$("#gostek2").mouseup(function () {
  $("#tutorial_frame").draggable("destroy");
});
function setmaxBind() {
  $(".set_max")
    .off()
    .on("click", function () {
      var el = $(this);
      var max = parseInt(el.data("max"));
      var target = el.data("target");
      $(target).val(max);
      if (target == "#des_am") des_shards(max);
      if (target == "#ppr_kp") pr_amount(max);
      if (target == "#psk_wish_am") {
        var pow = GAME.mdb_base * max;
        $(".pck_result").text(GAME.dots(pow));
      }
    });
}
$(".svg_captcha").on("click", function () {
  var th = $(this);
  reloadSVGcaptcha(th);
});
function reloadSVGcaptcha(th) {
  th.html(
    '<img src="./captcha?s=' +
      GAME.server +
      "&char=" +
      GAME.char_id +
      "&v=" +
      GAME.getmTime() +
      '" />'
  );
}
setmaxBind();
$(".chat_channel").on("click", function () {
  var channel = parseInt($(this).data("channel"));
  select_chat_channel(channel);
});
$("#reps_checkAll").click(function () {
  $(".rep_check").prop("checked", this.checked);
});
$("#pw_checkAll").click(function () {
  $(".pw_check").prop("checked", this.checked);
});
$("#available_servers").on("change", function () {
  window.location.href = GAME.main_page + "/login/" + $(this).val();
});
$(".skeditor").sceditor({
  plugins: "bbcode",
  style: "/lib/skeditor/jquery.sceditor.default.min.css",
  toolbar:
    "bold,italic,underline,strike|left,center,right|font,size,color,quote|bulletlist,orderedlist,table|source",
  emoticonsEnabled: false,
});
$(window).on("load", function () {
  GAME.serv_time = ts.now();
  GAME.parseServerTime();
  GAME.lang = locals.lang;
  $("#fight_speed option[value=" + GAME.fight_speed + "]").prop(
    "selected",
    true
  );
  $("#animations_off option[value=" + GAME.animations_off + "]").prop(
    "selected",
    true
  );
  setInterval(function () {
    GAME.processServerTime();
    GAME.timers_tick();
  }, 1000);
  tooltip_bind();
  keybinds();
  switch (notify.permissionLevel()) {
    case "default":
      notify.requestPermission(function () {
        GAME.push_enabled = true;
      });
      break;
    default:
      GAME.push_enabled = true;
      break;
  }
});
