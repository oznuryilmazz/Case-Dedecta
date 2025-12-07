<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import TwitterCard from "../components/TwitterCard/TwitterCard.svelte";
  import { TAG_COLORS } from "../lib/stores/tagStore.js";

  const { Story } = defineMeta({
    title: "Components/TwitterCard",
    component: TwitterCard,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
## TwitterCard Component

Twitter/X tarzı kart komponenti. Pixel-perfect Figma tasarımı.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | '' | Kart ID'si |
| userName | string | 'Dennis Callis' | Kullanıcı adı |
| userHandle | string | '@stephanienicol' | Kullanıcı handle |
| userAvatar | string | '/avatar.png' | Avatar URL |
| content | string | '' | Tweet içeriği |
| hashtags | string[] | [] | Hashtag listesi |
| tags | Tag[] | [] | Etiket listesi |
| likeCount | number | 0 | Beğeni sayısı |
| commentCount | number | 0 | Yorum sayısı |
| retweetCount | number | 2 | Retweet sayısı |
| viewCount | number | 10 | Görüntülenme sayısı |
| dateStr | string | '18 Ağu, 09:10' | Tarih metni |
| sentiment | 'positive' \\| 'neutral' \\| 'negative' | 'positive' | Duygu durumu |
| showTagSection | boolean | true | Etiket bölümü görünürlüğü |
| isSelected | boolean | false | Seçili durumu |

### Events
- \`menuAction\`: Menü aksiyonu seçildiğinde
- \`tagClick\`: Etiket tıklandığında
- \`select\`: Checkbox değiştiğinde
          `,
        },
      },
      layout: "centered",
      backgrounds: {
        default: "gray",
        values: [{ name: "gray", value: "#f3f4f6" }],
      },
    },
  });

  const defaultProps = {
    id: "tweet-1",
    userName: "Dennis Callis",
    userHandle: "@stephanienicol",
    userAvatar: "/avatar.png",
    content:
      "Aliquam a dui vel justo fringilla euismod id id enim. Nunc non semper tellus. Pellentesque vitae tellus non dui fermentum hendrerit.elementum.",
    hashtags: ["#sondakika", "#hashtag"],
    likeCount: 0,
    commentCount: 0,
    retweetCount: 2,
    viewCount: 10,
    dateStr: "18 Ağu, 09:10",
    sentiment: "positive",
  };

  const singleTag = [{ id: "1", name: "Kurultay", color: TAG_COLORS[0] }];

  const threeTags = [
    { id: "1", name: "Kurultay", color: TAG_COLORS[0] },
    { id: "2", name: "CHP", color: TAG_COLORS[4] },
    { id: "3", name: "Miting", color: TAG_COLORS[4] },
  ];

  const manyTags = [
    { id: "1", name: "Kurultay", color: TAG_COLORS[0] },
    { id: "2", name: "CHP", color: TAG_COLORS[4] },
    { id: "3", name: "Miting", color: TAG_COLORS[4] },
    { id: "4", name: "asdasd", color: TAG_COLORS[1] },
    { id: "5", name: "sadasdasdasdasd", color: TAG_COLORS[3] },
    { id: "6", name: "asdasdasdasdas", color: TAG_COLORS[2] },
    { id: "7", name: "asdasdasdasda", color: TAG_COLORS[5] },
    { id: "8", name: "sdfsdfsf", color: TAG_COLORS[4] },
    { id: "9", name: "werwerwerwe", color: TAG_COLORS[4] },
  ];

  const allColorTags = TAG_COLORS.map((color, i) => ({
    id: String(i),
    name: color.name,
    color,
  }));
</script>

<Story name="Temel / Etiket Yok">
  <div class="w-[600px]">
    <TwitterCard {...defaultProps} tags={[]} showTagSection={false} />
  </div>
</Story>

<Story name="Temel / Tek Etiket">
  <div class="w-[600px]">
    <TwitterCard {...defaultProps} tags={singleTag} showTagSection={true} />
  </div>
</Story>

<Story name="Temel / Çoklu Etiket">
  <div class="w-[600px]">
    <TwitterCard {...defaultProps} tags={threeTags} showTagSection={true} />
  </div>
