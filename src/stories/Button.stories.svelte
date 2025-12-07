<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Button from "../components/UI/Button.svelte";

  const { Story } = defineMeta({
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
## Button Component

Yeniden kullanılabilir buton komponenti. Farklı varyantlar ve durumlar destekler.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \\| 'ghost' | 'primary' | Buton stili |
| disabled | boolean | false | Devre dışı durumu |
| className | string | '' | Ek CSS sınıfları |

### Varyantlar
- **Primary**: Ana aksiyon butonları için (mavi arka plan)
- **Ghost**: İkincil aksiyonlar için (sadece metin)
- **Disabled**: Devre dışı durum (gri arka plan)

### Events
- \`click\`: Butona tıklandığında tetiklenir
          `,
        },
      },
      layout: "centered",
    },
  });
</script>

<Story name="Varyant / Primary">
  <Button variant="primary">Oluştur</Button>
</Story>

<Story name="Varyant / Ghost">
  <Button variant="ghost">Vazgeç</Button>
</Story>

<Story name="Varyant / Disabled">
  <Button disabled={true}>Devre Dışı</Button>
</Story>

<Story name="Varyant / Tüm Varyantlar">
  <div class="flex items-center gap-4">
    <Button variant="primary">Primary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button disabled={true}>Disabled</Button>
  </div>
</Story>

<Story name="Boyut / Kısa Metin">
  <div class="flex items-center gap-4">
    <Button variant="primary">Ok</Button>
    <Button variant="ghost">X</Button>
  </div>
</Story>

<Story name="Boyut / Uzun Metin">
  <Button variant="primary">Bu çok uzun bir buton metnidir</Button>
</Story>

<Story name="Boyut / Çok Uzun Metin">
  <Button variant="primary"
    >Bu gerçekten çok uzun bir buton metnidir ve nasıl görüneceğini test
    ediyoruz</Button
  >
</Story>

<Story name="Kullanım / Modal Footer">
  <div class="flex items-center gap-3">
    <Button variant="ghost">Vazgeç</Button>
    <Button variant="primary">Kaydet</Button>
  </div>
</Story>

<Story name="Kullanım / Etiket Ekleme">
  <div class="flex items-center gap-3">
    <Button variant="ghost">Vazgeç</Button>
    <Button variant="primary">Etiket Ekle</Button>
  </div>
</Story>

<Story name="Kullanım / Etiket Oluşturma">
  <div class="flex items-center gap-3">
    <Button variant="ghost">Vazgeç</Button>
    <Button variant="primary">Oluştur</Button>
  </div>
</Story>

<Story name="Kullanım / Devre Dışı Buton Çifti">
  <div class="flex items-center gap-3">
    <Button variant="ghost">Vazgeç</Button>
    <Button disabled={true}>Etiket Ekle</Button>
  </div>
</Story>

<Story name="Kullanım / Onay Dialogu">
  <div class="flex items-center gap-3">
    <Button variant="ghost">İptal</Button>
    <Button variant="primary">Onayla</Button>
  </div>
</Story>

<Story name="Kullanım / Silme Onayı">
  <div class="flex items-center gap-3">
    <Button variant="ghost">Vazgeç</Button>
    <Button variant="primary" className="!bg-semantic-danger">Sil</Button>
  </div>
</Story>

<Story name="Edge Case / Emoji İçeren">
  <div class="flex items-center gap-4">
    <Button variant="primary">✓ Kaydet</Button>
    <Button variant="ghost">← Geri</Button>
  </div>
</Story>

<Story name="Edge Case / Sadece İkon">
  <div class="flex items-center gap-4">
    <Button variant="primary">+</Button>
    <Button variant="ghost">×</Button>
  </div>
</Story>

<Story name="Edge Case / Sayı İçeren">
  <div class="flex items-center gap-4">
    <Button variant="primary">3 Etiket Ekle</Button>
    <Button variant="ghost">12 Seçildi</Button>
  </div>
</Story>

<Story name="Senaryo / Etiket Seçimi Yok">
  <div class="p-6 bg-white rounded-xl shadow max-w-md">
    <p class="text-sm text-gray-600 mb-4">Henüz hiçbir etiket seçilmedi</p>
    <div class="flex items-center justify-end gap-3">
      <Button variant="ghost">Vazgeç</Button>
      <Button disabled={true}>Etiket Ekle</Button>
    </div>
  </div>
</Story>

<Story name="Senaryo / Etiket Seçildi">
  <div class="p-6 bg-white rounded-xl shadow max-w-md">
    <p class="text-sm text-gray-600 mb-4">2 etiket seçildi</p>
    <div class="flex items-center justify-end gap-3">
      <Button variant="ghost">Vazgeç</Button>
      <Button variant="primary">Etiket Ekle</Button>
    </div>
  </div>
</Story>

<Story name="Senaryo / Yeni Etiket Oluşturma Boş">
  <div class="p-6 bg-white rounded-xl shadow max-w-md">
    <p class="text-sm text-gray-600 mb-4">Etiket adı girilmedi</p>
    <div class="flex items-center justify-end gap-3">
      <Button variant="ghost">Vazgeç</Button>
      <Button disabled={true}>Oluştur</Button>
    </div>
  </div>
</Story>

<Story name="Senaryo / Yeni Etiket Oluşturma Dolu">
  <div class="p-6 bg-white rounded-xl shadow max-w-md">
    <p class="text-sm text-gray-600 mb-4">Etiket adı: "Kurultay"</p>
    <div class="flex items-center justify-end gap-3">
      <Button variant="ghost">Vazgeç</Button>
      <Button variant="primary">Oluştur</Button>
    </div>
  </div>
</Story>

<Story name="Karşılaştırma / Primary vs Ghost">
  <div class="space-y-4">
    <div class="flex items-center gap-8">
      <div class="text-center">
        <p class="text-xs text-gray-500 mb-2">Primary</p>
        <Button variant="primary">Kaydet</Button>
      </div>
      <div class="text-center">
        <p class="text-xs text-gray-500 mb-2">Ghost</p>
        <Button variant="ghost">Kaydet</Button>
      </div>
    </div>
  </div>
</Story>

<Story name="Karşılaştırma / Enabled vs Disabled">
  <div class="space-y-4">
    <div class="flex items-center gap-8">
      <div class="text-center">
        <p class="text-xs text-gray-500 mb-2">Enabled</p>
        <Button variant="primary">Etiket Ekle</Button>
      </div>
      <div class="text-center">
        <p class="text-xs text-gray-500 mb-2">Disabled</p>
        <Button disabled={true}>Etiket Ekle</Button>
      </div>
    </div>
  </div>
</Story>
