import { defineConfig } from 'vitepress';

const referenceGroups = [
  ['触发器', 'Triggers', ['trigger_start', 'trigger_crontab', 'trigger_form', 'trigger_async', 'trigger_sync', 'mcp', 'trigger_error', 'trigger_rsyslog', 'trigger_kafka', 'trigger_redis']],
  ['流程逻辑', 'Flow logic', ['if', 'do_nothing', 'parallel', 'aggregation', 'delay', 'approval', 'event_gateway', 'sub_workflow', 'throw_exception', 'read_write_local_variable', 'form_task', 'stop', 'callback', 'output']],
  ['工具与数据', 'Tools and data', ['http_request', 'ssh', 'write_file', 'json_to_csv', 'database', 'knowledge_retrieval', 'data_table_query', 'data_table_insert', 'data_table_update', 'data_table_delete']],
  ['AI 与开发', 'AI and development', ['llm', 'iolinker_agent', 'script', 'multi-script', 'send_telegram_message']]
];
const titles = {
  trigger_start: ['手动触发', 'Manual trigger'], trigger_crontab: ['Crontab 触发', 'Crontab trigger'], trigger_form: ['表单触发', 'Form trigger'], trigger_async: ['异步 API', 'Async API'], trigger_sync: ['同步 API', 'Sync API'], mcp: ['MCP 触发', 'MCP trigger'], trigger_error: ['错误触发', 'Error trigger'], trigger_rsyslog: ['Rsyslog', 'Rsyslog'], trigger_kafka: ['Kafka', 'Kafka'], trigger_redis: ['Redis', 'Redis'], if: ['条件判断', 'Condition'], do_nothing: ['空操作', 'No-op'], parallel: ['并行分支', 'Parallel'], aggregation: ['并行汇聚', 'Aggregation'], delay: ['延时', 'Delay'], approval: ['审批', 'Approval'], event_gateway: ['事件网关', 'Event gateway'], sub_workflow: ['子流程', 'Sub-workflow'], throw_exception: ['抛出异常', 'Throw exception'], read_write_local_variable: ['局部变量', 'Local variables'], form_task: ['表单任务', 'Form task'], stop: ['停止执行', 'Stop'], callback: ['回调', 'Callback'], output: ['流程输出', 'Output'], http_request: ['HTTP 请求', 'HTTP request'], ssh: ['SSH', 'SSH'], write_file: ['文件写入', 'Write file'], json_to_csv: ['JSON 转 CSV', 'JSON to CSV'], database: ['数据库', 'Database'], knowledge_retrieval: ['知识检索节点', 'Knowledge retrieval node'], data_table_query: ['数据表查询', 'Query records'], data_table_insert: ['数据表插入', 'Insert records'], data_table_update: ['数据表更新', 'Update records'], data_table_delete: ['数据表删除', 'Delete records'], llm: ['LLM 节点', 'LLM node'], iolinker_agent: ['Agent 节点', 'Agent node'], script: ['代码执行', 'Script execution'], 'multi-script': ['多脚本', 'Multiple scripts'], send_telegram_message: ['Telegram 消息发送', 'Send Telegram message']
};