</Story>

<Story name="Seçim / Seçili Değil">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      tags={singleTag}
      showTagSection={true}
      isSelected={false}
    />
  </div>
</Story>

<Story name="Seçim / Seçili - Etiket Var">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      tags={singleTag}
      showTagSection={true}
      isSelected={true}
    />
  </div>
</Story>

<Story name="Seçim / Seçili - Etiket Yok (Uyarı)">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      tags={[]}
      showTagSection={false}
      isSelected={true}
    />
  </div>
</Story>

<Story name="Duygu / Olumlu">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      sentiment="positive"
      tags={[]}
      showTagSection={false}
    />
  </div>
</Story>

<Story name="Duygu / Nötr">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      sentiment="neutral"
      tags={[]}
      showTagSection={false}
    />
  </div>
</Story>

<Story name="Duygu / Olumsuz">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      userName="Lorri Warf"
      userHandle="@james_hall"
      content="Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui."
      sentiment="negative"
      likeCount={12}
      retweetCount={14}
      viewCount={94}
      dateStr="8 Ağu, 16:33"
      tags={[]}
      showTagSection={false}
    />
  </div>
</Story>

<Story name="Etiket / Tek Etiket">
  <div class="w-[600px]">
    <TwitterCard {...defaultProps} tags={singleTag} showTagSection={true} />
  </div>
</Story>

<Story name="Etiket / Üç Etiket">
  <div class="w-[600px]">
    <TwitterCard {...defaultProps} tags={threeTags} showTagSection={true} />
  </div>
</Story>

<Story name="Etiket / Çok Fazla Etiket (Wrap)">
  <div class="w-[600px]">
    <TwitterCard {...defaultProps} tags={manyTags} showTagSection={true} />
  </div>
</Story>

<Story name="Etiket / Tüm Renkler">
  <div class="w-[600px]">
    <TwitterCard {...defaultProps} tags={allColorTags} showTagSection={true} />
  </div>
</Story>

<Story name="Edge Case / Uzun Kullanıcı Adı">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      userName="Çok Uzun Bir Kullanıcı Adı Buraya Yazılıyor"
      userHandle="@cokuzunbirkullanicihandleburaya"
      tags={[]}
      showTagSection={false}
    />
  </div>
</Story>

<Story name="Edge Case / Uzun İçerik">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      tags={[]}
      showTagSection={false}
    />
  </div>
</Story>

<Story name="Edge Case / Çok Uzun İçerik">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      tags={threeTags}
      showTagSection={true}
    />
  </div>
</Story>

<Story name="Edge Case / Çok Fazla Hashtag">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      hashtags={[
        "#sondakika",
        "#gundem",
        "#turkiye",
        "#istanbul",
        "#ankara",
        "#haber",
        "#breaking",
      ]}
      tags={[]}
      showTagSection={false}
    />
  </div>
</Story>

<Story name="Edge Case / Yüksek Sayılar">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      likeCount={12500}
      commentCount={3200}
      retweetCount={8900}
      viewCount={1250000}
      tags={[]}
      showTagSection={false}
    />
  </div>
</Story>

<Story name="Edge Case / Çok Yüksek Sayılar">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      likeCount={999999}
      commentCount={500000}
      retweetCount={1000000}
      viewCount={50000000}
      tags={[]}
      showTagSection={false}
    />
  </div>
</Story>

<Story name="Edge Case / Sıfır Sayılar">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      likeCount={0}
      commentCount={0}
      retweetCount={0}
      viewCount={0}
      tags={[]}
      showTagSection={false}
    />
  </div>
</Story>

<Story name="Edge Case / Boş İçerik">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      content=""
      hashtags={[]}
      tags={[]}
      showTagSection={false}
    />
  </div>
</Story>

<Story name="Edge Case / Hashtag Yok">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      hashtags={[]}
      tags={[]}
      showTagSection={false}
    />
  </div>
</Story>

