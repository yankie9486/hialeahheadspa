<!-- components/modals/GiftCardModal.vue -->
<script setup lang="ts">
const showModal = ref(false)
let popupTimer: ReturnType<typeof setTimeout> | null = null

const closeModal = () => {
    showModal.value = false
    if (import.meta.client) {
        sessionStorage.setItem('giftCardModalDismissed', 'true')
    }
}

onMounted(() => {
    // Only start the 15s timer if they haven't dismissed it this session
    if (!sessionStorage.getItem('giftCardModalDismissed')) {
        popupTimer = setTimeout(() => {
            showModal.value = true
        }, 8000)
    }
})

onUnmounted(() => {
    if (popupTimer) clearTimeout(popupTimer)
})
</script>

<template>
    <ClientOnly>
        <!-- Backdrop -->
        <Transition name="fade">
            <div v-if="showModal" class="modal-backdrop show" @click="closeModal"></div>
        </Transition>

        <!-- Bootstrap 5 Centered Modal -->
        <Transition name="modal-pop">
            <div v-if="showModal" class="modal d-block" tabindex="-1" role="dialog" aria-labelledby="giftCardModalTitle"
                aria-modal="true" @click.self="closeModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content gift-card-modal text-white shadow-lg">
                        <div class="modal-header border-secondary py-3">
                            <h5 id="giftCardModalTitle" class="modal-title fw-bold">
                                Give the Gift of Relaxation
                            </h5>
                            <button type="button" class="btn-close btn-close-white" aria-label="Close"
                                @click="closeModal"></button>
                        </div>

                        <div class="modal-body p-4 text-center">
                            <p class="mb-3">
                                Treat someone special to a Head Spa experience at
                                <strong>Haines City Head Spa</strong>.
                            </p>
                            <p class="small text-white-50 mb-0">
                                Digital gift cards are delivered instantly via email or text.
                            </p>
                        </div>

                        <div class="modal-footer border-secondary py-3 d-flex gap-2">
                            <button type="button" class="btn btn-outline-light btn-sm flex-fill" @click="closeModal">
                                Maybe Later
                            </button>
                            <NuxtLink
                                to="https://booksy.com/en-us/1800781_hialeah-head-spa_hair-salon_15886_hialeah?do=invite&_branch_match_id=1640684829249457192&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs/VT03z8TFxTssyNU6yrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUACrrZ%2BzwAAAA=#business-online-vouchers"
                                class="btn btn-main btn-sm flex-fill fw-medium" @click="closeModal">
                                Shop Gift Cards
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </ClientOnly>
</template>

<style scoped>
.gift-card-modal {
    border-radius: 0.75rem;
    background-color: var(--grays-400);
    border: 1px solid var(--grays-300);
}

.modal-backdrop {
    z-index: 1085;
    background-color: rgba(0, 0, 0, 0.9);
}

.modal {
    z-index: 1090;
}

/* Smooth backdrop fade */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Smooth modal entrance */
.modal-pop-enter-active,
.modal-pop-leave-active {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
}

.modal-pop-enter-from,
.modal-pop-leave-to {
    transform: translateY(20px) scale(0.97);
    opacity: 0;
}
</style>