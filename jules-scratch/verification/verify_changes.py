from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        # 1. Navigate to the local development server.
        page.goto("http://localhost:3000", timeout=60000)

        # 2. Wait for the main content to be visible
        heading = page.get_by_role("heading", name="el talento se encuentra con la oportunidad")
        expect(heading).to_be_visible(timeout=15000)

        # 3. Scroll down to the CTA section
        cta_heading = page.get_by_role("heading", name="Conéctate. Trabaja. Brilla.")
        cta_heading.scroll_into_view_if_needed()
        expect(cta_heading).to_be_visible()

        # 4. Verify the number ticker text
        paragraph = page.locator("p", has_text="personas se han apuntado en la lista de espera!")
        expect(paragraph).to_be_visible()

        number_span = paragraph.locator("span")

        # Wait for the number to animate to 100.
        expect(number_span).to_have_text("100", timeout=15000)

        # 5. Take a screenshot for visual verification.
        page.screenshot(path="jules-scratch/verification/verification.png", full_page=True)
        print("Screenshot saved to jules-scratch/verification/verification.png")

    except Exception as e:
        print(f"An error occurred during Playwright script execution: {e}")
        page.screenshot(path="jules-scratch/verification/error.png", full_page=True)
        print("Error screenshot saved to jules-scratch/verification/error.png")
        raise
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)