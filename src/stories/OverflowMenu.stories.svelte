<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import OverflowMenu from "../components/TwitterCard/OverflowMenu.svelte";
  import Checkbox from "../components/UI/Checkbox.svelte";

  const { Story } = defineMeta({
    title: "Components/TwitterCard/OverflowMenu",
    component: OverflowMenu,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
## OverflowMenu Component

Üç nokta menü komponenti. TwitterCard içinde kullanılır.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | false | Menü açık/kapalı durumu |

### Menü Öğeleri
- Tweet akışını gör
- Twitter'da aç
- Etiketleri yönet
- Duygu güncelle
- Spam işaretle
- Kullanıcıyı engelle (tehlikeli aksiyon - kırmızı)

### Events
- \`select\`: Menü öğesi seçildiğinde tetiklenir
          `,
        },
      },
      layout: "centered",
    },
  });
</script>

<Story name="Durum / Kapalı">
  <div class="p-20">
    <OverflowMenu isOpen={false} />
  </div>
</Story>

<Story name="Durum / Açık">
  <div class="p-20 pt-4">
    <OverflowMenu isOpen={true} />
  </div>
</Story>

<Story name="Durum / Karşılaştırma">
  <div class="flex gap-32">
    <div class="text-center">
      <p class="text-xs text-gray-500 mb-4">Kapalı</p>
      <OverflowMenu isOpen={false} />
    </div>
    <div class="text-center pt-4">
      <p class="text-xs text-gray-500 mb-4">Açık</p>
      <OverflowMenu isOpen={true} />
    </div>
  </div>
</Story>

<Story name="Bağlam / Header İçinde">
  <div class="p-8 bg-white rounded-xl shadow w-[400px]">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="font-bold text-gray-800">Dennis Callis</h3>
        <p class="text-sm text-gray-500">@stephanienicol</p>
      </div>
      <div class="flex items-center gap-4">
        <Checkbox checked={false} />
        <OverflowMenu isOpen={false} />
      </div>
    </div>
  </div>
</Story>

<Story name="Bağlam / Header İçinde Açık">
  <div class="p-8 bg-white rounded-xl shadow w-[400px]">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="font-bold text-gray-800">Dennis Callis</h3>
        <p class="text-sm text-gray-500">@stephanienicol</p>
      </div>
      <div class="flex items-center gap-4">
        <Checkbox checked={false} />
        <OverflowMenu isOpen={true} />
      </div>
    </div>
  </div>
</Story>

<Story name="Bağlam / Seçili Kart Header">
  <div
    class="p-8 bg-semantic-bg-selected rounded-xl shadow w-[400px] border border-semantic-primary"
  >
    <div class="flex items-center justify-between">
      <div>
        <h3 class="font-bold text-gray-800">Dennis Callis</h3>
        <p class="text-sm text-gray-500">@stephanienicol</p>
      </div>
      <div class="flex items-center gap-4">
        <Checkbox checked={true} />
        <OverflowMenu isOpen={false} />
      </div>
    </div>
  </div>
</Story>

<Story name="Senaryo / Etiket Yönetimi Akışı">
  <div class="p-8 bg-white rounded-xl shadow w-[400px]">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h3 class="font-bold text-gray-800">Dennis Callis</h3>
        <p class="text-sm text-gray-500">@stephanienicol</p>
      </div>
      <div class="flex items-center gap-4">
        <Checkbox checked={true} />
        <OverflowMenu isOpen={true} />
      </div>
    </div>
    <p class="text-xs text-gray-400 mt-8">
      "Etiketleri yönet" seçeneği ile TagManageModal açılır
    </p>
  </div>
</Story>

<Story name="Senaryo / Twitter'da Açma">
  <div class="p-8 bg-white rounded-xl shadow w-[400px]">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h3 class="font-bold text-gray-800">Dennis Callis</h3>
        <p class="text-sm text-gray-500">@stephanienicol</p>
      </div>
      <div class="flex items-center gap-4">
        <Checkbox checked={false} />
        <OverflowMenu isOpen={true} />
      </div>
    </div>
    <p class="text-xs text-gray-400 mt-8">
      "Twitter'da aç" seçeneği tweeti yeni sekmede açar
    </p>
  </div>
</Story>

<Story name="Senaryo / Kullanıcı Engelleme">
  <div class="p-8 bg-white rounded-xl shadow w-[400px]">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h3 class="font-bold text-gray-800">Spam Kullanıcı</h3>
        <p class="text-sm text-gray-500">@spammer123</p>
      </div>
      <div class="flex items-center gap-4">
        <Checkbox checked={false} />
        <OverflowMenu isOpen={true} />
      </div>
    </div>
    <p class="text-xs text-gray-400 mt-8">
      "Kullanıcıyı engelle" tehlikeli aksiyon olarak kırmızı renktedir
    </p>
  </div>
</Story>

<Story name="Edge Case / Dar Container">
  <div class="p-4 bg-white rounded-xl shadow w-[250px]">
    <div class="flex items-center justify-between">
      <div class="truncate mr-2">
        <h3 class="font-bold text-gray-800 truncate">Uzun Kullanıcı Adı</h3>
        <p class="text-sm text-gray-500 truncate">@cokuzunhandle</p>
      </div>
      <OverflowMenu isOpen={true} />
    </div>
  </div>
</Story>

<Story name="Edge Case / Sağ Kenara Yakın">
  <div class="flex justify-end pr-4">
    <div class="p-4 bg-white rounded-xl shadow">
      <OverflowMenu isOpen={true} />
    </div>
  </div>
</Story>

<Story name="Karşılaştırma / Farklı Kart Durumları">
  <div class="space-y-4">
    <div class="p-4 bg-white rounded-xl shadow w-[350px]">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">Normal Kart</h3>
          <p class="text-xs text-gray-500">@user1</p>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox checked={false} />
          <OverflowMenu isOpen={false} />
        </div>
      </div>
    </div>
    <div
      class="p-4 bg-semantic-bg-selected rounded-xl shadow w-[350px] border border-semantic-primary"
    >
      <div class="flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">Seçili Kart</h3>
          <p class="text-xs text-gray-500">@user2</p>
        </div>
        <div class="flex items-center gap-3">
          <Checkbox checked={true} />
          <OverflowMenu isOpen={false} />
        </div>
      </div>
    </div>
  </div>
</Story>
