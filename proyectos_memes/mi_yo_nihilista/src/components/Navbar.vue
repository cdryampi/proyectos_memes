<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useMotion } from "@vueuse/motion";

const { motion } = useMotion();
</script>

<template>
  <nav
    v-motion="{
      initial: { y: -60, opacity: 0 },
      enter: { y: 0, opacity: 1 },
      transition: { duration: 0.6, easing: 'ease-in-out' },
    }"
    class="bg-primary-800 text-white px-4 py-3 shadow fixed top-0 w-full z-50"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
      <h1 class="text-lg font-bold text-white tracking-wide">
        Yampi <span class="text-primary-400">/ Ruina Técnica</span>
      </h1>

      <Menu as="div" class="relative">
        <MenuButton
          class="text-sm bg-primary-700 hover:bg-primary-600 px-4 py-2 rounded-md transition-all duration-150 cursor-pointer shadow-sm"
        >
          Secciones
        </MenuButton>

        <MenuItems
          class="absolute right-0 mt-2 w-52 bg-primary-900 text-sm rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <MenuItem v-slot="{ active }">
            <a
              href="#retos"
              :class="[
                'block px-4 py-2 transition-colors duration-150 cursor-pointer',
                active
                  ? 'bg-primary-600 text-white'
                  : 'text-primary-300 hover:bg-primary-700 hover:text-white',
              ]"
            >
              Retos Fracasados
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#manifiesto"
              :class="[
                'block px-4 py-2 transition-colors duration-150 cursor-pointer',
                active
                  ? 'bg-primary-600 text-white'
                  : 'text-primary-300 hover:bg-primary-700 hover:text-white',
              ]"
            >
              Manifiesto
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  </nav>
</template>
