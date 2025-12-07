<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import NewTagModal from "../components/Modal/NewTagModal.svelte";
  import { TAG_COLORS } from "../lib/stores/tagStore.js";

  const { Story } = defineMeta({
    title: "Components/Modal/NewTagModal",
    component: NewTagModal,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
## NewTagModal Component

Yeni etiket oluşturma modalı. Renk seçici içerir.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | false | Modal açık/kapalı durumu |
| activeTags | Tag[] | [] | Aktif etiketler (alt kart) |

### Events
- \`close\`: Modal kapatıldığında
- \`create\`: Etiket oluşturulduğunda (name, color ile)
- \`removeTag\`: Aktif etiketten biri kaldırıldığında

### Özellikler
- Input focus'ta çift border efekti
- Renk seçimi anında "Örnek görünüm" güncellenir
- Boş input'ta "Oluştur" butonu devre dışı
- Aktif etiketler varsa alt kart görünür
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

  const singleTag = [{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }];

  const threeTags = [
    { id: "1", name: "Kurultay", color: TAG_COLORS[0] },
    { id: "2", name: "CHP", color: TAG_COLORS[4] },
    { id: "3", name: "Miting", color: TAG_COLORS[4] },
  ];

  const manyTags = [
    { id: "1", name: "CHP", color: TAG_COLORS[0] },
    { id: "2", name: "Kurultay", color: TAG_COLORS[1] },
    { id: "3", name: "Miting", color: TAG_COLORS[4] },
    { id: "4", name: "Etiket", color: TAG_COLORS[2] },
    { id: "5", name: "Etiket", color: TAG_COLORS[3] },
    { id: "6", name: "Etiket", color: TAG_COLORS[0] },
  ];

  const allColorTags = TAG_COLORS.map((color, i) => ({
    id: String(i),
    name: color.name,
    color,
  }));

  const longNameTags = [
    { id: "1", name: "Çok Uzun Bir Etiket Adı", color: TAG_COLORS[0] },
    { id: "2", name: "Başka Uzun Etiket", color: TAG_COLORS[1] },
  ];
</script>

<Story name="Temel / Boş (Disabled)">
  <div class="h-[500px] flex items-center justify-center">
    <NewTagModal isOpen={true} activeTags={[]} />
  </div>
</Story>

<Story name="Temel / Aktif Etiketlerle">
  <div class="h-[700px] flex items-center justify-center">
    <NewTagModal isOpen={true} activeTags={manyTags} />
  </div>
</Story>

<Story name="Renk / Mavi Seçili (Default)">
  <div class="h-[500px] flex items-center justify-center">
    <NewTagModal isOpen={true} activeTags={[]} />
  </div>
</Story>

<Story name="Aktif Etiket / Yok">
  <div class="h-[500px] flex items-center justify-center">
    <NewTagModal isOpen={true} activeTags={[]} />
  </div>
</Story>

<Story name="Aktif Etiket / Tek Etiket">
  <div class="h-[550px] flex items-center justify-center">
    <NewTagModal isOpen={true} activeTags={singleTag} />
  </div>
</Story>

<Story name="Aktif Etiket / Üç Etiket">
  <div class="h-[550px] flex items-center justify-center">
    <NewTagModal isOpen={true} activeTags={threeTags} />
  </div>
</Story>

<Story name="Aktif Etiket / Çok Fazla Etiket">
  <div class="h-[700px] flex items-center justify-center">
    <NewTagModal isOpen={true} activeTags={manyTags} />
  </div>
</Story>

<Story name="Edge Case / Tüm Renklerde Aktif Etiketler">
  <div class="h-[650px] flex items-center justify-center">
    <NewTagModal isOpen={true} activeTags={allColorTags} />
  </div>
</Story>

<Story name="Edge Case / Uzun Etiket Adları">
  <div class="h-[600px] flex items-center justify-center">
    <NewTagModal isOpen={true} activeTags={longNameTags} />
  </div>
</Story>

<Story name="Edge Case / Çok Fazla Uzun Etiket">
  <div class="h-[700px] flex items-center justify-center">
    <NewTagModal
      isOpen={true}
      activeTags={[
        {
          id: "1",
          name: "Çok Uzun Bir Etiket Adı Buraya",
          color: TAG_COLORS[0],
        },
        { id: "2", name: "Başka Bir Uzun Etiket Adı", color: TAG_COLORS[1] },
        { id: "3", name: "Ve Bir Tane Daha Uzun Etiket", color: TAG_COLORS[2] },
        { id: "4", name: "Son Uzun Etiket Örneği", color: TAG_COLORS[3] },
      ]}
    />
  </div>
</Story>

<Story name="Senaryo / İlk Etiket Oluşturma">
  <div class="h-[500px] flex items-center justify-center">
    <div class="text-center">
      <p class="text-white text-sm mb-4">
        Kullanıcı ilk kez etiket oluşturuyor
      </p>
      <NewTagModal isOpen={true} activeTags={[]} />
    </div>
  </div>
</Story>

<Story name="Senaryo / Mevcut Etiketlere Ekleme">
  <div class="h-[650px] flex items-center justify-center">
    <div class="text-center">
      <p class="text-white text-sm mb-4">
        Kullanıcının zaten etiketleri var, yeni bir tane ekliyor
      </p>
      <NewTagModal
        isOpen={true}
        activeTags={[
          { id: "1", name: "Kurultay", color: TAG_COLORS[0] },
          { id: "2", name: "CHP", color: TAG_COLORS[4] },
        ]}
      />
    </div>
  </div>
</Story>

<Story name="Senaryo / Etiket Yönetimi Akışı">
  <div class="h-[700px] flex items-center justify-center">
    <div class="text-center">
      <p class="text-white text-sm mb-4">
        TagManageModal'dan "Yeni Ekle" tıklandıktan sonra
      </p>
      <NewTagModal isOpen={true} activeTags={threeTags} />
    </div>
  </div>
</Story>

<Story name="Senaryo / Farklı Renk Seçimi">
  <div class="h-[550px] flex items-center justify-center">
    <div class="text-center">
      <p class="text-white text-sm mb-4">
        Kullanıcı mor renk seçti - "Örnek görünüm" güncellendi
      </p>
      <NewTagModal isOpen={true} activeTags={singleTag} />
    </div>
  </div>
</Story>

<Story name="Senaryo / Tweet'e Etiket Ekleme Sonrası">
  <div class="h-[700px] flex items-center justify-center">
    <div class="text-center">
      <p class="text-white text-sm mb-4">
        Tweet seçildi ve etiketler eklendi, şimdi yeni etiket oluşturuluyor
      </p>
      <NewTagModal
        isOpen={true}
        activeTags={[
          { id: "1", name: "Kurultay", color: TAG_COLORS[0] },
          { id: "2", name: "CHP", color: TAG_COLORS[4] },
          { id: "3", name: "Miting", color: TAG_COLORS[4] },
          { id: "4", name: "Gündem", color: TAG_COLORS[3] },
        ]}
      />
    </div>
  </div>
</Story>

<Story name="Senaryo / Tüm Kategoriler">
  <div class="h-[700px] flex items-center justify-center">
    <div class="text-center">
      <p class="text-white text-sm mb-4">Her kategoriden bir etiket mevcut</p>
      <NewTagModal isOpen={true} activeTags={allColorTags} />
    </div>
  </div>
</Story>

<Story name="Karşılaştırma / Aktif Etiket Var vs Yok">
  <div class="flex gap-8 p-8">
    <div class="text-center">
      <p class="text-white text-xs mb-2">Aktif Etiket Yok</p>
      <div class="h-[450px]">
        <NewTagModal isOpen={true} activeTags={[]} />
      </div>
    </div>
  </div>
</Story>