<Story name="Edge Case / Her Şey Dolu">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      content="Bu tweet tüm özellikleri içeriyor: uzun içerik, çok hashtag, çok etiket ve yüksek etkileşim sayıları. Böylece kartın tam kapasitede nasıl göründüğünü test edebiliriz."
      hashtags={["#sondakika", "#gundem", "#turkiye", "#istanbul", "#haber"]}
      tags={manyTags}
      likeCount={15420}
      commentCount={2350}
      retweetCount={8700}
      viewCount={2500000}
      showTagSection={true}
    />
  </div>
</Story>

<Story name="Senaryo / Yeni Tweet (Etkileşim Yok)">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      content="Az önce paylaşılan yeni bir tweet. Henüz etkileşim almamış."
      likeCount={0}
      commentCount={0}
      retweetCount={0}
      viewCount={10}
      dateStr="Az önce"
      tags={[]}
      showTagSection={false}
    />
  </div>
</Story>

<Story name="Senaryo / Popüler Tweet">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      content="Bu tweet viral oldu! Çok yüksek etkileşim aldı ve birçok etiketle kategorize edildi."
      likeCount={15420}
      commentCount={2350}
      retweetCount={8700}
      viewCount={2500000}
      dateStr="Bugün, 10:30"
      tags={threeTags}
      showTagSection={true}
    />
  </div>
</Story>

<Story name="Senaryo / Etiket Eklenmemiş Tweet">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      content="Bu tweet henüz etiketlenmemiş. Kullanıcı seçip etiket ekleyebilir."
      tags={[]}
      showTagSection={false}
      isSelected={false}
    />
  </div>
</Story>

<Story name="Senaryo / Etiket Bekleyen Tweet (Seçili)">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      content="Bu tweet seçildi ama henüz etiket eklenmedi. Uyarı ikonu görünür."
      tags={[]}
      showTagSection={false}
      isSelected={true}
    />
  </div>
</Story>

<Story name="Senaryo / Etiketlenmiş Tweet (Seçili)">
  <div class="w-[600px]">
    <TwitterCard
      {...defaultProps}
      content="Bu tweet seçildi ve etiketlendi. Uyarı ikonu yok."
      tags={threeTags}
      showTagSection={true}
      isSelected={true}
    />
  </div>
</Story>

<Story name="Karşılaştırma / Seçili vs Seçili Değil">
  <div class="flex gap-4">
    <div class="w-[500px]">
      <p class="text-xs text-gray-500 mb-2 text-center">Seçili Değil</p>
      <TwitterCard {...defaultProps} tags={singleTag} isSelected={false} />
    </div>
    <div class="w-[500px]">
      <p class="text-xs text-gray-500 mb-2 text-center">Seçili</p>
      <TwitterCard {...defaultProps} tags={singleTag} isSelected={true} />
    </div>
  </div>
</Story>

<Story name="Karşılaştırma / Tüm Duygular">
  <div class="space-y-4">
    <div class="w-[600px]">
      <p class="text-xs text-gray-500 mb-2">Olumlu</p>
      <TwitterCard
        {...defaultProps}
        sentiment="positive"
        tags={[]}
        showTagSection={false}
      />
    </div>
    <div class="w-[600px]">
      <p class="text-xs text-gray-500 mb-2">Nötr</p>
      <TwitterCard
        {...defaultProps}
        sentiment="neutral"
        tags={[]}
        showTagSection={false}
      />
    </div>
    <div class="w-[600px]">
      <p class="text-xs text-gray-500 mb-2">Olumsuz</p>
      <TwitterCard
        {...defaultProps}
        sentiment="negative"
        tags={[]}
        showTagSection={false}
      />
    </div>
  </div>
</Story>

<Story name="Karşılaştırma / Etiket Durumları">
  <div class="space-y-4">
    <div class="w-[600px]">
      <p class="text-xs text-gray-500 mb-2">Etiket Yok</p>
      <TwitterCard {...defaultProps} tags={[]} showTagSection={false} />
    </div>
    <div class="w-[600px]">
      <p class="text-xs text-gray-500 mb-2">Tek Etiket</p>
      <TwitterCard {...defaultProps} tags={singleTag} showTagSection={true} />
    </div>
    <div class="w-[600px]">
      <p class="text-xs text-gray-500 mb-2">Çoklu Etiket</p>
      <TwitterCard {...defaultProps} tags={threeTags} showTagSection={true} />
    </div>
  </div>
</Story>
