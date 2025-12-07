import { writable } from 'svelte/store';

export const TAG_COLORS = [
  { id: 'blue', name: 'Mavi', border: 'border-tag-blue', text: 'text-tag-blue', bg: 'bg-tag-blue', bgLight: 'bg-tag-blue-light' },
  { id: 'purple', name: 'Mor', border: 'border-tag-purple', text: 'text-tag-purple', bg: 'bg-tag-purple', bgLight: 'bg-tag-purple-light' },
  { id: 'pink', name: 'Pembe', border: 'border-tag-pink', text: 'text-tag-pink', bg: 'bg-tag-pink', bgLight: 'bg-tag-pink-light' },
  { id: 'orange', name: 'Turuncu', border: 'border-tag-orange', text: 'text-tag-orange', bg: 'bg-tag-orange', bgLight: 'bg-tag-orange-light' },
  { id: 'green', name: 'Yeşil', border: 'border-tag-green', text: 'text-tag-green', bg: 'bg-tag-green', bgLight: 'bg-tag-green-light' },
  { id: 'teal', name: 'Turkuaz', border: 'border-tag-teal', text: 'text-tag-teal', bg: 'bg-tag-teal', bgLight: 'bg-tag-teal-light' },
];

export const SENTIMENTS = {
  positive: { id: 'positive', name: 'Olumlu', emoji: '😊', bgColor: 'bg-sentiment-positive' },
  neutral: { id: 'neutral', name: 'Nötr', emoji: '😐', bgColor: 'bg-sentiment-neutral' },
  negative: { id: 'negative', name: 'Olumsuz', emoji: '😠', bgColor: 'bg-sentiment-negative' },
};

export function generateTagId() {
  return `tag-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

const defaultTags = [
  { id: 'tag-1', name: 'Kurultay', color: TAG_COLORS[0] },
  { id: 'tag-2', name: 'CHP', color: TAG_COLORS[4] },
  { id: 'tag-3', name: 'Miting', color: TAG_COLORS[4] },
];

function createTagStore() {
  const { subscribe, set, update } = writable(defaultTags);

  return {
    subscribe,
    
    addTag: (name, color) => {
      const trimmedName = name.trim();
      if (!trimmedName) return null;
      
      let newTag = null;
      
      update(tags => {
        const exists = tags.some(t => t.name.toLowerCase() === trimmedName.toLowerCase());
        if (exists) return tags;
        
        newTag = {
          id: generateTagId(),
          name: trimmedName,
          color: color || TAG_COLORS[0]
        };
        
        return [...tags, newTag];
      });
      
      return newTag;
    },
    
    removeTag: (tagId) => {
      update(tags => tags.filter(t => t.id !== tagId));
    },
    
    reset: () => {
      set(defaultTags);
    }
  };
}

export const availableTags = createTagStore();

export function createSelectedTagsStore(initialTags = []) {
  const { subscribe, set, update } = writable(initialTags);

  return {
    subscribe,
    addTag: (tag) => {
      update(tags => {
        const exists = tags.some(t => t.id === tag.id);
        if (exists) return tags;
        return [...tags, tag];
      });
    },
    removeTag: (tagId) => {
      update(tags => tags.filter(t => t.id !== tagId));
    },
    clear: () => set([]),
    set
  };
}
