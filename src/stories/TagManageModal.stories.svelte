<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import TagManageModal from "../components/Modal/TagManageModal.svelte";
  import { TAG_COLORS } from "../lib/stores/tagStore.js";

  const { Story } = defineMeta({
    title: "Components/Modal/TagManageModal",
    component: TagManageModal,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
## TagManageModal Component

Etiket ekleme modalı. Tweet'lere etiket eklemek için kullanılır.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | false | Modal açık/kapalı durumu |
| availableTags | Tag[] | [] | Mevcut etiketler listesi |
| selectedTags | Tag[] | [] | Önceden seçili etiketler |

### Events
- \`close\`: Modal kapatıldığında
- \`newTag\`: "Yeni Ekle" butonuna tıklandığında
- \`submit\`: "Etiket Ekle" butonuna tıklandığında (seçili etiketlerle)

### Senaryo
1. Kullanıcı mevcut etiketlerden seçim yapar
2. Checkbox ile etiketleri işaretler
3. "Etiket Ekle" butonu aktif olur
4. "Yeni Ekle" ile yeni etiket oluşturma modalı açılır
          `,
        },
      },
      layout: "fullscreen",
      backgrounds: {
        default: "gray",
        values: [{ name: "gray", value: "#9ca3af" }],
      },
    },
  });

  const defaultTags = [
    { id: "1", name: "Kurultay", color: TAG_COLORS[0] },
    { id: "2", name: "CHP", color: TAG_COLORS[4] },
    { id: "3", name: "Miting", color: TAG_COLORS[4] },
  ];

  const manyTags = [
    { id: "1", name: "Kurultay", color: TAG_COLORS[0] },
    { id: "2", name: "CHP", color: TAG_COLORS[4] },
    { id: "3", name: "Miting", color: TAG_COLORS[4] },
    { id: "4", name: "Spor", color: TAG_COLORS[1] },
    { id: "5", name: "Ekonomi", color: TAG_COLORS[3] },
    { id: "6", name: "Teknoloji", color: TAG_COLORS[2] },
    { id: "7", name: "Sağlık", color: TAG_COLORS[5] },
    { id: "8", name: "Eğitim", color: TAG_COLORS[0] },
  ];

  const allColorTags = TAG_COLORS.map((color, i) => ({
    id: String(i),
    name: color.name,
    color,
  }));

  const singleTag = [{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }];

  const longNameTags = [
    { id: "1", name: "Çok Uzun Bir Etiket Adı", color: TAG_COLORS[0] },
    { id: "2", name: "Başka Bir Uzun Etiket", color: TAG_COLORS[1] },
    { id: "3", name: "Ve Bir Tane Daha Uzun", color: TAG_COLORS[2] },
  ];
</script>

<Story name="Temel / Seçim Yok (Disabled)">
  <div class="h-[600px] flex items-center justify-center">
    <TagManageModal
      isOpen={true}
      availableTags={defaultTags}
      selectedTags={[]}
    />
  </div>
</Story>

<Story name="Temel / Tek Seçim (Enabled)">
  <div class="h-[600px] flex items-center justify-center">
    <TagManageModal
      isOpen={true}
      availableTags={defaultTags}
      selectedTags={[defaultTags[0]]}
    />
  </div>
</Story>

<Story name="Temel / Çoklu Seçim">
  <div class="h-[600px] flex items-center justify-center">
    <TagManageModal
      isOpen={true}
      availableTags={defaultTags}
      selectedTags={[defaultTags[0], defaultTags[1]]}
    />
  </div>
</Story>

<Story name="Temel / Tümü Seçili">
  <div class="h-[600px] flex items-center justify-center">
    <TagManageModal
      isOpen={true}
      availableTags={defaultTags}
      selectedTags={defaultTags}
    />
  </div>
</Story>

<Story name="Etiket Sayısı / Tek Etiket">
  <div class="h-[500px] flex items-center justify-center">
    <TagManageModal isOpen={true} availableTags={singleTag} selectedTags={[]} />
  </div>
</Story>

<Story name="Etiket Sayısı / Üç Etiket">
  <div class="h-[600px] flex items-center justify-center">
    <TagManageModal
      isOpen={true}
      availableTags={defaultTags}
      selectedTags={[]}
    />
  </div>
</Story>

<Story name="Etiket Sayısı / Çok Fazla Etiket">
  <div class="h-[700px] flex items-center justify-center">
    <TagManageModal isOpen={true} availableTags={manyTags} selectedTags={[]} />
  </div>
</Story>

<Story name="Etiket Sayısı / Tüm Renkler">
  <div class="h-[700px] flex items-center justify-center">
    <TagManageModal
      isOpen={true}
      availableTags={allColorTags}
      selectedTags={[]}
    />
  </div>
