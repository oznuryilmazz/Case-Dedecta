<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import StatItem from "../components/UI/StatItem.svelte";

  const { Story } = defineMeta({
    title: "UI/StatItem",
    component: StatItem,
    tags: ["autodocs"],
    parameters: {
      docs: {
        description: {
          component: `
## StatItem Component

İkon ve değer gösteren istatistik komponenti. TwitterCard içinde kullanılır.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | string | '' | İkon yolu |
| value | string \\| number | '' | Gösterilecek değer |
| alt | string | '' | İkon için alt text |
          `,
        },
      },
      layout: "centered",
    },
  });
</script>

<Story name="Tip / Like">
  <StatItem icon="/svg/favorite.svg" value="42" alt="Like" />
</Story>

<Story name="Tip / Comment">
  <StatItem icon="/svg/tooltip.svg" value="12" alt="Comment" />
</Story>

<Story name="Tip / Retweet">
  <StatItem icon="/svg/cached.svg" value="8" alt="Retweet" />
</Story>

<Story name="Tip / View">
  <StatItem icon="/svg/visibility.svg" value="1250" alt="View" />
</Story>

<Story name="Tip / Date">
  <StatItem icon="/svg/calendar_today.svg" value="18 Ağu, 09:10" alt="Time" />
</Story>

<Story name="Tüm İstatistikler / Satır">
  <div class="flex items-center gap-6">
    <StatItem icon="/svg/favorite.svg" value="42" alt="Like" />
    <StatItem icon="/svg/tooltip.svg" value="12" alt="Comment" />
    <StatItem icon="/svg/cached.svg" value="8" alt="Retweet" />
    <StatItem icon="/svg/visibility.svg" value="1250" alt="View" />
    <StatItem icon="/svg/calendar_today.svg" value="18 Ağu, 09:10" alt="Time" />
  </div>
</Story>

<Story name="Değer / Sıfır">
  <div class="flex items-center gap-6">
    <StatItem icon="/svg/favorite.svg" value="0" alt="Like" />
    <StatItem icon="/svg/tooltip.svg" value="0" alt="Comment" />
    <StatItem icon="/svg/cached.svg" value="0" alt="Retweet" />
    <StatItem icon="/svg/visibility.svg" value="0" alt="View" />
  </div>
</Story>

<Story name="Değer / Düşük Sayılar">
  <div class="flex items-center gap-6">
    <StatItem icon="/svg/favorite.svg" value="1" alt="Like" />
    <StatItem icon="/svg/tooltip.svg" value="2" alt="Comment" />
    <StatItem icon="/svg/cached.svg" value="3" alt="Retweet" />
    <StatItem icon="/svg/visibility.svg" value="10" alt="View" />
  </div>
</Story>

<Story name="Değer / Orta Sayılar">
  <div class="flex items-center gap-6">
    <StatItem icon="/svg/favorite.svg" value="150" alt="Like" />
    <StatItem icon="/svg/tooltip.svg" value="45" alt="Comment" />
    <StatItem icon="/svg/cached.svg" value="89" alt="Retweet" />
    <StatItem icon="/svg/visibility.svg" value="5000" alt="View" />
  </div>
</Story>

<Story name="Değer / Yüksek Sayılar">
  <div class="flex items-center gap-6">
    <StatItem icon="/svg/favorite.svg" value="12500" alt="Like" />
    <StatItem icon="/svg/tooltip.svg" value="3200" alt="Comment" />
    <StatItem icon="/svg/cached.svg" value="8900" alt="Retweet" />
    <StatItem icon="/svg/visibility.svg" value="1250000" alt="View" />
  </div>
</Story>

<Story name="Değer / Çok Yüksek Sayılar">
  <div class="flex items-center gap-6">
    <StatItem icon="/svg/favorite.svg" value="999999" alt="Like" />
    <StatItem icon="/svg/tooltip.svg" value="500000" alt="Comment" />
    <StatItem icon="/svg/cached.svg" value="1000000" alt="Retweet" />
    <StatItem icon="/svg/visibility.svg" value="50000000" alt="View" />
  </div>
</Story>

