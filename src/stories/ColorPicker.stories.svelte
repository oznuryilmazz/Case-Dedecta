<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ColorPicker from "../components/UI/ColorPicker.svelte";
  import { TAG_COLORS } from "../lib/stores/tagStore.js";

  const { Story } = defineMeta({
    title: "UI/ColorPicker",
    component: ColorPicker,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
## ColorPicker Component

Etiket renk seçici komponenti. Çoklu renk seçenekleri sunar.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| colors | Array | [] | Renk seçenekleri dizisi |
| selected | Object | null | Seçili renk objesi |

### Events
- \`select\`: Renk seçildiğinde tetiklenir

### Renk Objesi Yapısı
\`\`\`js
{
  id: 'blue',
  name: 'Mavi',
  bg: 'bg-tag-blue',
}
\`\`\`

### Seçim Stili
Seçili renk çift shadow efekti ile gösterilir:
- İç: 2px beyaz
- Dış: 4px gri (#A1A1AA)
          `,
        },
      },
      layout: "centered",
    },
  });
</script>

<Story name="Renk / Mavi Seçili (Default)">
  <div class="w-[400px]">
    <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[0]} />
  </div>
</Story>

<Story name="Renk / Mor Seçili">
  <div class="w-[400px]">
    <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[1]} />
  </div>
</Story>

<Story name="Renk / Pembe Seçili">
  <div class="w-[400px]">
    <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[2]} />
  </div>
</Story>

<Story name="Renk / Turuncu Seçili">
  <div class="w-[400px]">
    <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[3]} />
  </div>
</Story>

<Story name="Renk / Yeşil Seçili">
  <div class="w-[400px]">
    <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[4]} />
  </div>
</Story>

<Story name="Renk / Turkuaz Seçili">
  <div class="w-[400px]">
    <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[5]} />
  </div>
</Story>

<Story name="Renk / Seçim Yok">
  <div class="w-[400px]">
    <ColorPicker colors={TAG_COLORS} selected={null} />
  </div>
</Story>

<Story name="Tüm Renkler / Karşılaştırma">
  <div class="space-y-4">
    {#each TAG_COLORS as color, i}
      <div class="flex items-center gap-4">
        <span class="w-20 text-sm text-gray-600">{color.name}:</span>
        <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[i]} />
      </div>
    {/each}
  </div>
</Story>

<Story name="Boyut / Dar Container">
  <div class="w-[300px]">
    <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[0]} />
  </div>
</Story>

<Story name="Boyut / Geniş Container">
  <div class="w-[500px]">
    <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[0]} />
  </div>
</Story>

<Story name="Edge Case / Tek Renk">
  <div class="w-[200px]">
    <ColorPicker colors={[TAG_COLORS[0]]} selected={TAG_COLORS[0]} />
  </div>
</Story>

<Story name="Edge Case / İki Renk">
  <div class="w-[200px]">
    <ColorPicker
      colors={[TAG_COLORS[0], TAG_COLORS[1]]}
      selected={TAG_COLORS[0]}
    />
  </div>
</Story>

<Story name="Edge Case / Üç Renk">
  <div class="w-[250px]">
    <ColorPicker
      colors={[TAG_COLORS[0], TAG_COLORS[1], TAG_COLORS[2]]}
      selected={TAG_COLORS[1]}
    />
  </div>
</Story>

<Story name="Senaryo / Yeni Etiket Oluşturma">
  <div class="p-6 bg-white rounded-xl shadow max-w-md">
    <h3 class="text-lg font-bold text-gray-800 mb-2">Yeni Etiket</h3>
    <p class="text-sm text-gray-600 mb-4">Renk seçin:</p>
    <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[0]} />
  </div>
</Story>

<Story name="Senaryo / Renk Değiştirme">
  <div class="p-6 bg-white rounded-xl shadow max-w-md">
    <h3 class="text-lg font-bold text-gray-800 mb-2">Etiket Düzenle</h3>
    <p class="text-sm text-gray-600 mb-4">Mevcut renk: Mor</p>
    <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[1]} />
  </div>
</Story>

<Story name="Senaryo / Etiket Önizleme ile">
  <div class="p-6 bg-white rounded-xl shadow max-w-md">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h3 class="text-lg font-bold text-gray-800">Yeni Etiket</h3>
        <p class="text-sm text-gray-600">Renk seçimi</p>
      </div>
      <span
        class="px-3 py-1 rounded-lg border text-sm font-bold border-tag-blue text-tag-blue bg-tag-blue-light"
      >
        Örnek görünüm
      </span>
    </div>
    <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[0]} />
  </div>
</Story>

<Story name="Senaryo / Farklı Önizleme Renkleri">
  <div class="space-y-6">
    {#each TAG_COLORS as color, i}
      <div class="p-4 bg-white rounded-xl shadow max-w-md">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-gray-600">{color.name} seçildi</span>
          <span
            class="px-3 py-1 rounded-lg border text-sm font-bold {color.border} {color.text} {color.bgLight}"
          >
            Örnek görünüm
          </span>
        </div>
        <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[i]} />
      </div>
    {/each}
  </div>
</Story>

<Story name="Karşılaştırma / Seçili vs Seçili Değil">
  <div class="space-y-6">
    <div>
      <p class="text-xs text-gray-500 mb-2">Seçili (Mavi)</p>
      <div class="w-[400px]">
        <ColorPicker colors={TAG_COLORS} selected={TAG_COLORS[0]} />
      </div>
    </div>
    <div>
      <p class="text-xs text-gray-500 mb-2">Seçim Yok</p>
      <div class="w-[400px]">
        <ColorPicker colors={TAG_COLORS} selected={null} />
      </div>
    </div>
  </div>
</Story>
