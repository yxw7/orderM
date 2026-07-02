import { getTodayString } from '@/modules/subscriber/data/subscriber-manage';

export const extraLibrarians = [
  { account: 'DINGYANGYANG', name: '丁洋洋' },
  { account: 'STLIB01', name: '首图馆员01' },
  { account: 'XGRQP', name: '西宫人情配' },
  { account: 'ZHOUL', name: '周林' }
];

export const librarianRowsRaw = [
  { account: 'STST1XGW', name: '首图视听夏高娃', subscribers: '视听中心, 数字资源', date: '2020-06-05' },
  { account: 'STDFZLT', name: '首图地方文献赵兰天', subscribers: '地方文献', date: '2025-01-25' },
  { account: 'STECZB44', name: '首图采编少儿编目4', subscribers: '少儿中文, 少儿外文', date: '2025-01-22' },
  { account: 'STECZB61', name: '首图少儿出版荆要武', subscribers: '少儿中文', date: '2025-01-21' },
  { account: 'STECZB62', name: '首图少儿中采缪文娜', subscribers: '少儿中文', date: '2025-01-20' },
  { account: 'STECZB63', name: '首图少儿中采张颖', subscribers: '少儿中文, 成人中文', date: '2025-01-18' },
  { account: 'STECZB65', name: '首图采编少儿审校5', subscribers: '少儿中文', date: '2025-01-17' },
  { account: 'STECZB42', name: '首图采编赵玉萍', subscribers: '采编中心、视听中心', date: '2025-01-16' },
  { account: 'STDFZLT01', name: '首图地方文献赵兰天01', subscribers: '地方文献', date: '2025-01-15' },
  { account: 'STECZB49', name: '首图采编少儿编目9', subscribers: '少儿阅读', date: '2025-01-14' },
  { account: 'STCBSJHY04', name: '首图采编数据核验4', subscribers: '采编中心', date: '2025-01-13' },
  { account: 'STFYBM03', name: '首图非遗审校回溯3', subscribers: '古籍民国图书', date: '2025-01-12' },
  { account: 'STECWB64', name: '少儿西文编目4', subscribers: '少儿外文, 外文书刊', date: '2025-01-11' },
  { account: 'STCZC606', name: '首图采编采访606', subscribers: '成人中文, 成人外文, 少儿中文', date: '2025-01-10' },
  { account: 'STCBSJHY08', name: '首图采编数据核验8', subscribers: '采编中心', date: '2025-01-09' },
  { account: 'STFYCF03', name: '首图非遗采编人天1', subscribers: '古籍民国图书', date: '2025-01-08' },
  { account: 'STFYCF02', name: '首图非遗采编新华连锁2', subscribers: '采编中心', date: '2025-01-07' },
  { account: 'STDFWB06', name: '新华连锁4', subscribers: '采编中心', date: '2025-01-06' },
  { account: 'STDFWB05', name: '新华连锁3', subscribers: '采编中心', date: '2025-01-05' },
  { account: 'STDFZYN01', name: '首图地方文献张一楠01', subscribers: '地方文献', date: '2020-06-04' },
  { account: 'STFYBM04', name: '首图非遗审校回溯4', subscribers: '古籍, 特藏部', date: '2020-06-03' },
  { account: 'STFYCF01', name: '首图非遗采编新华连锁1', subscribers: '特藏部', date: '2020-06-02' },
  { account: 'STFYCF04', name: '首图非遗采编人天2', subscribers: '历史文献', date: '2020-06-01' },
  { account: 'STECZB01', name: '首图采编编目1', subscribers: '流通部', date: '2020-05-31' },
  { account: 'STECZB02', name: '首图采编编目2', subscribers: '东馆采编', date: '2020-05-30' },
  { account: 'STECZB03', name: '首图采编编目3', subscribers: '西馆采编', date: '2020-05-29' },
  { account: 'STLT001', name: '首图流通编目1', subscribers: '期刊中心', date: '2020-05-28' },
  { account: 'STLT002', name: '首图流通编目2', subscribers: '参考咨询', date: '2020-05-27' },
  { account: 'STREF01', name: '首图参考咨询1', subscribers: '参考咨询', date: '2020-05-26' },
  { account: 'STREF02', name: '首图参考咨询2', subscribers: '数字资源', date: '2020-05-25' },
  { account: 'STPER01', name: '首图期刊编目1', subscribers: '期刊中心', date: '2020-05-24' },
  { account: 'STPER02', name: '首图期刊编目2', subscribers: '外文书刊', date: '2020-05-23' },
  { account: 'STHIS01', name: '首图历史文献1', subscribers: '历史文献', date: '2020-05-22' },
  { account: 'STHIS02', name: '首图历史文献2', subscribers: '历史文献', date: '2020-05-21' },
  { account: 'STADU01', name: '首图成人中文编目1', subscribers: '成人中文', date: '2020-05-20' },
  { account: 'STADU02', name: '首图成人外文编目1', subscribers: '成人外文', date: '2020-05-19' },
  { account: 'STCHI01', name: '首图少儿中文编目1', subscribers: '少儿中文', date: '2020-05-18' },
  { account: 'STCHI02', name: '首图少儿外文编目1', subscribers: '少儿外文', date: '2020-05-17' },
  { account: 'STSPE01', name: '首图特藏编目1', subscribers: '特藏部', date: '2020-05-16' },
  { account: 'STSPE02', name: '首图特藏编目2', subscribers: '古籍', date: '2020-05-15' },
  { account: 'STEAST01', name: '首图东馆采编1', subscribers: '东馆采编', date: '2020-05-14' },
  { account: 'STWEST01', name: '首图西馆采编1', subscribers: '西馆采编', date: '2020-05-13' },
  { account: 'STFLOW01', name: '首图流通部1', subscribers: '流通部', date: '2020-05-12' },
  { account: 'STFLOW02', name: '首图流通部2', subscribers: '流通部', date: '2020-05-11' },
  { account: 'STAV01', name: '首图视听编目1', subscribers: '视听中心', date: '2020-05-10' },
  { account: 'STAV02', name: '首图视听编目2', subscribers: '视听中心', date: '2020-05-09' },
  { account: 'STCB01', name: '首图采编中心1', subscribers: '采编中心', date: '2020-05-08' },
  { account: 'STCB02', name: '首图采编中心2', subscribers: '采编中心', date: '2020-05-07' }
];

