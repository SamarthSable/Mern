# import time
# import pandas as pd
# import urllib.parse

# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.common.action_chains import ActionChains
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from webdriver_manager.chrome import ChromeDriverManager


# def get_jiosaavn_data(driver, jio_link, song_name):

#     jio_release = "N/A"
#     jio_streams = "N/A"

#     try:
#         driver.execute_script("window.open('');")
#         driver.switch_to.window(driver.window_handles[-1])

#         driver.get(jio_link)

#         WebDriverWait(driver,10).until(
#             EC.presence_of_element_located((By.TAG_NAME,"body"))
#         )

#         time.sleep(2)

#         # collect search results
#         results = driver.find_elements(By.XPATH,'//a[contains(@href,"/song/")]')

#         song_page = None

#         for r in results:
#             title = r.text.lower()

#             if song_name.lower() in title:
#                 song_page = r.get_attribute("href")
#                 break

#         if song_page is None and results:
#             song_page = results[0].get_attribute("href")

#         if song_page:

#             driver.get(song_page)

#             WebDriverWait(driver,10).until(
#                 EC.presence_of_element_located((By.TAG_NAME,"body"))
#             )

#             driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
#             time.sleep(3)


#             # -------- GET PLAYS --------
#             try:

#                 play_text = driver.find_element(
#                     By.XPATH,'//p[contains(.,"Play")]'
#                 ).text

#                 parts = play_text.split("·")

#                 for p in parts:
#                     if "Play" in p:
#                         jio_streams = p.replace("Plays","").replace("Play","").strip()

#             except:
#                 jio_streams = "N/A"


#             # -------- GET RELEASE YEAR --------
#             try:

#                 rel_text = driver.find_element(
#                     By.XPATH,'//p[contains(.,"℗")]'
#                 ).text

#                 jio_release = rel_text.replace("℗","").strip().split(" ")[0]

#             except:
#                 jio_release = "N/A"


#         driver.close()
#         driver.switch_to.window(driver.window_handles[0])

#     except:
#         pass

#     return jio_release, jio_streams


# artist_url = input("Enter Spotify Artist Link: ")

# driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

# driver.get(artist_url)

# time.sleep(6)


# # -------- GET ARTIST NAME --------
# artist_name = driver.find_element(
#     By.XPATH,'//span[@data-testid="entityTitle"]'
# ).text


# # -------- CLICK SEE MORE --------
# try:

#     see_more = driver.find_element(
#         By.XPATH,'//div[text()="See more"]'
#     )

#     driver.execute_script("arguments[0].click();", see_more)

#     time.sleep(4)

# except:
#     pass


# # -------- WAIT UNTIL 10 SONGS APPEAR --------
# for i in range(10):

#     rows = driver.find_elements(
#         By.XPATH,'//div[@data-testid="tracklist-row"]'
#     )

#     if len(rows) >= 10:
#         break

#     driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
#     time.sleep(2)


# data = []


# for r in rows[:10]:

#     song = r.find_element(
#         By.XPATH,'.//a[@data-testid="internal-track-link"]'
#     ).text

#     spotify_link = r.find_element(
#         By.XPATH,'.//a[@data-testid="internal-track-link"]'
#     ).get_attribute("href")


#     cols = r.find_elements(By.XPATH,'.//div[@role="gridcell"]')

#     try:
#         streams = cols[2].text
#     except:
#         streams = "N/A"


#     # -------- OPEN TRACK PAGE --------
#     driver.execute_script("window.open('');")

#     driver.switch_to.window(driver.window_handles[1])

#     driver.get(spotify_link)


#     # -------- GET RELEASE DATE --------
#     try:

#         date_element = WebDriverWait(driver,10).until(
#             EC.presence_of_element_located((By.XPATH,'//span[@data-testid="release-date"]'))
#         )

#         ActionChains(driver).move_to_element(date_element).perform()

#         time.sleep(1)

#         tooltip_id = date_element.get_attribute("aria-describedby")

