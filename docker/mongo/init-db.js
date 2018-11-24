db.createUser({
    user: 'mongo',
    pwd: 'mongo',
    roles: [
        {
            role: 'root',
            db: 'admin',
        },
    ],
});

db = db.getSiblingDB('application');

db.population.insert([
    {"code": "af", "population": "36M" },
    {"code": "al", "population": "2M" },
    {"code": "dz", "population": "42M" },
    {"code": "as", "population": "55K" },
    {"code": "ad", "population": "76K" },
    {"code": "ao", "population": "30M" },
    {"code": "ai", "population": "15K" },
    {"code": "ag", "population": "103K" },
    {"code": "ar", "population": "44M" },
    {"code": "am", "population": "2M" },
    {"code": "aw", "population": "105K" },
    {"code": "au", "population": "24M" },
    {"code": "at", "population": "8M" },
    {"code": "az", "population": "9M" },
    {"code": "bs", "population": "399K" },
    {"code": "bh", "population": "1M" },
    {"code": "bd", "population": "166M" },
    {"code": "bb", "population": "286K" },
    {"code": "by", "population": "9M" },
    {"code": "be", "population": "11M" },
    {"code": "bz", "population": "382K" },
    {"code": "bj", "population": "11M" },
    {"code": "bm", "population": "61K" },
    {"code": "bt", "population": "817K" },
    {"code": "bo", "population": "11M" },
    {"code": "ba", "population": "3M" },
    {"code": "bw", "population": "2M" },
    {"code": "br", "population": "210M" },
    {"code": "io", "population": "31K" },
    {"code": "bn", "population": "434K" },
    {"code": "bg", "population": "7M" },
    {"code": "bf", "population": "19M" },
    {"code": "bi", "population": "11M" },
    {"code": "cv", "population": "553K" },
    {"code": "kh", "population": "16M" },
    {"code": "cm", "population": "24M" },
    {"code": "ca", "population": "36M" },
    {"code": "ky", "population": "62K" },
    {"code": "cf", "population": "4M" },
    {"code": "td", "population": "15M" },
    {"code": "cl", "population": "18M" },
    {"code": "cn", "population": "1.4B" },
    {"code": "co", "population": "49M" },
    {"code": "km", "population": "832K" },
    {"code": "ck", "population": "17K" },
    {"code": "cr", "population": "4M" },
    {"code": "ci", "population": "24M" },
    {"code": "hr", "population": "4M" },
    {"code": "cu", "population": "11M" },
    {"code": "cy", "population": "1M" },
    {"code": "cz", "population": "10M" },
    {"code": "dk", "population": "5M" },
    {"code": "dj", "population": "971K" },
    {"code": "dm", "population": "74K" },
    {"code": "do", "population": "10M" },
    {"code": "ec", "population": "16M" },
    {"code": "eg", "population": "99M" },
    {"code": "sv", "population": "6M" },
    {"code": "gq", "population": "1M" },
    {"code": "er", "population": "5M" },
    {"code": "ee", "population": "1M" },
    {"code": "et", "population": "107M" },
    {"code": "fo", "population": "49K" },
    {"code": "fk", "population": "2K" },
    {"code": "fj", "population": "912K" },
    {"code": "fi", "population": "5M" },
    {"code": "fr", "population": "65M" },
    {"code": "gf", "population": "289K" },
    {"code": "pf", "population": "285K" },
    {"code": "ga", "population": "2M" },
    {"code": "gm", "population": "2M" },
    {"code": "ge", "population": "3M" },
    {"code": "de", "population": "82M" },
    {"code": "gh", "population": "29M" },
    {"code": "gi", "population": "34K" },
    {"code": "gr", "population": "11M" },
    {"code": "gl", "population": "56K" },
    {"code": "gd", "population": "108K" },
    {"code": "gp", "population": "449K" },
    {"code": "gu", "population": "165K" },
    {"code": "gt", "population": "17M" },
    {"code": "gn", "population": "13M" },
    {"code": "gw", "population": "1M" },
    {"code": "gy", "population": "782K" },
    {"code": "ht", "population": "11M" },
    {"code": "hm", "population": "801" },
    {"code": "hn", "population": "9M" },
    {"code": "hk", "population": "7M" },
    {"code": "hu", "population": "9M" },
    {"code": "is", "population": "337K" },
    {"code": "in", "population": "1.3B" },
    {"code": "id", "population": "266M" },
    {"code": "ir", "population": "82M" },
    {"code": "iq", "population": "39M" },
    {"code": "ie", "population": "4M" },
    {"code": "il", "population": "8M" },
    {"code": "it", "population": "59M" },
    {"code": "jm", "population": "2M" },
    {"code": "jp", "population": "127M" },
    {"code": "jo", "population": "9M" },
    {"code": "kz", "population": "18M" },
    {"code": "ke", "population": "50M" },
    {"code": "ki", "population": "118K" },
    {"code": "kw", "population": "4M" },
    {"code": "kg", "population": "6M" },
    {"code": "la", "population": "6M" },
    {"code": "lv", "population": "1M" },
    {"code": "lb", "population": "6M" },
    {"code": "ls", "population": "2M" },
    {"code": "lr", "population": "4M" },
    {"code": "ly", "population": "6M" },
    {"code": "li", "population": "38K" },
    {"code": "lt", "population": "2M" },
    {"code": "lu", "population": "590K" },
    {"code": "mo", "population": "632K" },
    {"code": "mg", "population": "26M" },
    {"code": "mw", "population": "19M" },
    {"code": "my", "population": "32M" },
    {"code": "mv", "population": "444K" },
    {"code": "ml", "population": "19M" },
    {"code": "mt", "population": "432K" },
    {"code": "mh", "population": "53K" },
    {"code": "mq", "population": "385K" },
    {"code": "mr", "population": "4M" },
    {"code": "mu", "population": "1M" },
    {"code": "yt", "population": "259K" },
    {"code": "mx", "population": "130M" },
    {"code": "fm", "population": "106K" },
    {"code": "md", "population": "4M" },
    {"code": "mc", "population": "38K" },
    {"code": "mn", "population": "3M" },
    {"code": "ms", "population": "5K" },
    {"code": "ma", "population": "36M" },
    {"code": "mz", "population": "30M" },
    {"code": "mm", "population": "53M" },
    {"code": "na", "population": "2M" },
    {"code": "nr", "population": "11K" },
    {"code": "np", "population": "29M" },
    {"code": "nl", "population": "17M" },
    {"code": "nc", "population": "279K" },
    {"code": "nz", "population": "4M" },
    {"code": "ni", "population": "6M" },
    {"code": "ne", "population": "22M" },
    {"code": "ng", "population": "195M" },
    {"code": "nu", "population": "1K" },
    {"code": "mp", "population": "55K" },
    {"code": "no", "population": "5M" },
    {"code": "om", "population": "4M" },
    {"code": "pk", "population": "200M" },
    {"code": "pw", "population": "21K" },
    {"code": "pa", "population": "4M" },
    {"code": "pg", "population": "8M" },
    {"code": "py", "population": "6M" },
    {"code": "pe", "population": "32M" },
    {"code": "ph", "population": "106M" },
    {"code": "pl", "population": "38M" },
    {"code": "pt", "population": "10M" },
    {"code": "pr", "population": "3M" },
    {"code": "qa", "population": "2M" },
    {"code": "re", "population": "883K" },
    {"code": "ro", "population": "19M" },
    {"code": "ru", "population": "143M" },
    {"code": "rw", "population": "12M" },
    {"code": "sh", "population": "4K" },
    {"code": "kn", "population": "55K" },
    {"code": "lc", "population": "179K" },
    {"code": "pm", "population": "6K" },
    {"code": "ws", "population": "197K" },
    {"code": "sm", "population": "33K" },
    {"code": "st", "population": "208K" },
    {"code": "sa", "population": "33M" },
    {"code": "sn", "population": "16M" },
    {"code": "cs", "population": "8M" },
    {"code": "sc", "population": "95K" },
    {"code": "sl", "population": "7M" },
    {"code": "sg", "population": "5M" },
    {"code": "sk", "population": "5M" },
    {"code": "si", "population": "2M" },
    {"code": "sb", "population": "623K" },
    {"code": "so", "population": "15M" },
    {"code": "za", "population": "57M" },
    {"code": "es", "population": "46M" },
    {"code": "lk", "population": "20M" },
    {"code": "sd", "population": "41M" },
    {"code": "sr", "population": "568K" },
    {"code": "sz", "population": "1M" },
    {"code": "se", "population": "9M" },
    {"code": "ch", "population": "8M" },
    {"code": "sy", "population": "18M" },
    {"code": "tw", "population": "23M" },
    {"code": "tj", "population": "9M" },
    {"code": "th", "population": "69M" },
    {"code": "tl", "population": "1M" },
    {"code": "tg", "population": "7M" },
    {"code": "tk", "population": "1K" },
    {"code": "to", "population": "109K" },
    {"code": "tt", "population": "1M" },
    {"code": "tn", "population": "11M" },
    {"code": "tr", "population": "81M" },
    {"code": "tm", "population": "5M" },
    {"code": "tc", "population": "35K" },
    {"code": "tv", "population": "11K" },
    {"code": "gb", "population": "66M" },
    {"code": "us", "population": "326M" },
    {"code": "vi", "population": "104K" },
    {"code": "ug", "population": "44M" },
    {"code": "ua", "population": "44M" },
    {"code": "ae", "population": "9M" },
    {"code": "uy", "population": "3M" },
    {"code": "uz", "population": "32M" },
    {"code": "vu", "population": "282K" },
    {"code": "ve", "population": "32M" },
    {"code": "vn", "population": "96M" },
    {"code": "wf", "population": "11K" },
    {"code": "eh", "population": "567K" },
    {"code": "ye", "population": "28M" },
    {"code": "zm", "population": "17M" },
    {"code": "zw", "population": "16M" },
]);