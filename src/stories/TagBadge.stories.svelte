<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import TagBadge from "../components/Tag/TagBadge.svelte";
  import { TAG_COLORS } from "../lib/stores/tagStore.js";

  const { Story } = defineMeta({
    title: "Components/Tag/TagBadge",
    component: TagBadge,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
## TagBadge Component

Outline stili etiket badge komponenti. Figma tasarımına uygun.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| tag | Tag | required | Etiket objesi |
| removable | boolean | false | Kaldırılabilir durumu |
| size | 'sm' \\| 'md' | 'md' | Boyut |

### Tag Objesi Yapısı
\`\`\`js
{
  id: 'tag-1',
  name: 'Kurultay',
  color: {
    border: 'border-tag-blue',
    text: 'text-tag-blue',
    bgLight: 'bg-tag-blue-light'
  }
}
\`\`\`

### Events
- \`click\`: Etiket tıklandığında
- \`remove\`: Kaldır butonu tıklandığında (removable=true ise)
          `,
        },
      },
      layout: "centered",
    },
  });
</script>

<Story name="Temel / Default">
  <TagBadge tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }} />
</Story>

<Story name="Temel / Kaldırılabilir">
  <TagBadge
    tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }}
    removable
  />
</Story>

<Story name="Boyut / Small">
  <TagBadge
    tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }}
    size="sm"
  />
</Story>

<Story name="Boyut / Medium">
  <TagBadge
    tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }}
    size="md"
  />
</Story>

<Story name="Boyut / Karşılaştırma">
  <div class="flex items-center gap-4">
    <div class="text-center">
      <p class="text-xs text-gray-500 mb-2">Small</p>
      <TagBadge
        tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }}
        size="sm"
      />
    </div>
    <div class="text-center">
      <p class="text-xs text-gray-500 mb-2">Medium</p>
      <TagBadge
        tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }}
        size="md"
      />
    </div>
  </div>
</Story>

<Story name="Renk / Mavi">
  <TagBadge tag={{ id: "1", name: "Mavi Etiket", color: TAG_COLORS[0] }} />
</Story>

<Story name="Renk / Mor">
  <TagBadge tag={{ id: "1", name: "Mor Etiket", color: TAG_COLORS[1] }} />
</Story>

<Story name="Renk / Pembe">
  <TagBadge tag={{ id: "1", name: "Pembe Etiket", color: TAG_COLORS[2] }} />
</Story>

<Story name="Renk / Turuncu">
  <TagBadge tag={{ id: "1", name: "Turuncu Etiket", color: TAG_COLORS[3] }} />
</Story>

<Story name="Renk / Yeşil">
  <TagBadge tag={{ id: "1", name: "Yeşil Etiket", color: TAG_COLORS[4] }} />
</Story>

<Story name="Renk / Turkuaz">
  <TagBadge tag={{ id: "1", name: "Turkuaz Etiket", color: TAG_COLORS[5] }} />
</Story>

<Story name="Renk / Tüm Renkler">
  <div class="flex flex-wrap gap-3">
    {#each TAG_COLORS as color}
      <TagBadge tag={{ id: color.id, name: color.name, color }} />
    {/each}
  </div>
</Story>

<Story name="Renk / Kaldırılabilir Tüm Renkler">
  <div class="flex flex-wrap gap-3">
    {#each TAG_COLORS as color}
      <TagBadge tag={{ id: color.id, name: color.name, color }} removable />
    {/each}
  </div>
</Story>

<Story name="Edge Case / Uzun Etiket Adı">
  <TagBadge
    tag={{
      id: "1",
      name: "Çok Uzun Bir Etiket Adı Buraya Yazılıyor",
      color: TAG_COLORS[0],
    }}
  />
</Story>

<Story name="Edge Case / Çok Uzun Etiket Adı">
  <TagBadge
    tag={{
      id: "1",
      name: "Bu gerçekten çok uzun bir etiket adıdır ve nasıl görüneceğini test ediyoruz",
      color: TAG_COLORS[0],
    }}
  />
</Story>

<Story name="Edge Case / Tek Karakter">
  <TagBadge tag={{ id: "1", name: "A", color: TAG_COLORS[0] }} />
</Story>

<Story name="Edge Case / Sayılar">
  <TagBadge tag={{ id: "1", name: "2024", color: TAG_COLORS[0] }} />
</Story>

<Story name="Edge Case / Özel Karakterler">
  <TagBadge tag={{ id: "1", name: "#Gündem!", color: TAG_COLORS[0] }} />
</Story>

<Story name="Edge Case / Emoji">
  <TagBadge tag={{ id: "1", name: "🎉 Kutlama", color: TAG_COLORS[0] }} />
</Story>

<Story name="Çoklu Etiket / Üç Etiket">
  <div class="flex flex-wrap gap-2">
    <TagBadge tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }} />
    <TagBadge tag={{ id: "2", name: "CHP", color: TAG_COLORS[4] }} />
    <TagBadge tag={{ id: "3", name: "Miting", color: TAG_COLORS[4] }} />
  </div>
</Story>

<Story name="Çoklu Etiket / Beş Etiket">
  <div class="flex flex-wrap gap-2">
    <TagBadge tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }} />
    <TagBadge tag={{ id: "2", name: "CHP", color: TAG_COLORS[4] }} />
    <TagBadge tag={{ id: "3", name: "Miting", color: TAG_COLORS[4] }} />
    <TagBadge tag={{ id: "4", name: "Spor", color: TAG_COLORS[1] }} />
    <TagBadge tag={{ id: "5", name: "Ekonomi", color: TAG_COLORS[3] }} />
  </div>
