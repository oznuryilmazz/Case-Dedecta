<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Input from "../components/UI/Input.svelte";

  const { Story } = defineMeta({
    title: "UI/Input",
    component: Input,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
## Input Component

Stilli input komponenti. Focus durumunda çift border efekti gösterir.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | '' | Input değeri |
| placeholder | string | '' | Placeholder metni |
| type | string | 'text' | Input tipi |
| icon | string \\| null | null | Sol ikon yolu |
| className | string | '' | Ek CSS sınıfları |

### Events
- \`input\`: Değer değiştiğinde tetiklenir
- \`focus\`: Focus alındığında tetiklenir
- \`blur\`: Focus kaybedildiğinde tetiklenir

### Özellikler
- Focus durumunda mavi iç border, gri dış outline
- İkon varsa focus'ta mavi renge döner
- Placeholder ve değer için farklı renkler
          `,
        },
      },
      layout: "centered",
    },
  });
</script>

<Story name="Temel / Boş">
  <div class="w-[400px]">
    <Input placeholder="Metin girin..." />
  </div>
</Story>

<Story name="Temel / Değer ile">
  <div class="w-[400px]">
    <Input value="Kurultay" placeholder="Metin girin..." />
  </div>
</Story>

<Story name="Temel / İkon ile">
  <div class="w-[400px]">
    <Input placeholder="Etiket adı" icon="/svg/label.svg" />
  </div>
</Story>

<Story name="Temel / İkon ve Değer ile">
  <div class="w-[400px]">
    <Input value="Kurultay" placeholder="Etiket adı" icon="/svg/label.svg" />
  </div>
</Story>

<Story name="Tip / Text">
  <div class="w-[400px]">
    <Input type="text" placeholder="Metin girin..." />
  </div>
</Story>

<Story name="Tip / Search">
  <div class="w-[400px]">
    <Input type="search" placeholder="Ara..." />
  </div>
</Story>

<Story name="Tip / Email">
  <div class="w-[400px]">
    <Input type="email" placeholder="E-posta adresi" />
  </div>
</Story>

<Story name="Tip / Password">
  <div class="w-[400px]">
    <Input type="password" placeholder="Şifre" />
  </div>
</Story>

<Story name="Kullanım / Etiket Adı Girişi">
  <div class="w-[400px]">
    <Input placeholder="Etiket adı" icon="/svg/label.svg" />
  </div>
</Story>

<Story name="Kullanım / Etiket Adı Dolu">
  <div class="w-[400px]">
    <Input value="Kurultay" placeholder="Etiket adı" icon="/svg/label.svg" />
  </div>
</Story>

<Story name="Edge Case / Uzun Placeholder">
  <div class="w-[400px]">
    <Input placeholder="Bu çok uzun bir placeholder metnidir ve kesilecektir" />
  </div>
</Story>

<Story name="Edge Case / Uzun Değer">
  <div class="w-[400px]">
    <Input
      value="Bu çok uzun bir değer metnidir ve input genişliğini test eder"
      placeholder="Etiket adı"
    />
  </div>
</Story>

<Story name="Edge Case / Çok Uzun Değer">
  <div class="w-[400px]">
    <Input
      value="Bu gerçekten çok uzun bir etiket adı örneğidir ve kullanıcı çok uzun bir metin girdiğinde input'un nasıl davranacağını test etmek için kullanılır"
      placeholder="Etiket adı"
      icon="/svg/label.svg"
    />
  </div>
</Story>

<Story name="Edge Case / Özel Karakterler">
  <div class="w-[400px]">
    <Input
      value="#Gündem! @kullanıcı $100"
      placeholder="Etiket adı"
      icon="/svg/label.svg"
    />
  </div>
</Story>

<Story name="Edge Case / Emoji">
  <div class="w-[400px]">
    <Input
      value="🎉 Kutlama 🎊"
      placeholder="Etiket adı"
      icon="/svg/label.svg"
    />
  </div>
</Story>

<Story name="Edge Case / Sayılar">
  <div class="w-[400px]">
    <Input value="2024" placeholder="Etiket adı" icon="/svg/label.svg" />
  </div>
</Story>

<Story name="Edge Case / Tek Karakter">
  <div class="w-[400px]">
    <Input value="A" placeholder="Etiket adı" icon="/svg/label.svg" />
  </div>
</Story>

<Story name="Boyut / Dar Container">
  <div class="w-[250px]">
    <Input placeholder="Etiket adı" icon="/svg/label.svg" />
  </div>
</Story>

<Story name="Boyut / Geniş Container">
  <div class="w-[600px]">
    <Input placeholder="Etiket adı" icon="/svg/label.svg" />
  </div>
</Story>

<Story name="Form / Çoklu Input">
  <div class="w-[400px] space-y-4">
    <Input placeholder="Ad Soyad" />
    <Input placeholder="E-posta" type="email" />
    <Input placeholder="Şifre" type="password" />
  </div>
</Story>

<Story name="Form / Etiket Oluşturma Formu">
  <div class="w-[400px] p-6 bg-white rounded-xl shadow">
    <h3 class="text-lg font-bold text-gray-800 mb-4">Yeni Etiket</h3>
    <Input placeholder="Etiket adı" icon="/svg/label.svg" />
  </div>
</Story>

<Story name="Senaryo / Yeni Etiket Boş">
  <div class="w-[400px] p-6 bg-white rounded-xl shadow">
    <h3 class="text-lg font-bold text-gray-800 mb-2">Yeni Etiket</h3>
    <p class="text-sm text-gray-500 mb-4">Etiket adı girilmedi</p>
    <Input placeholder="Etiket adı" icon="/svg/label.svg" />
  </div>
</Story>

<Story name="Senaryo / Yeni Etiket Dolu">
  <div class="w-[400px] p-6 bg-white rounded-xl shadow">
    <h3 class="text-lg font-bold text-gray-800 mb-2">Yeni Etiket</h3>
    <p class="text-sm text-gray-500 mb-4">Etiket adı girildi</p>
    <Input value="Kurultay" placeholder="Etiket adı" icon="/svg/label.svg" />
  </div>
</Story>

<Story name="Senaryo / Etiket Arama">
  <div class="w-[400px] p-6 bg-white rounded-xl shadow">
    <h3 class="text-lg font-bold text-gray-800 mb-4">Etiket Ara</h3>
    <Input type="search" placeholder="Etiket ara..." />
  </div>
</Story>

<Story name="Karşılaştırma / İkonlu vs İkonsuz">
  <div class="w-[400px] space-y-4">
    <div>
      <p class="text-xs text-gray-500 mb-2">İkonsuz</p>
      <Input placeholder="Etiket adı" />
    </div>
    <div>
      <p class="text-xs text-gray-500 mb-2">İkonlu</p>
      <Input placeholder="Etiket adı" icon="/svg/label.svg" />
    </div>
  </div>
</Story>

<Story name="Karşılaştırma / Boş vs Dolu">
  <div class="w-[400px] space-y-4">
    <div>
      <p class="text-xs text-gray-500 mb-2">Boş</p>
      <Input placeholder="Etiket adı" icon="/svg/label.svg" />
    </div>
    <div>
      <p class="text-xs text-gray-500 mb-2">Dolu</p>
      <Input value="Kurultay" placeholder="Etiket adı" icon="/svg/label.svg" />
    </div>
  </div>
</Story>
