<template>
    <div>
        <aside>
            <ul>
                <li>
                    <router-link :to="{name: 'Home'}">Home</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'Profile'}">Profile</router-link>
                </li>
            </ul>
        </aside>

        <main>
            <router-view :key="$route.path"></router-view>
        </main>
    </div>
</template>