</Story>

<Story name="Edge Case / Uzun Etiket Adları">
  <div class="h-[600px] flex items-center justify-center">
    <TagManageModal
      isOpen={true}
      availableTags={longNameTags}
      selectedTags={[]}
    />
  </div>
</Story>

<Story name="Edge Case / Çok Uzun Etiket Adları">
  <div class="h-[600px] flex items-center justify-center">
    <TagManageModal
      isOpen={true}
      availableTags={[
        {
          id: "1",
          name: "Bu gerçekten çok uzun bir etiket adıdır",
          color: TAG_COLORS[0],
        },
        {
          id: "2",
          name: "Başka bir çok uzun etiket adı örneği",
          color: TAG_COLORS[1],
        },
      ]}
      selectedTags={[]}
    />
  </div>
</Story>

<Story name="Edge Case / Tüm Renkler Seçili">
  <div class="h-[700px] flex items-center justify-center">
    <TagManageModal
      isOpen={true}
      availableTags={allColorTags}
      selectedTags={allColorTags}
    />
  </div>
</Story>

<Story name="Senaryo / Tweet'e Etiket Ekleme">
  <div class="h-[600px] flex items-center justify-center">
    <div class="text-center">
      <p class="text-white text-sm mb-4">
        Kullanıcı bir tweet seçti ve "Etiketleri yönet" tıkladı
      </p>
      <TagManageModal
        isOpen={true}
        availableTags={defaultTags}
        selectedTags={[]}
      />
    </div>
  </div>
</Story>

<Story name="Senaryo / Mevcut Etiketleri Düzenleme">
  <div class="h-[600px] flex items-center justify-center">
    <div class="text-center">
      <p class="text-white text-sm mb-4">
        Tweet'te zaten "Kurultay" etiketi var, kullanıcı daha fazla eklemek
        istiyor
      </p>
      <TagManageModal
        isOpen={true}
        availableTags={defaultTags}
        selectedTags={[defaultTags[0]]}
      />
    </div>
  </div>
</Story>

<Story name="Senaryo / Birden Fazla Etiket Seçimi">
  <div class="h-[600px] flex items-center justify-center">
    <div class="text-center">
      <p class="text-white text-sm mb-4">
        Kullanıcı 2 etiket seçti, "Etiket Ekle" butonu aktif
      </p>
      <TagManageModal
        isOpen={true}
        availableTags={defaultTags}
        selectedTags={[defaultTags[0], defaultTags[1]]}
      />
    </div>
  </div>
</Story>

<Story name="Senaryo / Yeni Etiket Oluşturma Öncesi">
  <div class="h-[600px] flex items-center justify-center">
    <div class="text-center">
      <p class="text-white text-sm mb-4">
        İstediği etiket yok, "+ Yeni Ekle" tıklayacak
      </p>
      <TagManageModal
        isOpen={true}
        availableTags={defaultTags}
        selectedTags={[]}
      />
    </div>
  </div>
</Story>

<Story name="Senaryo / Kategori Etiketleri Seçimi">
  <div class="h-[700px] flex items-center justify-center">
    <div class="text-center">
      <p class="text-white text-sm mb-4">
        Farklı kategorilerde etiketler mevcut
      </p>
      <TagManageModal
        isOpen={true}
        availableTags={manyTags}
        selectedTags={[manyTags[0], manyTags[3], manyTags[5]]}
      />
    </div>
  </div>
</Story>

<Story name="Senaryo / Toplu Tweet Etiketleme">
  <div class="h-[600px] flex items-center justify-center">
    <div class="text-center">
      <p class="text-white text-sm mb-4">
        Birden fazla tweet seçildi, hepsine aynı etiketler eklenecek
      </p>
      <TagManageModal
        isOpen={true}
        availableTags={defaultTags}
        selectedTags={[defaultTags[0], defaultTags[2]]}
      />
    </div>
  </div>
</Story>

<Story name="Karşılaştırma / Seçim Yok vs Seçim Var">
  <div class="flex gap-8 justify-center items-start pt-8">
    <div class="text-center">
      <p class="text-white text-xs mb-2">Seçim Yok (Disabled)</p>
      <div class="scale-75 origin-top">
        <TagManageModal
          isOpen={true}
          availableTags={defaultTags}
          selectedTags={[]}
        />
      </div>
    </div>
    <div class="text-center">
      <p class="text-white text-xs mb-2">Seçim Var (Enabled)</p>
      <div class="scale-75 origin-top">
        <TagManageModal
          isOpen={true}
          availableTags={defaultTags}
          selectedTags={[defaultTags[0]]}
        />
      </div>
    </div>
  </div>
</Story>
