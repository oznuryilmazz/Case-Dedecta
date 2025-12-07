# Dedecta FE Case Study

Svelte 5 + TailwindCSS + DaisyUI kullanılarak geliştirilmiş Twitter Kartı ve Etiket Yönetim Sistemi.

## 🚀 Özellikler

- **Twitter Card**: Tweet bilgileri, kullanıcı avatarı, etiketler ve sentiment göstergesi
- **Overflow Menu**: Tweet için aksiyonlar (Twitter'da aç, Etiketleri yönet, vb.)
- **Etiket Ekleme Modal**: Mevcut etiketlerden seçim yapma
- **Yeni Etiket Modal**: Renk seçici ile yeni etiket oluşturma
- **Sentiment Göstergesi**: Olumlu (yeşil), Nötr (gri), Olumsuz (kırmızı)
- **Storybook Dokümantasyonu**: Tüm component varyantları ve edge-case senaryoları

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── TwitterCard/
│   │   ├── TwitterCard.svelte      # Ana Twitter kartı
│   │   ├── OverflowMenu.svelte     # 3 nokta dropdown menü
│   │   └── index.js
│   ├── Modal/
│   │   ├── TagManageModal.svelte   # Etiket ekleme modalı
│   │   ├── NewTagModal.svelte      # Yeni etiket oluşturma modalı
│   │   └── index.js
│   ├── Tag/
│   │   ├── TagBadge.svelte         # Renkli etiket badge'i
│   │   └── index.js
│   ├── UI/
│   │   ├── Backdrop.svelte         # Modal arka planı
│   │   ├── Button.svelte           # Primary/Ghost/Disabled butonlar
│   │   ├── Checkbox.svelte         # Özelleştirilmiş checkbox
│   │   ├── ColorPicker.svelte      # Renk seçici komponenti
│   │   ├── Input.svelte            # İkonlu input alanı
│   │   ├── ModalContainer.svelte   # Modal wrapper
│   │   ├── StatItem.svelte         # İstatistik göstergesi
│   │   └── index.js
│   └── index.js
├── lib/
│   ├── stores/
│   │   └── tagStore.js             # Etiket state yönetimi + renkler
│   ├── utils/
│   │   └── helpers.js              # Yardımcı fonksiyonlar (clickOutside)
│   └── index.js
├── stories/
│   ├── Button.stories.svelte
│   ├── Checkbox.stories.svelte
│   ├── ColorPicker.stories.svelte
│   ├── Input.stories.svelte
│   ├── ModalContainer.stories.svelte
│   ├── NewTagModal.stories.svelte
│   ├── OverflowMenu.stories.svelte
│   ├── StatItem.stories.svelte
│   ├── TagBadge.stories.svelte
│   ├── TagManageModal.stories.svelte
│   └── TwitterCard.stories.svelte
├── App.svelte                      # Ana uygulama
├── app.css                         # Global stiller
└── main.js                         # Entry point
```

## 🛠️ Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Storybook'u başlat
npm run storybook
```

## 📚 Scripts

| Script                    | Açıklama                                              |
| ------------------------- | ----------------------------------------------------- |
| `npm run dev`             | Vite geliştirme sunucusu (http://localhost:5173)      |
| `npm run build`           | Production build                                      |
| `npm run preview`         | Production build önizleme                             |
| `npm run storybook`       | Storybook geliştirme sunucusu (http://localhost:6006) |
| `npm run build-storybook` | Storybook static build                                |

## 🎨 Componentler

### UI Componentleri

#### Button

Yeniden kullanılabilir buton komponenti.

| Prop        | Type                     | Default     | Açıklama          |
| ----------- | ------------------------ | ----------- | ----------------- |
| `variant`   | `'primary'` \| `'ghost'` | `'primary'` | Buton stili       |
| `disabled`  | `boolean`                | `false`     | Devre dışı durumu |
| `className` | `string`                 | `''`        | Ek CSS sınıfları  |

**Varyantlar:**

- **Primary**: Mavi arka plan, beyaz metin - Ana aksiyonlar için
- **Ghost**: Sadece mavi metin - İkincil aksiyonlar için
- **Disabled**: Gri arka plan - Devre dışı durum

---

#### Checkbox

Özelleştirilmiş checkbox komponenti.

| Prop      | Type      | Default | Açıklama      |
| --------- | --------- | ------- | ------------- |
| `checked` | `boolean` | `false` | Seçili durumu |

**Events:**

- `change`: Checkbox durumu değiştiğinde `{ checked: boolean }` ile tetiklenir

---

#### Input

Stilli input komponenti.

| Prop          | Type               | Default  | Açıklama          |
| ------------- | ------------------ | -------- | ----------------- |
| `value`       | `string`           | `''`     | Input değeri      |
| `placeholder` | `string`           | `''`     | Placeholder metni |
| `type`        | `string`           | `'text'` | Input tipi        |
| `icon`        | `string` \| `null` | `null`   | Sol ikon yolu     |
| `className`   | `string`           | `''`     | Ek CSS sınıfları  |

**Events:**

- `input`: Değer değiştiğinde
- `focus`: Focus alındığında
- `blur`: Focus kaybedildiğinde

---

#### ColorPicker

Etiket renk seçici komponenti.

| Prop       | Type     | Default | Açıklama                |
| ---------- | -------- | ------- | ----------------------- |
| `colors`   | `Array`  | `[]`    | Renk seçenekleri dizisi |
| `selected` | `Object` | `null`  | Seçili renk objesi      |

**Events:**

- `select`: Renk seçildiğinde tetiklenir

---

#### StatItem

İkon ve değer gösteren istatistik komponenti.

| Prop    | Type     | Default | Açıklama           |
| ------- | -------- | ------- | ------------------ |
| `icon`  | `string` | `''`    | İkon yolu          |
| `value` | `string` | `''`    | Gösterilecek değer |
| `alt`   | `string` | `''`    | İkon için alt text |

---

#### ModalContainer

Modal içerik wrapper komponenti.

| Prop       | Type     | Default      | Açıklama                  |
| ---------- | -------- | ------------ | ------------------------- |
| `maxWidth` | `string` | `'max-w-md'` | Maksimum genişlik class'ı |

---

### Tag Componentleri

#### TagBadge

Renkli etiket badge komponenti.

| Prop        | Type             | Default  | Açıklama               |
| ----------- | ---------------- | -------- | ---------------------- |
| `tag`       | `Tag`            | required | Etiket objesi          |
| `removable` | `boolean`        | `false`  | Kaldırma butonu göster |
| `size`      | `'sm'` \| `'md'` | `'md'`   | Badge boyutu           |

**Tag Objesi Yapısı:**

```js
{
  id: 'tag-1',
  name: 'Kurultay',
  color: {
    border: 'border-tag-blue',
    text: 'text-tag-blue',
    bg: 'bg-tag-blue',
    bgLight: 'bg-tag-blue-light'
  }
}
```

**Events:**

- `click`: Badge tıklandığında
- `remove`: Kaldır butonu tıklandığında (removable=true ise)

---

### Modal Componentleri

#### TagManageModal

Mevcut etiketlerden seçim yapma modalı.

| Prop            | Type      | Default | Açıklama                 |
| --------------- | --------- | ------- | ------------------------ |
| `isOpen`        | `boolean` | `false` | Modal açık/kapalı durumu |
| `availableTags` | `Tag[]`   | `[]`    | Mevcut etiketler listesi |
| `selectedTags`  | `Tag[]`   | `[]`    | Önceden seçili etiketler |

**Events:**

- `close`: Modal kapatıldığında
- `newTag`: "Yeni Ekle" butonuna tıklandığında
- `submit`: "Etiket Ekle" butonuna tıklandığında (seçili etiketlerle)

---

#### NewTagModal

Yeni etiket oluşturma modalı (renk seçici ile).

| Prop         | Type      | Default | Açıklama                                        |
| ------------ | --------- | ------- | ----------------------------------------------- |
| `isOpen`     | `boolean` | `false` | Modal açık/kapalı durumu                        |
| `activeTags` | `Tag[]`   | `[]`    | Aktif etiketler listesi (alt kartta gösterilir) |

**Events:**

- `close`: Modal kapatıldığında
- `create`: Yeni etiket oluşturulduğunda `{ name, color }` ile
- `removeTag`: Aktif etiket kaldırıldığında

---

### TwitterCard Componentleri

#### TwitterCard

Twitter/X tarzı tweet kartı komponenti.

| Prop             | Type                                        | Default             | Açıklama                  |
| ---------------- | ------------------------------------------- | ------------------- | ------------------------- |
| `id`             | `string`                                    | `''`                | Unique identifier         |
| `userName`       | `string`                                    | `'Dennis Callis'`   | Kullanıcı adı             |
| `userHandle`     | `string`                                    | `'@stephanienicol'` | Kullanıcı handle'ı        |
| `userAvatar`     | `string`                                    | `'/avatar.png'`     | Avatar URL                |
| `content`        | `string`                                    | `''`                | Tweet içeriği             |
| `hashtags`       | `string[]`                                  | `[]`                | Hashtag listesi           |
| `tags`           | `Tag[]`                                     | `[]`                | Etiket listesi            |
| `likeCount`      | `number`                                    | `0`                 | Beğeni sayısı             |
| `commentCount`   | `number`                                    | `0`                 | Yorum sayısı              |
| `retweetCount`   | `number`                                    | `2`                 | Retweet sayısı            |
| `viewCount`      | `number`                                    | `10`                | Görüntülenme sayısı       |
| `dateStr`        | `string`                                    | `'18 Ağu, 09:10'`   | Tarih metni               |
| `sentiment`      | `'positive'` \| `'neutral'` \| `'negative'` | `'positive'`        | Duygu durumu              |
| `showTagSection` | `boolean`                                   | `true`              | Etiket bölümü görünürlüğü |
| `isSelected`     | `boolean`                                   | `false`             | Seçili durumu             |

**Events:**

- `menuAction`: Menü aksiyonu seçildiğinde `{ cardId, action }` ile
- `tagClick`: Etiket tıklandığında `{ cardId, tag }` ile
- `select`: Checkbox değiştiğinde `{ cardId, selected }` ile

---

#### OverflowMenu

Üç nokta dropdown menü komponenti.

| Prop     | Type      | Default | Açıklama                |
| -------- | --------- | ------- | ----------------------- |
| `isOpen` | `boolean` | `false` | Menü açık/kapalı durumu |

**Menü Öğeleri:**

- Tweet akışını gör
- Twitter'da aç
- Etiketleri yönet
- Duygu güncelle
- Spam işaretle
- Kullanıcıyı engelle (tehlikeli aksiyon - kırmızı)

**Events:**

- `select`: Menü öğesi seçildiğinde tetiklenir

## 🎯 Kullanıcı Akışı

### Etiket Ekleme Senaryosu

1. **Kart Seçimi**: Kullanıcı TwitterCard üzerindeki checkbox'ı işaretler
2. **Menü Açma**: 3 nokta butonuna tıklayarak overflow menü açılır
3. **Etiket Yönetimi**: "Etiketleri yönet" seçeneği ile TagManageModal açılır
4. **Etiket Seçimi**: Checkbox'larla mevcut etiketler seçilir
5. **Kaydetme**: "Etiket Ekle" butonu ile seçim kaydedilir

### Yeni Etiket Oluşturma Senaryosu

1. **Modal Açma**: TagManageModal'da "+ Yeni Ekle" tıklanır
2. **NewTagModal Açılır**: Yeni etiket oluşturma formu görüntülenir
3. **Ad Girişi**: Etiket adı Input alanına yazılır
4. **Renk Seçimi**: ColorPicker'dan 6 renk seçeneğinden biri seçilir
5. **Önizleme**: "Örnek görünüm" butonu seçilen renkte güncellenir
6. **Oluşturma**: "Oluştur" butonu ile etiket sisteme eklenir
7. **Aktif Etiketler**: Oluşturulan etiket alt kartta görüntülenir

## 🌈 Etiket Renkleri

| Renk       | ID       | Sınıflar                                                                       |
| ---------- | -------- | ------------------------------------------------------------------------------ |
| 🔵 Mavi    | `blue`   | `border-tag-blue`, `text-tag-blue`, `bg-tag-blue`, `bg-tag-blue-light`         |
| 🟣 Mor     | `purple` | `border-tag-purple`, `text-tag-purple`, `bg-tag-purple`, `bg-tag-purple-light` |
| 🩷 Pembe    | `pink`   | `border-tag-pink`, `text-tag-pink`, `bg-tag-pink`, `bg-tag-pink-light`         |
| 🟠 Turuncu | `orange` | `border-tag-orange`, `text-tag-orange`, `bg-tag-orange`, `bg-tag-orange-light` |
| 🟢 Yeşil   | `green`  | `border-tag-green`, `text-tag-green`, `bg-tag-green`, `bg-tag-green-light`     |
| 🩵 Turkuaz  | `teal`   | `border-tag-teal`, `text-tag-teal`, `bg-tag-teal`, `bg-tag-teal-light`         |

## 😊 Sentiment Göstergeleri

| Durum       | Renk       | Açıklama                   |
| ----------- | ---------- | -------------------------- |
| **Olumlu**  | 🟢 Yeşil   | Pozitif içerikli tweetler  |
| **Nötr**    | ⚪ Gri     | Tarafsız içerikli tweetler |
| **Olumsuz** | 🔴 Kırmızı | Negatif içerikli tweetler  |

## 📖 Storybook Dokümantasyonu

Her component için kapsamlı Storybook dokümantasyonu bulunmaktadır:

### Story Kategorileri

- **Varyant**: Component'in farklı stilleri ve durumları
- **Boyut**: Farklı boyut seçenekleri
- **Kullanım**: Gerçek kullanım senaryoları
- **Edge Case**: Sınır durumları (uzun metin, çok fazla veri, eksik veri vb.)
- **Senaryo**: Etiket ekleme/oluşturma akışları
- **Karşılaştırma**: Farklı durumların yan yana görünümü

### Storybook'u Çalıştırma

```bash
npm run storybook
```

Storybook http://localhost:6006 adresinde açılacaktır.

## 🔧 Teknolojiler

| Teknoloji       | Versiyon | Açıklama                   |
| --------------- | -------- | -------------------------- |
| **Svelte**      | 5.43.8   | Reactive UI framework      |
| **Vite**        | 7.2.4    | Build tool                 |
| **TailwindCSS** | 3.4.18   | Utility-first CSS          |
| **DaisyUI**     | 4.12.24  | Tailwind component library |
| **Storybook**   | 10.1.4   | Component documentation    |
| **Playwright**  | 1.57.0   | End-to-end testing         |
| **Vitest**      | 4.0.15   | Unit testing               |

## 📱 Responsive Tasarım

Proje mobil öncelikli (mobile-first) yaklaşımla geliştirilmiştir:

| Breakpoint  | Genişlik       | Layout    |
| ----------- | -------------- | --------- |
| **Mobile**  | < 768px        | Tek sütun |
| **Tablet**  | 768px - 1024px | 2 sütun   |
| **Desktop** | > 1024px       | 3-4 sütun |

## 🗂️ State Yönetimi

Etiket state yönetimi `src/lib/stores/tagStore.js` dosyasında Svelte store'ları ile yapılmaktadır:

```js
// Mevcut etiketler
export const availableTags = createTagStore();

// Store metodları
availableTags.addTag(name, color); // Yeni etiket ekle
availableTags.removeTag(tagId); // Etiket kaldır
availableTags.reset(); // Varsayılana sıfırla

// Seçili etiketler için
const selectedTags = createSelectedTagsStore([]);
selectedTags.addTag(tag);
selectedTags.removeTag(tagId);
selectedTags.clear();
```

## 🌐 Deploy

### 🔗 Canlı Demo

- **Ana Uygulama:** [https://case-dedecta.vercel.app/](https://case-dedecta.vercel.app/)
- **Storybook:** [https://case-dedecta.vercel.app/storybook](https://case-dedecta.vercel.app/storybook)

### Build Komutları

```bash
# Sadece ana uygulama
npm run build

# Sadece Storybook
npm run build-storybook

# Her ikisi birden (Vercel için)
npm run build:all
```

**Desteklenen Platformlar:**

- [Vercel](https://vercel.com) ✅ (Aktif)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [GitHub Pages](https://pages.github.com)

## 📝 Lisans

MIT