export const LIBRARIAN_COLUMNS = [
  { key: 'id', label: '序号' },
  { key: 'account', label: '馆员账号' },
  { key: 'name', label: '馆员姓名' },
  { key: 'subscribers', label: '订户名称', minWidth: 'min-w-[200px]' },
  { key: 'date', label: '关联日期' },
  { key: 'actions', label: '操作', sticky: true }
];

export const librarianSearchFields = [
  { key: 'account', label: '馆员账号' },
  { key: 'name', label: '馆员姓名' },
  { key: 'subscriberName', label: '订户名称' },
  { key: 'associateDate', label: '关联日期', type: 'dateRange', startKey: 'associateDateStart', endKey: 'associateDateEnd' }
];

export function createInitialLibrarianRows() {
  return librarianRowsRaw.map((row, index) => ({ ...row, id: index + 1 }));
}

export function buildAllLibrarianPool(rows = createInitialLibrarianRows()) {
  const accounts = new Set([
    ...rows.map(row => row.account),
    ...extraLibrarians.map(item => item.account)
  ]);
  for (let i = 1; i <= 326; i += 1) {
    accounts.add(`STSYS${String(i).padStart(3, '0')}`);
  }
  return [...accounts].sort((a, b) => a.localeCompare(b, 'en'));
}

export function buildLibrarianNameByAccount(rows = createInitialLibrarianRows()) {
  const map = {};
  rows.forEach(row => { map[row.account] = row.name; });
  extraLibrarians.forEach(item => {
    if (!map[item.account]) map[item.account] = item.name;
  });
  for (let i = 1; i <= 326; i += 1) {
    const account = `STSYS${String(i).padStart(3, '0')}`;
    if (!map[account]) map[account] = `系统馆员${String(i).padStart(3, '0')}`;
  }
  return map;
}

export function buildSubscriberLibrarianAssoc(rows = createInitialLibrarianRows()) {
  const map = {};
  rows.forEach(row => {
    row.subscribers.split(/[,、]/).map(text => text.trim()).filter(Boolean).forEach(subscriber => {
      if (!map[subscriber]) map[subscriber] = [];
      if (!map[subscriber].includes(row.account)) map[subscriber].push(row.account);
    });
  });
  return map;
}

export function syncLibrarianRowsFromAssoc(rows, assoc, nameByAccount) {
  const librarianSubscriberMap = {};
  Object.entries(assoc).forEach(([subscriber, accounts]) => {
    accounts.forEach(account => {
      if (!librarianSubscriberMap[account]) librarianSubscriberMap[account] = [];
      if (!librarianSubscriberMap[account].includes(subscriber)) {
        librarianSubscriberMap[account].push(subscriber);
      }
    });
  });

  const existingAccounts = new Set(rows.map(row => row.account));
  Object.keys(librarianSubscriberMap).forEach(account => {
    if (!existingAccounts.has(account)) {
      rows.push({
        id: rows.length + 1,
        account,
        name: nameByAccount[account] || account,
        subscribers: librarianSubscriberMap[account].join(', '),
        date: getTodayString()
      });
      existingAccounts.add(account);
    }
  });

  rows.forEach(row => {
    row.subscribers = (librarianSubscriberMap[row.account] || []).join(', ');
  });
}

export function filterLibrarianRows(rows, search = {}) {
  return rows.filter(row => {
    if (search.account && !row.account.includes(search.account.trim())) return false;
    if (search.name && !row.name.includes(search.name.trim())) return false;
    if (search.subscriberName && !row.subscribers.includes(search.subscriberName.trim())) return false;
    if (search.associateDateStart && row.date < search.associateDateStart) return false;
    if (search.associateDateEnd && row.date > search.associateDateEnd) return false;
    return true;
  });
}

export function getLibrarianNamesByAccounts(accounts, nameByAccount) {
  return accounts.map(account => nameByAccount[account] || account);
}