<Story name="Tarih / Farklı Formatlar">
  <div class="space-y-3">
    <StatItem icon="/svg/calendar_today.svg" value="18 Ağu, 09:10" alt="Time" />
    <StatItem icon="/svg/calendar_today.svg" value="1 Oca, 00:00" alt="Time" />
    <StatItem icon="/svg/calendar_today.svg" value="31 Ara, 23:59" alt="Time" />
    <StatItem icon="/svg/calendar_today.svg" value="Bugün, 14:30" alt="Time" />
    <StatItem icon="/svg/calendar_today.svg" value="Dün, 08:15" alt="Time" />
  </div>
</Story>

<Story name="Edge Case / Uzun Tarih">
  <StatItem
    icon="/svg/calendar_today.svg"
    value="18 Ağustos 2024, 09:10:30"
    alt="Time"
  />
</Story>

<Story name="Edge Case / Boş Değer">
  <div class="flex items-center gap-6">
    <StatItem icon="/svg/favorite.svg" value="" alt="Like" />
    <StatItem icon="/svg/tooltip.svg" value="" alt="Comment" />
  </div>
</Story>

<Story name="Senaryo / Popüler Tweet">
  <div class="flex items-center gap-6">
    <StatItem icon="/svg/favorite.svg" value="15420" alt="Like" />
    <StatItem icon="/svg/tooltip.svg" value="2350" alt="Comment" />
    <StatItem icon="/svg/cached.svg" value="8700" alt="Retweet" />
    <StatItem icon="/svg/visibility.svg" value="2500000" alt="View" />
    <StatItem icon="/svg/calendar_today.svg" value="Bugün, 10:30" alt="Time" />
  </div>
</Story>

<Story name="Senaryo / Yeni Tweet">
  <div class="flex items-center gap-6">
    <StatItem icon="/svg/favorite.svg" value="0" alt="Like" />
    <StatItem icon="/svg/tooltip.svg" value="0" alt="Comment" />
    <StatItem icon="/svg/cached.svg" value="0" alt="Retweet" />
    <StatItem icon="/svg/visibility.svg" value="10" alt="View" />
    <StatItem icon="/svg/calendar_today.svg" value="Az önce" alt="Time" />
  </div>
</Story>

<Story name="Senaryo / Ortalama Tweet">
  <div class="flex items-center gap-6">
    <StatItem icon="/svg/favorite.svg" value="42" alt="Like" />
    <StatItem icon="/svg/tooltip.svg" value="12" alt="Comment" />
    <StatItem icon="/svg/cached.svg" value="8" alt="Retweet" />
    <StatItem icon="/svg/visibility.svg" value="1250" alt="View" />
    <StatItem icon="/svg/calendar_today.svg" value="18 Ağu, 09:10" alt="Time" />
  </div>
</Story>

<Story name="Bağlam / Kart İçinde">
  <div class="p-4 bg-white rounded-xl shadow w-[400px]">
    <p class="text-sm text-gray-800 mb-4">Tweet içeriği burada yer alır...</p>
    <div class="flex items-center justify-between">
      <StatItem icon="/svg/favorite.svg" value="42" alt="Like" />
      <StatItem icon="/svg/tooltip.svg" value="12" alt="Comment" />
      <StatItem icon="/svg/cached.svg" value="8" alt="Retweet" />
      <StatItem icon="/svg/visibility.svg" value="1250" alt="View" />
      <StatItem icon="/svg/calendar_today.svg" value="18 Ağu" alt="Time" />
    </div>
  </div>
</Story>

<Story name="Karşılaştırma / Tüm İkon Tipleri">
  <div class="space-y-4">
    <div class="flex items-center gap-4">
      <span class="w-20 text-sm text-gray-600">Like:</span>
      <StatItem icon="/svg/favorite.svg" value="42" alt="Like" />
    </div>
    <div class="flex items-center gap-4">
      <span class="w-20 text-sm text-gray-600">Comment:</span>
      <StatItem icon="/svg/tooltip.svg" value="12" alt="Comment" />
    </div>
    <div class="flex items-center gap-4">
      <span class="w-20 text-sm text-gray-600">Retweet:</span>
      <StatItem icon="/svg/cached.svg" value="8" alt="Retweet" />
    </div>
    <div class="flex items-center gap-4">
      <span class="w-20 text-sm text-gray-600">View:</span>
      <StatItem icon="/svg/visibility.svg" value="1250" alt="View" />
    </div>
    <div class="flex items-center gap-4">
      <span class="w-20 text-sm text-gray-600">Date:</span>
      <StatItem
        icon="/svg/calendar_today.svg"
        value="18 Ağu, 09:10"
        alt="Time"
      />
    </div>
  </div>
</Story>
