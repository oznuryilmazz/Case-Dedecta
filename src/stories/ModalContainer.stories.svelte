<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ModalContainer from "../components/UI/ModalContainer.svelte";
  import Button from "../components/UI/Button.svelte";
  import Input from "../components/UI/Input.svelte";
  import TagBadge from "../components/Tag/TagBadge.svelte";
  import { TAG_COLORS } from "../lib/stores/tagStore.js";

  const { Story } = defineMeta({
    title: "UI/ModalContainer",
    component: ModalContainer,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
## ModalContainer Component

Modal içerik wrapper komponenti. Tüm modallarda ortak stil sağlar.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| maxWidth | string | 'max-w-md' | Maksimum genişlik class'ı |

### Özellikler
- Beyaz arka plan
- 2xl border radius
- 2xl shadow
- Full width (max-width ile sınırlı)
          `,
        },
      },
      layout: "centered",
      backgrounds: {
        default: "gray",
        values: [{ name: "gray", value: "#9ca3af" }],
      },
    },
  });

  const tags = [
    { id: "1", name: "Kurultay", color: TAG_COLORS[0] },
    { id: "2", name: "CHP", color: TAG_COLORS[4] },
    { id: "3", name: "Miting", color: TAG_COLORS[4] },
  ];
</script>

<Story name="Boyut / Default (max-w-md)">
  <ModalContainer>
    <div class="p-8">
      <h2 class="text-2xl font-bold text-semantic-text-secondary mb-2">
        Modal Başlık
      </h2>
      <p class="text-semantic-text-secondary">Modal içeriği burada yer alır.</p>
    </div>
  </ModalContainer>
</Story>

<Story name="Boyut / Dar (max-w-sm)">
  <ModalContainer maxWidth="max-w-sm">
    <div class="p-6">
      <h2 class="text-xl font-bold text-semantic-text-secondary mb-2">
        Dar Modal
      </h2>
      <p class="text-semantic-text-muted text-sm">Daha dar bir modal.</p>
    </div>
  </ModalContainer>
</Story>

<Story name="Boyut / Geniş (max-w-lg)">
  <ModalContainer maxWidth="max-w-lg">
    <div class="p-8">
      <h2 class="text-2xl font-bold text-semantic-text-secondary mb-2">
        Geniş Modal
      </h2>
      <p class="text-semantic-text-secondary">Daha geniş bir modal içeriği.</p>
    </div>
  </ModalContainer>
</Story>

<Story name="Boyut / Özel Genişlik (480px)">
  <ModalContainer maxWidth="max-w-[480px]">
    <div class="p-6">
      <h2 class="text-xl font-bold text-semantic-text-secondary mb-2">
        480px Modal
      </h2>
      <p class="text-semantic-text-muted text-sm">Özel genişlikte modal.</p>
    </div>
  </ModalContainer>
</Story>

<Story name="Boyut / Çok Geniş (max-w-xl)">
  <ModalContainer maxWidth="max-w-xl">
    <div class="p-8">
      <h2 class="text-2xl font-bold text-semantic-text-secondary mb-2">
        Çok Geniş Modal
      </h2>
      <p class="text-semantic-text-secondary">En geniş modal boyutu.</p>
    </div>
  </ModalContainer>
</Story>

<Story name="İçerik / Sadece Başlık">
  <ModalContainer>
    <div class="p-8">
      <h2 class="text-2xl font-bold text-semantic-text-secondary">
        Sadece Başlık
      </h2>
    </div>
  </ModalContainer>
</Story>

<Story name="İçerik / Başlık ve Açıklama">
  <ModalContainer>
    <div class="p-8">
      <h2 class="text-2xl font-bold text-semantic-text-secondary mb-1">
        Etiket Ekle
      </h2>
      <p class="text-base text-semantic-text-secondary">
        Tweet'leri kategorize etmek için etiket ekleyebilirsin.
      </p>
    </div>
  </ModalContainer>
</Story>

<Story name="İçerik / Form ile">
  <ModalContainer>
    <div class="p-8">
      <h2 class="text-2xl font-bold text-semantic-text-secondary mb-4">
        Yeni Etiket
      </h2>
      <Input placeholder="Etiket adı" icon="/svg/label.svg" />
    </div>
  </ModalContainer>
</Story>

<Story name="İçerik / Footer ile">
  <ModalContainer>
    <div class="p-8">
      <h2 class="text-2xl font-bold text-semantic-text-secondary mb-4">Onay</h2>
      <p class="text-semantic-text-muted mb-6">Bu işlemi onaylıyor musunuz?</p>
      <div class="flex items-center justify-end gap-3">
        <Button variant="ghost">Vazgeç</Button>
        <Button variant="primary">Onayla</Button>
      </div>
    </div>
  </ModalContainer>
</Story>

<Story name="İçerik / Etiket Listesi ile">
  <ModalContainer>
    <div class="p-8">
      <h2 class="text-2xl font-bold text-semantic-text-secondary mb-4">
        Etiketler
      </h2>
      <div class="flex flex-wrap gap-2">
        {#each tags as tag}
          <TagBadge {tag} size="sm" />
        {/each}
      </div>
    </div>
  </ModalContainer>
</Story>

<Story name="Senaryo / Etiket Ekleme Modal">
  <ModalContainer>
    <div class="p-8">
      <h2 class="text-2xl font-bold text-semantic-text-secondary mb-1">
        Etiket ekle
      </h2>
      <p class="text-base text-semantic-text-secondary">
        Tweet'leri kategorize etmek için etiket ekleyebilirsin.
      </p>

      <div class="space-y-3 pt-6 pb-4">
        {#each tags as tag}
          <label class="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" class="checkbox checkbox-xs" />
            <TagBadge {tag} size="sm" />
          </label>
        {/each}
      </div>

      <div class="border-t border-semantic-border mt-2">
        <button
          type="button"
          class="flex items-center gap-2 text-semantic-primary font-bold text-sm py-4"
        >
          <img src="/svg/add.svg" alt="Plus" />
          Yeni Ekle
        </button>
      </div>

      <div class="flex items-center justify-end gap-3">
        <Button variant="ghost">Vazgeç</Button>
        <Button disabled={true}>Etiket Ekle</Button>
      </div>
    </div>
  </ModalContainer>
</Story>

<Story name="Senaryo / Yeni Etiket Modal">
  <ModalContainer maxWidth="max-w-[480px]">
    <div class="p-6 bg-semantic-bg-light rounded-t-2xl">
      <div class="flex items-center justify-between">
        <div class="w-[60%]">
          <h2 class="text-2xl font-bold text-semantic-text-secondary mb-1">
            Yeni Etiket
          </h2>
          <p class="text-base text-semantic-text-secondary">
            Tweet'leri kategorize etmek için etiket oluşturabilirsin.
          </p>
        </div>
        <button
          type="button"
          class="w-[30%] h-[40px] text-sm font-bold rounded-xl border border-tag-blue text-tag-blue bg-tag-blue-light"
        >
          Örnek görünüm
        </button>
      </div>
    </div>

    <div class="px-6 py-4 space-y-5 border-t border-semantic-border">
      <Input placeholder="Etiket adı" icon="/svg/label.svg" />
    </div>

    <div class="px-6 py-4 flex items-center justify-end gap-3">
      <Button variant="ghost">Vazgeç</Button>
      <Button disabled={true}>Oluştur</Button>
    </div>
  </ModalContainer>
</Story>

<Story name="Senaryo / Aktif Etiketler Alt Kart">
  <ModalContainer maxWidth="max-w-[480px]">
    <div class="p-5">
      <p class="text-base font-bold text-semantic-text-secondary mb-3">
        Aktif Etiketler
      </p>
      <div class="flex flex-wrap gap-2">
        {#each tags as tag}
          <TagBadge {tag} size="sm" removable />
        {/each}
      </div>
    </div>
  </ModalContainer>
</Story>

<Story name="Edge Case / Uzun Başlık">
  <ModalContainer>
    <div class="p-8">
      <h2 class="text-2xl font-bold text-semantic-text-secondary mb-2">
        Bu çok uzun bir modal başlığıdır ve nasıl görüneceğini test ediyoruz
      </h2>
      <p class="text-semantic-text-muted">Modal içeriği.</p>
    </div>
  </ModalContainer>
</Story>

<Story name="Edge Case / Uzun Açıklama">
  <ModalContainer>
    <div class="p-8">
      <h2 class="text-2xl font-bold text-semantic-text-secondary mb-2">
        Modal Başlık
      </h2>
      <p class="text-semantic-text-muted">
        Bu çok uzun bir açıklama metnidir. Tweet'leri kategorize etmek için
        etiket ekleyebilirsin. Etiketler sayesinde tweetleri daha kolay
        filtreleyebilir ve organize edebilirsin. Her tweet'e birden fazla etiket
        eklenebilir.
      </p>
    </div>
  </ModalContainer>
</Story>

<Story name="Edge Case / Çok Fazla İçerik">
  <ModalContainer>
    <div class="p-8">
      <h2 class="text-2xl font-bold text-semantic-text-secondary mb-4">
        Tüm Etiketler
      </h2>
      <div class="flex flex-wrap gap-2">
        {#each Array(15) as _, i}
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
    </div>
  </ModalContainer>
</Story>

<Story name="Edge Case / Boş İçerik">
  <ModalContainer>
    <div class="p-8">
      <h2 class="text-2xl font-bold text-semantic-text-secondary mb-4">
        Etiketler
      </h2>
      <p class="text-semantic-text-muted text-center py-8">
        Henüz etiket oluşturulmamış.
      </p>
    </div>
  </ModalContainer>
</Story>

<Story name="Karşılaştırma / Farklı Boyutlar">
  <div class="space-y-6">
    <div>
      <p class="text-white text-xs mb-2">max-w-sm</p>
      <ModalContainer maxWidth="max-w-sm">
        <div class="p-4">
          <h3 class="font-bold text-gray-800">Dar Modal</h3>
        </div>
      </ModalContainer>
    </div>
    <div>
      <p class="text-white text-xs mb-2">max-w-md</p>
      <ModalContainer maxWidth="max-w-md">
        <div class="p-4">
          <h3 class="font-bold text-gray-800">Normal Modal</h3>
        </div>
      </ModalContainer>
    </div>
    <div>
      <p class="text-white text-xs mb-2">max-w-lg</p>
      <ModalContainer maxWidth="max-w-lg">
        <div class="p-4">
          <h3 class="font-bold text-gray-800">Geniş Modal</h3>
        </div>
      </ModalContainer>
    </div>
  </div>
</Story>
