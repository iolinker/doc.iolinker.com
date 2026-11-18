<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

const { lang, page, frontmatter } = useData();
const chinese = computed(() => lang.value === 'zh-CN');
const source = computed(() => page.value.relativePath || '');
const guide = computed(() => source.value.includes('guide/'));
const legacy = computed(() => frontmatter.value.legacy === true || /(?:trigger_(?:telegram|dingtalk|feishu|wecom_aibot|daemon|socket|weixin)|telegram-bot-trigger|1-minute-telegram|how_to_create_telegram_bot|how_to_get_telegram_userid|how-to-create-telegram-bot-in-one-minute|(?:^|\/)(?:de-duplicate|do-nothing|email-approval|error-handler|for-loop|javascript-script|local-cmd|lua-function|python-script|read-rss-feed|send-telegram-file-message|ssh-client|webhook|webpage|how-to-create-code-snippet)\.md$)/.test(source.value));
const guideRoot = computed(() => chinese.value ? '/zh/guide/' : '/guide/');
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <div v-if="legacy" class="scope-note legacy-note" role="note">
        <strong>{{ chinese ? '历史兼容文档' : 'Legacy documentation' }}</strong>
        <p>{{ chinese ? '本页保留用于旧链接和存量配置参考，不代表当前客户界面仍提供新建入口。请先核对适用范围，再阅读当前指南。' : 'Retained for existing links and configurations. This page does not establish that the current interface still offers a creation entry. Check applicability and follow the current guides.' }}</p>
        <a :href="`${guideRoot}legacy.html`">{{ chinese ? '历史能力说明 →' : 'Legacy capability notes →' }}</a>
      </div>
      <div v-else class="scope-note" role="note">
        <span class="scope-label">{{ chinese ? (guide ? '产品指南' : '节点与配置参考') : (guide ? 'PRODUCT GUIDE' : 'NODE AND CONFIGURATION REFERENCE') }}</span>
        <p>{{ chinese ? '以当前客户界面核对；功能受模型、工具、角色与部署配置影响。当前源码内容不等同于所有已发布安装包。旧图片在复核并重拍前不展示。' : 'Checked against the current customer interface. Capabilities depend on model, tool, role and deployment settings; current source does not describe every published package. Historical images are withheld pending review and recapture.' }}</p>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
