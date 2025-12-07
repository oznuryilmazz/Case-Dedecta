<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Checkbox from "../components/UI/Checkbox.svelte";
  import TagBadge from "../components/Tag/TagBadge.svelte";
  import { TAG_COLORS } from "../lib/stores/tagStore.js";

  const { Story } = defineMeta({
    title: "UI/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
## Checkbox Component

Özelleştirilmiş checkbox komponenti. Seçili/seçili değil durumları için farklı stiller.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | Seçili durumu |

### Events
- \`change\`: Checkbox durumu değiştiğinde tetiklenir

### Stiller
- **Seçili değil**: Gri border (#71717A)
- **Seçili**: Mavi arka plan (#1D4ED8), beyaz tik
          `,
        },
      },
      layout: "centered",
    },
  });

  const tags = [
    { id: "1", name: "Kurultay", color: TAG_COLORS[0] },
    { id: "2", name: "CHP", color: TAG_COLORS[4] },
    { id: "3", name: "Miting", color: TAG_COLORS[4] },
  ];
</script>

<Story name="Durum / Seçili Değil">
  <Checkbox checked={false} />
</Story>

<Story name="Durum / Seçili">
  <Checkbox checked={true} />
</Story>

<Story name="Durum / Karşılaştırma">
  <div class="flex items-center gap-6">
    <div class="text-center">
      <p class="text-xs text-gray-500 mb-2">Seçili Değil</p>
      <Checkbox checked={false} />
    </div>
    <div class="text-center">
      <p class="text-xs text-gray-500 mb-2">Seçili</p>
      <Checkbox checked={true} />
    </div>
  </div>
</Story>

<Story name="Kullanım / Metin Etiketi ile">
  <label class="flex items-center gap-3 cursor-pointer">
    <Checkbox checked={false} />
    <span class="text-sm text-gray-700">Seçeneği kabul ediyorum</span>
  </label>
</Story>

<Story name="Kullanım / Seçili Metin Etiketi ile">
  <label class="flex items-center gap-3 cursor-pointer">
    <Checkbox checked={true} />
    <span class="text-sm text-gray-700">Seçeneği kabul ediyorum</span>
  </label>
</Story>

<Story name="Kullanım / TagBadge ile">
  <label class="flex items-center gap-3 cursor-pointer">
    <Checkbox checked={false} />
    <TagBadge tag={tags[0]} size="sm" />
  </label>
</Story>

<Story name="Kullanım / Seçili TagBadge ile">
  <label class="flex items-center gap-3 cursor-pointer">
    <Checkbox checked={true} />
    <TagBadge tag={tags[0]} size="sm" />
  </label>
</Story>