</Story>

<Story name="Çoklu Etiket / Çok Fazla Etiket (Wrap)">
  <div class="flex flex-wrap gap-2 max-w-md">
    {#each Array(12) as _, i}
      <TagBadge
        tag={{
          id: String(i),
          name: `Etiket ${i + 1}`,
          color: TAG_COLORS[i % TAG_COLORS.length],
        }}
        size="sm"
      />
    {/each}
  </div>
</Story>

<Story name="Örnek / Politik Etiketler">
  <div class="flex flex-wrap gap-2">
    <TagBadge tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }} />
    <TagBadge tag={{ id: "2", name: "CHP", color: TAG_COLORS[4] }} />
    <TagBadge tag={{ id: "3", name: "Miting", color: TAG_COLORS[4] }} />
    <TagBadge tag={{ id: "4", name: "Seçim", color: TAG_COLORS[3] }} />
  </div>
</Story>

<Story name="Örnek / Kategori Etiketleri">
  <div class="flex flex-wrap gap-2">
    <TagBadge tag={{ id: "1", name: "Spor", color: TAG_COLORS[0] }} />
    <TagBadge tag={{ id: "2", name: "Ekonomi", color: TAG_COLORS[3] }} />
    <TagBadge tag={{ id: "3", name: "Teknoloji", color: TAG_COLORS[1] }} />
    <TagBadge tag={{ id: "4", name: "Sağlık", color: TAG_COLORS[4] }} />
    <TagBadge tag={{ id: "5", name: "Eğitim", color: TAG_COLORS[5] }} />
  </div>
</Story>

<Story name="Örnek / Aktif Etiketler (Kaldırılabilir)">
  <div class="flex flex-wrap gap-2">
    <TagBadge tag={{ id: "1", name: "CHP", color: TAG_COLORS[0] }} removable />
    <TagBadge
      tag={{ id: "2", name: "Kurultay", color: TAG_COLORS[1] }}
      removable
    />
    <TagBadge
      tag={{ id: "3", name: "Miting", color: TAG_COLORS[4] }}
      removable
    />
    <TagBadge
      tag={{ id: "4", name: "Etiket", color: TAG_COLORS[2] }}
      removable
    />
  </div>
</Story>

<Story name="Senaryo / TwitterCard Etiket Bölümü">
  <div class="p-4 bg-semantic-bg-light rounded-xl max-w-md">
    <div class="flex items-start gap-3">
      <span class="text-semantic-text-muted font-bold text-sm shrink-0 pt-1">
        Etiketler
      </span>
      <div class="flex flex-wrap items-center gap-2">
        <TagBadge
          tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }}
          size="sm"
        />
        <TagBadge
          tag={{ id: "2", name: "CHP", color: TAG_COLORS[4] }}
          size="sm"
        />
        <TagBadge
          tag={{ id: "3", name: "Miting", color: TAG_COLORS[4] }}
          size="sm"
        />
      </div>
    </div>
  </div>
</Story>

<Story name="Senaryo / Modal Aktif Etiketler">
  <div class="p-5 bg-white rounded-xl shadow max-w-md">
    <p class="text-base font-bold text-semantic-text-secondary mb-3">
      Aktif Etiketler
    </p>
    <div class="flex flex-wrap gap-2">
      <TagBadge
        tag={{ id: "1", name: "CHP", color: TAG_COLORS[0] }}
        size="sm"
        removable
      />
      <TagBadge
        tag={{ id: "2", name: "Kurultay", color: TAG_COLORS[1] }}
        size="sm"
        removable
      />
      <TagBadge
        tag={{ id: "3", name: "Miting", color: TAG_COLORS[4] }}
        size="sm"
        removable
      />
    </div>
  </div>
</Story>

<Story name="Senaryo / Etiket Seçimi Listesi">
  <div class="space-y-3">
    {#each TAG_COLORS.slice(0, 3) as color, i}
      <label class="flex items-center gap-3 cursor-pointer">
        <input type="checkbox" class="checkbox checkbox-xs" checked={i === 0} />
        <TagBadge
          tag={{ id: color.id, name: ["Kurultay", "CHP", "Miting"][i], color }}
          size="sm"
        />
      </label>
    {/each}
  </div>
</Story>

<Story name="Karşılaştırma / Removable vs Non-Removable">
  <div class="space-y-4">
    <div>
      <p class="text-xs text-gray-500 mb-2">Kaldırılamaz</p>
      <TagBadge tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }} />
    </div>
    <div>
      <p class="text-xs text-gray-500 mb-2">Kaldırılabilir</p>
      <TagBadge
        tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }}
        removable
      />
    </div>
  </div>
</Story>

<Story name="Karşılaştırma / Small vs Medium Removable">
  <div class="space-y-4">
    <div>
      <p class="text-xs text-gray-500 mb-2">Small Removable</p>
      <TagBadge
        tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }}
        size="sm"
        removable
      />
    </div>
    <div>
      <p class="text-xs text-gray-500 mb-2">Medium Removable</p>
      <TagBadge
        tag={{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }}
        size="md"
        removable
      />
    </div>
  </div>
</Story>