#         release_date = driver.find_element(By.ID, tooltip_id).text

#     except:
#         release_date = "N/A"


#     driver.close()
#     driver.switch_to.window(driver.window_handles[0])


#     # -------- JIOSAAVN SEARCH LINK --------
#     query = urllib.parse.quote(song + " " + artist_name)

#     jio_link = f"https://www.jiosaavn.com/search/song/{query}"


#     # -------- GET JIOSAAVN DATA --------
#     jio_release, jio_streams = get_jiosaavn_data(driver, jio_link, song)


#     data.append({
#         "Artist Name": artist_name,
#         "Top 10 Tracks on Spotify": song,
#         "Spotify Link": spotify_link,
#         "Spotify Stream Count": streams,
#         "Spotify Release Date": release_date,
#         "JioSaavn Link": jio_link,
#         "JioSaavn Release Date": jio_release,
#         "JioSaavn Stream Count": jio_streams
#     })


# driver.quit()


# df = pd.DataFrame(data)

# df.to_excel("artist_dataset.xlsx", index=False)

# print("Dataset created successfully")import time


import time
import pandas as pd
import re

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager


def get_jio_saavn_data():

    raw_url = input("Enter JioSaavn Artist Link: ").strip()
    artist_url = raw_url.rstrip("/")

    if artist_url.endswith("-songs"):
        pass
    elif not ("/songs" in artist_url or "-songs" in artist_url):
        if "/artist/" in artist_url:
            artist_url += "/songs"

    print("Target URL:", artist_url)

    options = webdriver.ChromeOptions()

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=options
    )

    wait = WebDriverWait(driver, 20)

    try:

        driver.get(artist_url)

        # -------- ARTIST NAME --------
        artist_name = wait.until(
            EC.presence_of_element_located((By.XPATH, "//h1"))
        ).text

        print("Artist:", artist_name)

        # -------- GET TRACKS --------
        track_elements = wait.until(
            EC.presence_of_all_elements_located(
                (By.CSS_SELECTOR, "article.o-snippet a.u-color-js-gray")
            )
        )

        track_links = []
        track_names = []

        for el in track_elements:

            name = el.text.strip()
            link = el.get_attribute("href")

            if name and link and link not in track_links:
                track_names.append(name)
                track_links.append(link)

            if len(track_links) >= 10:
                break

        data = []

        # -------- PROCESS TRACKS --------
        for i in range(len(track_links)):

            song_name = track_names[i]
            song_link = track_links[i]

            print(f"\nProcessing {i+1}/10 : {song_name}")

            driver.execute_script("window.open('');")
            driver.switch_to.window(driver.window_handles[1])
            driver.get(song_link)

            time.sleep(2)

            # -------- GET PLAYS --------
            try:

                play_text = driver.find_element(
                    By.XPATH,'//p[contains(.,"Play")]'
                ).text

                parts = play_text.split("·")

                jio_streams = "N/A"

                for p in parts:
                    if "Play" in p:
                        jio_streams = p.replace("Plays","").replace("Play","").strip()

            except:
                jio_streams = "N/A"


            # -------- RELEASE YEAR --------
            release_year = "N/A"

            try:

                body_text = driver.find_element(By.TAG_NAME, "body").text

                match = re.search(r'released in (?:the year )?(\d{4})', body_text)

                if match:
                    release_year = match.group(1)

            except:
                pass


            data.append({
                "Artist Name": artist_name,
                "Track Name": song_name,
                "JioSaavn Link": song_link,
                "JioSaavn Play Count": jio_streams,
                "JioSaavn Release Year": release_year
            })

            driver.close()
            driver.switch_to.window(driver.window_handles[0])


        # -------- EXPORT --------
        df = pd.DataFrame(data)

        filename = "jiosaavn_artist_dataset.xlsx"

        df.to_excel(filename, index=False)

        print("\nDataset created:", filename)

    finally:
        driver.quit()


if __name__ == "__main__":
    get_jio_saavn_data()