<Story name="Etiket Listesi / Hiçbiri Seçili Değil">
  <div class="space-y-3">
    {#each tags as tag}
      <label class="flex items-center gap-3 cursor-pointer">
        <Checkbox checked={false} />
        <TagBadge {tag} size="sm" />
      </label>
    {/each}
  </div>
</Story>

<Story name="Etiket Listesi / Bir Tanesi Seçili">
  <div class="space-y-3">
    <label class="flex items-center gap-3 cursor-pointer">
      <Checkbox checked={true} />
      <TagBadge tag={tags[0]} size="sm" />
    </label>
    <label class="flex items-center gap-3 cursor-pointer">
      <Checkbox checked={false} />
      <TagBadge tag={tags[1]} size="sm" />
    </label>
    <label class="flex items-center gap-3 cursor-pointer">
      <Checkbox checked={false} />
      <TagBadge tag={tags[2]} size="sm" />
    </label>
  </div>
</Story>

<Story name="Etiket Listesi / Birden Fazla Seçili">
  <div class="space-y-3">
    <label class="flex items-center gap-3 cursor-pointer">
      <Checkbox checked={true} />
      <TagBadge tag={tags[0]} size="sm" />
    </label>
    <label class="flex items-center gap-3 cursor-pointer">
      <Checkbox checked={false} />
      <TagBadge tag={tags[1]} size="sm" />
    </label>
    <label class="flex items-center gap-3 cursor-pointer">
      <Checkbox checked={true} />
      <TagBadge tag={tags[2]} size="sm" />
    </label>
  </div>
</Story>

<Story name="Etiket Listesi / Tümü Seçili">
  <div class="space-y-3">
    {#each tags as tag}
      <label class="flex items-center gap-3 cursor-pointer">
        <Checkbox checked={true} />
        <TagBadge {tag} size="sm" />
      </label>
    {/each}
  </div>
</Story>

<Story name="Etiket Listesi / Tüm Renkler">
  <div class="space-y-3">
    {#each TAG_COLORS as color, i}
      <label class="flex items-center gap-3 cursor-pointer">
        <Checkbox checked={i % 2 === 0} />
        <TagBadge tag={{ id: color.id, name: color.name, color }} size="sm" />
      </label>
    {/each}
  </div>
</Story>

<Story name="Edge Case / Uzun Etiket Adı">
  <label class="flex items-center gap-3 cursor-pointer">
    <Checkbox checked={false} />
    <TagBadge
      tag={{
        id: "1",
        name: "Çok Uzun Bir Etiket Adı Buraya Yazılıyor",
        color: TAG_COLORS[0],
      }}
      size="sm"
    />
  </label>
</Story>

<Story name="Edge Case / Çok Fazla Etiket">
  <div class="space-y-3 max-h-[300px] overflow-auto">
    {#each Array(10) as _, i}
      <label class="flex items-center gap-3 cursor-pointer">
        <Checkbox checked={i < 3} />
        <TagBadge
          tag={{
            id: String(i),
            name: `Etiket ${i + 1}`,
            color: TAG_COLORS[i % TAG_COLORS.length],
          }}
          size="sm"
        />
      </label>
    {/each}
  </div>
</Story>

<Story name="Senaryo / Etiket Seçimi Başlangıç">
  <div class="p-6 bg-white rounded-xl shadow max-w-sm">
    <h3 class="text-lg font-bold text-gray-800 mb-4">Etiket Seç</h3>
    <div class="space-y-3">
      {#each tags as tag}
        <label class="flex items-center gap-3 cursor-pointer">
          <Checkbox checked={false} />
          <TagBadge {tag} size="sm" />
        </label>
      {/each}
    </div>
    <p class="text-xs text-gray-500 mt-4">Henüz seçim yapılmadı</p>
  </div>
</Story>

<Story name="Senaryo / Etiket Seçimi Tamamlandı">
  <div class="p-6 bg-white rounded-xl shadow max-w-sm">
    <h3 class="text-lg font-bold text-gray-800 mb-4">Etiket Seç</h3>
    <div class="space-y-3">
      <label class="flex items-center gap-3 cursor-pointer">
        <Checkbox checked={true} />
        <TagBadge tag={tags[0]} size="sm" />
      </label>
      <label class="flex items-center gap-3 cursor-pointer">
        <Checkbox checked={true} />
        <TagBadge tag={tags[1]} size="sm" />
      </label>
      <label class="flex items-center gap-3 cursor-pointer">
        <Checkbox checked={false} />
        <TagBadge tag={tags[2]} size="sm" />
      </label>
    </div>
    <p class="text-xs text-gray-500 mt-4">2 etiket seçildi</p>
  </div>
</Story>

<Story name="Senaryo / Tweet Seçimi">
  <div class="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
    <Checkbox checked={true} />
    <div>
      <p class="font-bold text-gray-800">Dennis Callis</p>
      <p class="text-sm text-gray-500">@stephanienicol</p>
    </div>
  </div>
</Story>

<Story name="Senaryo / Tweet Seçili Değil">
  <div class="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
    <Checkbox checked={false} />
    <div>
      <p class="font-bold text-gray-800">Dennis Callis</p>
      <p class="text-sm text-gray-500">@stephanienicol</p>
    </div>
  </div>
</Story>