function sidebar(chinese) {
  const base = chinese ? '/zh/' : '/';
  const entry = (slug, zh, en) => ({ text: chinese ? zh : en, link: `${base}guide/${slug}` });
  return [
    { text: chinese ? '快速开始' : 'Quick start', items: [entry('quick-start', '完成第一个任务', 'Your first task'), entry('deployment', '安装与安全初始化', 'Installation and security')] },
    { text: chinese ? 'Agent 工作台' : 'Agent workspace', items: [entry('agent-workspace', '对话与会话', 'Conversations and sessions'), entry('agents', '创建与配置 Agent', 'Create and configure agents'), entry('sub-agents', '组合子 Agent', 'Compose sub-agents'), entry('schedules', 'Agent 定时任务', 'Agent scheduled tasks'), entry('remote-control', '企微 Agent 遥控', 'WeCom agent remote control')] },
    { text: chinese ? '工作流' : 'Workflows', items: [entry('workflows', '创建、版本与排障', 'Create, version and troubleshoot')] },
    { text: chinese ? '数据与表单' : 'Data and forms', items: [entry('data-tables', '数据表管理', 'Manage data tables'), entry('forms', '表单与人工协作', 'Forms and human collaboration')] },
    { text: chinese ? '工具扩展' : 'Tool extensions', items: [entry('skills', '公共与专属技能', 'Shared and agent skills'), entry('mcp-tools', 'MCP 工具管理', 'Manage MCP tools'), entry('knowledge', '知识库与检索', 'Knowledge and retrieval')] },
    { text: chinese ? '管理与部署' : 'Administration', items: [entry('administration', '项目、角色与凭证', 'Projects, roles and credentials'), entry('deployment', '部署与能力边界', 'Deployment boundaries')] },
    { text: chinese ? '节点参考' : 'Node reference', collapsed: true, items: referenceGroups.map(([zh, en, names]) => ({ text: chinese ? zh : en, collapsed: true, items: names.map(name => ({ text: titles[name][chinese ? 0 : 1], link: `${base}${name}` })) })).concat(chinese ? [{ text: '企业平台消息发送', collapsed: true, items: ['send_wechat_work_message', 'send_feishu_bot_message', 'send_dingding_bot_message'].map((name, index) => ({ text: ['企业微信', '飞书', '钉钉'][index], link: `${base}${name}` })) }] : []) }
  ];
}

function theme(chinese) {
  const base = chinese ? '/zh/' : '/';
  return {
    nav: [{ text: chinese ? '指南' : 'Guides', link: `${base}guide/quick-start` }, { text: chinese ? '节点参考' : 'Reference', link: `${base}trigger_start` }, { text: chinese ? '官网' : 'Website', link: 'https://iolinker.com' }, { text: chinese ? '下载' : 'Download', link: 'https://iolinker.com/#cta' }],
    sidebar: sidebar(chinese),
    outline: { level: [2, 3], label: chinese ? '本页目录' : 'On this page' },
    docFooter: { prev: chinese ? '上一页' : 'Previous', next: chinese ? '下一页' : 'Next' },
    sidebarMenuLabel: chinese ? '文档导航' : 'Documentation menu',
    darkModeSwitchLabel: chinese ? '外观' : 'Appearance',
    lightModeSwitchTitle: chinese ? '切换到浅色' : 'Switch to light theme',
    darkModeSwitchTitle: chinese ? '切换到深色' : 'Switch to dark theme',
    returnToTopLabel: chinese ? '返回顶部' : 'Back to top',
    langMenuLabel: chinese ? '语言' : 'Language',
    footer: { message: chinese ? '以当前客户界面为准，适用条件见各指南。' : 'The installed customer interface is the source of truth. See guide prerequisites.', copyright: '© 2026 IOLinker' }
  };
}

export default defineConfig({
  title: 'IOLinker',
  description: 'The agent and workflow automation workspace — product guides and node reference.',
  cleanUrls: false,
  srcExclude: ['**/_*.md', '**/README.md', 'public/**'],
  lastUpdated: false,
  sitemap: { hostname: 'https://doc.iolinker.com' },
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }], ['meta', { name: 'referrer', content: 'strict-origin-when-cross-origin' }]],
  locales: {
    root: { label: 'English', lang: 'en', themeConfig: theme(false) },
    zh: { label: '简体中文', lang: 'zh-CN', link: '/zh/', description: 'Agent 与工作流自动化工作台的产品指南与节点参考。', themeConfig: theme(true) }
  },
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'IOLinker / Docs',
    search: { provider: 'local', options: { locales: { zh: { translations: { button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' }, modal: { noResultsText: '没有找到相关内容', resetButtonTitle: '清除搜索', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } } } } } } }
  }
});
